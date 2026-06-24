const translations = {
  en: {
    navMenu: "Menu",
    navView: "View",
    navReserve: "Reserve",
    navLinks: "Links",
    heroEyebrow: "Gwangalli · Ocean View · Brunch",
    heroTitle: "A slow table facing the Gwangalli sea.",
    heroCopy:
      "Aloha Ono is a warm brunch and dining spot where plates, coffee, and the Busan shoreline meet in one relaxed rhythm.",
    heroReserve: "Make a reservation",
    heroExplore: "Explore the table",
    cardLabel: "Today at Aloha Ono",
    cardTitle: "Beach-side brunch",
    cardCopy: "Fresh plates, soft light, and a Gwangalli view for a slower day in Busan.",
    introTitle: "A small pause above the beach.",
    introCopy:
      "The page is built around the actual photos of Aloha Ono: the ocean seen from the table, colorful brunch plates, and the soft island mood inside the space.",
    menuTitle: "Plates with color, texture, and a clean finish.",
    menuOneTitle: "Acai Bowl",
    menuOneCopy: "Fruit, granola, and a vivid tropical tone for a light start.",
    menuTwoTitle: "Brunch Plate",
    menuTwoCopy: "A balanced plate for late mornings and long conversations.",
    menuThreeTitle: "Fresh Salad",
    menuThreeCopy: "Clean greens, savory protein, and a bright table mood.",
    viewTitle: "The view is part of the menu.",
    viewCopy:
      "Aloha Ono belongs to the pace of Gwangalli: sea, bridge, sunlight, and a table that makes the city feel softer.",
    viewPointOne: "Ocean-facing mood",
    viewPointTwo: "Brunch and coffee",
    viewPointThree: "Busan travel stop",
    reserveTitle: "Prepare your visit request.",
    reserveCopy:
      "This static page does not store personal data. Fill in the form, copy the request, then continue through Google, Instagram, or Naver.",
    fieldName: "Name",
    fieldDate: "Date",
    fieldTime: "Time",
    fieldPeople: "Guests",
    fieldMemo: "Memo",
    copyRequest: "Copy request",
    openGoogle: "Open Google",
    openInstagram: "Open Instagram",
    openNaver: "Open Naver",
    linksTitle: "Continue from search to visit.",
    googleCopy: "Map search and route check",
    instagramCopy: "Photos, mood, and updates",
    naverCopy: "Korean search and local info",
    footerCopy: "Gwangalli, Busan · Ocean brunch and dining",
    copied: "Reservation request copied. Continue through Google, Instagram, or Naver.",
    fallback: "Copy this request and send it through your preferred channel.",
  },
  ko: {
    navMenu: "메뉴",
    navView: "뷰",
    navReserve: "예약",
    navLinks: "연결",
    heroEyebrow: "광안리 · 오션뷰 · 브런치",
    heroTitle: "광안리 바다를 마주한 느린 테이블.",
    heroCopy:
      "알로하오노는 브런치, 커피, 부산의 해안선이 한 흐름으로 이어지는 광안리 오션뷰 다이닝 공간입니다.",
    heroReserve: "예약 준비하기",
    heroExplore: "테이블 보기",
    cardLabel: "오늘의 알로하오노",
    cardTitle: "바다 앞 브런치",
    cardCopy: "선명한 플레이트, 부드러운 빛, 광안리 전망이 하루의 속도를 늦춥니다.",
    introTitle: "해변 위에서 잠시 쉬어가는 시간.",
    introCopy:
      "이 페이지는 알로하오노의 실제 사진을 중심으로 구성했습니다. 테이블에서 보이는 바다, 컬러가 살아 있는 브런치, 공간 안의 부드러운 휴양지 무드를 담았습니다.",
    menuTitle: "색감과 식감, 깔끔한 마무리가 있는 플레이트.",
    menuOneTitle: "아사이볼",
    menuOneCopy: "과일, 그래놀라, 트로피컬한 색감으로 가볍게 시작하는 메뉴입니다.",
    menuTwoTitle: "브런치 플레이트",
    menuTwoCopy: "늦은 아침과 긴 대화에 어울리는 균형 잡힌 플레이트입니다.",
    menuThreeTitle: "프레시 샐러드",
    menuThreeCopy: "신선한 채소와 단백질, 밝은 테이블 무드를 함께 담았습니다.",
    viewTitle: "전망도 메뉴의 일부입니다.",
    viewCopy:
      "알로하오노는 광안리의 속도에 맞춰 있습니다. 바다, 다리, 햇빛, 그리고 도시를 조금 부드럽게 만드는 테이블이 있습니다.",
    viewPointOne: "오션뷰 무드",
    viewPointTwo: "브런치와 커피",
    viewPointThree: "부산 여행 코스",
    reserveTitle: "방문 요청을 준비하세요.",
    reserveCopy:
      "이 정적 페이지는 개인정보를 저장하지 않습니다. 내용을 입력하고 예약 요청 문구를 복사한 뒤 Google, Instagram, Naver 중 편한 채널로 이어가면 됩니다.",
    fieldName: "이름",
    fieldDate: "날짜",
    fieldTime: "시간",
    fieldPeople: "인원",
    fieldMemo: "메모",
    copyRequest: "예약 문구 복사",
    openGoogle: "Google 열기",
    openInstagram: "Instagram 열기",
    openNaver: "Naver 열기",
    linksTitle: "검색에서 방문까지 이어집니다.",
    googleCopy: "지도 검색과 경로 확인",
    instagramCopy: "사진, 분위기, 소식 확인",
    naverCopy: "국내 검색과 지역 정보",
    footerCopy: "부산 광안리 · 오션 브런치 앤 다이닝",
    copied: "예약 요청 문구를 복사했습니다. Google, Instagram, Naver 중 편한 채널로 이어가세요.",
    fallback: "아래 예약 요청을 복사해 원하는 채널로 보내세요.",
  },
};

let currentLang = "en";

const applyLanguage = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelector("[data-lang-toggle]").textContent = lang === "en" ? "KR" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });
};

document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "ko" : "en");
});

const reserveForm = document.querySelector("[data-reserve-form]");
const reserveOutput = document.querySelector("[data-reserve-output]");

reserveForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(reserveForm);
  const message =
    currentLang === "ko"
      ? `알로하오노 예약 문의\n이름: ${data.get("name") || "-"}\n날짜: ${data.get("date") || "-"}\n시간: ${data.get("time") || "-"}\n인원: ${data.get("people") || "-"}명\n메모: ${data.get("memo") || "-"}`
      : `Aloha Ono reservation request\nName: ${data.get("name") || "-"}\nDate: ${data.get("date") || "-"}\nTime: ${data.get("time") || "-"}\nGuests: ${data.get("people") || "-"}\nMemo: ${data.get("memo") || "-"}`;

  try {
    await navigator.clipboard.writeText(message);
    reserveOutput.textContent = translations[currentLang].copied;
  } catch {
    reserveOutput.textContent = `${translations[currentLang].fallback}\n\n${message}`;
  }
});

applyLanguage("en");
