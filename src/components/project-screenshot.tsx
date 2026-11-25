"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowsOut, MagnifyingGlass, X } from "@phosphor-icons/react";
import { Dialog } from "radix-ui";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type Screenshot = NonNullable<Project["screenshots"]>[number];

const viewerButton =
  "pointer-events-auto h-11 border-background/25 bg-foreground/95 text-background hover:bg-foreground hover:text-background focus-visible:ring-background/70";

export function ProjectScreenshot({
  screenshot,
  layout = "grid",
}: {
  screenshot: Screenshot;
  layout?: "lead" | "grid" | "comparison";
}) {
  const [zoomed, setZoomed] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const lead = layout === "lead";
  const comparison = layout === "comparison";
  const sizes = comparison
    ? "(max-width: 839px) 760px, (max-width: 1039px) calc(100vw - 80px), 960px"
    : lead
      ? "(max-width: 767px) calc(100vw - 48px), (max-width: 1039px) calc(100vw - 80px), 960px"
      : "(max-width: 767px) calc(100vw - 48px), (max-width: 1039px) calc((100vw - 104px) / 2), 468px";

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (!open) setZoomed(false);
      }}
    >
      <figure className={cn("min-w-0", comparison && "md:col-span-2")}>
        <div
          className={
            comparison
              ? "overflow-x-auto rounded-xl pb-2 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
              : undefined
          }
          tabIndex={comparison ? 0 : undefined}
          role={comparison ? "region" : undefined}
          aria-label={
            comparison ? `${screenshot.caption} 가로 스크롤` : undefined
          }
        >
          <Dialog.Trigger
            aria-label={`${screenshot.caption} 크게 보기`}
            className={cn(
              "relative block w-full cursor-zoom-in overflow-hidden rounded-xl border bg-subtle hover:border-primary/45 focus-visible:-outline-offset-2",
              comparison && "min-w-[760px]",
              !screenshot.group && "aspect-[16/10]",
            )}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              loading={lead ? "eager" : "lazy"}
              sizes={sizes}
              className={cn(
                "object-contain p-3 md:p-5",
                screenshot.group ? "h-auto w-full" : "size-full",
              )}
            />
            {lead && (
              <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md border bg-background px-2.5 py-1.5 text-xs font-semibold text-primary md:top-3 md:right-3">
                크게 보기
                <ArrowsOut size={14} aria-hidden="true" />
              </span>
            )}
          </Dialog.Trigger>
        </div>
        <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {screenshot.caption}
        </figcaption>
      </figure>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground" />
        <Dialog.Content className="fixed inset-x-0 top-0 z-50 flex h-dvh flex-col overflow-hidden bg-foreground text-background">
          <Dialog.Title className="sr-only">{screenshot.caption}</Dialog.Title>
          <Dialog.Description className="sr-only">
            이미지를 확대하고, 스와이프하거나 방향키로 이동해 세부 내용을 볼 수
            있습니다.
          </Dialog.Description>
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-row-reverse gap-2 pt-[max(0.75rem,env(safe-area-inset-top))] pr-[max(0.75rem,env(safe-area-inset-right))]">
            <Dialog.Close asChild>
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="이미지 닫기"
                className={cn(viewerButton, "size-11")}
              >
                <X className="size-6" aria-hidden="true" />
              </Button>
            </Dialog.Close>
            <Button
              type="button"
              variant="outline"
              className={cn(viewerButton, "px-3")}
              onClick={() => {
                if (zoomed) viewportRef.current?.scrollTo(0, 0);
                setZoomed(!zoomed);
              }}
            >
              <MagnifyingGlass aria-hidden="true" />
              {zoomed ? "축소" : "확대"}
            </Button>
          </div>
          <div
            ref={viewportRef}
            role="region"
            tabIndex={0}
            aria-label="이미지 이동 영역"
            className="min-h-0 flex-1 overflow-auto overscroll-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background"
          >
            <div className="flex min-h-full md:p-4">
              <Image
                unoptimized
                loading="eager"
                draggable={false}
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                style={
                  zoomed
                    ? { width: `max(200%, ${screenshot.width}px)` }
                    : undefined
                }
                className={cn(
                  "m-auto block h-auto shrink-0",
                  zoomed
                    ? "max-w-none"
                    : "w-full md:max-h-[calc(100dvh-2rem)] md:w-auto",
                  comparison && !zoomed && "min-w-[760px] md:min-w-0",
                )}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
