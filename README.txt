IOL Formula Selector v17

1. K/TK 선택 버튼 글씨 크게 확대.
2. 모바일 '사진 찍기'는 단어 내부 줄바꿈 금지.
   - 필요하면 '사진' / '찍기' 사이에서만 줄바꿈.
3. 스마트폰 홈 화면 아이콘:
   - favicon + apple-touch-icon + manifest 추가.
   - icon-192/icon-512를 명시적으로 사용.
   - service worker cache 등록은 다시 추가하지 않음.
4. 데스크탑 스크린 캡쳐:
   - 브라우저 보안상 화면/창/탭 선택창은 필수.
   - 선택 후에는 별도 미리보기/캡쳐 버튼 없이 자동 캡쳐 후 즉시 crop 화면으로 이동.
5. crop 안정화:
   - '선택 영역 인식' 클릭 순간 cropRect를 freeze.
   - OCR이 끝날 때까지 crop 화면 레이아웃 유지.
   - OCR은 frozen crop 좌표로 수행.
6. v16 OCR 전처리/추출 로직 유지.
