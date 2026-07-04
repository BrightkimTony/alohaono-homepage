# Aloha Ono and Onolab Integration Notes

Last updated: 2026-07-04

## Conclusion

오노랩 홈페이지와 알로하오노는 일단 분리 운영한다.

알로하오노는 별도 GitHub Pages repo와 `alohaono.onolab.kr` 서브도메인으로 운영하고, 오노랩 메인에서는 파트너 카드와 상단 `제휴` 메뉴를 제거한다.

## Recommended Structure

### Current: Separate Subdomain

알로하오노 단독 사이트:

- `https://alohaono.onolab.kr`
- GitHub repo: `BrightkimTony/alohaono-homepage`
- Pages source: `main` branch root
- DNS: Hosting.kr에서 `alohaono` CNAME -> `BrightkimTony.github.io`

### Previous Option A: Separate Site Link

오노랩 홈페이지:

- `Partners` 섹션 추가
- `Aloha Ono` 카드 추가
- 카드 클릭 시 알로하오노 별도 배포 URL로 이동

장점:

- 오노랩과 알로하오노를 따로 배포/수정할 수 있다.
- Google Ads 랜딩 URL을 독립적으로 관리하기 쉽다.

### Previous Option B: Onolab Subpath

오노랩 홈페이지 안에 알로하오노 정적 파일을 포함:

- `/partners/aloha-ono/home/`
- `/partners/aloha-ono/Reservation/`

장점:

- 오노랩 안의 제휴 브랜드처럼 보인다.
- 도메인 신뢰도를 한 곳으로 모을 수 있다.

주의:

- 상대 경로를 한 번 더 조정해야 한다.
- 광고 랜딩은 `/partners/aloha-ono/Reservation/`처럼 분리해서 유지해야 한다.

## Current Aloha Ono Routes

- `/home/`: 일반 홈페이지
- `/reservation/`: 메뉴판 + Google/Instagram/Naver 예약 연결
- `/`: `/home/`으로 리다이렉트

## Google Ads Landing

광고용 URL은 일반 홈페이지보다 `/reservation/`을 권장한다.

이유:

- 사용자가 광고 클릭 후 바로 메뉴판을 볼 수 있다.
- 예약 행동이 Google, Instagram, Naver 카드로 바로 이어진다.
- 서버 없이 운영 가능하며 개인정보를 저장하지 않는다.

## Copy Positioning

알로하오노는 하와이의 인사말 `Aloha`와 맛있다는 뜻의 `Ono`를 합친 이름이다.

핵심 표현:

- 하와이안 레스토랑
- 광안리
- 하와이안 음식을 맛있고 편안하게 제공
- 바다 전망은 강점이지만, 브랜드 정체성은 음식과 하와이안 무드가 중심

## Next Split Step

남은 일:

1. GitHub에 알로하오노 repo를 만들고 Pages를 켠다.
2. Hosting.kr DNS에 `alohaono` CNAME을 추가한다.
3. GitHub Pages 커스텀 도메인을 `alohaono.onolab.kr`로 설정한다.
4. 오노랩 메인에서 알로하오노 파트너 섹션/메뉴를 제거한다.
