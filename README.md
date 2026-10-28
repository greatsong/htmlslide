# htmlslide

송석리(당곡고)의 HTML 발표 슬라이드 모음입니다. 발표마다 폴더 하나를 두고, 엔진과 사례 슬라이드는 함께 사용합니다.

## 구조

```
index.html          발표 목록
deck/               발표 엔진(deck.js, deck.css). 키: → 다음, ← 이전, N 노트, O 전체 보기, F 전체 화면
shared/
  kit.js            슬라이드 부품(제목·카드·버튼·끼운 화면·비트 세상 불러오기)
  cases.js          사례 슬라이드(window.CASES). 발표 쪽에서 KIT.part('섹션', [...])로 넣는다
  style.css         공통 슬라이드 모양
  commits.js        커밋 히트맵 자료, skyline.js 3D 빌딩 숲
  bitworld.html     아톰·비트 3D 장면. 발표별 문구는 window.BITWORLD로 덮어쓴다
  captures/ img/    공통 그림
aileader-2026/      동작관악 AI에듀테크 선도교사단 1일차(2026-10-29)
serii-2026/         「데이터가 흐르는 서울교육이 되려면」 사례 발표(준비 중)
sejong-2026/        세종과학고 특강(2026-09-23). 빌드본
tools/              build-sejong.mjs
_src/               브리프·솔라 원고·집계 스크립트(공개하지 않음, gitignore)
```

## 규칙

- 사례 슬라이드는 `shared/cases.js`에서 한 번만 고칩니다. 발표 폴더의 `slides.js`에는 표지, 그 발표에만 있는 장, 순서만 둡니다.
- 공유 슬라이드를 고치면 지난 발표 화면도 바뀝니다. 발표가 끝나면 그날 상태를 태그로 남깁니다(예: `aileader-2026-10-29`).
- 슬라이드의 한글 문구는 설계서를 쓰고 솔라 프로4가 집필합니다. 설계서와 원고는 `_src/발표폴더/`에 둡니다.
- 2일차처럼 참가자에게 미리 보이면 안 되는 내용은 이 저장소에 넣지 않습니다.

## 세종과학고 특강

소스는 `neural-explorer/src/lecture`(React)에 있습니다. 고친 뒤 다시 빌드합니다.

```
node tools/build-sejong.mjs
```

영상(이세돌 인터뷰·하사비스 특강)은 저작권 때문에 넣지 않습니다. 영상이 든 완성본은 `neural-explorer/private/lecture-complete`에 있습니다.

## 커밋 히트맵 갱신

```
python3 _src/aileader-2026/build_commits.py
```
