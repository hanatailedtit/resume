import {
  ArrowDown,
  ArrowRight,
  Cube,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";

export function MapArchitecture() {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        공통 맵 라이브러리의 역할 분리
      </figcaption>
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
        <div className="space-y-3">
          <div className="rounded-xl border bg-background p-5">
            <p className="text-xs text-muted-foreground">운영 도구</p>
            <p className="mt-2 text-base font-semibold">Conveyor GUI</p>
          </div>
          <div className="rounded-xl border bg-background p-5">
            <p className="text-xs text-muted-foreground">설정 도구</p>
            <p className="mt-2 text-base font-semibold">Zone Editor</p>
          </div>
        </div>
        <ArrowRight
          size={21}
          className="hidden text-primary md:block"
          aria-hidden="true"
        />
        <ArrowDown
          size={21}
          className="mx-auto text-primary md:hidden"
          aria-hidden="true"
        />
        <div className="rounded-xl border border-primary/25 bg-brand-subtle p-6">
          <Cube size={25} className="mb-4 text-primary" />
          <p className="text-xs font-semibold text-brand-strong">
            공유 렌더링 엔진
          </p>
          <p className="mt-2 text-xl font-bold">PixiJS Engine</p>
          <p className="mt-3 text-sm leading-relaxed text-brand-strong">
            텍스처 캐시
            <br />
            스프라이트 Map 인덱스
          </p>
        </div>
        <ArrowRight
          size={21}
          className="hidden text-primary md:block"
          aria-hidden="true"
        />
        <ArrowDown
          size={21}
          className="mx-auto text-primary md:hidden"
          aria-hidden="true"
        />
        <div className="space-y-3">
          <div className="rounded-xl border bg-background p-5">
            <MapTrifold size={20} className="mb-2 text-primary" />
            <p className="font-semibold">ViewportManager</p>
            <p className="mt-1 text-sm text-muted-foreground">
              확대·축소와 시점 이동
            </p>
          </div>
          <div className="rounded-xl border bg-background p-5">
            <p className="font-semibold">ZoneManager</p>
            <p className="mt-1 text-sm text-muted-foreground">
              존 데이터와 화면 표현
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
