IOL Formula Selector v8

GitHub Pages:
1. 이 ZIP을 압축 해제합니다.
2. 저장소 root의 기존 파일을 v8 파일로 교체합니다.
3. 특히 index.html, sw.js, manifest.webmanifest를 반드시 함께 업로드합니다.
4. Commit 후 GitHub Pages 배포 완료를 기다립니다.

v8은 기존 오래된 service-worker cache를 삭제하고 HTML을 network-first로 갱신합니다.
첫 접속 시 이전 service worker가 활성화되어 있었다면 한 번 자동 reload될 수 있습니다.
