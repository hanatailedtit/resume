import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Eyebrow, Stack } from "@/components/shared";
import { ProjectArchitecture } from "@/components/project-architectures";
import { experiences, projects, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };
type Screenshot = NonNullable<Project["screenshots"]>[number];

function ProjectScreenshot({
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
        <a
          href={screenshot.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`${screenshot.caption} 원본 보기 (새 탭)`}
          className={cn(
            "relative block overflow-hidden rounded-xl border bg-subtle hover:border-primary/45 focus-visible:-outline-offset-2",
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
              원본 보기
              <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          )}
        </a>
      </div>
      <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {screenshot.caption}
      </figcaption>
    </figure>
  );
}

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: project?.title ?? "프로젝트를 찾을 수 없습니다",
    description: project?.description.replaceAll("\n", " "),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  const experience = experiences.find(
    (experience) => experience.id === project.experience,
  );
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  const portfolioBackHref = `/portfolio?category=${project.category}`;
  const [leadScreenshot, ...gallery] = project.screenshots ?? [];
  const screenshotGroups = [...new Set(gallery.map((image) => image.group))].map(
    (group) => ({
      group,
      images: gallery.filter((image) => image.group === group),
      comparison: group === "라이트 및 다크 모드 비교" || group === "모바일 반응형",
    }),
  );
  return (
    <main id="main-content" className="page-container pb-14 md:pb-20">
      <div className="pt-8 md:pt-10">
        <Link
          href={portfolioBackHref}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          포트폴리오 목록
        </Link>
      </div>
      <section className="border-b pt-8 pb-10 md:pt-10 md:pb-12">
        <Eyebrow>
          {project.category === "company" ? "회사 프로젝트" : "사이드 프로젝트"},{" "}
          {project.company}
        </Eyebrow>
        <h1 className="page-title">{project.title}</h1>
        <p className="mt-5 max-w-3xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.website && (
          <Button
            asChild
            variant="outline"
            className="mt-6 h-11 rounded-xl px-5"
          >
            <a href={project.website} target="_blank" rel="noreferrer">
              서비스 방문
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (새 탭)</span>
            </a>
          </Button>
        )}
        <dl className="mt-9 grid gap-6 rounded-2xl bg-subtle p-6 md:grid-cols-[1fr_1.3fr_1.8fr] md:p-7">
          <div>
            <dt className="text-xs font-semibold text-muted-foreground">
              기간
            </dt>
            <dd className="mt-2 text-sm leading-relaxed">{project.period}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-muted-foreground">
              내 역할
            </dt>
            <dd className="mt-2 whitespace-pre-line text-sm leading-relaxed">
              {project.role}
            </dd>
          </div>
          <div>
            <dt className="mb-2 text-xs font-semibold text-muted-foreground">
              기술
            </dt>
            <dd>
              <Stack items={project.stack} />
            </dd>
          </div>
        </dl>
      </section>
      <div className="mx-auto max-w-[960px]">
        <section className="pt-10 md:pt-14" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="section-title">
            프로젝트 개요
          </h2>
          <p className="prose-copy mt-5">{project.overview}</p>
          {leadScreenshot && (
            <div className="mt-6">
              <ProjectScreenshot screenshot={leadScreenshot} layout="lead" />
            </div>
          )}
        </section>
        <section
          className="mt-12 border-t pt-10 md:mt-14 md:pt-12"
          aria-labelledby="case-heading"
        >
          <h2
            id="case-heading"
            className="text-[25px] leading-snug font-bold tracking-tight md:text-[30px]"
          >
            {project.caseTitle}
          </h2>
          {(project.problem || project.approach) && (
            <div className="mt-8 space-y-8">
              {project.problem && (
                <div>
                  <h3 className="mb-3 text-base font-bold">문제</h3>
                  <p className="prose-copy">{project.problem}</p>
                </div>
              )}
              {project.approach && (
                <div>
                  <h3 className="mb-3 text-base font-bold">접근과 구현</h3>
                  <p className="prose-copy">{project.approach}</p>
                </div>
              )}
            </div>
          )}
          <ProjectArchitecture slug={project.slug} />
          <div className="mt-8 rounded-xl border border-primary/20 bg-brand-subtle p-6 md:p-7">
            <h3 className="mb-3 text-base font-bold text-brand-strong">
              결과와 검증
            </h3>
            <p className="whitespace-pre-line text-[15px] leading-[1.9] text-brand-strong">
              {project.result}
            </p>
          </div>
        </section>
        {screenshotGroups.length > 0 && (
          <section
            className="mt-12 border-t pt-10 md:mt-14 md:pt-12"
            aria-labelledby="screenshots-heading"
          >
            <h2 id="screenshots-heading" className="section-title">
              프로젝트 화면 더 보기
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              이미지를 선택하면 원본 크기로 열립니다.
            </p>
            {screenshotGroups.map(({ group, images, comparison }) => (
              <div key={group ?? "screenshots"} className="mt-7 md:mt-9">
                {group && (
                  <h3 className="mb-3 text-lg font-semibold tracking-tight">
                    {group}
                  </h3>
                )}
                {comparison && (
                  <p className="mb-3 text-sm text-muted-foreground min-[840px]:hidden">
                    좌우로 밀어 나머지 화면을 볼 수 있어요.
                  </p>
                )}
                <div className="grid gap-6 md:grid-cols-2">
                  {images.map((screenshot) => (
                    <ProjectScreenshot
                      key={screenshot.src}
                      screenshot={screenshot}
                      layout={comparison ? "comparison" : "grid"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
        <section
          className="mt-12 border-t pt-10 md:mt-14 md:pt-12"
          aria-labelledby="other-work-heading"
        >
          <h2 id="other-work-heading" className="section-title">
            함께 담당한 작업
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            {project.work.map((work) => (
              <div
                key={work.title}
                className="border-l-2 border-primary/20 pl-5"
              >
                <h3 className="text-base font-bold">{work.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-[1.9] text-muted-foreground">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {experience && (
          <section className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-subtle p-6 md:mt-14 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">
                이 작업을 맡았던 경력
              </p>
              <h2 className="mt-2 text-lg font-bold">
                {experience.company}
                <span className="mt-1 block text-sm font-normal text-muted-foreground">
                  {experience.role}
                </span>
              </h2>
            </div>
            <Link
              href={`/resume#${experience.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              관련 이력으로 이동
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        )}
        <nav
          aria-label="다른 프로젝트"
          className="mt-12 flex flex-col justify-between gap-4 border-t pt-7 sm:flex-row"
        >
          <Button asChild variant="outline" className="h-11 rounded-xl">
            <Link href={portfolioBackHref}>
              <ArrowLeft size={16} aria-hidden="true" />
              포트폴리오 목록으로
            </Link>
          </Button>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary"
          >
            {nextProject.title}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
