# Aloha Ono Homepage Project Memory

Last updated: 2026-06-24

## Start Here

```text
/Users/kgm/.codex/alohaono-homepage/PROJECT_MEMORY.md 읽고 알로하오노 홈페이지 이어서 해줘
```

## Project

- 프로젝트명: 알로하오노 홈페이지
- 로컬 경로: `/Users/kgm/.codex/alohaono-homepage`
- 목적: 알로하오노 단독 홈페이지를 먼저 만들고, 최종적으로 오노랩 홈페이지 안의 제휴 업체/파트너 영역에 합칠 수 있게 관리한다.
- 현재 상태: 정적 HTML/CSS/JS 초안
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

원본 참고:

- `/Users/kgm/Downloads/IMG_9463.jpg`
- `/Users/kgm/Downloads/IMG_9486.jpg`
- `/Users/kgm/Downloads/IMG_0212.jpg`
- `/Users/kgm/Downloads/IMG_9999.jpg`
- `/Users/kgm/Downloads/IMG_9700-2.jpg`
- `/Users/kgm/Downloads/alohaono(logo)_페이지_*.jpg`

## Files

- `index.html`: 페이지 구조
- `styles.css`: 디자인/반응형/타이포그래피
- `script.js`: 언어 전환, 외부 링크 주입
- `README.md`: 간단 안내

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

## Reservation Limitation

현재는 별도 서버가 없으므로 실제 예약 DB 저장, 관리자 확인, 자동 알림은 없다.

실제 예약 접수를 운영하려면 다음 중 하나를 연결해야 한다.

- 네이버 예약 URL
- 카카오 채널/오픈채팅 URL
- Instagram DM
- Supabase Edge Function + `reservation_requests` 테이블

사용자 요청은 "별도 서버 없이 다 처리"였으므로 현재 버전은 외부 예약/문의 채널 연결 방식으로 구현한다.

## Future Onolab Integration

오노랩 홈페이지 최종 통합 시:

- 오노랩 `Partners` 또는 `Affiliated Brands` 섹션에 알로하오노 추가
- 알로하오노 상세 페이지 링크 연결
- 오노랩의 제휴/로컬 커머스 레퍼런스로 표현
- 단, 지금 단계에서는 오노랩 홈페이지에 바로 넣지 않는다.
