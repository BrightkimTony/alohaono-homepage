# Aloha Ono Homepage Project Memory

Last updated: 2026-07-04

## Start Here

```text
/Users/kgm/.codex/alohaono-homepage/PROJECT_MEMORY.md 읽고 알로하오노 홈페이지 이어서 해줘
```

## Project

- 프로젝트명: 알로하오노 홈페이지
- 로컬 경로: `/Users/kgm/.codex/alohaono-homepage`
- 목적: 알로하오노를 오노랩 메인과 분리해 단독 브랜드/예약 랜딩으로 운영한다.
- 현재 상태: 정적 HTML/CSS/JS, `/home/`과 `/reservation/` 페이지 분리 완료
- 목표 도메인: `https://alohaono.onolab.kr`
- 서버: 없음

## Direction

- 기본 언어는 영어
- 버튼 클릭 시 한국어로 전환
- 사진은 사용자가 직접 제공한 다운로드 폴더 사진만 사용
- 외부 연결 순서: Google -> Instagram -> Naver
- 예약/문의는 서버 없이 처리한다.
  - 입력 폼이나 클립보드 복사는 사용하지 않는다.
  - Google/Instagram/Naver 외부 채널 카드로 이동한다.
  - 실제 예약은 Naver booking 링크에서 진행한다.
- 개인정보는 저장하지 않는다.
- Google 광고용 랜딩은 `/reservation/`을 사용한다.
  - 메뉴판을 먼저 보여준다.
  - 아래에 Google, Instagram, Naver 연결 카드를 둔다.
  - 별도 예약 DB나 백엔드는 붙이지 않는다.

## Copy Context

- 알로하오노는 하와이의 인사말 `Aloha`와 맛있다는 뜻의 `Ono`를 합친 이름이다.
- 하와이안 레스토랑이며, 하와이안 음식을 맛있고 편안하게 제공하는 곳으로 표현한다.
- 광안리 오션뷰는 강점이지만, 핵심 정체성은 "하와이안 레스토랑"이다.

## Assets

대표 사용 이미지:

- `assets/ocean-table.jpg`: 광안리 바다와 테이블, 히어로
- `assets/hero-gwangalli.jpg`: 광안대교/바다 전망
- `assets/acai-bowl.jpg`: 아사이볼
- `assets/brunch-plate.jpg`: 브런치 플레이트
- `assets/chicken-salad.jpg`: 샐러드
- `assets/alohaono-menu-may.pdf`: 메뉴판 PDF

원본 참고:

- `/Users/kgm/Downloads/IMG_9463.jpg`
- `/Users/kgm/Downloads/IMG_9486.jpg`
- `/Users/kgm/Downloads/IMG_0212.jpg`
- `/Users/kgm/Downloads/IMG_9999.jpg`
- `/Users/kgm/Downloads/IMG_9700-2.jpg`
- `/Users/kgm/Downloads/alohaono(logo)_페이지_*.jpg`

## Files

- `index.html`: `/home/`으로 보내는 루트 리다이렉트
- `home/index.html`: 일반 소개 페이지
- `reservation/index.html`: 메뉴판 + 예약/외부 채널 랜딩 페이지
- `styles.css`: 디자인/반응형/타이포그래피
- `script.js`: 언어 전환, 외부 링크 주입
- `README.md`: 간단 안내

## Routes

- `/home/`
  - 알로하오노의 일반 홈페이지
  - 브랜드 의미, 하와이안 메뉴, 광안리 전망, 예약 CTA를 보여준다.
- `/reservation/`
  - 광고/예약 랜딩 페이지
  - 메뉴판 PDF를 먼저 보여주고, Google -> Instagram -> Naver 순서로 연결한다.
- `/`
  - 정적 호스팅 편의를 위해 `/home/`으로 리다이렉트한다.

## Maintenance Notes

- 외부 링크는 `script.js` 상단 `EXTERNAL_LINKS`에서만 수정한다.
  - `google`
  - `instagram`
  - `naver`
