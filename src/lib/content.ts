export const profile = {
  name: "서지영",
  role: "Software Engineer",
  email: "jiiyeong5134@gmail.com",
  github: "https://github.com/hanatailedtit",
};

export const skills = [
  {
    name: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue 3",
      "Nuxt 3",
      "React Native",
      "Storybook",
    ],
  },
  {
    name: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "C++",
      "Java",
      "PostgreSQL",
      "MariaDB",
      "Redis",
    ],
  },
  {
    name: "Realtime & Delivery",
    items: [
      "WebSocket",
      "PixiJS",
      "Electron",
      "Docker",
      "GitHub Packages",
      "Playwright",
      "Vitest",
    ],
  },
];

export const experiences = [
  {
    id: "semi-ts",
    company: "세미티에스",
    period: "2025.06.23 - 2026.05",
    role: "Software Engineer",
    team: "AMHS본부 개발팀",
    summary: "실시간 설비 운영 GUI와 레이아웃 에디터 개발",
    tasks: [
      "WebSocket 기반 컨베이어 모니터링·제어와 Replay·CCTV 화면 구현",
      "Electron 에디터의 존 배치·연결 설정과 Redis 저장·복원 개발",
      "PixiJS 공통 맵 엔진, 텍스처 캐시와 스프라이트 인덱스 구현",
      "Pinia 상태 참조 보존과 Vitest·Playwright 회귀 테스트 작성",
    ],
    stack: ["Vue 3", "TypeScript", "PixiJS", "Electron", "Redis"],
    project: "singal",
  },
  {
    id: "shiftclick",
    company: "시프트클릭",
    period: "2025.01.13 - 2025.04.12",
    role: "Frontend Engineer",
    team: "",
    summary: "Pomerium Space 메인 페이지 전체 개발",
    tasks: [
      "헤더부터 콘텐츠 섹션·파트너·푸터까지 메인 페이지 전체 구현",
      "디자인 토큰 기반 라이트·다크 테마 구현",
      "다양한 화면 크기에 대응하는 반응형 UI 개발",
    ],
    stack: ["React", "TypeScript", "Material UI", "Vite"],
    project: "pomerium-space",
  },
  {
    id: "tralalab",
    company: "트랄라랩",
    period: "2023.08.21 - 2024.10.01",
    role: "Frontend Engineer",
    team: "WEB3 Division",
    summary: "게임 이벤트 웹, 운영 대시보드와 모바일 보상 흐름 개발",
    tasks: [
      "HeroBall 이벤트 웹의 로그인·지갑 연결·구매 트랜잭션과 결과 UI 구현",
      "React Query·TanStack Table 기반 운영 대시보드의 API·검색·페이지네이션 연동",
      "React Native 앱의 출석·퀘스트·배틀패스와 JSON-RPC 웹뷰 연동",
      "공통 차트·테이블·입력 컴포넌트와 CSV 업로드 미리보기 구성",
    ],
    stack: ["Next.js", "React", "React Native", "TanStack Query"],
    project: "heroball-trala",
  },
  {
    id: "crossangle",
    company: "크로스앵글",
    period: "2022.02.16 - 2023.06.05",
    role: "Frontend Engineer",
    team: "",
    summary: "쟁글 콘텐츠 서비스와 공통 Vue UI 라이브러리 개발",
    tasks: [
      "인사이트 이벤트 캘린더·리서치 목록과 반응형 화면 개발",
      "Nuxt 3 환경에서 useAsyncData 기반 SSR·메타정보 보완",
      "검색·무한스크롤의 상태 초기화와 WebSocket 타입 가드 개선",
      "공통 UI의 툴팁 경계·다크모드와 Storybook·패키지 빌드 개선",
    ],
    stack: ["Vue 3", "Nuxt 3", "Highcharts", "Storybook"],
    project: "xangle",
  },
  {
    id: "pitagraph",
    company: "피타그래프",
    period: "2021.06 - 2022.01",
    role: "Full-stack Developer",
    team: "",
    summary: "동대문구 공공 데이터 서비스 개발",
    tasks: [
      "공공 데이터 서비스의 프론트엔드와 Java 백엔드 개발",
      "OpenLayers 지도와 Highcharts 분석 시각화 구현",
      "XLSX·CSV·JSON·XML 데이터 내보내기 구현",
    ],
    stack: ["React", "Java", "PostgreSQL", "OpenLayers"],
    project: "data-center",
  },
];

