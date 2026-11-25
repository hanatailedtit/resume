import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  ContactBanner,
  ContactLinks,
  ProjectCard,
} from "@/components/shared";
import { featuredProjects } from "@/lib/content";

const developmentAreas = [
  ["웹 서비스", "React, Next.js, TypeScript"],
  ["실시간 운영", "Vue, PixiJS, WebSocket"],
  ["API와 데이터", "Node.js, PostgreSQL, Redis"],
];

export default function Home() {
  return (
    <main id="main-content" className="page-container">
      <section
        className="grid gap-6 border-b py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_328px] lg:items-start lg:gap-16 lg:py-[60px]"
        aria-labelledby="intro-heading"
      >
        <div>
          <h1
            id="intro-heading"
            className="max-w-[660px] text-[32px] leading-[1.3] font-bold tracking-[-0.035em] md:text-[50px]"
          >
            웹 서비스와 운영 시스템을 개발합니다.
          </h1>
          <p className="mt-4 max-w-[550px] text-base leading-[1.75] text-muted-foreground md:mt-5 md:text-lg">
            React·Next.js로 웹 서비스를 만들고, Vue·PixiJS로 실시간 설비 맵을
            개발해 왔습니다.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-6 text-base"
            >
              <Link href="/resume">
                이력 살펴보기
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl px-6 text-base"
            >
              <Link href="/portfolio">
                포트폴리오 보기
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-5">
            <ContactLinks />
          </div>
        </div>
        <aside
          aria-labelledby="development-heading"
          className="rounded-xl bg-subtle px-4 py-3.5 sm:px-5 lg:px-6 lg:py-5"
        >
          <h2
            id="development-heading"
            className="text-xs font-semibold text-muted-foreground"
          >
            주로 사용한 기술
          </h2>
          <dl className="mt-2.5 grid gap-1.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 lg:gap-3">
            {developmentAreas.map(([name, stack]) => (
              <div
                key={name}
                className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:block"
              >
                <dt className="text-sm font-semibold">{name}</dt>
                <dd
                  translate="no"
                  className="text-[13px] leading-relaxed text-muted-foreground"
                >
                  {stack}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
      <section className="pt-7 md:pt-12" aria-labelledby="featured-heading">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <h2 id="featured-heading" className="section-title">
            대표 프로젝트
          </h2>
          <Link
            href="/portfolio"
            aria-label="프로젝트 전체 보기"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            전체 보기
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-4 grid gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
