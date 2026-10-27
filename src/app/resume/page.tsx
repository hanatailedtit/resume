import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow, Stack } from "@/components/shared";
import { experiences, profile, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "이력",
  description: "서지영의 회사별 경력, 주요 기술, 학력과 자격을 소개합니다.",
};

export default function ResumePage() {
  return (
    <main id="main-content" className="page-container">
      <section className="flex flex-col items-start justify-between gap-7 border-b py-12 md:flex-row md:items-end md:py-16">
        <div>
          <Eyebrow>이력 · Resume</Eyebrow>
          <h1 className="page-title">경력과 역할을 한눈에.</h1>
          <p className="mt-5 text-base leading-[1.85] text-muted-foreground md:text-lg">
            웹 서비스와 운영 어드민에서 시작해,
            <br className="hidden sm:block" /> 실시간 설비 GUI와 공통 렌더링
            엔진으로 경험을 넓혔습니다.
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 w-full rounded-xl px-5 sm:w-auto print:hidden"
        >
          <Link href="/portfolio">
            포트폴리오 보기
            <ArrowRight size={17} />
          </Link>
        </Button>
      </section>
      <div className="grid items-start gap-10 py-10 md:py-14 lg:grid-cols-[240px_1fr] lg:gap-20">
        <aside
          className="lg:sticky lg:top-24 print:hidden"
          aria-label="프로필과 이력 목차"
        >
          <div className="hidden rounded-2xl border bg-subtle p-6 lg:block">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
            <div className="mt-6 flex gap-5 text-[13px] text-muted-foreground">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-primary"
              >
                <EnvelopeSimple size={16} />
                이메일
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary"
              >
                GitHub
                <ArrowUpRight size={14} />
                <span className="sr-only"> (새 탭)</span>
              </a>
            </div>
          </div>
          <p className="mb-3 text-xs font-semibold text-muted-foreground lg:mt-8">
            이 페이지에서
          </p>
          <nav aria-label="이력 섹션" className="flex gap-2 lg:flex-col">
            {[
              ["experience", "경력"],
              ["skills", "기술"],
              ["education", "학력·자격"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center justify-between gap-6 rounded-lg bg-subtle px-4 py-3 text-sm font-medium transition-colors hover:bg-brand-subtle hover:text-brand-strong lg:bg-transparent"
              >
                <span>{label}</span>
                {id === "experience" && (
                  <span className="text-xs text-muted-foreground">
                    {experiences.length}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">
          <section id="experience" aria-labelledby="experience-heading">
            <div className="flex items-center justify-between border-b pb-6">
              <h2 id="experience-heading" className="section-title">
                경력
              </h2>
              <span className="text-[13px] text-muted-foreground">
                최근 경력순
              </span>
            </div>
            {experiences.map((experience) => (
              <article
                id={experience.id}
                key={experience.id}
                className="border-b py-8 md:py-10"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {experience.company}
                  </h3>
                  <span className="text-[13px] tabular-nums text-muted-foreground">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {experience.role}
                  {experience.team && ` · ${experience.team}`}
                </p>
                <p className="mt-5 text-base font-semibold leading-relaxed">
                  {experience.summary}
                </p>
                <ul className="mt-3 space-y-2 pl-4 text-[15px] leading-[1.85] text-muted-foreground marker:text-muted-foreground/60 list-disc">
                  {experience.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Stack items={experience.stack} />
                </div>
                {experience.project && (
                  <Link
                    href={`/portfolio/${experience.project}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    프로젝트에서 구현 과정 보기
                    <ArrowRight size={16} />
                  </Link>
                )}
              </article>
            ))}
          </section>
          <section
            id="skills"
            aria-labelledby="skills-heading"
            className="pt-12 md:pt-16"
          >
            <h2 id="skills-heading" className="section-title">
              기술
            </h2>
            <div className="mt-7 space-y-7">
              {skills.map((group) => (
                <div key={group.name}>
                  <h3 className="mb-3 text-base font-semibold">{group.name}</h3>
                  <Stack items={group.items} />
                </div>
              ))}
            </div>
          </section>
          <section
            id="education"
            aria-labelledby="education-heading"
            className="mt-12 border-t pt-10 pb-8 md:mt-16 md:pb-14"
          >
            <h2 id="education-heading" className="section-title">
              학력·자격
            </h2>
            <div className="mt-7 space-y-7">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-base font-semibold">
                    국립부경대학교 경제학부 경제학전공
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">학사</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  2017.03 - 2021.08
                </p>
              </div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-base font-semibold">
                    정보처리기사{" "}
                    <Badge
                      variant="secondary"
                      className="ml-2 rounded-md text-xs"
                    >
                      국가기술자격
                    </Badge>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    한국산업인력공단
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">2021.06</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