export type Project = {
  slug: string;
  title: string;
  company: string;
  category: "company" | "side";
  period: string;
  role: string;
  description: string;
  stack: string[];
  overview: string;
  caseTitle: string;
  problem: string;
  approach: string;
  result: string;
  work: { title: string; description: string }[];
  experience?: string;
  website?: string;
  screenshots?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
    group?: "데스크톱 섹션별 화면" | "라이트·다크 모드 비교" | "모바일 반응형";
  }[];
};

export const projects: Project[] = [
  {
    slug: "singal",
    title: "SINGAL 장비 운영 플랫폼",
    company: "세미티에스",
    category: "company",
    period: "2025.07 - 2026.05",
    role: "Vue 프론트엔드 · 공통 맵 라이브러리",
    description:
      "설비의 실시간 상태와 운영 데이터를 연결하고, 두 도구가 함께 사용하는 맵 엔진을 개발했습니다.",
    stack: ["Vue 3", "TypeScript", "PixiJS", "WebSocket", "Pinia"],
    overview:
      "컨베이어의 존·캐리어·알람 상태와 제어 메시지를 운영 화면에 연결했습니다. 과거 상태를 재생하는 Replay, WebSocket 영상 기반 CCTV와 공통 설비 맵 라이브러리를 개발했습니다.",
    caseTitle: "반복되는 맵 렌더링 작업 줄이기",
    problem:
      "설비 상태가 갱신될 때 자식 스프라이트 탐색과 동일 텍스처 생성이 반복될 수 있었습니다. 상태를 교체하면서 기존 존 객체를 참조하는 화면의 연결도 유지해야 했습니다.",
    approach:
      "PixiJS 기반 Engine·ViewportManager·ZoneManager로 책임을 나누었습니다. 텍스처를 캐시하고 존별 스프라이트를 Map에 인덱싱했습니다. Pinia에서는 Map을 갱신하되 기존 존 객체의 참조를 보존했습니다.",
    result:
      "캐시와 인덱스로 반복 생성·탐색을 줄였습니다. Vitest에서 Map 인스턴스 교체와 존 객체 참조 유지, 변경된 상태 반영을 함께 검증했습니다.",
    work: [
      {
        title: "실시간 모니터링과 제어",
        description:
          "WebSocket 메시지와 존·캐리어·알람 상태, 장비 제어 UI 연결",
      },
      {
        title: "Replay와 CCTV",
        description:
          "시간 순서·배속에 맞춘 과거 상태 재생과 WebSocket 영상 재생",
      },
      {
        title: "공통 맵 탐색",
        description: "미니맵, 선택·이동과 월드 좌표 기반 시점 동기화",
      },
    ],
    experience: "semi-ts",
  },
  {
    slug: "zone-editor",
    title: "SINGAL Zone Editor",
    company: "세미티에스",
    category: "company",
    period: "2025.06 - 2026.05",
    role: "Electron · Vue 프론트엔드",
    description:
      "설비 레이아웃의 배치·연결을 편집하고, 설정 데이터를 저장하고 복원하는 데스크톱 도구입니다.",
    stack: ["Electron", "Vue 3", "PixiJS", "Redis", "Playwright"],
    overview:
      "컨베이어·퍼지 버퍼의 존과 연결 관계를 편집하는 Electron 앱입니다. 드래그·연결 설정부터 Redis 저장, 파일 Import/Export와 데이터 일관성 개선까지 담당했습니다.",
    caseTitle: "설정 가져오기 이후의 중복 ID 해결",
    problem:
      "파일에서 존을 가져온 뒤 ID 인덱스가 복원되지 않아, 새 존을 추가할 때 기존 존과 ID가 중복될 수 있었습니다.",
    approach:
      "가져온 존 데이터를 기준으로 zoneIdMap을 다시 구성했습니다. DCS별 마지막 ID를 Map으로 관리하고, 관련 존의 연결 정보를 직접 갱신하도록 존 추가 흐름을 개선했습니다.",
    result:
      "저장 데이터와 편집 모델의 ID 인덱스를 맞췄습니다. 카메라 연결·해제, 존 드래그와 원위치 이동 후 좌표 인덱스를 확인하는 Playwright 테스트를 추가했습니다.",
    work: [
      {
        title: "Redis 저장",
        description: "Electron IPC와 Redis pipeline을 이용한 설비 설정 저장",
      },
      {
        title: "Import / Export",
        description:
          "EquipmentConfig·ProductInfo·GroupPort와 그룹 멤버 데이터 복원",
      },
      {
        title: "편집 상호작용",
        description: "존 배치·드래그·카메라 채널 연결과 자동화 테스트",
      },
    ],
    experience: "semi-ts",
  },
  {
    slug: "pomerium-space",
    title: "Pomerium Space",
    company: "시프트클릭",
    category: "company",
    period: "2025.01 - 2025.02",
    role: "프론트엔드 · 메인 페이지 전체 개발",
    screenshots: [
      {
        src: "/projects/pomerium-hero.webp",
        width: 1440,
        height: 1000,
        alt: "Pomerium Space 헤더·히어로 · 메인 배너와 슬라이더 실제 데스크톱 화면",
        caption: "헤더·히어로 · 메인 배너와 슬라이더",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-coin.webp",
        width: 1240,
        height: 969,
        alt: "Pomerium Space 코인 소개 · 통계와 정보 카드 실제 데스크톱 화면",
        caption: "코인 소개 · 통계와 정보 카드",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-ecosystem.webp",
        width: 1240,
        height: 681,
        alt: "Pomerium Space 에코시스템 · 서비스 소개 카드 실제 데스크톱 화면",
        caption: "에코시스템 · 서비스 소개 카드",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-community.webp",
        width: 1440,
        height: 741,
        alt: "Pomerium Space 커뮤니티 · 채널 목록과 슬라이더 실제 데스크톱 화면",
        caption: "커뮤니티 · 채널 목록과 슬라이더",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-news.webp",
        width: 1440,
        height: 761,
        alt: "Pomerium Space 뉴스 · 업데이트 카드 실제 데스크톱 화면",
        caption: "뉴스 · 업데이트 카드",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-exchanges.webp",
        width: 1440,
        height: 933,
        alt: "Pomerium Space 거래소 · 파트너 로고 배치 실제 데스크톱 화면",
        caption: "거래소 · 파트너 로고 배치",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-staking.webp",
        width: 1440,
        height: 630,
        alt: "Pomerium Space 스테이킹 · 서비스 안내 배너 실제 데스크톱 화면",
        caption: "스테이킹 · 서비스 안내 배너",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-tokens.webp",
        width: 1440,
        height: 1039,
        alt: "Pomerium Space 토큰·NFT · 콘텐츠 캐러셀 실제 데스크톱 화면",
        caption: "토큰·NFT · 콘텐츠 캐러셀",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-services.webp",
        width: 1440,
        height: 593,
        alt: "Pomerium Space Web3 서비스 · 솔루션 카드 실제 데스크톱 화면",
        caption: "Web3 서비스 · 솔루션 카드",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-partners.webp",
        width: 1440,
        height: 625,
        alt: "Pomerium Space 파트너 · 로고와 제휴 안내 실제 데스크톱 화면",
        caption: "파트너 · 로고와 제휴 안내",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-footer-complete.webp",
        width: 1440,
        height: 1000,
        alt: "Pomerium Space 하단 CTA·푸터 · 사이트 메뉴와 테마 전환 실제 데스크톱 화면",
        caption: "하단 CTA·푸터 · 사이트 메뉴와 테마 전환",
        group: "데스크톱 섹션별 화면",
      },
      {
        src: "/projects/pomerium-theme-coin.webp",
        width: 2552,
        height: 1093,
        alt: "같은 코인 소개 섹션의 실제 라이트 모드와 다크 모드를 좌우로 비교한 화면",
        caption: "코인 소개 · 왼쪽 라이트 모드 / 오른쪽 다크 모드",
        group: "라이트·다크 모드 비교",
      },
      {
        src: "/projects/pomerium-theme-community.webp",
        width: 2952,
        height: 865,
        alt: "같은 커뮤니티 섹션의 실제 라이트 모드와 다크 모드를 좌우로 비교한 화면",
        caption: "커뮤니티 · 왼쪽 라이트 모드 / 오른쪽 다크 모드",
        group: "라이트·다크 모드 비교",
      },
      {
        src: "/projects/pomerium-mobile-overview.webp",
        width: 1680,
        height: 968,
        alt: "390px 모바일 반응형 화면 4장을 가로로 나란히 배치: 메인·코인 소개·에코시스템·커뮤니티",
        caption: "메인·코인 소개·에코시스템·커뮤니티",
        group: "모바일 반응형",
      },
      {
        src: "/projects/pomerium-mobile-content.webp",
        width: 1680,
        height: 968,
        alt: "390px 모바일 반응형 화면 4장을 가로로 나란히 배치: 뉴스·토큰과 NFT·서비스·파트너",
        caption: "뉴스·토큰과 NFT·서비스·파트너",
        group: "모바일 반응형",
      },
    ],
    description:
      "헤더부터 푸터까지 메인 페이지 전체를 개발하고, 라이트·다크 테마와 모바일 반응형 UI를 구현했습니다.",
    stack: ["React", "TypeScript", "Material UI", "Vite"],
    overview:
      "Pomerium Space 메인 페이지의 프론트엔드 전체를 개발했습니다. 헤더와 히어로 슬라이더부터 코인 소개, 에코시스템, 커뮤니티, 뉴스, 스테이킹, 토큰·NFT, 서비스·파트너, 푸터까지 구현하고 라이트·다크 테마와 모바일 반응형 UI를 적용했습니다.",
    caseTitle: "테마와 반응형 화면에 같은 디자인 기준 적용하기",
    problem:
      "디자인 시스템의 컬러를 라이트·다크 테마에 일관되게 적용하고, 메인 콘텐츠와 탐색 메뉴가 모바일에서도 동작하도록 구성해야 했습니다.",
    approach:
      "컬러값을 상수로 정의해 MUI 다크모드 설정과 매핑했습니다. 헤더와 에코시스템 드롭다운을 개발하고 react-slick 기반 슬라이더, 파트너 섹션과 모바일 반응형 레이아웃을 구성했습니다.",
    result:
      "메인 페이지의 전체 섹션을 개발하고 테마별 컬러와 반응형 배치를 적용했습니다.",
    work: [
      {
        title: "테마 구성",
        description: "MUI 라이트·다크 모드와 디자인 시스템 컬러 매핑",
      },
      {
        title: "탐색과 콘텐츠",
        description:
          "헤더·슬라이더부터 각 콘텐츠 섹션·파트너·푸터까지 전체 구현",
      },
      {
        title: "반응형 UI",
        description: "데스크톱과 모바일 뷰포트에 맞춘 화면 배치",
      },
    ],
    experience: "shiftclick",
    website: "https://pomerium.space/",
  },
  {
    slug: "heroball-trala",
    title: "Heroball Infinity & Trala Admin",
    company: "트랄라랩",
    category: "company",
    period: "2023.08 - 2024.08",
    role: "웹 프론트엔드",
    screenshots: [
      {
        src: "/projects/heroball-main.webp",
        width: 1600,
        height: 909,
        alt: "Heroball Infinity 이벤트 메인 화면과 지갑 연결 메뉴",
        caption: "Heroball Infinity 이벤트 메인",
      },
      {
        src: "/projects/heroball-gacha.webp",
        width: 1600,
        height: 950,
        alt: "Heroball Infinity의 게임 아이템과 NFT 가챠 화면",
        caption: "게임 아이템·NFT 가챠",
      },
      {
        src: "/projects/trala-dashboard.webp",
        width: 1600,
        height: 811,
        alt: "Trala Admin의 운영 지표와 시계열 차트 대시보드",
        caption: "Trala Admin 운영 대시보드",
      },
      {
        src: "/projects/trala-storybook.webp",
        width: 1600,
        height: 943,
        alt: "Storybook에서 문서화한 Trala 공통 버튼 컴포넌트",
        caption: "Storybook 공통 UI 컴포넌트",
      },
    ],
    description:
      "로그인과 구매부터 결과 확인까지 이어지는 게임 이벤트 웹과 데이터 운영 대시보드를 개발했습니다.",
    stack: ["Next.js", "React", "TanStack Query", "TanStack Table"],
    overview:
      "HeroBall NFT 이벤트 웹과 게임·유저·NFT 운영 대시보드를 개발했습니다. 서비스 웹의 인증·구매 흐름과 운영 도구의 API·차트·테이블을 연결했습니다.",
    caseTitle: "구매 요청부터 결과 화면까지 연결하기",
    problem:
      "지갑 인증 상태와 토큰 만료, 온체인 트랜잭션 결과와 서버 구매 결과가 화면에서 일관되게 이어져야 했습니다.",
    approach:
      "JWT 만료를 확인해 재로그인을 분기하고, 트랜잭션 영수증의 hash와 from을 확인한 뒤 서버 구매 API에 전달했습니다. 가챠 결과에 맞는 인벤토리 탭을 공통 상태로 관리했습니다.",
    result:
      "로그인과 구매 성공·실패 UI를 구성하고 획득 결과에서 해당 인벤토리 탭으로 이어지는 흐름을 구현했습니다.",
    work: [
      {
        title: "운영 데이터 연결",
        description: "게임·유저 지표 API, ECharts 차트와 TanStack Table 연동",
      },
      {
        title: "CSV 업로드",
        description: "파일 변경·취소, 업로드 데이터 미리보기와 적용 흐름 구현",
      },
      {
        title: "서버 페이지네이션",
        description: "NFT 유저 목록의 조회 범위와 전체 건수 응답 연결",
      },
    ],
    experience: "tralalab",
  },
  {
    slug: "xangle",
    title: "Xangle Web Platform",
    company: "크로스앵글",
    category: "company",
    period: "2022.02 - 2023.05",
    role: "Vue · Nuxt 프론트엔드",
    screenshots: [
      {
        src: "/projects/xangle-research.webp",
        width: 857,
        height: 332,
        alt: "리서치 콘텐츠를 카드 그리드로 보여주는 Xangle 목록",
        caption: "리서치 카드 목록",
      },
      {
        src: "/projects/xangle-calendar.webp",
        width: 960,
        height: 663,
        alt: "가상자산 이벤트를 날짜별로 보여주는 Xangle 인사이트 캘린더",
        caption: "인사이트 이벤트 캘린더",
      },
      {
        src: "/projects/xangle-analytics.webp",
        width: 531,
        height: 374,
        alt: "지표 목록과 시계열 차트로 구성한 Xangle 애널리틱스",
        caption: "애널리틱스 지표 차트",
      },
    ],
    description:
      "리서치와 인사이트, 온체인 지표를 보여주는 서비스 웹과 공통 UI를 개발했습니다.",
    stack: ["Vue 3", "Nuxt 3", "Highcharts", "Storybook"],
    overview:
      "인사이트 캘린더·리서치 목록·온체인 차트와 공통 UI 라이브러리를 개발했습니다. Nuxt 3 환경에서 SSR과 페이지 전환 상태, 컴포넌트 호환성을 보완했습니다.",
    caseTitle: "SSR과 목록 전환 상태 안정화",
    problem:
      "Nuxt 환경에서는 브라우저 전용 API 접근을 구분해야 했고, 목록 전환 시 넓은 세션 초기화와 watch 실행 시점으로 로딩·무한스크롤 문제가 발생했습니다.",
    approach:
      "useAsyncData로 인사이트 상세 데이터를 조회하고, 리서치 관련 세션 키만 제거하도록 범위를 좁혔습니다. 필터 watch에 flush: post를 적용하고 서버의 sessionStorage 접근을 방지했습니다.",
    result:
      "서버 데이터 조회와 브라우저 상태의 경계를 보완하고 목록 전환의 초기화 범위를 정리했습니다. WebSocket 데이터에는 문자열 타입 가드를 추가했습니다.",
    work: [
      {
        title: "콘텐츠 탐색",
        description: "이벤트 캘린더·관련 자산·리서치 목록과 검색 상태 유지",
      },
      {
        title: "데이터 시각화",
        description: "온체인 지표 복합 차트, 비교 테이블과 표시 포맷 개선",
      },
      {
        title: "공통 UI",
        description:
          "툴팁 경계 보정, 탭 다크모드 반응성과 공통 패키지 빌드 개선",
      },
    ],
    experience: "crossangle",
  },
  {
    slug: "data-center",
    title: "동대문구 데이터센터",
    company: "피타그래프",
    category: "company",
    period: "2021.08 - 2022.01",
    role: "프론트엔드 · 백엔드",
    screenshots: [
      {
        src: "/projects/data-center-map.webp",
        width: 856,
        height: 561,
        alt: "동대문구 스마트지도의 상점 마커와 지도 검색 화면",
        caption: "우리동네 스마트지도",
      },
      {
        src: "/projects/data-center-analysis.webp",
        width: 900,
        height: 604,
        alt: "상권 경계와 선택 상권의 통계 차트를 함께 보여주는 분석 화면",
        caption: "시장·점포 상권 분석",
      },
      {
        src: "/projects/data-center-export.webp",
        width: 859,
        height: 392,
        alt: "파일 형식 선택 버튼과 데이터 목록이 있는 내보내기 화면",
        caption: "공공 데이터 파일 내보내기",
      },
      {
        src: "/projects/data-center-report.webp",
        width: 774,
        height: 809,
        alt: "상권별 주요 지표와 막대 차트를 포함한 상권 분석 보고서",
        caption: "상권 분석 보고서",
      },
    ],
    description:
      "공공 상권 데이터를 지도와 차트로 탐색하는 데이터 서비스를 개발했습니다.",
    stack: ["React", "Java", "PostgreSQL", "OpenLayers"],
    overview:
      "공공 데이터를 조회하고 분석하는 웹 서비스의 프론트엔드와 Java 백엔드를 개발했습니다. 지도·차트 시각화와 다양한 형식의 데이터 내보내기를 구현했습니다.",
    caseTitle: "데이터 조회에서 활용까지 이어지는 화면",
    problem:
      "공공 상권 데이터를 지도와 분석 차트로 확인하고, 사용 목적에 맞는 파일 형식으로 내보낼 수 있어야 했습니다.",
    approach:
      "OpenLayers 지도와 Highcharts 분석 시각화를 구성하고 Java 백엔드에 데이터 내보내기 기능을 구현했습니다.",
    result:
      "데이터 조회·지도 탐색·차트 확인과 XLSX·CSV·JSON·XML 형식 내보내기를 제공했습니다.",
    work: [
      {
        title: "지도 시각화",
        description: "OpenLayers를 활용한 공공 상권 데이터 표시",
      },
      { title: "분석 차트", description: "Highcharts 기반 데이터 시각화" },
      {
        title: "데이터 내보내기",
        description: "Java 백엔드의 여러 파일 형식 지원",
      },
    ],
    experience: "pitagraph",
  },
  {
    slug: "readly",
    title: "Readly",
    company: "1인 개발",
    category: "side",
    period: "2024.10 - 2024.12 / 이후 유지보수",
    role: "기획 · 디자인 · 개발 · 배포",
    description:
      "읽은 책과 생각을 기록하는 독서 기록 서비스. 기획부터 API·DB·배포까지 직접 만들었습니다.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    overview:
      "독서 기록 서비스를 기획하고 화면·API·데이터베이스·배포를 직접 구성한 개인 프로젝트입니다. 배포 이후 데이터 집계 오류와 API 장애를 다루며 유지보수했습니다.",
    caseTitle: "만드는 경험에서 운영하는 경험으로",
    problem:
      "서비스를 배포한 뒤 데이터 중복 집계와 프로덕션 API 장애를 해결해야 했습니다.",
    approach:
      "화면부터 API와 데이터베이스까지 이어지는 서비스 흐름을 점검하고, 집계 오류 수정과 API 복구를 진행했습니다.",
    result: "데이터 중복 집계를 수정하고 프로덕션 API를 복구했습니다.",
    work: [
      {
        title: "서비스 기획",
        description: "독서 기록을 위한 서비스와 화면 구성",
      },
      {
        title: "전체 개발",
        description: "Next.js 화면, Node.js API와 PostgreSQL 데이터베이스",
      },
      {
        title: "운영과 유지보수",
        description: "배포 이후 데이터 집계 오류 수정과 API 장애 복구",
      },
    ],
  },
  {
    slug: "ash-error",
    title: "ASH//ERROR",
    company: "2인 팀",
    category: "side",
    period: "2026.07 - 2026.08",
    role: "게임 전투 · 진행 · 비주얼 개발",
    description:
      "전투와 스테이지 진행, 비주얼을 구현한 Phaser 기반 2D 액션 게임입니다.",
    stack: ["Phaser 4", "React", "TypeScript"],
    overview:
      "2인 팀으로 제작한 2D 액션 게임입니다. Phaser를 기반으로 전투·진행·비주얼을 구현하고, 자동화 테스트와 실제 플레이로 동작을 확인했습니다.",
    caseTitle: "전투와 스테이지 진행을 플레이로 검증하기",
    problem:
      "무기별 전투와 여러 스테이지의 진행 흐름이 실제 플레이에서 자연스럽게 이어져야 했습니다.",
    approach:
      "무기와 스테이지를 구성하고 자동화 테스트와 실제 플레이를 함께 진행했습니다.",
    result: "5개 스테이지와 무기 4종을 구현하고 전투·진행 흐름을 확인했습니다.",
    work: [
      { title: "전투", description: "무기 4종을 활용한 2D 액션 전투" },
      { title: "진행", description: "5개 스테이지의 게임 진행 구성" },
      {
        title: "검증",
        description: "자동화 테스트와 실제 플레이를 통한 동작 확인",
      },
    ],
  },
];

export const featuredProjects = ["singal", "readly", "heroball-trala"].map(
  (slug) => projects.find((project) => project.slug === slug)!,
);
