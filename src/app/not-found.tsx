import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-container flex min-h-[60dvh] flex-col items-start justify-center gap-6"
    >
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="page-title">페이지를 찾을 수 없습니다.</h1>
      <p className="text-muted-foreground">
        주소를 확인하거나 포트폴리오 목록에서 작업을 살펴보세요.
      </p>
      <Button asChild className="h-12 rounded-xl px-6">
        <Link href="/portfolio">포트폴리오로 이동</Link>
      </Button>
    </main>
  );
}
