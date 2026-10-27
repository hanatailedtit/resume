import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/shared";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardSubset.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { default: "서지영 | Software Engineer", template: "%s | 서지영" },
  icons: { icon: "/favicon.svg" },
  description:
    "웹 서비스와 실시간 운영 시스템을 개발하는 소프트웨어 엔지니어 서지영의 이력서와 포트폴리오입니다.",
  openGraph: {
    title: "서지영 | Software Engineer",
    description: "웹 서비스와 운영 시스템을 개발합니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only z-30 rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
