<p align="center">
  <img src="assets/logo/logo-256.png" alt="글플러스 로고" width="128" />
</p>

<h1 align="center">글플러스</h1>

<p align="center">
  <b>HWP·HWPX 문서를 열고, 고치고, HWPX로 저장하는 무료 편집기</b>
</p>

---

## 글플러스는 이런 프로그램이에요

- 한글 문서(**.hwp**, **.hwpx**)를 **열어서 보고 고칠 수 있어요.**
- 고친 문서를 **HWPX로 저장**할 수 있어요. (HWP 저장, PDF 내보내기도 돼요)
- **원본 파일은 절대 바뀌지 않아요.** 자동으로 덮어쓰거나 저장하지 않고, 항상 **새 파일로 저장**돼요.
- 한컴오피스가 없는 PC에서도 쓸 수 있어요.
- Windows용이에요.

## 설치하기

1. [Releases](../../releases) 페이지에서 **`GeulPlus_1.0.0_x64-setup.exe`** 를 받아요.
2. 받은 파일을 더블클릭해서 설치해요.
3. 시작 메뉴에서 **글플러스**를 찾아 실행해요.

> **"Windows의 PC 보호" 창이 뜨면?**
> 아직 코드 서명을 하지 않아서 나오는 안내예요.
> **추가 정보 → 실행**을 누르면 설치돼요.

## 사용법

### 문서 열기
- 글플러스를 실행하고 **파일 → 열기**(`Ctrl+O`)로 문서를 골라요.
- 한컴오피스가 기본 프로그램이라면, 파일을 **오른쪽 클릭 → 연결 프로그램 → 글플러스**로도 열 수 있어요.

### 고치기
- 일반 워드프로세서처럼 글을 쓰고 지우면 돼요.
- **글자색**: 글자색 버튼(**가▾**)을 누르면 자주 쓰는 색이 나와요.
  최근에 쓴 색은 아래쪽에 모여요. 원하는 색이 없으면 **다른 색...** 을 눌러요.
- 실행 취소는 `Ctrl+Z`예요.

### 원본 파일 보호

글플러스는 **원본 파일을 자동으로 덮어쓰거나 저장하지 않아요.** 고친 내용은 항상 **새로운 파일**로만 저장돼요.

- **저장**(Ctrl+S)을 눌러도 원본에 저장되지 않고, 항상 **다른 이름으로 저장** 창이 떠요.
- 원본을 포함해 **이미 있는 파일 이름을 고르면 저장되지 않아요.** 안내가 뜬 뒤 저장 창이 다시 열려요.
- 자동 저장 기능도 없어요. 직접 새 이름으로 저장하기 전까지는 어떤 파일도 바뀌지 않아요.
- 화면에서뿐 아니라 실제로 파일을 쓰는 단계에서도 한 번 더 확인해서, 기존 파일은 덮어쓰지 않게 막아 두었어요.

### 저장하기
| 하고 싶은 것 | 방법 |
|---|---|
| HWPX로 저장 | **파일 → 다른 이름으로 저장** → 형식에서 HWPX 선택 |
| HWP로 저장 | **파일 → 다른 이름으로 저장** → 형식에서 HWP 선택 |
| PDF로 만들기 | **파일 → PDF 내보내기** |

> 저장은 항상 **새 파일 이름**으로 해요. (위 **원본 파일 보호** 참고)
> 저장할 때 일부 내용이 옮겨지지 않는 경우에는 **경고 창**이 먼저 떠요.

## 알아두면 좋은 점

- 복잡한 문서(특수 개체, 일부 서식)는 한컴오피스와 조금 다르게 보일 수 있어요.
- 중요한 문서는 저장한 뒤 **한컴오피스에서도 한 번 열어 확인**하는 걸 추천해요.
- 자동 업데이트는 없어요. 새 버전은 Releases 페이지에서 받아 주세요.

## 문제가 생기면

[Issues](../../issues)에 남겨 주세요. 아래 내용을 같이 적어 주시면 빨리 고칠 수 있어요.
- 어떤 작업을 하다가 생겼는지
- 문제가 생긴 문서 (개인정보가 없는 문서만 올려 주세요)
- 화면 캡처

---

## 개발자용

### 필요한 도구
- Git, Node.js 24, pnpm
- Rust 1.93.1 (`rustup toolchain install 1.93.1 --component rustfmt clippy --target wasm32-unknown-unknown`)
- Visual Studio 2022 Build Tools (C++), WebView2

### 소스 받기
```bash
git clone --recurse-submodules https://github.com/youngho0812/geulplus.git
cd geulplus
pnpm install --frozen-lockfile
```

### 자주 쓰는 명령
| 명령 | 하는 일 |
|---|---|
| `pnpm --filter hop-desktop dev` | 개발 모드로 실행 |
| `pnpm run test:studio` | 화면(TypeScript) 테스트 |
| `pnpm run test:desktop` | Rust 테스트 |
| `pnpm run clippy:desktop` | Rust 코드 검사 |
| `pnpm --filter hop-desktop tauri build` | 설치 파일 만들기 → `apps/desktop/src-tauri/target/release/bundle/` |

### 폴더 구성
```
apps/desktop/src-tauri/   데스크톱 앱 (Rust): 파일 저장·검증, 메뉴, 창
apps/studio-host/         화면 (TypeScript): 편집 화면, 툴바, 저장 흐름
third_party/rhwp/         문서 엔진 (원본 그대로 사용, 수정하지 않음)
assets/                   아이콘, 폰트
```

- 화면에 보이는 프로그램 이름은 `apps/studio-host/src/core/app-brand.ts` 한 곳에서 바꿀 수 있어요.
- 자세한 개발 규칙은 [AGENTS.md](AGENTS.md)를 참고하세요.

---

## 만든 바탕과 라이선스

글플러스는 아래 오픈소스를 바탕으로 만들었어요. 좋은 프로젝트를 공개해 주신 분께 감사드려요.

| 프로젝트 | 역할 | 라이선스 |
|---|---|---|
| [HOP](https://github.com/golbin/hop) | 데스크톱 앱의 뼈대 | MIT |
| [rhwp](https://github.com/edwardkim/rhwp) | HWP·HWPX 읽기·그리기·저장 엔진 | MIT |

글플러스에서 추가한 기능: **HWPX 저장**, **글자색 팔레트**, 이름·아이콘 변경 등

- 원본 저작권 고지와 포함된 폰트·라이브러리 라이선스는 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)에 있어요.
- 원본 HOP 안내문은 [docs/HOP_ORIGINAL_README.md](docs/HOP_ORIGINAL_README.md)에 보관했어요.

본 제품은 한글과컴퓨터의 한글 문서 파일(.hwp) 공개 문서를 참고하여 개발하였습니다.
"한글", "한컴", "HWP", "HWPX"는 주식회사 한글과컴퓨터의 등록 상표이며,
글플러스는 한글과컴퓨터와 제휴, 후원, 승인 관계가 없는 독립적인 프로그램입니다.
