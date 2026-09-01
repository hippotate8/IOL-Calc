IOL Formula Selector v10

OCR 개선:
- Tesseract worker를 매번 새로 만드는 대신 1회 생성 후 재사용.
- 사진을 불러오는 순간 백그라운드에서 OCR 엔진 미리 준비.
- 1차 인식 이미지를 약 1050px 폭으로 줄여 스마트폰 처리시간 감소.
- 핵심값이 거의 인식되지 않았을 때만 2차 보정 인식 수행.
- 2차는 contrast 강화 + sparse-text 모드 사용.
- OCR 실패 시에도 수동 입력 및 Formula recommendation은 정상 작동.

기존 기능 유지:
- crop 사진 주변 여백 / 사진 밖 배경 touch 무시
- pink Recommended Formula fixed-bottom card
- 초기화 버튼
- v10 cache 갱신
