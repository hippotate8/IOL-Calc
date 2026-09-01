IOL Formula Selector v14

수정:
- '선택 영역 인식' 완료 후 crop/photo panel을 숨김.
- OCR 결과 확인(인식결과 확인) 패널을 화면 중앙으로 자동 스크롤.
- AL / K / ACD 라벨 OCR 오류에 대한 보정 규칙 강화:
  A1/AI/A L -> AL, ACO/AC0/A C D -> ACD, K I/K l -> K1, K Z -> K2,
  SE/TSE/K/TK 주변 숫자에 대한 loose fallback 추가.
- 두 번째 OCR pass는 추가하지 않음: v5 기반의 빠른 1회 OCR 유지.
- iPhone/Safari crop scroll lock 유지.
