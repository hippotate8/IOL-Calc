IOL Formula Selector v13

iPhone/Safari crop scroll lock 강화:
- crop 시작 시 body를 현재 scroll 위치에서 position:fixed로 고정
- html/body 모두 overscroll 차단
- touchmove를 capture 단계에서 preventDefault
- wheel도 crop 중 차단
- crop-stage / crop-box / handles 모두 touch-action:none
- '선택 영역 인식' 클릭 시 잠금 해제 후 원래 scroll 위치 복원
- v5 기반 OCR 유지
- 최종 패키지에서 v11.html/v12.html 제거
