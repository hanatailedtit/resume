import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/shared";
import { ProjectTabs } from "@/components/project-tabs";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "실시간 설비 운영 GUI, 웹 서비스, 공통 라이브러리와 사이드 프로젝트의 구현 과정을 소개합니다.",
};

export default function PortfolioPage() {
  return (
    <main id="main-content" className="page-container">
      <section className="flex flex-col items-start justify-between gap-7 pt-12 pb-10 md:flex-row md:items-end md:pt-16 md:pb-12">
        <div>
          <Eyebrow>포트폴리오 · Selected work</Eyebrow>
          <h1 className="page-title">만든 것과 해결한 문제들.</h1>
          <p className="mt-5 text-base leading-[1.85] text-muted-foreground md:text-lg">
            서비스와 운영 도구를 개발하며 맡았던 역할과,
            <br className="hidden sm:block" /> 문제를 해결하고 검증한 과정을
            기록했습니다.
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 w-full rounded-xl px-5 sm:w-auto"
        >
          <Link href="/resume">
            이력 살펴보기
            <ArrowRight size={17} />
          </Link>
        </Button>
      </section>
      <ProjectTabs />
      <section className="my-16 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-subtle p-7 md:my-20 md:flex-row md:items-center md:p-9">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            프로젝트가 경력 안에서 어떻게 이어졌는지 궁금하다면
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            회사별 역할과 주요 업무를 이력에서 볼 수 있습니다.
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="h-12 w-full rounded-xl bg-background px-5 sm:w-auto"
        >
          <Link href="/resume">
            이력 살펴보기
            <ArrowRight size={17} />
          </Link>
        </Button>
      </section>
    </main>
  );
}
