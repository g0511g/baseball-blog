import { defineConfig, passthroughImageService } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Pages 등에 배포할 때는 SITE_URL, BASE_PATH 환경변수로 주소를 지정합니다.
// 예) SITE_URL=https://username.github.io BASE_PATH=/baseball-blog
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
  // 이미지 변환용 네이티브 모듈(sharp)을 쓰지 않도록 설정합니다.
  // (윈도우 보안 기능이 네이티브 파일을 막는 환경에서도 실행되게 하기 위함)
  image: { service: passthroughImageService() },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
