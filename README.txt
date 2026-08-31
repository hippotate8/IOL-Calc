IOL Formula Selector v2

Changes
- Compact header and result area.
- Removed subgroup/explanatory footer text.
- Manual field label: K (or TK).
- OD/OS remains optional without explanatory sentence.
- Boundary clamping remains active for AL/K/ACD outside the table.
- Enhanced photo OCR with image upscaling/contrast preprocessing and second-pass measurement-area OCR.
- ZEISS IOLMaster 700: K uses SE first, then mean K or (K1+K2)/2. TK uses TSE first, then mean TK or (TK1+TK2)/2.
- Generic label profiles added for Lenstar/EyeSuite, ARGOS, TOMEY OA-2000, Topcon Aladdin, OCULUS Pentacam AXL, and Ziemer GALILEI style outputs.
- K1/K2-only outputs automatically use the arithmetic mean.
- If both K and TK are recognized, the user must select one before applying.

Important
Photo OCR should always be visually confirmed before recommendation. Device software versions and report layouts vary. Manual input and formula lookup work offline after PWA caching; the OCR engine is loaded from the internet when needed.