- 화면 문구는 `script.js`의 `translations.en`, `translations.ko`에서 수정한다.
- HTML에서 외부 링크 버튼/카드는 `data-external-link="google"` 같은 키만 사용한다.
- 기본 언어는 `script.js`의 `DEFAULT_LANG`에서 관리한다.
- 사용자가 언어를 바꾸면 `localStorage`에 저장되어 다음 방문 때 유지된다.
- 타이포그래피 기준은 `styles.css`의 `:root` 변수와 각 섹션의 `max-width`, `line-height`를 우선 수정한다.
- 메뉴판을 교체할 때는 새 PDF를 `assets/alohaono-menu-may.pdf` 이름으로 덮어쓰거나, `reservation/index.html`의 iframe/download 링크를 함께 수정한다.

## Current Split Plan

- GitHub repo: `BrightkimTony/alohaono-homepage`
- GitHub Pages source: `main` branch root
- Custom domain file: `CNAME` -> `alohaono.onolab.kr`
- DNS 필요 작업: Hosting.kr에서 `alohaono` CNAME을 `BrightkimTony.github.io`로 추가한다.
- 오노랩 메인에서는 알로하오노 파트너 카드와 상단 `제휴` 메뉴를 제거하고, 필요하면 나중에 "협업 사례" 정도로만 다시 연결한다.

## Refactor Notes

- 라우팅 라이브러리 없이 폴더 기반 정적 페이지로 분리했다.
  - GitHub Pages, 일반 정적 호스팅, 오노랩 사이트 하위 경로에 모두 옮기기 쉽다.
  - Google Ads 랜딩 URL도 `/Reservation/`처럼 독립적으로 지정할 수 있다.
- `script.js`는 페이지별 코드를 만들지 않고 공통으로 쓴다.
  - 모든 페이지의 다국어 문구는 `data-i18n` 키로 연결한다.
  - 외부 링크는 `data-external-link` 키로 연결한다.
- 언어 토글이 없는 페이지에서도 스크립트가 깨지지 않도록 방어 코드를 넣었다.

## Reservation Limitation

현재는 별도 서버가 없으므로 실제 예약 DB 저장, 관리자 확인, 자동 알림은 없다.

실제 예약 접수를 운영하려면 다음 중 하나를 연결해야 한다.

- 네이버 예약 URL
- 카카오 채널/오픈채팅 URL
- Instagram DM
- Supabase Edge Function + `reservation_requests` 테이블

사용자 요청은 "별도 서버 없이 다 처리"였으므로 현재 버전은 외부 예약/문의 채널 연결 방식으로 구현한다.

## Future Onolab Integration

검토 결과: 가능하다. 단, 알로하오노 페이지를 먼저 독립적으로 안정화한 뒤 최종에 붙이는 것이 낫다.

오노랩 홈페이지 최종 통합 방식:

- 오노랩 `Partners` 또는 `Affiliated Brands` 섹션을 별도로 만든다.
- 그 안에 `Aloha Ono` 카드를 추가한다.
- 카드를 누르면 알로하오노 페이지로 이동하게 한다.
  - 별도 배포라면 알로하오노 배포 URL로 링크한다.
  - 오노랩 사이트 안에 포함한다면 `/partners/aloha-ono/home/`, `/partners/aloha-ono/Reservation/` 같은 하위 경로로 넣는다.
- 오노랩의 제휴/로컬 커머스 레퍼런스로 표현
- 단, 지금 단계에서는 오노랩 홈페이지에 바로 넣지 않는다.

오노랩 안에 합칠 때 주의:

- 광고 랜딩은 반드시 별도 URL로 유지한다.
- `/Reservation/` 페이지는 메뉴판과 예약 링크에 집중해야 한다.
- 오노랩 제휴 영역은 소개/유입 역할만 하고, 예약 UX는 알로하오노 페이지에서 처리한다.
