IOL Formula Selector v18

Desktop crop fix:
- '선택 영역 인식' 클릭 순간 화면에 실제로 보이는 crop box와 canvas의 DOM 좌표를 읽음.
- 그 실제 좌표를 image-normalized rect로 변환.
- 어떤 async 작업이나 crop modal 해제보다 먼저 해당 영역의 pixel canvas를 즉시 생성(freeze).
- OCR은 이 frozen canvas만 사용하므로 이후 레이아웃 변화가 OCR 영역에 영향을 주지 않음.
- 인식 시작 후 crop panel은 숨겨 화면상 crop box가 다른 위치로 재배치되는 현상 제거.
- 원본 사진과 cropRect는 유지되므로 '다시 Crop'으로 같은 사진/영역을 즉시 재시도 가능.

v17의 OCR, 모바일 사진 촬영, 홈 화면 아이콘, desktop screen capture 로직은 유지.
