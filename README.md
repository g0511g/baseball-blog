# DUGOUT DATA — 야구 블로그

Astro로 만든 정적 야구 블로그입니다. 글은 마크다운으로 쓰고, 수식은 LaTeX(`$...$`, `$$...$$`)로 쓰면 KaTeX로 렌더링됩니다.

## 시작하기

```bash
npm install
npm run dev      # http://localhost:4321 에서 미리보기
npm run build    # dist/ 폴더에 배포용 파일 생성
```

> 이 프로젝트는 빌드 도구(esbuild, rollup)를 WebAssembly 버전으로 바꿔 두었습니다(`package.json`의 `overrides`).
> 윈도우의 "스마트 앱 컨트롤" 같은 보안 기능이 네이티브 파일(`.node`)을 막는 컴퓨터에서도 실행되게 하기 위해서입니다.

## 새 글 쓰기

`src/content/posts/` 에 `.md` 파일을 추가하면 됩니다. 파일 이름이 주소가 됩니다(예: `my-post.md` → `/posts/my-post/`).

```markdown
---
title: '글 제목'
description: '카드와 검색 결과에 보일 한두 문장 요약'
date: 2026-11-20
category: sabermetrics   # sabermetrics | kbo-issue | season | history
tags: ['WAR', 'KBO']
featured: false          # true 이면 메인의 '주목할 글'에 노출
draft: false             # true 이면 발행되지 않음
highlights:              # 글 상단과 카드에 보여줄 핵심 수치 (선택)
  - label: 'wRC+'
    value: '172'
    note: '2025시즌'
---

본문... 인라인 수식 $\text{OPS} = \text{OBP} + \text{SLG}$

$$
\text{FIP} = \frac{13\,HR + 3\,(BB + HBP) - 2\,K}{IP} + C
$$
```

카테고리 이름·설명, 사이트 이름은 `src/data/site.ts` 에서 바꿀 수 있습니다.

## 배포

### GitHub Pages
1. 이 폴더를 GitHub 저장소로 올립니다(`main` 브랜치).
2. 저장소 **Settings → Pages → Source** 를 **GitHub Actions** 로 설정합니다.
3. 푸시하면 `.github/workflows/deploy.yml` 이 자동으로 빌드·배포합니다.
   주소는 `https://<username>.github.io/<저장소이름>/` 입니다.

### Vercel / Netlify
저장소를 연결하면 Astro를 자동으로 인식합니다. 빌드 명령 `npm run build`, 출력 폴더 `dist`.

## 구조

```
src/
  content/posts/     # 글 (마크다운)
  content.config.ts  # 글 frontmatter 스키마
  data/site.ts       # 사이트 이름, 카테고리
  layouts/Base.astro # 공통 헤더/푸터
  components/        # 글 카드
  pages/             # 메인, 카테고리, 글 상세
  styles/global.css  # 디자인(색상 변수 등)
```
