# Third-Party Notices / 오픈소스 고지

이 프로그램은 아래 오픈소스 소프트웨어를 기반으로 수정·제작되었습니다.
This program is a modified work based on the following open-source software.

| 구성 요소 | 용도 | 라이선스 | 저작권 | 출처 |
| --- | --- | --- | --- | --- |
| HOP | 데스크탑 앱 (파일 열기·저장·PDF·인쇄) | MIT | Copyright (c) 2025-2026 Edward Kim | https://github.com/golbin/hop |
| rhwp | HWP/HWPX 파싱·렌더링·저장 엔진 | MIT | Copyright (c) 2025-2026 Edward Kim | https://github.com/edwardkim/rhwp |

본 프로그램은 위 원본에 HWPX 저장 기능, 글자색 팔레트 등을 추가·수정한 것으로,
원저작자가 보증하거나 승인한 제품이 아닙니다.

본 제품은 한글과컴퓨터의 한글 문서 파일(.hwp) 공개 문서를 참고하여 개발하였습니다.

"한글", "한컴", "HWP", "HWPX"는 주식회사 한글과컴퓨터의 등록 상표입니다.
본 프로그램은 한글과컴퓨터와 제휴, 후원, 승인 관계가 없는 독립적인 프로그램입니다.
"Hangul", "Hancom", "HWP", and "HWPX" are registered trademarks of Hancom Inc.
This program has no affiliation, sponsorship, or endorsement by Hancom Inc.

## MIT License (HOP, rhwp)

```
MIT License

Copyright (c) 2025-2026 Edward Kim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 포함된 폰트 / Bundled Fonts

| 폰트 | 라이선스 | 출처 |
| --- | --- | --- |
| Pretendard | SIL Open Font License 1.1 | https://github.com/orioncactus/pretendard |
| Noto Sans KR, Noto Serif KR | SIL Open Font License 1.1 | Google Fonts |
| 나눔고딕, 나눔명조, 나눔고딕코딩 | SIL Open Font License 1.1 | Google Fonts |
| 고운바탕, 고운돋움 | SIL Open Font License 1.1 | Google Fonts |
| D2Coding | SIL Open Font License 1.1 | https://github.com/naver/d2codingfont |
| Spoqa Han Sans | SIL Open Font License 1.1 | https://github.com/spoqa/spoqa-han-sans |
| Latin Modern Math | GUST Font License | https://www.gust.org.pl/projects/e-foundry/lm-math |

SIL Open Font License 1.1 전문: https://openfontlicense.org
GUST Font License 전문: https://www.gust.org.pl/projects/e-foundry/licenses

## 기타 의존성 / Other Dependencies

Rust(crates.io) 및 npm 의존성은 각 패키지의 라이선스를 따릅니다 (2026-11-06 기준 Windows 빌드 488개 crate).

- 대부분 MIT, Apache-2.0, BSD-3-Clause, Zlib, Unlicense, Unicode-3.0 (허용형 라이선스)
- MPL-2.0: `cssparser`, `cssparser-macros`, `dtoa-short`, `selectors`, `option-ext` —
  수정 없이 사용했으며, 원본 소스는 https://crates.io 의 각 패키지 페이지에서 받을 수 있습니다.
- 프런트엔드 런타임 의존성: `@tauri-apps/api`, `@tauri-apps/plugin-dialog`, `@tauri-apps/plugin-fs` (MIT 또는 Apache-2.0), `@noble/hashes` (MIT)
- 실행 환경: Microsoft Edge WebView2 Runtime (Windows 구성 요소, 별도 설치)
