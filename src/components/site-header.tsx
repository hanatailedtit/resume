"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b bg-background print:static">
      <div className="page-container grid min-h-16 grid-cols-[1fr_auto] items-center md:flex md:justify-between">
        <Link
          href="/"
          className="flex w-fit items-center gap-3 py-4"
          aria-label="서지영 소개 페이지"
        >
          <span className="text-[19px] font-bold tracking-tight">
            {profile.name}
          </span>
          <span className="border-l pl-3 text-[13px] text-muted-foreground">
            {profile.role}
          </span>
        </Link>
        <nav
          aria-label="주 메뉴"
          className="col-span-2 row-start-2 flex h-12 gap-8 text-[15px] md:col-auto md:row-auto md:ml-auto md:mr-24 md:h-16 md:gap-11 print:hidden"
        >
          {[
            ["/", "소개"],
            ["/resume", "이력"],
            ["/portfolio", "포트폴리오"],
          ].map(([href, label]) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex items-center text-muted-foreground transition-colors hover:text-foreground",
                  active &&
                    "font-bold text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-foreground",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="col-start-2 row-start-1 h-10 rounded-[10px] px-3 text-[13px] md:px-4 md:text-sm print:hidden"
        >
          <a href={`mailto:${profile.email}`}>
            연락하기 <ArrowUpRight size={16} />
          </a>
        </Button>
      </div>
    </header>
  );
}
