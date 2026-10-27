import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile, type Project } from "@/lib/content";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-[13px] font-semibold tracking-[0.015em] text-primary">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

export function Stack({ items }: { items: string[] }) {
  return (
    <ul aria-label="사용 기술" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Badge
            variant="secondary"
            className="h-auto min-h-6 rounded-[6px] border-0 px-2.5 py-1 text-xs font-semibold"
          >
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-sm text-muted-foreground">
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 hover:text-primary"
      >
        <EnvelopeSimple size={17} />
        {profile.email}
        <ArrowUpRight size={15} />
      </a>
      <span className="h-4 border-l" aria-hidden="true" />
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-primary"
      >
        GitHub <ArrowUpRight size={15} />
        <span className="sr-only"> (새 탭)</span>
      </a>
    </div>
  );
}

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <Card className="group relative h-full gap-0 overflow-hidden rounded-2xl border bg-background py-0 shadow-none transition-colors hover:border-primary/45 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-4">
      {!compact && project.screenshots?.[0] && (
        <div className="relative aspect-[16/10] shrink-0 border-b bg-subtle">
          <Image
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc((100vw - 104px) / 2), 588px"
            className="object-contain p-3 md:p-4"
          />
        </div>
      )}
      <CardContent className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-4">
          <Badge
            variant={project.category === "company" ? "default" : "secondary"}
            className="rounded-full border-0 bg-brand-subtle px-2.5 py-1 text-xs font-semibold text-brand-strong"
          >
            {project.category === "company" ? "회사" : "사이드"} ·{" "}
            {project.company}
          </Badge>
        </div>
        <h3
          className={
            compact
              ? "text-[22px] font-bold leading-snug tracking-tight"
              : "text-2xl font-bold leading-snug tracking-tight"
          }
        >
          <Link
            href={`/portfolio/${project.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        {!compact && (
          <p className="mt-2 text-[13px] text-muted-foreground">
            {project.period}
          </p>
        )}
        <p className="mt-4 mb-7 text-[15px] leading-[1.85] text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto">
          <Stack items={compact ? project.stack.slice(0, 3) : project.stack} />
          <div className="mt-6 flex items-center gap-2 border-t pt-4 text-sm font-semibold text-primary">
            {compact ? "작업 살펴보기" : "문제 해결 과정 보기"}
            <ArrowRight
              size={16}
              className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ContactBanner() {
  return (
    <section
      aria-label="연락처"
      className="my-20 flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-subtle p-7 md:my-24 md:flex-row md:items-center md:p-10"
    >
      <div>
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">
          함께 일할 기회에 대해 이야기하고 싶다면
        </h2>
        <p className="mt-2 text-[15px] text-muted-foreground">
          이메일로 연락해 주세요.
        </p>
      </div>
      <Button asChild className="h-12 w-full rounded-xl px-5 sm:w-auto">
        <a href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={17} />
        </a>
      </Button>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t print:hidden">
      <div className="page-container flex flex-col justify-between gap-6 py-8 text-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground">{profile.name}</span>
          <span className="text-xs text-muted-foreground">{profile.role}</span>
        </div>
        <nav
          aria-label="하단 메뉴"
          className="flex gap-6 text-muted-foreground"
        >
          <Link href="/resume" className="hover:text-primary">
            이력
          </Link>
          <Link href="/portfolio" className="hover:text-primary">
            포트폴리오
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub<span className="sr-only"> (새 탭)</span>
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            이메일
          </a>
        </nav>
      </div>
    </footer>
  );
}
