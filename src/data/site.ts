export const SITE = {
  name: 'DUGOUT DATA',
  tagline: '숫자로 읽는 한국 야구',
  description: '세이버메트릭스, KBO 이슈, 시즌 분석, 야구의 역사와 규칙을 다루는 야구 블로그',
};

export type CategoryId = 'sabermetrics' | 'kbo-issue' | 'season' | 'history';

export const CATEGORIES: Record<CategoryId, { name: string; code: string; description: string }> = {
  sabermetrics: {
    name: '세이버메트릭스',
    code: 'SABR',
    description: 'wOBA, FIP, WAR 같은 지표가 어떻게 계산되고 무엇을 말해 주는지 풀어 봅니다.',
  },
  'kbo-issue': {
    name: 'KBO 이슈',
    code: 'NEWS',
    description: 'ABS, 트래킹 데이터, 기록 시스템처럼 리그를 둘러싼 현재진행형 이슈를 다룹니다.',
  },
  season: {
    name: '시즌 분석',
    code: 'SEASON',
    description: '팀과 선수의 성적을 데이터로 들여다보는 시즌 리포트입니다.',
  },
  history: {
    name: '역사·규칙',
    code: 'ARCHIVE',
    description: '기록 속 KBO의 역사와 규칙의 변화를 정리합니다.',
  },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

export const formatDate = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
