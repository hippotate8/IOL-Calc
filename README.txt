IOL Formula Selector v1

- Manual input: AL / K(or TK) / ACD
- Optional OD/OS
- Boundary clamping: always returns a recommendation
- Photo input: camera/file picker + OCR (Tesseract.js loaded from CDN)
- If K1/K2 are recognized, mean K is calculated automatically
- If K and TK are both recognized, user must choose one
- Formula table digitized from the supplied Supplementary Figure 1 (640 cells)

Important:
Manual input and formula recommendation are fully offline after installation.
The current photo OCR module loads Tesseract.js from the internet on first use; browser cache may allow later reuse, but fully bundled offline OCR is planned for the next iteration.
