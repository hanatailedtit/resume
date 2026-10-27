import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Eyebrow, Stack } from "@/components/shared";
import { MapArchitecture } from "@/components/map-architecture";
import { experiences, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: project?.title ?? "프로젝트를 찾을 수 없습니다",
    description: project?.description,
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
  return (
    <main id="main-content" className="page-container pb-14 md:pb-20">
      <div className="pt-8 md:pt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft size={16} />
          포트폴리오 목록
        </Link>
      </div>
      <section className="border-b pt-8 pb-10 md:pt-10 md:pb-12">
        <Eyebrow>
          {project.category === "company" ? "회사 프로젝트" : "사이드 프로젝트"}{" "}
          · {project.company}
        </Eyebrow>
        <h1 className="page-title">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>
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
            <dd className="mt-2 text-sm leading-relaxed">{project.role}</dd>
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
        </section>
        <section
          className="mt-12 border-t pt-10 md:mt-14 md:pt-12"
          aria-labelledby="case-heading"
        >
          <Eyebrow>대표 문제 해결</Eyebrow>
          <h2
            id="case-heading"
            className="text-[25px] leading-snug font-bold tracking-tight md:text-[30px]"
          >
            {project.caseTitle}
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="mb-3 text-base font-bold">문제</h3>
              <p className="prose-copy">{project.problem}</p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-bold">접근과 구현</h3>
              <p className="prose-copy">{project.approach}</p>
            </div>
          </div>
          {project.slug === "singal" && <MapArchitecture />}
          <div className="mt-8 rounded-xl border border-primary/20 bg-brand-subtle p-6 md:p-7">
            <h3 className="mb-3 text-base font-bold text-brand-strong">
              결과와 검증
            </h3>
            <p className="text-[15px] leading-[1.9] text-brand-strong">
              {project.result}
            </p>
          </div>
        </section>
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
                <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">
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
                {experience.company}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  · {experience.role}
                </span>
              </h2>
            </div>
            <Link
              href={`/resume#${experience.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              관련 이력으로 이동
              <ArrowRight size={16} />
            </Link>
          </section>
        )}
        <nav
          aria-label="다른 프로젝트"
          className="mt-12 flex flex-col justify-between gap-4 border-t pt-7 sm:flex-row"
        >
          <Button asChild variant="outline" className="h-11 rounded-xl">
            <Link href="/portfolio">
              <ArrowLeft size={16} />
              포트폴리오 목록으로
            </Link>
          </Button>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary"
          >
            {nextProject.title}
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </main>
  );
}
