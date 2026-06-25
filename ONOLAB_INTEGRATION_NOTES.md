# Aloha Ono and Onolab Integration Notes

Last updated: 2026-06-24

## Conclusion

오노랩 홈페이지에 `제휴` 또는 `Partners` 섹션을 따로 만들고, 그 안의 `Aloha Ono` 카드를 누르면 알로하오노 페이지로 이동하게 처리할 수 있다.

현재는 알로하오노 페이지를 독립 프로젝트로 관리하고, 최종 단계에서 오노랩 홈페이지에 연결하는 방식이 맞다.

## Recommended Structure

### Option A: Separate Site Link

오노랩 홈페이지:

- `Partners` 섹션 추가
- `Aloha Ono` 카드 추가
- 카드 클릭 시 알로하오노 별도 배포 URL로 이동

장점:

- 오노랩과 알로하오노를 따로 배포/수정할 수 있다.
- Google Ads 랜딩 URL을 독립적으로 관리하기 쉽다.

### Option B: Onolab Subpath

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
- `/Reservation/`: 메뉴판 + Google/Instagram/Naver 예약 연결
- `/`: `/home/`으로 리다이렉트

## Google Ads Landing

광고용 URL은 일반 홈페이지보다 `/Reservation/`을 권장한다.

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

## Next Integration Step

오노랩 홈페이지를 수정할 때 할 일:

1. 오노랩 홈페이지에 `Partners` 또는 `제휴` 섹션을 추가한다.
2. 알로하오노 카드에 대표 이미지, 짧은 설명, CTA를 넣는다.
3. 카드 링크를 알로하오노 `/home/` 또는 `/Reservation/` 중 목적에 맞게 연결한다.
4. 광고용 CTA는 반드시 `/Reservation/`으로 보낸다.
