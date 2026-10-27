import {
  ArrowDown,
  ArrowRight,
  ArrowsClockwise,
  BookOpen,
  Buildings,
  ChartLineUp,
  CheckCircle,
  Database,
  DownloadSimple,
  FileCode,
  FlagBanner,
  GameController,
  Globe,
  Hash,
  Lightning,
  Package,
  Receipt,
  ShieldCheck,
  TreeStructure,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import { MapArchitecture } from "@/components/map-architecture";

export { MapArchitecture };

/**
 * 1. SINGAL Zone Editor
 * 데스크톱 IPC 통신(Electron Main / Redis)과 Renderer 프로세스의 ID 인덱스 동기화 구조
 */
export function ZoneEditorArchitecture() {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        데스크톱 IPC 통신과 존 ID 동기화 구조
      </figcaption>
      <div className="space-y-4">
        {/* Electron Main Process & IPC Bridge */}
        <div className="flex flex-col gap-3 rounded-xl border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-subtle text-primary">
              <Database size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                Electron Main Process
              </p>
              <p className="text-sm font-semibold">
                Redis Pipeline &amp; JSON File IO
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-brand-subtle px-3 py-1.5 text-xs font-semibold text-brand-strong">
            <span>IPC Channel</span>
            <span className="font-mono text-[11px] opacity-80">
              redis:write-configuration-data
            </span>
          </div>
        </div>

        {/* Vertical Transition Indicator */}
        <div className="flex items-center justify-center gap-2 py-1 text-xs font-medium text-muted-foreground">
          <ArrowDown size={16} className="text-primary" aria-hidden="true" />
          <span>렌더러 상태 복원 및 신규 생성 생명주기</span>
        </div>

        {/* 3-Step Lifecycle Grid in Renderer */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col justify-between rounded-xl border bg-background p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-subtle px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  Step 01
                </span>
                <FileCode size={18} className="text-primary" />
              </div>
              <p className="mt-3 text-sm font-bold">설정 데이터 복원</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Import JSON 및 Redis ReadDB를 통해 존 배치 및
                EquipmentConfig·GroupPort 매핑 로드
              </p>
            </div>
          </div>

          {/* Step 2 (Highlight: The core fix) */}
          <div className="flex flex-col justify-between rounded-xl border border-primary/25 bg-brand-subtle p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-brand-strong">
                  Step 02 · 핵심 해결
                </span>
                <TreeStructure size={20} className="text-primary" />
              </div>
              <p className="mt-3 text-base font-bold text-brand-strong">
                setZoneIdMapFromData
              </p>
              <p className="mt-1 text-xs leading-relaxed text-brand-strong">
                불러온 존 목록을 순회하여 DCS별 최대 ID를{" "}
                <code className="rounded bg-background/60 px-1 py-0.5 text-[11px]">
                  lastZoneIds
                </code>{" "}
                Map에 동기화 (기존 ID 재사용 방지)
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col justify-between rounded-xl border bg-background p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-subtle px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  Step 03
                </span>
                <Hash size={18} className="text-primary" />
              </div>
              <p className="mt-3 text-sm font-bold">순차 발급 &amp; 토폴로지 연결</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                <code className="rounded bg-subtle px-1 py-0.5 text-[11px]">
                  addZoneData
                </code>
                로 안전한 신규 ID 발급 후 nextZone 및 MotorReversed 연결 자동
                갱신
              </p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * 2. Heroball Infinity & Trala Admin
 * 지갑 인증부터 인벤토리 반영까지의 4단계 온체인/오프체인 트랜잭션 파이프라인
 */
export function HeroballArchitecture() {
  const steps = [
    {
      num: "01",
      title: "인증 & 만료 가드",
      badge: "Web3 Provider",
      icon: Wallet,
      desc: "ConnectWallet 연결 및 judgeExpiredAccessToken을 통한 JWT 만료 감지 시 재로그인 분기",
      isHighlight: false,
    },
    {
      num: "02",
      title: "온체인 트랜잭션",
      badge: "Smart Contract",
      icon: Receipt,
      desc: "buyMysteryBoxes 컨트랙트 실행 및 채굴 영수증에서 txHash와 from 발신 주소 추출",
      isHighlight: true,
    },
    {
      num: "03",
      title: "서버 검증 & 승인",
      badge: "REST API",
      icon: ShieldCheck,
      desc: "/box/purchase API로 영수증 검증 후 중복 구매 방지 및 아이템 소유권 반영",
      isHighlight: true,
    },
    {
      num: "04",
      title: "인벤토리 자동 포커스",
      badge: "Redux State",
      icon: Package,
      desc: "공통 inventoryMenuId 동기화로 가챠 결과에 해당하는 인벤토리 탭 즉시 전환",
      isHighlight: false,
    },
  ];

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        지갑 인증부터 인벤토리 반영까지의 트랜잭션 파이프라인
      </figcaption>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className={`relative flex flex-col justify-between rounded-xl border p-5 ${
                step.isHighlight
                  ? "border-primary/25 bg-brand-subtle"
                  : "bg-background"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold ${
                      step.isHighlight
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    PHASE {step.num}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                      step.isHighlight
                        ? "bg-primary/10 text-brand-strong"
                        : "bg-subtle text-muted-foreground"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Icon
                    size={20}
                    className={
                      step.isHighlight ? "text-primary" : "text-foreground"
                    }
                  />
                  <h4
                    className={`text-sm font-bold ${
                      step.isHighlight
                        ? "text-brand-strong"
                        : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>
                <p
                  className={`mt-2 text-xs leading-relaxed ${
                    step.isHighlight
                      ? "text-brand-strong opacity-90"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="mt-4 hidden items-center justify-end text-primary lg:flex">
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </figure>
  );
}

/**
 * 3. Xangle Web Platform
 * Nuxt 3 SSR 렌더링 경계(Server vs Client)와 리서치 세션 스코프 격리 구조
 */
export function XangleArchitecture() {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        Nuxt 3 SSR 렌더링 경계와 세션 스코프 격리 구조
      </figcaption>
      <div className="space-y-4">
        {/* Tier 1: Server Environment */}
        <div className="rounded-xl border bg-background p-5">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-primary" />
              <span className="text-xs font-bold text-muted-foreground">
                SERVER ENVIRONMENT (Nuxt 3 SSR / Node.js)
              </span>
            </div>
            <span className="rounded bg-subtle px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
              사전 렌더링 &amp; 가드
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold">useAsyncData 사전 패치</p>
              <p className="mt-1 text-xs text-muted-foreground">
                인사이트 상세 데이터를 서버에서 미리 로드하여 초기 화면 깜빡임
                제거 및 검색엔진 메타태그 완성
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-primary">
                process.server Guard
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <code className="rounded bg-subtle px-1 py-0.5 text-[11px]">
                  if (process.server) return
                </code>{" "}
                가드로 Node.js 환경에서 sessionStorage 접근 크래시 방지
              </p>
            </div>
          </div>
        </div>

        {/* Transition indicator */}
        <div className="flex items-center justify-center gap-2 py-0.5 text-xs text-muted-foreground">
          <ArrowDown size={16} className="text-primary" aria-hidden="true" />
          <span>Hydration &amp; 클라이언트 라우트 전환</span>
        </div>

        {/* Tier 2: Client Environment with Highlight Card */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Highlight Card: Scoped Session Storage */}
          <div className="rounded-xl border border-primary/25 bg-brand-subtle p-5">
            <div className="flex items-center justify-between">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-strong">
                핵심 해결
              </span>
              <span className="text-xs font-bold text-brand-strong">
                클라이언트 세션
              </span>
            </div>
            <h4 className="mt-3 text-base font-bold text-brand-strong">
              세션 스코프 격리 (removeSessionValue)
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-brand-strong">
              전역{" "}
              <code className="rounded bg-background/60 px-1 py-0.5 text-[11px]">
                sessionStorage.clear()
              </code>
              를 제거하고, 리서치 전용 4개 키(
              <code className="rounded bg-background/60 px-1 py-0.5 text-[11px]">
                researchData
              </code>
              ,{" "}
              <code className="rounded bg-background/60 px-1 py-0.5 text-[11px]">
                researchScroll
              </code>{" "}
              등)만 선별 제거하여 타 기능 세션 오염 방지
            </p>
          </div>

          {/* Reactive Timing & WebSocket Guard */}
          <div className="rounded-xl border bg-background p-5">
            <div className="flex items-center justify-between">
              <span className="rounded bg-subtle px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                DOM &amp; 네트워크
              </span>
              <ArrowsClockwise size={20} className="text-primary" />
            </div>
            <h4 className="mt-3 text-sm font-bold">반응형 렌더링 &amp; 수신 가드</h4>
            <div className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  {"watch flush: 'post'"}
                </strong>
                : DOM 렌더링 완료 후 무한스크롤 높이 계산 및 스크롤 위치 복원
              </p>
              <p>
                <strong className="text-foreground">WebSocket Guard</strong>:{" "}
                <code className="rounded bg-subtle px-1 py-0.5 text-[11px]">
                  {"typeof data === 'string'"}
                </code>{" "}
                타입 검증 후 안전 파싱
              </p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * 4. 동대문구 데이터센터
 * 공간/통계 데이터의 이원화 시각화(OpenLayers 지도 & Highcharts) 및 Java 다형성 내보내기 매트릭스
 */
export function DataCenterArchitecture() {
  const formats = [
    { ext: "XLSX", role: "분석 보고서", desc: "서식 및 다중 시트 엑셀" },
    { ext: "CSV", role: "원시 데이터", desc: "분석가용 경량 텍스트" },
    { ext: "JSON", role: "웹 연동", desc: "외부 시스템 연계 표준" },
    { ext: "XML", role: "행정 표준", desc: "공공 데이터 포맷 호환" },
  ];

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        공공 상권 데이터 이원화 시각화와 다형성 내보내기 파이프라인
      </figcaption>
      <div className="space-y-4">
        {/* Source Layer */}
        <div className="flex flex-col gap-3 rounded-xl border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-subtle text-primary">
              <Database size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                데이터 소스 (PostgreSQL)
              </p>
              <p className="text-sm font-semibold">
                동대문구 상권 공간 레이어 &amp; 분기별 매출·유동인구 데이터셋
              </p>
            </div>
          </div>
          <span className="rounded bg-subtle px-2 py-1 text-xs font-semibold text-muted-foreground">
            공공 빅데이터
          </span>
        </div>

        {/* Dual Visualization Engines */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Engine 1: OpenLayers */}
          <div className="rounded-xl border border-primary/25 bg-brand-subtle p-5">
            <div className="flex items-center justify-between">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-strong">
                공간 지리 시각화
              </span>
              <Buildings size={20} className="text-primary" />
            </div>
            <h4 className="mt-3 text-base font-bold text-brand-strong">
              OpenLayers 지도 엔진
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-brand-strong">
              행정동 폴리곤 경계 매핑, 상권 구역 피처 레이어링, 반경 선택 및
              공간 데이터 동적 오버레이
            </p>
          </div>

          {/* Engine 2: Highcharts */}
          <div className="rounded-xl border border-primary/25 bg-brand-subtle p-5">
            <div className="flex items-center justify-between">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-strong">
                시계열 통계 시각화
              </span>
              <ChartLineUp size={20} className="text-primary" />
            </div>
            <h4 className="mt-3 text-base font-bold text-brand-strong">
              Highcharts 분석 차트
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-brand-strong">
              분기별 유동인구 추이, 업종별 매출 비교, 이상치 탐색을 위한
              인터랙티브 시계열 복합 차트
            </p>
          </div>
        </div>

        {/* Java Multi-Format Export Engine */}
        <div className="rounded-xl border bg-background p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <DownloadSimple size={18} className="text-primary" />
              <h4 className="text-xs font-bold text-muted-foreground">
                JAVA BACKEND STREAMING EXPORTER
              </h4>
            </div>
            <span className="text-xs text-muted-foreground">
              대용량 데이터 메모리 스트리밍 변환
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {formats.map((fmt) => (
              <div
                key={fmt.ext}
                className="rounded-lg border bg-subtle p-3 text-center"
              >
                <span className="font-mono text-sm font-bold text-primary">
                  {fmt.ext}
                </span>
                <p className="mt-1 text-xs font-semibold">{fmt.role}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {fmt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * 5. Readly
 * 계층별 무결성 검증(Client -> Node.js 멱등성 가드 & 장애 복구 -> PostgreSQL) 구조
 */
export function ReadlyArchitecture() {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        계층별 데이터 무결성과 운영 장애 복구 파이프라인
      </figcaption>
      <div className="space-y-3">
        {/* Layer 1: Client UI */}
        <div className="rounded-xl border bg-background p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-primary" />
              <h4 className="text-sm font-bold">
                1. 프론트엔드 입력 및 서재 인터랙션 (Next.js)
              </h4>
            </div>
            <span className="rounded bg-subtle px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
              Client Layer
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            도서 검색·독서 상태(읽는 중, 완독) 입력 폼 제공, 카테고리별 개인 서재
            분류, 빠른 연속 입력 시 프론트 디바운스 적용
          </p>
        </div>

        {/* Connector */}
        <div className="flex justify-center text-primary">
          <ArrowDown size={16} aria-hidden="true" />
        </div>

        {/* Layer 2: API & Resilience Middleware (HIGHLIGHT) */}
        <div className="rounded-xl border border-primary/25 bg-brand-subtle p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck size={22} className="text-primary" />
              <h4 className="text-base font-bold text-brand-strong">
                2. 중복 집계 방지 가드 및 무중단 장애 복구 (Node.js API)
              </h4>
            </div>
            <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-strong">
              운영 핵심 해결
            </span>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs text-brand-strong">
            <div className="rounded-lg bg-background/60 p-3">
              <p className="font-bold">중복 집계 원천 차단 가드</p>
              <p className="mt-1 opacity-90">
                동일 사용자의 중복 클릭 및 네트워크 재시도에 대해 멱등성 검증을
                거쳐 이중 카운팅 방지
              </p>
            </div>
            <div className="rounded-lg bg-background/60 p-3">
              <p className="font-bold">무중단 프로덕션 장애 복구</p>
              <p className="mt-1 opacity-90">
                외부 도서 API 연동 실패 및 런타임 예외를 격리하고 안전한 폴백
                응답을 반환하여 서비스 연속성 보장
              </p>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center text-primary">
          <ArrowDown size={16} aria-hidden="true" />
        </div>

        {/* Layer 3: Database & Rollup */}
        <div className="rounded-xl border bg-background p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database size={18} className="text-primary" />
              <h4 className="text-sm font-bold">
                3. 데이터 영속성 및 통계 집계 (PostgreSQL)
              </h4>
            </div>
            <span className="rounded bg-subtle px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
              Persistence &amp; Stats
            </span>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">유니크 제약 스키마</p>
              <p className="mt-1">
                복합 고유 제약(
                <code className="rounded bg-subtle px-1 py-0.5 text-[11px]">
                  UNIQUE
                </code>
                )과 트랜잭션 롤백으로 데이터 원자성 보장
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                월별 독서량 통계 롤업
              </p>
              <p className="mt-1">
                정제된 단일 기록만을 기준으로 월별 권수·페이지 수를 정확하게 1회
                집계
              </p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * 6. ASH//ERROR
 * React UI/컨트롤러와 60FPS Phaser 4 물리 루프, 5개 스테이지 진행 및 검증 루프
 */
export function AshErrorArchitecture() {
  const stages = [
    "Stage 01",
    "Stage 02",
    "Stage 03",
    "Stage 04",
    "Boss Stage",
  ];

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-subtle p-6 md:p-9">
      <figcaption className="mb-7 text-sm font-semibold text-muted-foreground">
        2D 아케이드 게임 루프와 스테이지 진행·검증 구조
      </figcaption>
      <div className="space-y-4">
        {/* Dual Engine: React Controller vs Phaser 4 Game Loop */}
        <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
          {/* React Input & HUD */}
          <div className="flex flex-col justify-between rounded-xl border bg-background p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-subtle px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  UI &amp; 컨트롤러
                </span>
                <GameController size={20} className="text-primary" />
              </div>
              <h4 className="mt-3 text-sm font-bold">React Controller &amp; HUD</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                키보드·가상패드 입력 수집, 4종 무기 스왑 UI 및 무기별 쿨다운
                타이머 관리, 실시간 체력·스코어 표시
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-subtle p-2.5 text-center text-xs font-semibold text-muted-foreground">
              무기 4종: 권총 · 샷건 · 라이플 · 플라즈마
            </div>
          </div>

          {/* Phaser 4 Arcade Physics Loop (HIGHLIGHT) */}
          <div className="rounded-xl border border-primary/25 bg-brand-subtle p-5">
            <div className="flex items-center justify-between">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-strong">
                실시간 렌더링 &amp; 연산 엔진
              </span>
              <Lightning size={22} className="text-primary" />
            </div>
            <h4 className="mt-3 text-base font-bold text-brand-strong">
              Phaser 4 Core Game Loop (60 FPS)
            </h4>
            <div className="mt-3 space-y-2 text-xs text-brand-strong">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p>
                  <strong>아케이드 물리 연산</strong>: 캐릭터 가속도, 점프, 넉백
                  및 중력 시뮬레이션
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p>
                  <strong>발사체 궤적 &amp; 충돌 판정</strong>: 무기별 탄환 궤적
                  연산 및 적 히트박스 충돌 감지
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p>
                  <strong>피격 이펙트 &amp; 사운드</strong>: 파티클 생성 및 오디오
                  재생 트리거
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Progression Pipeline */}
        <div className="rounded-xl border bg-background p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <FlagBanner size={18} className="text-primary" />
              <h4 className="text-xs font-bold text-muted-foreground">
                5-STAGE PROGRESSION STATE MACHINE
              </h4>
            </div>
            <span className="text-xs text-muted-foreground">
              웨이브 스폰 및 스테이지 클리어 전이
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {stages.map((stage, idx) => (
              <div
                key={stage}
                className={`rounded-lg border p-2.5 text-center text-xs font-semibold ${
                  idx === stages.length - 1
                    ? "border-primary/30 bg-brand-subtle text-brand-strong"
                    : "bg-subtle text-foreground"
                }`}
              >
                {stage}
              </div>
            ))}
          </div>
        </div>

        {/* Verification Loop Footer */}
        <div className="flex flex-col gap-3 rounded-xl border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-subtle text-primary">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">품질 검증 루프</p>
              <p className="text-sm font-semibold">
                자동화 테스트 &amp; 실시간 플레이 테스트
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground sm:text-right">
            단위/충돌 판정 코드 검증 ↔ 조작감·난이도 플레이 피드백 밸런싱
          </p>
        </div>
      </div>
    </figure>
  );
}

/**
 * 각 프로젝트 slug에 맞춰 최적화된 아키텍처 도식 반환
 */
export function ProjectArchitecture({ slug }: { slug: string }) {
  switch (slug) {
    case "singal":
      return <MapArchitecture />;
    case "zone-editor":
      return <ZoneEditorArchitecture />;
    case "heroball-trala":
      return <HeroballArchitecture />;
    case "xangle":
      return <XangleArchitecture />;
    case "data-center":
      return <DataCenterArchitecture />;
    case "readly":
      return <ReadlyArchitecture />;
    case "ash-error":
      return <AshErrorArchitecture />;
    default:
      return null;
  }
}
