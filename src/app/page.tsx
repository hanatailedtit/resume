import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ContactBanner,
  ContactLinks,
  Eyebrow,
  ProjectCard,
} from "@/components/shared";
import {
  experiences,
  featuredProjects,
  projects,
  profile,
} from "@/lib/content";

export default function Home() {
  return (
    <main id="main-content" className="page-container">
      <section
        className="grid gap-12 border-b py-14 md:gap-14 md:py-[68px] lg:grid-cols-[1fr_408px] lg:gap-16"
        aria-labelledby="intro-heading"
      >
        <div>
          <Eyebrow>
            {profile.name} · {profile.role}
          </Eyebrow>
          <h1
            id="intro-heading"
            className="max-w-[750px] text-[34px] leading-[1.34] font-bold tracking-[-0.035em] md:text-[50px]"
          >
            웹 서비스와
            <br />
            운영 시스템을 개발합니다.
          </h1>
          <p className="mt-7 max-w-[630px] text-base leading-[1.8] text-muted-foreground md:mt-8 md:text-lg">
            React · Next.js 웹 서비스부터 Vue 실시간 운영 GUI까지,
            <br className="hidden xl:block" /> 화면과 데이터, 실제 운영 환경을
            연결해 왔습니다.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-6 text-base"
            >
              <Link href="/resume">
                이력 살펴보기
                <ArrowRight size={18} />
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
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <ContactLinks />
          </div>
        </div>
        <Card className="gap-0 rounded-2xl bg-subtle py-0 shadow-none">
          <CardContent className="p-7 md:p-8">
            <div className="mb-7 flex items-center justify-between gap-4">
              <span className="text-[13px] font-semibold text-muted-foreground">
                개발 경험의 범위
              </span>
              <Badge className="rounded-full border-0 bg-brand-subtle px-3 py-1 text-xs text-brand-strong">
                3개 영역
              </Badge>
            </div>
            <div className="grid gap-7 md:grid-cols-3 lg:grid-cols-1">
              {[
                ["웹 서비스", "React · Next.js · TypeScript"],
                ["실시간 운영", "Vue · PixiJS · WebSocket"],
                ["API와 데이터", "Node.js · PostgreSQL · Redis"],
              ].map(([name, stack], i) => (
                <div
                  key={name}
                  className="border-b pb-6 last:border-0 last:pb-0 md:border-b-0 md:pb-0 lg:border-b lg:pb-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-bold tracking-tight">{name}</h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stack}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="pt-14 md:pt-16" aria-labelledby="explore-heading">
        <Eyebrow>경력과 작업</Eyebrow>
        <h2 id="explore-heading" className="section-title">
          필요한 방식으로 살펴보세요.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          이력은 역할과 경력의 흐름을, 포트폴리오는 작업 과정과 해결한 문제를
          보여줍니다.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "이력",
              count: `${experiences.length}개 회사 경력`,
              subtitle: "어디서, 어떤 역할을 했는지",
              description: "회사별 경력과 주요 기술, 학력과 자격",
              href: "/resume",
              cta: "이력 전체 보기",
            },
            {
              title: "포트폴리오",
              count: `${projects.length}개 프로젝트`,
              subtitle: "어떤 문제를, 어떻게 풀었는지",
              description: "회사 프로젝트 5개 · 사이드 프로젝트 2개",
              href: "/portfolio",
              cta: "포트폴리오 전체 보기",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border p-6 transition-colors hover:border-primary/45 md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-xs"
                >
                  {item.count}
                </Badge>
              </div>
              <p className="mt-5 text-[17px] font-semibold">{item.subtitle}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6 flex items-center justify-end gap-2 border-t pt-4 text-sm font-semibold text-primary">
                {item.cta}
                <ArrowRight
                  size={16}
                  className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="pt-16 md:pt-20" aria-labelledby="featured-heading">
        <Eyebrow>대표 작업</Eyebrow>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id="featured-heading" className="section-title">
            제 경험을 보여주는 프로젝트
          </h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            프로젝트 전체 보기
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
