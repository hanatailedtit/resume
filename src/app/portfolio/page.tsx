import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ProjectTabs } from "@/components/project-tabs";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "실시간 설비 운영 GUI, 웹 서비스, 공통 라이브러리와 사이드 프로젝트의 구현 과정을 소개합니다.",
};

export default function PortfolioPage() {
  return (
    <main id="main-content" className="page-container">
      <h1 className="page-title pt-9 pb-5 md:pt-14 md:pb-6">포트폴리오</h1>
      <ProjectTabs />
      <div className="my-12 border-t pt-5 md:my-16">
        <Link
          href="/resume"
          className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          회사별 경력 보기
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
