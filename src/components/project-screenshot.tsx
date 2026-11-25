"use client";

import Image from "next/image";
import { ArrowsOut, X } from "@phosphor-icons/react";
import { Dialog } from "radix-ui";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type Screenshot = NonNullable<Project["screenshots"]>[number];

export function ProjectScreenshot({
  screenshot,
  layout = "grid",
}: {
  screenshot: Screenshot;
  layout?: "lead" | "grid" | "comparison";
}) {
  const lead = layout === "lead";
  const comparison = layout === "comparison";
  const sizes = comparison
    ? "(max-width: 839px) 760px, (max-width: 1039px) calc(100vw - 80px), 960px"
    : lead
      ? "(max-width: 767px) calc(100vw - 48px), (max-width: 1039px) calc(100vw - 80px), 960px"
      : "(max-width: 767px) calc(100vw - 48px), (max-width: 1039px) calc((100vw - 104px) / 2), 468px";

  return (
    <Dialog.Root>
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
            이미지가 화면보다 넓으면 좌우로 밀거나 방향키로 이동할 수 있습니다.
          </Dialog.Description>
          <Dialog.Close asChild>
            <Button
              variant="outline"
              size="icon-lg"
              aria-label="이미지 닫기"
              className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-10 size-11 border-background/25 bg-foreground/95 text-background hover:bg-foreground hover:text-background focus-visible:ring-background/70"
            >
              <X className="size-6" aria-hidden="true" />
            </Button>
          </Dialog.Close>
          <div
            role="region"
            tabIndex={0}
            aria-label="이미지 이동 영역"
            className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden overscroll-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background"
          >
            <div className="flex h-full md:pointer-fine:p-4">
              <Image
                unoptimized
                loading="eager"
                draggable={false}
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                className="m-auto block h-full w-auto max-w-none shrink-0 md:pointer-fine:h-auto md:pointer-fine:max-h-full md:pointer-fine:max-w-full"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
