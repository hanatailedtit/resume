# 서지영 이력서 · 포트폴리오

Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui(Radix)로 만든 반응형 이력서와 포트폴리오입니다.

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

```bash
npm test
npm run typecheck
npm run build
npm start
```

- `/`: 소개와 대표 작업
- `/resume`: 회사별 경력, 기술, 학력과 자격
- `/portfolio`: 회사·사이드 프로젝트 탭
- `/portfolio/[slug]`: 8개 프로젝트 상세

## 내용 수정

콘텐츠와 연락처는 `src/lib/content.ts`, 스타일 토큰은 `src/app/globals.css`, shadcn 컴포넌트는 `src/components/ui`에서 수정합니다. Pretendard는 로컬 폰트로 제공하여 런타임 CDN 호출이 없습니다. 현재 화면의 글자를 담은 `PretendardSubset.woff2`를 먼저 사용하며, 새 글자는 전체 폰트로 자동 대체합니다.

## 콘텐츠 출처

디자인과 기본 인적 사항은 `designs/`의 SVG 및 `DESIGN-TOKENS.md`를 참고했습니다. 회사별 고용 기간·시프트클릭·피타그래프·학력·자격·Readly·ASH//ERROR 내용은 제공된 SVG에서 가져왔습니다. Git 커밋 기간을 고용 기간으로 사용하지 않았습니다.

SINGAL GUI·Zone Editor·공통 맵 엔진, Heroball·Trala Admin, Xangle 기여 내용은 `~/company_code/portfolio/CAREER_SUMMARY.md`와 각 프로젝트의 `README.md`, `EVIDENCE.md`를 바탕으로 구성했습니다. 자료로 확인되지 않은 1:N 스트리밍 성과와 정량 성능 수치는 추가하지 않았습니다. 원본 소스·커밋 패치·업무용 계정 목록은 웹에 포함하지 않습니다.

Heroball·Trala Admin·Xangle·동대문구 데이터센터의 캡처는 제공된 Google Slides에서 원본 이미지를 추출했습니다. Pomerium Space는 메인 페이지 전체 개발 경험을 기준으로 실제 사이트의 섹션별 데스크톱 캡처, 실제 라이트·다크 모드 비교, 모바일 화면 네 장씩을 가로로 붙인 반응형 이미지 모음을 구성하고 서비스 방문 링크를 연결했습니다. 목록의 대표 이미지와 상세 화면에서 볼 수 있으며, 이미지를 선택하면 원본 크기로 열립니다. 파일별 출처는 [프로젝트 이미지 출처](docs/project-images.md)에 정리했습니다. 슬라이드에 화면이 없는 프로젝트는 기존 설명과 아키텍처 도식을 유지합니다.

원본 디자인과 같은 라이트 테마를 사용합니다. 실제 배포 전에 고용 기간·학력·사이드 프로젝트 정보와 GitHub 프로필 주소를 확인하면 됩니다.
