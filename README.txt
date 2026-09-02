IOL Formula Selector v20

Changes:
- All visible Korean UI text changed to English.
- Existing v19 crop/screen capture/preview behavior retained.
- OCR recognition improved:
  1) First pass uses existing enhanced grayscale/contrast preprocessing.
  2) If AL, K/TK, or ACD is missing, a second OCR pass runs automatically with an alternate binary preprocessing method.
  3) Results from both passes are merged.
  4) Added correction for common OCR label errors and missing decimal points.
- Second pass is conditional, so normal successful cases keep the faster single-pass behavior.
