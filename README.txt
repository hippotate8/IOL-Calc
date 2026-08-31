IOL Formula Selector v3

Changes in v3:
- Compact Photo Recognition panel: camera icon and text on one line.
- Photo crop workflow before OCR; drag/resize the crop rectangle.
- OCR logic simplified from v2 and focused on AL, K/TK, ACD.
- Physiologic plausibility filters: AL 15-40 mm, K/TK 30-60 D, ACD 1-8 mm.
- IOLMaster-style SE is treated as mean K; fallback is mean of K1/K2. TSE/TK1/TK2 supported for TK.
- OCR review guidance: "인식 오류가 있으면 적용 후 직접 수정하세요."
- Input/result order: AL, K (or TK), ACD.
- Formula recommendation table and boundary-clamping behavior preserved.

Deployment: unzip and upload all files to the GitHub Pages repository root, replacing prior version files.
