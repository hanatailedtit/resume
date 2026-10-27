# Design Tokens — Responsive SVG System (Desktop · Tablet · Mobile)

데스크탑(`1440px`), 태블릿(`834px`), 모바일(`390px`) 각 4종 총 12개 디자인 SVG(`01-intro`, `02-resume`, `03-portfolio`, `04-project-singal`)에 공통 적용한 디자인 토큰 정리 문서입니다. `ko-design-md` 카탈로그의 커리어 도메인 타이포·서피스 규격을 참조하되, 대표 포인트 컬러는 **딥 에메랄드 틸(`#0F766E`)**로 커스터마이징하고 프로젝트 고유 네이밍(vendor-neutral)으로 정의했습니다.

## 1. Color Tokens

> **SVG 호환성 안내**: Figma SVG 임포터 및 SVG 1.1 렌더러는 속성값의 `oklch()`를 지원하지 않으므로, 원본 OKLCH 및 공개 hex 값을 sRGB `#RRGGBB` + `opacity` 근사값으로 변환해 적용했습니다. 향후 웹 CSS 구현 시에는 아래 병기된 `oklch(...)`를 `:root` 커스텀 프로퍼티에 그대로 사용할 수 있습니다.

| Token | SVG Hex / Alpha | CSS OKLCH Source | Role |
| :--- | :--- | :--- | :--- |
| `bg-canvas` / `bg-surface` | `#FFFFFF` | `oklch(1 0 0)` | 페이지 캔버스 및 기본 카드 표면 |
| `bg-subtle` | `#F7F7F8` | `oklch(0.972 0.002 286)` | 보조 섹션·요약 패널·스크린샷 슬롯 배경 |
| `bg-brand` | `#0F766E` | `oklch(0.511 0.086 186.4)` | 단일 Primary CTA 및 핵심 강조 (딥 에메랄드 틸, 흰 텍스트 대비 5.47:1) |
| `bg-brand-subtle` | `#EAF5F3` | `oklch(0.961 0.012 184.1)` | 카테고리 배지, 활성 TOC, 하단 연결 배너 |
| `fill-assistive` | `#70737C` @ `0.08` | `oklch(0.521 0.018 273 / 0.08)` | 기술 스택 중성 배지 배경 |
| `fg-strong` | `#171719` | `oklch(0.148 0.004 277)` | 헤드라인, 타이틀, 활성 탭 |
| `fg-default` | `#222429` @ `0.88` | `oklch(0.259 0.010 273 / 0.88)` | 본문 및 경력 상세 리스트 |
| `fg-secondary` *(Inference)* | `#2C2D32` @ `0.74` | `oklch(0.298 0.010 273 / 0.74)` | 보조 설명·기간·캡션 (WCAG AA 4.5:1 확보를 위해 0.61 대신 `alpha-74` 단계 사용) |
| `fg-brand` | `#0F766E` | `oklch(0.511 0.086 186.4)` | 흰 배경 위 텍스트 링크 및 아이브로우 (5.47:1) |
| `fg-brand-strong` *(Inference)* | `#115E59` | `oklch(0.437 0.071 188.2)` | `bg-brand-subtle` 위 소형 텍스트 (6.81:1 명도 대비 확보용 어두운 단계 사용) |
| `border-subtle` | `#70737C` @ `0.14` | `oklch(0.521 0.018 273 / 0.08~0.16)` | 카드 외곽선 및 섹션 1px 헤어라인 |
| `border-default` | `#70737C` @ `0.22` | `oklch(0.521 0.018 273 / 0.22)` | Outlined 보조 버튼 테두리 |

## 2. Typography Scale (`Pretendard`)

- **Display Hero (`01-intro`)**: `50px / 700 / -0.031em`
- **Page Hero (`02~04`)**: `42px / 700 / -0.028em`
- **Section Title**: `30~32px / 700 / -0.024em`
- **Card / Entry Title**: `22~26px / 700 / -0.020em`
- **Body / Prose**: `15~18px / 500 / +0.006em` (`ss20`, `calt`, `kern`)
- **Badge / Meta**: `12~14px / 500~600 / +0.014~0.020em`

## 3. Shape & Component Rules

- **평면 표면 + 1px 헤어라인**: 카드와 패널에 그림자(drop shadow), 그레인 노이즈, 블러(glassmorphism), 장식용 그라디언트를 사용하지 않습니다.
- **라운딩**: 대형 카드/배너 `16px`, 버튼(lg)·다이어그램 노드·스크린샷 슬롯 `12px`, 버튼(md) `10px`, 기술 스택 배지 `6px`, 카운트·카테고리 필 `9999px`.
- **벡터 아이콘 일관성**: 유니코드 화살표(`→`, `↗`, `←`)나 이모지를 사용하지 않고 `currentColor` 계열 단색 기하학 `<path>` 벡터로 작도했습니다.

## 4. Responsive Breakpoints & Layout Grid

| Breakpoint | Artboard Width | Horizontal Margin | Content Width | Key Layout Adaptations |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop** (`designs/desktop/`) | `1440px` | `120px` | `1200px` | 1단 헤더(`64px`), `02-resume` 좌측 요약 레일 + 우측 본문 2단, `04-project-singal` 수평 1:N 다이어그램 |
| **Tablet** (`designs/tablet/`) | `834px` | `40px` | `754px` | 1단 헤더(`68px`), `01-intro` 하단 3열 범위 패널, `02-resume` 수평 섹션 점프 바, `03-portfolio` 2열 세로형 대표 카드 |
| **Mobile** (`designs/mobile/`) | `390px` | `24px` | `342px` | 2단 스티키 헤더(`112px`), 풀폭 스택형 CTA 버튼, 1열 카드 스택, `04-project-singal` 수직 1:N 브로드캐스트 다이어그램 |
