IOL Formula Selector v9

수정:
- Recommend Formula 버튼이 작동하지 않던 원인 수정.
  삭제된 eyeTag 요소를 JavaScript가 계속 참조하면서 오류가 발생했고,
  그 때문에 추천 결과를 표시하기 직전에 실행이 중단되었습니다.
- pink fixed-bottom Recommended Formula card, 초기화 버튼, crop 여백/배경 touch 무시 기능 유지.
- service worker cache version v9로 갱신.

GitHub Pages에는 index.html, sw.js, manifest.webmanifest 포함 모든 파일을 repository root에 덮어쓰세요.
