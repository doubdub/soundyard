/* ==========================================================================
   SoundYard — app.js
   ========================================================================== */

'use strict';

/* ============================================================ 카카오 설정
   1) jsKey   : 카카오 디벨로퍼스 > 앱 키 > JavaScript 키
   2) restKey : 같은 화면의 REST API 키.
                순수 정적 페이지에서는 브라우저가 인가 코드를 토큰으로 직접
                교환해야 하므로 REST API 키가 필요합니다. (Client Secret 사용 안 함)
   3) redirectUri : 비워 두면 현재 페이지 주소(예: https://doubdub.github.io/soundyard/)를
                사용합니다. 카카오 콘솔 > 카카오 로그인 > Redirect URI에 같은 값을 등록하세요.
   jsKey 가 비어 있으면 기존처럼 데모 계정(사운드러버)으로 로그인합니다.
   ======================================================================== */

const KAKAO_CONFIG = {
  jsKey: 'dummyjs0123456789abcdef0123456789ab',
  restKey: 'dummyrest0123456789abcdef01234567',
  redirectUri: ''
};

const CAT = {
  MIC: '마이크',
  OUTBOARD: '아웃보드(프리앰프, 컴프레서, EQ 등)',
  SPEAKER: '스피커&파워앰프',
  INTERFACE: '오인페&컨버터',
  MIXER: '믹서',
  SOFTWARE: '소프트웨어',
  KEYBOARD: '키보드&피아노',
  GUITAR: '기타&기타앰프',
  BASS: '베이스&베이스앰프',
  DRUM: '드럼&퍼커션',
  WIND: '관악기',
  STRING: '현악기',
  PEDAL: '페달',
  FURNITURE: '음악용 가구',
  CABLE: '케이블&액세서리',
  ETC: 'ETC'
};

const CATEGORIES = [
  CAT.MIC, CAT.OUTBOARD, CAT.SPEAKER, CAT.INTERFACE, CAT.MIXER, CAT.SOFTWARE,
  CAT.KEYBOARD, CAT.GUITAR, CAT.BASS, CAT.DRUM, CAT.WIND, CAT.STRING,
  CAT.PEDAL, CAT.FURNITURE, CAT.CABLE, CAT.ETC
];

const CATEGORY_IMAGES = {
  [CAT.MIC]: 'assets/mic-tlm103.svg',
  [CAT.OUTBOARD]: 'assets/outboard-neve1073.svg',
  [CAT.SPEAKER]: 'assets/speaker-genelec8030.svg',
  [CAT.INTERFACE]: 'assets/interface-apollo.svg',
  [CAT.MIXER]: 'assets/mixer-sslsix.svg',
  [CAT.SOFTWARE]: 'assets/software-ableton.svg',
  [CAT.KEYBOARD]: 'assets/keyboard-nord.svg',
  [CAT.GUITAR]: 'assets/guitar-strat.svg',
  [CAT.BASS]: 'assets/bass-jazz.svg',
  [CAT.DRUM]: 'assets/drums-td17.svg',
  [CAT.WIND]: 'assets/wind-sax.svg',
  [CAT.STRING]: 'assets/strings-violin.svg',
  [CAT.PEDAL]: 'assets/pedal-bigsky.svg',
  [CAT.FURNITURE]: 'assets/furniture-desk.svg',
  [CAT.CABLE]: 'assets/cable-xlr.svg',
  [CAT.ETC]: 'assets/etc-rackcase.svg'
};

const SEED = [
  {
    id: 'sy-001',
    title: 'Neumann TLM 103 콘덴서 마이크 (니켈)',
    category: CAT.MIC,
    brand: 'Neumann',
    price: 1150000,
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 12,
    likes: 41,
    views: 812,
    seller: { name: '정오의스튜디오', joined: '2021.03', deals: 41, response: 98 },
    desc: '개인 보컬 녹음에만 사용했습니다. 그릴 찍힘 없이 깔끔하고 본체 스크래치도 거의 없습니다. 마포구 합정동 직거래 또는 택배 가능합니다.',
    image: 'assets/mic-tlm103.svg'
  },
  {
    id: 'sy-002',
    title: 'Neve 1073 SPX 마이크 프리앰프',
    category: CAT.OUTBOARD,
    brand: 'AMS Neve',
    price: 3900000,
    trade: ['직거래', '택배'],
    region: '서울 강남구',
    minutesAgo: 68,
    likes: 22,
    views: 504,
    seller: { name: '아날로그공방', joined: '2020.11', deals: 58, response: 96 },
    desc: '스튜디오 랙에 고정으로만 사용했습니다. 노브 헤이즈나 채널 노이즈 없이 정상 작동하고, 올해 초 정식 서비스센터에서 점검받았습니다. 강남구 신사동 직거래 선호하고 택배도 가능합니다.',
    image: 'assets/outboard-neve1073.svg'
  },
  {
    id: 'sy-003',
    title: 'API 512c 500 시리즈 프리앰프',
    category: CAT.OUTBOARD,
    brand: 'API',
    price: 780000,
    trade: ['직거래', '택배'],
    region: '경기 성남시',
    minutesAgo: 180,
    likes: 18,
    views: 377,
    seller: { name: '랙마스터', joined: '2022.02', deals: 23, response: 94 },
    desc: '500 시리즈 랙에 꽂아 쓰던 모듈입니다. 페이스에 미세한 기스가 몇 군데 있고 노브 상태는 깔끔합니다. 게인 노이즈나 채널 이상 없습니다. 성남시 분당구 직거래, 택배도 가능합니다.',
    image: 'assets/outboard-api512.svg'
  },
  {
    id: 'sy-004',
    title: 'Genelec 8030C 스튜디오 모니터 페어',
    category: CAT.SPEAKER,
    brand: 'Genelec',
    price: 1480000,
    trade: ['직거래', '택배'],
    region: '서울 용산구',
    minutesAgo: 240,
    likes: 27,
    views: 691,
    seller: { name: '모니터링랩', joined: '2021.08', deals: 19, response: 99 },
    desc: '페어로 스튜디오에서만 사용했습니다. 하우징 변색이나 우퍼 눌림 없이 상태 좋습니다. 용산구 이촌동 직거래 또는 택배 가능하고, 오셔서 시연 후 거래하셔도 됩니다.',
    image: 'assets/speaker-genelec8030.svg'
  },
  {
    id: 'sy-005',
    title: 'Yamaha HS8 화이트 스튜디오 모니터 페어',
    category: CAT.SPEAKER,
    brand: 'Yamaha',
    price: 620000,
    trade: ['직거래', '택배'],
    region: '경기 구리시',
    minutesAgo: 1560,
    likes: 12,
    views: 205,
    seller: { name: '구리사운드', joined: '2023.11', deals: 12, response: 95 },
    desc: '화이트 모델 페어입니다. 홈스튜디오에서 가볍게 사용했고, 우퍼 주변 먼지 정도만 있고 외관 상태 좋습니다. 구리시 갈매동 직거래 가능하고 택배는 착불로 보내드립니다.',
    image: 'assets/speaker-hs8.svg'
  },
  {
    id: 'sy-006',
    title: 'Universal Audio Apollo Twin X Duo Heritage Edition',
    category: CAT.INTERFACE,
    brand: 'Universal Audio',
    price: 1290000,
    trade: ['직거래', '택배'],
    region: '서울 송파구',
    minutesAgo: 25,
    likes: 35,
    views: 742,
    seller: { name: '송파레코딩', joined: '2024.01', deals: 31, response: 97 },
    desc: 'Heritage Edition입니다. 개인 작업실에서 데스크에 고정해 사용했고 페이스 눌림이나 잭 헐거움 없습니다. 플러그인은 등록하지 않은 상태입니다. 송파구 잠실 직거래 또는 택배 가능합니다.',
    image: 'assets/interface-apollo.svg'
  },
  {
    id: 'sy-007',
    title: 'RME Babyface Pro FS 오디오 인터페이스',
    category: CAT.INTERFACE,
    brand: 'RME',
    price: 950000,
    trade: ['직거래', '택배'],
    region: '대전 유성구',
    minutesAgo: 2880,
    likes: 19,
    views: 463,
    seller: { name: '대전톤랩', joined: '2022.06', deals: 16, response: 96 },
    desc: '노트북 작업용으로 사용했습니다. 알루미늄 하우징에 생활 기스가 조금 있고, 노브와 모든 입출력은 정상입니다. 대전 유성구 직거래 또는 택배로 보내드립니다.',
    image: 'assets/interface-babyface.svg'
  },
  {
    id: 'sy-008',
    title: 'SSL SiX 데스크톱 콘솔',
    category: CAT.MIXER,
    brand: 'Solid State Logic',
    price: 1750000,
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 360,
    likes: 16,
    views: 389,
    seller: { name: '합정뮤직', joined: '2021.10', deals: 27, response: 98 },
    desc: '홈스튜디오 메인 콘솔로 사용했습니다. 페이더 노이즈 없고 모든 채널 정상 작동합니다. 마포구 서교동 직거래 가능하고 택배는 착불입니다.',
    image: 'assets/mixer-sslsix.svg'
  },
  {
    id: 'sy-009',
    title: 'Ableton Live 12 Suite 정품 라이선스 이전',
    category: CAT.SOFTWARE,
    brand: 'Ableton',
    price: 480000,
    trade: ['직거래'],
    region: '서울 관악구',
    minutesAgo: 300,
    likes: 9,
    views: 288,
    seller: { name: '관악비트', joined: '2023.09', deals: 8, response: 92 },
    desc: 'Ableton Live 12 Suite 정품 라이선스 이전 판매입니다. 제 계정에서 이전 처리 도와드리고, 결제 후 Ableton 지원팀 이전 절차까지 같이 진행합니다. 관악구 봉천동 직거래 또는 원격으로 진행 가능합니다.',
    image: 'assets/software-ableton.svg'
  },
  {
    id: 'sy-010',
    title: 'Nord Stage 3 88 스테이지 피아노',
    category: CAT.KEYBOARD,
    brand: 'Nord',
    price: 3200000,
    trade: ['직거래', '택배'],
    region: '서울 서초구',
    minutesAgo: 480,
    likes: 31,
    views: 655,
    seller: { name: '서초키보드', joined: '2022.03', deals: 22, response: 97 },
    desc: '집에서만 사용해서 건반 헐거움이나 노브 유격 없고 모든 기능 정상입니다. 서초구 반포동 직거래 선호하고 택배는 운송비 별도입니다.',
    image: 'assets/keyboard-nord.svg'
  },
  {
    id: 'sy-011',
    title: 'Roland FP-30X 디지털 피아노 (화이트)',
    category: CAT.KEYBOARD,
    brand: 'Roland',
    price: 620000,
    trade: ['직거래', '택배'],
    region: '인천 부평구',
    minutesAgo: 2880,
    likes: 7,
    views: 164,
    seller: { name: '부평피아노', joined: '2024.02', deals: 11, response: 95 },
    desc: '화이트 모델입니다. 입문용으로 집에서 1년 정도 사용했고 건반과 스피커 모두 정상입니다. 인천 부평구 직거래 가능하고 택배도 됩니다.',
    image: 'assets/keyboard-fp30x.svg'
  },
  {
    id: 'sy-012',
    title: 'Fender American Professional II Stratocaster (3-Color Sunburst)',
    category: CAT.GUITAR,
    brand: 'Fender',
    price: 1850000,
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 30,
    likes: 44,
    views: 1038,
    seller: { name: '홍대기타', joined: '2022.09', deals: 44, response: 98 },
    desc: '3-Color Sunburst, 로즈우드 지판입니다. 연주 흔적은 약간 있지만 넥과 프렛 상태 좋고 개조나 수리 이력 없습니다. 마포구 홍대입구 직거래 선호합니다.',
    image: 'assets/guitar-strat.svg'
  },
  {
    id: 'sy-013',
    title: 'Fender Player Jazz Bass (Mexican, Sunburst)',
    category: CAT.BASS,
    brand: 'Fender',
    price: 780000,
    trade: ['직거래', '택배'],
    region: '경기 수원시',
    minutesAgo: 1440,
    likes: 15,
    views: 342,
    seller: { name: '수원베이스', joined: '2023.04', deals: 18, response: 96 },
    desc: '선셋 새틴 마감이고 픽가드에 미세 기스 외에는 깔끔합니다. 넥 휨 없고 프렛 마모 거의 없습니다. 수원시 인계동 직거래 또는 택배 가능합니다.',
    image: 'assets/bass-jazz.svg'
  },
  {
    id: 'sy-014',
    title: 'Roland TD-17KVX 전자드럼 세트',
    category: CAT.DRUM,
    brand: 'Roland',
    price: 1050000,
    trade: ['직거래'],
    region: '서울 광진구',
    minutesAgo: 660,
    likes: 23,
    views: 517,
    seller: { name: '광진드럼', joined: '2023.07', deals: 14, response: 95 },
    desc: '전자드럼 세트입니다. 집에서만 사용했고 패드 감도와 모듈 모두 정상입니다. 부피 때문에 광진구 구의동 직거래만 가능합니다.',
    image: 'assets/drums-td17.svg'
  },
  {
    id: 'sy-015',
    title: 'Yamaha YAS-280 알토 색소폰',
    category: CAT.WIND,
    brand: 'Yamaha',
    price: 950000,
    trade: ['직거래', '택배'],
    region: '대구 수성구',
    minutesAgo: 4320,
    likes: 6,
    views: 198,
    seller: { name: '대구관악', joined: '2021.12', deals: 9, response: 93 },
    desc: '취미로만 불었고 최근에 패드 교체와 오버홀을 받아 상태 좋습니다. 대구 수성구 직거래 또는 택배 가능합니다.',
    image: 'assets/wind-sax.svg'
  },
  {
    id: 'sy-016',
    title: 'Yamaha V5SC 4/4 바이올린 세트',
    category: CAT.STRING,
    brand: 'Yamaha',
    price: 320000,
    trade: ['직거래', '택배'],
    region: '서울 노원구',
    minutesAgo: 5760,
    likes: 4,
    views: 121,
    seller: { name: '노원스트링', joined: '2024.03', deals: 6, response: 94 },
    desc: '학원을 그만두게 되어 판매합니다. 스트링은 기본 상태입니다. 서울 노원구 직거래 또는 택배 가능합니다.',
    image: 'assets/strings-violin.svg'
  },
  {
    id: 'sy-017',
    title: 'Strymon BigSky 리버브 페달',
    category: CAT.PEDAL,
    brand: 'Strymon',
    price: 520000,
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 15,
    likes: 38,
    views: 864,
    seller: { name: '마포페달', joined: '2023.02', deals: 36, response: 99 },
    desc: '보드에 올려 집에서만 사용했습니다. 스위치와 노브 정상이고 스크래치 거의 없습니다. 마포구 상수동 직거래 가능하고 택배도 됩니다.',
    image: 'assets/pedal-bigsky.svg'
  },
  {
    id: 'sy-018',
    title: '높이조절 원목 스튜디오 데스크 1500 (8U 랙 포함)',
    category: CAT.FURNITURE,
    brand: '자작',
    price: 280000,
    trade: ['직거래'],
    region: '경기 하남시',
    minutesAgo: 2880,
    likes: 5,
    views: 143,
    seller: { name: '하남목공', joined: '2022.11', deals: 13, response: 97 },
    desc: '높이 조절되는 원목 스튜디오 데스크 1500입니다. 상판은 자작나무 집성목이고 8U 랙 베이와 케이블 트레이가 함께 있습니다. 사용감은 있지만 흔들림 없고 상태 좋습니다. 하남시 미사동에서 직접 가져가실 분만 구합니다.',
    image: 'assets/furniture-desk.svg'
  },
  {
    id: 'sy-019',
    title: 'Mogami 2549 XLR 케이블 5m 4본 (Neutrik)',
    category: CAT.CABLE,
    brand: 'Mogami',
    price: 180000,
    trade: ['직거래', '택배'],
    region: '서울 성동구',
    minutesAgo: 420,
    likes: 11,
    views: 276,
    seller: { name: '성동케이블', joined: '2024.05', deals: 21, response: 96 },
    desc: 'Mogami 2549 케이블 5m 4본입니다. Neutrik XLR 커넥터로 작업해서 사용했고 모두 정상입니다. 커넥터 접점 이상 없습니다. 성동구 성수동 직거래 또는 택배 가능합니다.',
    image: 'assets/cable-xlr.svg'
  },
  {
    id: 'sy-020',
    title: 'SKB 8U 랙 케이스 (충격 방지)',
    category: CAT.ETC,
    brand: 'SKB',
    price: 150000,
    trade: ['직거래'],
    region: '경기 고양시',
    minutesAgo: 7200,
    likes: 3,
    views: 98,
    seller: { name: '고양라이브', joined: '2021.05', deals: 17, response: 94 },
    desc: '8U 랙 케이스입니다. 이동 공연 때 몇 번 사용했습니다. 잠금쇠와 손잡이 모두 정상이고 내부 랙 레일 나사도 구비되어 있습니다. 무게가 있어 고양시 일산동 직거래만 가능합니다.',
    image: 'assets/etc-rackcase.svg'
  }
];

/* --------------------------------------------------------------- seed inquiries */

const INQUIRY_SEED = [
  {
    id: 'q-seed-1',
    title: 'Neumann TLM 103 매물 문의',
    contact: '김도현, 010-2841-7730',
    body: '등록된 TLM 103 매물 관련해서 문의드립니다. 실제 작동 상태와 시연 가능 여부, 거래 가능한 시간대를 알려 주시면 감사하겠습니다.',
    createdAt: Date.now() - 1000 * 60 * 60 * 26
  },
  {
    id: 'q-seed-2',
    title: '판매 등록 시 사진이 계속 실패합니다',
    contact: '이서연, seoyeon.lee@example.com',
    body: '아이폰으로 찍은 HEIC 사진을 올리면 미리보기가 나오지 않습니다. 사진 용량 제한이 있는지, 어떤 형식을 올려야 하는지 알려 주세요.',
    createdAt: Date.now() - 1000 * 60 * 60 * 74
  }
];

/* ------------------------------------------------------------------ helpers */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[ch]));

const won = (n) => Number(n).toLocaleString('ko-KR');

function timeAgo(ts) {
  const diff = Math.max(0, Date.now() - ts);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  if (days === 1) return '어제';
  if (days < 7) return `${days}일 전`;
  return new Date(ts).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    /* 저장이 막힌 브라우저에서는 이번 세션에만 유지 */
    return false;
  }
}

/* --------------------------------------------------------- inquiry constants */

const INQUIRY_KEY = 'sy_inquiries';
const ADMIN_SESSION_KEY = 'sy_admin_session';
/* 데모용 관리자 비밀번호. 실제 서비스에서는 Cloudflare Workers + D1 인증으로 교체 (README 참고) */
const ADMIN_PASSWORD = 'admin1234';
/* 로그인 모달의 '관리자 테스트 로그인'으로 바로 들어가는 데모 관리자 계정 */
const ADMIN_USER = {
  id: 'admin',
  name: '관리자',
  email: 'admin@soundyard.kr',
  provider: '관리자 테스트',
  role: 'admin'
};

function readAdminSession() {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === '1';
  } catch (err) {
    return false;
  }
}

function writeAdminSession(on) {
  try {
    if (on) sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
    else sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (err) {
    /* 세션 저장이 막힌 브라우저에서는 이번 화면에만 유지 */
  }
}

const heartIcon = (filled = false, size = '') => `<svg${size ? ` width="${size}" height="${size}"` : ''} viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" aria-hidden="true"><path d="M12 20.3S4.8 15.9 4.8 10.7A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.2 3.4c0 5.2-7.2 9.6-7.2 9.6z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`;

/* -------------------------------------------------------------------- state */

const seedListings = SEED.map((item) => ({
  ...item,
  postedAt: Date.now() - item.minutesAgo * 60000
}));

const state = {
  category: '전체',
  query: '',
  trades: new Set(),
  sort: 'latest',
  user: readJSON('sy_user', null),
  wishlist: new Set(readJSON('sy_wishlist', [])),
  admin: readAdminSession(),
  custom: readJSON('sy_custom_listings', []).map((item) => ({
    ...item,
    image: item.image || CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES[CAT.ETC]
  })),
  inquiries: readJSON(INQUIRY_KEY, INQUIRY_SEED),
  deleted: new Set(readJSON('sy_deleted_listings', []))
};

let currentDetailId = null;
let pendingIntent = null;
let modalStack = [];
let mypageTab = 'wish';
let lastFocused = null;
let toastTimer = null;
let newCardTimer = null;
let pendingPhoto = null;
let photoBusy = false;

/* -------------------------------------------------------------------- views */

const els = {
  nav: $('#category-nav'),
  grid: $('#listing-grid'),
  empty: $('#empty-state'),
  count: $('#result-count'),
  title: $('#list-title'),
  search: $('#search-input'),
  searchClear: $('#search-clear'),
  sort: $('#sort-select'),
  reset: $('#reset-filters'),
  authBtn: $('#auth-btn'),
  sellBtn: $('#sell-btn'),
  userMenu: $('#user-menu'),
  userAvatar: $('#user-avatar'),
  userName: $('#user-name'),
  authModal: $('#auth-modal'),
  kakaoNote: $('#kakao-mode-note'),
  kakaoError: $('#kakao-error'),
  mypageModal: $('#mypage-modal'),
  mypageProfile: $('#mypage-profile'),
  mypageAvatar: $('#mypage-avatar'),
  mypageName: $('#mypage-name'),
  mypageRole: $('#mypage-role'),
  mypageSub: $('#mypage-sub'),
  mypageLogout: $('#mypage-logout'),
  wishList: $('#wish-list'),
  postsList: $('#posts-list'),
  wishCount: $('#wish-count'),
  postsCount: $('#posts-count'),
  detailModal: $('#detail-modal'),
  sellModal: $('#sell-modal'),
  inquiryModal: $('#inquiry-modal'),
  detailContent: $('#detail-content'),
  sellForm: $('#sell-form'),
  sellCategory: $('#sell-category'),
  sellPrice: $('#sell-price'),
  sellContact: $('#sell-contact'),
  sellDescription: $('#sell-description'),
  sellPhoto: $('#sell-photo'),
  photoDrop: $('#photo-drop'),
  photoPreview: $('#photo-preview'),
  photoPreviewImg: $('#photo-preview-img'),
  photoRemove: $('#photo-remove'),
  photoStatus: $('#photo-status'),
  sellError: $('#sell-error'),
  inquiryList: $('#inquiry-list'),
  inquiryForm: $('#inquiry-form'),
  inquiryWriteToggle: $('#inquiry-write-toggle'),
  inquiryError: $('#inquiry-error'),
  adminBar: $('#admin-bar'),
  adminState: $('#admin-state'),
  adminToggle: $('#admin-toggle'),
  adminForm: $('#admin-form'),
  adminPassword: $('#admin-password'),
  adminError: $('#admin-error'),
  toast: $('#toast')
};

function allListings() {
  return [...state.custom, ...seedListings.filter((item) => !state.deleted.has(item.id))];
}

function isAdminUser() {
  return Boolean(state.user && state.user.role === 'admin');
}

/* 관리자는 모든 매물, 일반 회원은 본인이 등록한 매물만 삭제할 수 있다. */
function canDeleteListing(item) {
  if (!state.user || !item) return false;
  if (state.user.role === 'admin') return true;
  return Boolean(item.custom && item.seller && item.seller.name === state.user.name);
}

function likeCount(item) {
  return item.likes + (state.wishlist.has(item.id) ? 1 : 0);
}

function buildNav() {
  const labels = ['전체', ...CATEGORIES];
  els.nav.innerHTML = labels.map((label) => (
    `<button type="button" class="cat-btn${label === state.category ? ' is-active' : ''}" data-category="${esc(label)}" title="${esc(label)}">${esc(label)}</button>`
  )).join('');
}

function syncNav() {
  $$('.cat-btn', els.nav).forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.category === state.category);
  });
  const active = $('.cat-btn.is-active', els.nav);
  if (active) {
    const left = active.offsetLeft - els.nav.offsetLeft;
    const right = left + active.offsetWidth;
    const visibleLeft = els.nav.scrollLeft + 24;
    const visibleRight = els.nav.scrollLeft + els.nav.clientWidth - 24;
    if (left < visibleLeft || right > visibleRight) {
      els.nav.scrollTo({ left: Math.max(0, left - 24), behavior: 'smooth' });
    }
  }
}

function filteredListings() {
  let list = allListings();

  if (state.category !== '전체') {
    list = list.filter((item) => item.category === state.category);
  }

  const query = state.query.trim().toLowerCase();
  if (query) {
    list = list.filter((item) => (
      [item.title, item.brand, item.region, item.category, item.desc]
        .filter(Boolean).join(' ').toLowerCase().includes(query)
    ));
  }

  if (state.trades.size > 0) {
    list = list.filter((item) => (item.trade || []).some((t) => state.trades.has(t)));
  }

  if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => b.postedAt - a.postedAt);

  return list;
}

function cardHTML(item) {
  const meta = item.region ? `, ${item.region}` : '';
  return `
    <article class="listing-card" role="button" tabindex="0" data-id="${esc(item.id)}" aria-label="${esc(item.title)}, ${won(item.price)}원${esc(meta)}">
      <div class="card-thumb">
        <img src="${esc(item.image)}" alt="${esc(item.title)} 상품 이미지" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(item.title)}</h3>
        <p class="card-price">${won(item.price)}<span class="won">원</span></p>
        <div class="card-foot">
          <span class="region-time">
            ${item.region ? `<span class="region">${esc(item.region)}</span><span class="dot">·</span>` : ''}
            <span>${timeAgo(item.postedAt)}</span>
          </span>
          <span class="card-likes">${heartIcon(false)}<span>${likeCount(item)}</span></span>
        </div>
      </div>
    </article>`;
}

function render() {
  const list = filteredListings();

  els.grid.innerHTML = list.map(cardHTML).join('');
  els.empty.hidden = list.length > 0;
  els.count.innerHTML = `총 <strong>${list.length}</strong>개`;

  els.title.textContent = state.category === '전체' ? '전체 매물' : state.category;

  $$('.chip').forEach((chip) => {
    chip.setAttribute('aria-pressed', state.trades.has(chip.dataset.value) ? 'true' : 'false');
  });

  const hasFilters = state.category !== '전체' || state.query.trim() || state.trades.size;
  els.reset.hidden = !hasFilters;
  els.searchClear.hidden = !state.query;

  syncNav();
}

/* ------------------------------------------------------------------- modals */

function openModal(el) {
  if (!el) return;
  lastFocused = document.activeElement;
  el.classList.add('is-open');
  el.setAttribute('aria-hidden', 'false');
  modalStack = modalStack.filter((m) => m !== el);
  modalStack.push(el);
  document.body.style.overflow = 'hidden';
  const focusTarget = $('.modal-close', el);
  if (focusTarget) setTimeout(() => focusTarget.focus(), 30);
}

function closeModal(el) {
  if (!el || !el.classList.contains('is-open')) return;
  el.classList.remove('is-open');
  el.setAttribute('aria-hidden', 'true');
  modalStack = modalStack.filter((m) => m !== el);
  if (el === els.authModal) {
    pendingIntent = null;
  }
  if (!modalStack.length) {
    document.body.style.overflow = '';
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }
}

/* ------------------------------------------------------------------- detail */

function detailHTML(item) {
  const wished = state.wishlist.has(item.id);
  const initial = item.seller.name.trim().charAt(0) || '판';
  const descText = String(item.desc || '').trim();
  const descHTML = descText
    ? `<p>${esc(descText)}</p>`
    : '<p class="detail-desc-empty">등록된 상세정보가 없습니다. 판매자 연락처로 문의해 주세요.</p>';
  const manageHTML = canDeleteListing(item)
    ? `
      <div class="detail-manage">
        <button type="button" class="btn-delete" data-delete>매물 삭제</button>
        <span class="detail-manage-note">${item.custom ? '내가 등록한 매물' : '관리자 권한'}</span>
      </div>`
    : '';

  return `
    <div class="detail-media">
      <img src="${esc(item.image)}" alt="${esc(item.title)} 상품 이미지">
    </div>
    <div class="detail-body">
      <p class="detail-eyebrow">${esc(item.category)}</p>
      <h2 class="detail-title" id="detail-title">${esc(item.title)}</h2>
      <p class="detail-price">${won(item.price)}<span class="won">원</span></p>
      <div class="detail-tags">
        ${(item.trade || []).map((t) => `<span class="detail-tag">${esc(t)}</span>`).join('')}
        ${item.region ? `<span class="detail-tag">${esc(item.region)}</span>` : ''}
      </div>

      ${item.contact ? `<p class="detail-contact">연락처 <b>${esc(item.contact)}</b></p>` : ''}

      <div class="detail-stats">
        <span>조회 ${won(item.views || 0)}</span>
        <span>찜 <b id="detail-like-count">${likeCount(item)}</b></span>
        <span>${timeAgo(item.postedAt)}</span>
      </div>

      <div class="detail-actions">
        <button type="button" class="btn btn-wish${wished ? ' is-active' : ''}" data-wish aria-pressed="${wished}">
          ${heartIcon(wished)}<span>${wished ? '찜한 매물' : '찜하기'}</span>
        </button>
        <button type="button" class="btn btn-chat" data-chat>채팅 문의</button>
      </div>

      ${manageHTML}

      <div class="chat-box" id="chat-box" hidden>
        <label for="chat-message">판매자에게 보낼 메시지</label>
        <textarea id="chat-message">안녕하세요. ${esc(item.title)} 아직 판매 중일까요?</textarea>
        <div class="chat-box-actions">
          <button type="button" class="btn btn-outline" data-chat-cancel>취소</button>
          <button type="button" class="btn btn-primary" data-chat-send>보내기</button>
        </div>
      </div>
    </div>
    <div class="detail-desc">
      <h3>상세정보</h3>
      ${descHTML}
    </div>
    <div class="detail-seller">
      <div class="seller">
        <span class="seller-avatar" aria-hidden="true">${esc(initial)}</span>
        <div class="seller-info">
          <p class="seller-name">${esc(item.seller.name)}</p>
          <p class="seller-meta">가입 ${esc(item.seller.joined)} · 거래 ${item.seller.deals}회</p>
        </div>
        <div class="seller-stats">응답률 <b>${item.seller.response}%</b><br>보통 10분 내 응답</div>
      </div>
    </div>`;
}

function openDetail(id) {
  const item = allListings().find((x) => x.id === id);
  if (!item) return;

  currentDetailId = id;
  /* 마이페이지 등 다른 모달 위에서 열면 상세를 그 위에 쌓는다 */
  const stacked = modalStack.some((m) => m !== els.detailModal);
  els.detailModal.classList.toggle('is-stacked', stacked);
  els.detailContent.innerHTML = detailHTML(item);
  openModal(els.detailModal);
}

function refreshDetail() {
  if (!currentDetailId) return;
  const item = allListings().find((x) => x.id === currentDetailId);
  if (!item) return;

  const btn = $('[data-wish]', els.detailContent);
  if (btn) {
    const wished = state.wishlist.has(item.id);
    btn.classList.toggle('is-active', wished);
    btn.setAttribute('aria-pressed', String(wished));
    btn.innerHTML = `${heartIcon(wished)}<span>${wished ? '찜한 매물' : '찜하기'}</span>`;
  }
  const count = $('#detail-like-count');
  if (count) count.textContent = likeCount(item);
}

function toggleWish(id) {
  const item = allListings().find((x) => x.id === id);
  if (!item) return;

  const wished = state.wishlist.has(id);
  if (wished) {
    state.wishlist.delete(id);
    toast('찜 목록에서 삭제했습니다.');
  } else {
    state.wishlist.add(id);
    toast('찜한 매물에 담았습니다.');
  }
  writeJSON('sy_wishlist', Array.from(state.wishlist));

  if (id === currentDetailId) refreshDetail();
  render();
  if (els.mypageModal.classList.contains('is-open')) renderMypage();
}

function showChatBox() {
  const box = $('#chat-box');
  if (!box) return;
  box.hidden = false;
  const textarea = $('#chat-message');
  if (textarea) {
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }
}

/* ------------------------------------------------------------------ mypage */

function myListings() {
  if (!state.user) return [];
  const uid = state.user.id;
  return state.custom.filter((item) => {
    if (uid && item.ownerId) return item.ownerId === uid;
    /* ownerId가 없는 초기 등록분은 판매자 닉네임으로 맞춘다 */
    return Boolean(item.seller && item.seller.name === state.user.name);
  });
}

function wishListings() {
  const all = allListings();
  return Array.from(state.wishlist).reverse()
    .map((id) => all.find((item) => item.id === id))
    .filter(Boolean);
}

function mypageEmptyHTML(title, desc, action) {
  return `
    <li class="mypage-empty">
      <p class="mypage-empty-title">${esc(title)}</p>
      <p class="mypage-empty-desc">${esc(desc)}</p>
      ${action || ''}
    </li>`;
}

function mypageRowHTML(item, kind) {
  const action = kind === 'wish'
    ? `<button type="button" class="mypage-action" data-mypage-unwish="${esc(item.id)}" aria-label="${esc(item.title)} 찜 해제">${heartIcon(true)}<span>해제</span></button>`
    : `<button type="button" class="mypage-action is-delete" data-mypage-delete="${esc(item.id)}" aria-label="${esc(item.title)} 삭제">삭제</button>`;
  const meta = [item.region, timeAgo(item.postedAt)].filter(Boolean).join(' · ');

  return `
    <li class="mypage-item">
      <button type="button" class="mypage-item-main" data-mypage-open="${esc(item.id)}" aria-label="${esc(item.title)} 상세 열기">
        <span class="mypage-thumb"><img src="${esc(item.image)}" alt="" loading="lazy"></span>
        <span class="mypage-item-body">
          <span class="mypage-item-title">${esc(item.title)}</span>
          <span class="mypage-item-price">${won(item.price)}<span class="won">원</span></span>
          ${meta ? `<span class="mypage-item-meta">${esc(meta)}</span>` : ''}
        </span>
      </button>
      ${action}
    </li>`;
}

function setMypageTab(tab) {
  mypageTab = tab === 'posts' ? 'posts' : 'wish';
  $$('.mypage-tab').forEach((btn) => {
    const active = btn.dataset.tab === mypageTab;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  $('#mypage-panel-wish').hidden = mypageTab !== 'wish';
  $('#mypage-panel-posts').hidden = mypageTab !== 'posts';
}

function renderMypage() {
  if (!state.user) return;

  const name = state.user.name || '회원';
  const admin = isAdminUser();

  els.mypageName.textContent = name;
  els.mypageAvatar.textContent = name.trim().charAt(0) || '회';
  els.mypageRole.textContent = admin ? '관리자' : '카카오 회원';
  els.mypageRole.className = `role-badge${admin ? ' is-admin' : ''}`;
  els.mypageProfile.classList.toggle('is-admin', admin);

  let sub;
  if (admin) sub = '관리자 테스트 계정 · 문의 게시판 열람 권한';
  else if (state.user.demo) sub = '데모 계정 · 실제 카카오 로그인이 아닙니다';
  else sub = `${state.user.provider || '카카오'} 계정으로 로그인${state.user.email ? ` · ${state.user.email}` : ''}`;
  els.mypageSub.textContent = sub;

  const wishes = wishListings();
  const posts = myListings();
  els.wishCount.textContent = wishes.length;
  els.postsCount.textContent = posts.length;

  els.wishList.innerHTML = wishes.length
    ? wishes.map((item) => mypageRowHTML(item, 'wish')).join('')
    : mypageEmptyHTML('찜한 매물이 없습니다', '마음에 드는 매물의 하트를 눌러 여기에 모아 보세요.');

  els.postsList.innerHTML = posts.length
    ? posts.map((item) => mypageRowHTML(item, 'posts')).join('')
    : mypageEmptyHTML(
      '아직 올린 글이 없습니다',
      '헤더의 판매하기로 첫 매물을 등록해 보세요.',
      '<button type="button" class="btn btn-primary btn-sm" data-mypage-sell>판매하기</button>'
    );

  setMypageTab(mypageTab);
}

function openMypage() {
  if (!state.user) {
    showAuth();
    toast('로그인 후 마이페이지를 볼 수 있습니다.');
    return;
  }
  renderMypage();
  openModal(els.mypageModal);
}

/* ------------------------------------------------------------------ delete */

function deleteListing(id) {
  const item = allListings().find((x) => x.id === id);
  if (!item) return;
  if (!canDeleteListing(item)) {
    toast('삭제 권한이 없습니다.');
    return;
  }
  if (!window.confirm(`“${item.title}” 매물을 삭제할까요?`)) return;

  if (item.custom) {
    const next = state.custom.filter((x) => x.id !== id);
    if (!writeJSON('sy_custom_listings', next)) {
      toast('브라우저 저장 공간이 부족해 삭제하지 못했습니다.');
      return;
    }
    state.custom = next;
  } else {
    state.deleted.add(id);
    writeJSON('sy_deleted_listings', Array.from(state.deleted));
  }

  if (state.wishlist.delete(id)) writeJSON('sy_wishlist', Array.from(state.wishlist));

  closeModal(els.detailModal);
  currentDetailId = null;
  render();
  if (els.mypageModal.classList.contains('is-open')) renderMypage();
  toast('매물이 삭제되었습니다.');
}

/* --------------------------------------------------------------------- auth */

function showAuth() {
  openModal(els.authModal);
  const kakao = $('#kakao-login');
  if (kakao) setTimeout(() => kakao.focus(), 60);
}

function renderHeader() {
  const loggedIn = Boolean(state.user);
  els.authBtn.hidden = loggedIn;
  els.userMenu.hidden = !loggedIn;

  if (loggedIn) {
    const name = state.user.name || '회원';
    els.userName.textContent = name;
    els.userAvatar.textContent = name.trim().charAt(0) || '회';
    els.userMenu.setAttribute('aria-label', `${name}님 마이페이지 열기`);
  }
  els.userMenu.classList.toggle('is-admin', loggedIn && isAdminUser());
}

function loginUser(user, message) {
  state.user = user;
  writeJSON('sy_user', user);
  renderHeader();

  const intent = pendingIntent;
  pendingIntent = null;
  closeModal(els.authModal);
  toast(message || `${user.name}님, 로그인되었습니다.`);

  if (intent === 'sell') {
    setTimeout(openSell, 180);
  } else if (intent === 'chat' && els.detailModal.classList.contains('is-open')) {
    setTimeout(showChatBox, 120);
  }
}

function loginAsAdmin() {
  loginUser({ ...ADMIN_USER }, '관리자 계정으로 로그인되었습니다. (테스트)');
  if (!state.admin) setAdmin(true);
  else renderInquiries();
}

function loginWithProvider(provider) {
  loginUser(
    {
      id: 'demo-soundlover',
      name: '사운드러버',
      email: 'soundlover@soundyard.kr',
      provider,
      role: 'member',
      demo: true
    },
    `${provider} 계정으로 로그인되었습니다. (데모)`
  );
}

function logoutUser() {
  const sdk = kakaoSdk();
  const kakaoToken = Boolean(sdk && sdk.isInitialized() && sdk.Auth.getAccessToken());

  state.user = null;
  try { localStorage.removeItem('sy_user'); } catch (err) { /* noop */ }
  if (state.admin) {
    state.admin = false;
    writeAdminSession(false);
  }

  renderHeader();
  renderInquiries();
  closeModal(els.mypageModal);

  /* SDK에 할당된 카카오 토큰도 서버에서 폐기한다 */
  if (kakaoToken) {
    sdk.Auth.logout().catch((err) => console.warn('[SoundYard] 카카오 토큰 폐기 실패', err));
  }

  toast('로그아웃되었습니다.');
}

/* --------------------------------------------------------------- kakao sdk */

const KAKAO_INTENT_KEY = 'sy_kakao_intent';

function kakaoRedirectUri() {
  if (KAKAO_CONFIG.redirectUri) return KAKAO_CONFIG.redirectUri;
  if (window.location.protocol === 'file:') {
    return window.location.href.split('?')[0].split('#')[0];
  }
  const path = window.location.pathname.replace(/index\.html$/, '');
  return window.location.origin + path;
}

function kakaoSdk() {
  const sdk = window.Kakao;
  return sdk && typeof sdk.init === 'function' ? sdk : null;
}

function initKakao() {
  if (!KAKAO_CONFIG.jsKey) return null;
  const sdk = kakaoSdk();
  if (!sdk) {
    console.error('[SoundYard] 카카오 SDK 스크립트를 불러오지 못했습니다. index.html의 SDK 스크립트 태그를 확인하세요.');
    return null;
  }
  if (!sdk.isInitialized()) {
    try {
      sdk.init(KAKAO_CONFIG.jsKey);
    } catch (err) {
      console.error('[SoundYard] Kakao.init 실패', err);
      return null;
    }
  }
  return sdk.isInitialized() ? sdk : null;
}

function setKakaoNote(message, tone) {
  if (!els.kakaoNote) return;
  els.kakaoNote.hidden = !message;
  els.kakaoNote.textContent = message || '';
  els.kakaoNote.dataset.tone = tone || '';
}

function showKakaoError(message) {
  if (!els.kakaoError) return;
  els.kakaoError.textContent = message || '';
  els.kakaoError.hidden = !message;
}

/* 콘솔에 카카오 디벨로퍼스에서 확인해야 할 설정을 그대로 찍어 둔다 */
function kakaoSetupGuide(reason) {
  const lines = [
    `[SoundYard] 카카오 로그인 실패: ${reason}`,
    '카카오 디벨로퍼스 설정을 확인하세요.',
    `  1) JavaScript 키 → app.js KAKAO_CONFIG.jsKey (현재 ${KAKAO_CONFIG.jsKey ? '입력됨' : '비어 있음'})`,
    `  2) REST API 키 → app.js KAKAO_CONFIG.restKey (현재 ${KAKAO_CONFIG.restKey ? '입력됨' : '비어 있음'})`,
    `  3) 플랫폼 > Web > 사이트 도메인에 ${kakaoRedirectUri()} 의 오리진 등록`,
    `  4) 카카오 로그인 > Redirect URI에 ${kakaoRedirectUri()} 를 정확히 같은 값으로 등록`,
    '  5) 카카오 로그인 > 일반 > 카카오 로그인 활성화 ON',
    '  6) 카카오 로그인 > 보안 > Client Secret 사용 안 함 (정적 페이지는 브라우저가 직접 토큰을 교환)',
    '  7) 동의항목 > 카카오계정(닉네임) 사용 설정'
  ];
  console.error(lines.join('\n'));
}

function initKakaoMode() {
  if (!KAKAO_CONFIG.jsKey) {
    console.info('[SoundYard] 카카오 로그인: 데모 모드 — KAKAO_CONFIG.jsKey가 비어 있어 "사운드러버" 데모 계정으로 로그인합니다.');
    setKakaoNote('데모 모드 · 카카오 JS 키가 아직 등록되지 않았습니다', 'demo');
    return;
  }

  const sdk = initKakao();
  if (!sdk) {
    setKakaoNote('카카오 SDK 초기화 실패 · 콘솔을 확인해 주세요', 'warn');
    return;
  }

  console.info('[SoundYard] 카카오 로그인: 실제 SDK 모드', {
    redirectUri: kakaoRedirectUri(),
    restKey: Boolean(KAKAO_CONFIG.restKey)
  });

  if (!KAKAO_CONFIG.restKey) {
    console.warn('[SoundYard] KAKAO_CONFIG.restKey가 비어 있어 인가 코드를 토큰으로 교환할 수 없습니다. REST API 키를 입력하세요.');
    setKakaoNote('카카오 로그인 준비 중 · REST API 키가 필요합니다', 'warn');
    return;
  }
  setKakaoNote('');
}

function saveKakaoIntent() {
  if (!pendingIntent) return;
  try {
    sessionStorage.setItem(KAKAO_INTENT_KEY, JSON.stringify({
      intent: pendingIntent,
      detailId: currentDetailId
    }));
  } catch (err) { /* noop */ }
}

/* 카카오 리다이렉트를 거치면 메모리 상태가 날아가므로 세션에 담아 둔 의도를 되살린다 */
function restoreKakaoIntent() {
  try {
    const raw = sessionStorage.getItem(KAKAO_INTENT_KEY);
    sessionStorage.removeItem(KAKAO_INTENT_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.intent === 'chat' && saved.detailId) openDetail(saved.detailId);
    pendingIntent = saved.intent || null;
  } catch (err) { /* noop */ }
}

function stripKakaoQuery() {
  const url = new URL(window.location.href);
  ['code', 'state', 'error', 'error_description'].forEach((key) => url.searchParams.delete(key));
  const query = url.searchParams.toString();
  window.history.replaceState({}, '', url.pathname + (query ? `?${query}` : '') + url.hash);
}

function startKakaoLogin() {
  /* 키 미등록: 기존 데모 로그인 */
  if (!KAKAO_CONFIG.jsKey) {
    loginWithProvider('카카오');
    return;
  }

  const sdk = initKakao();
  if (!sdk) {
    showKakaoError('카카오 SDK를 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.');
    return;
  }
  if (!KAKAO_CONFIG.restKey) {
    showKakaoError('REST API 키(KAKAO_CONFIG.restKey)가 없어 로그인을 완료할 수 없습니다. app.js 상단 설정을 확인해 주세요.');
    kakaoSetupGuide('REST API 키 미등록');
    return;
  }

  showKakaoError('');
  saveKakaoIntent();
  try {
    sdk.Auth.authorize({ redirectUri: kakaoRedirectUri() });
  } catch (err) {
    showKakaoError('카카오 로그인을 시작하지 못했습니다. 콘솔을 확인해 주세요.');
    kakaoSetupGuide((err && err.message) || String(err));
  }
}

/* 인가 코드 → 토큰 교환 (정적 페이지라 브라우저에서 직접 호출, Client Secret 꺼진 앱 전용) */
async function requestKakaoToken(code) {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: KAKAO_CONFIG.restKey,
    redirect_uri: kakaoRedirectUri(),
    code
  });

  const res = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    body: body.toString()
  });
  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.access_token) {
    const reason = data.error_description || data.error || `HTTP ${res.status}`;
    throw new Error(reason);
  }
  return data;
}

async function requestKakaoProfile(accessToken) {
  const sdk = initKakao();
  if (!sdk) throw new Error('카카오 SDK 초기화 실패');

  sdk.Auth.setAccessToken(accessToken);
  const me = await sdk.API.request({ url: '/v2/user/me' });
  const account = me.kakao_account || {};
  const profile = account.profile || me.properties || {};
  const nickname = String(profile.nickname || '').trim() || '카카오 회원';

  return {
    id: me.id,
    nickname,
    email: account.email || '',
    image: profile.profile_image_url || profile.thumbnail_image || ''
  };
}

function openAuthWithKakaoError(message) {
  showKakaoError(message);
  openModal(els.authModal);
}

/* 페이지 로드 시 ?code= / ?error= 를 확인해 카카오 로그인을 마무리한다 */
async function completeKakaoLogin() {
  if (!KAKAO_CONFIG.jsKey) return false;

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const error = params.get('error');
  if (!code && !error) return false;

  const description = params.get('error_description') || '';
  stripKakaoQuery();

  if (error) {
    const message = error === 'KOE320'
      ? '카카오 로그인을 취소했습니다.'
      : `카카오 로그인에 실패했습니다. (${error}${description ? ` · ${description}` : ''})`;
    console.warn('[SoundYard] 카카오 인가 요청 실패', { error, description });
    openAuthWithKakaoError(message);
    return true;
  }

  try {
    const token = await requestKakaoToken(code);
    const profile = await requestKakaoProfile(token.access_token);
    restoreKakaoIntent();
    loginUser(
      {
        id: `kakao-${profile.id}`,
        name: profile.nickname,
        email: profile.email,
        provider: '카카오',
        role: 'member'
      },
      `${profile.nickname}님, 카카오 계정으로 로그인되었습니다.`
    );
  } catch (err) {
    const reason = (err && err.message) || '알 수 없는 오류';
    openAuthWithKakaoError(`카카오 로그인을 완료하지 못했습니다. (${reason})`);
    kakaoSetupGuide(reason);
  }
  return true;
}

/* --------------------------------------------------------------------- sell */

const PHOTO_MAX_EDGE = 1200;
const PHOTO_QUALITY = 0.8;
const PHOTO_MAX_BYTES = 20 * 1024 * 1024;

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0KB';
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  return `${Math.max(1, Math.round(bytes / 1024))}KB`;
}

function dataUrlBytes(dataUrl) {
  const base64 = String(dataUrl).split(',')[1] || '';
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
  return Math.max(0, Math.floor((base64.length * 3) / 4) - padding);
}

function loadImageFile(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve({ img, url });
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('이미지 파일을 읽을 수 없습니다.'));
    };
    img.src = url;
  });
}

/* 브라우저 canvas로 긴 변 1200px까지 줄이고 WebP(0.8)로 변환한다. */
async function compressPhoto(file) {
  const { img, url } = await loadImageFile(file);
  const width0 = img.naturalWidth || img.width;
  const height0 = img.naturalHeight || img.height;
  if (!width0 || !height0) {
    URL.revokeObjectURL(url);
    throw new Error('이미지 크기를 확인할 수 없습니다.');
  }

  const scale = Math.min(1, PHOTO_MAX_EDGE / Math.max(width0, height0));
  const width = Math.max(1, Math.round(width0 * scale));
  const height = Math.max(1, Math.round(height0 * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  /* 투명 PNG도 WebP/JPEG에서 검게 나오지 않도록 흰 배경을 깐다 */
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);
  URL.revokeObjectURL(url);

  let dataUrl = canvas.toDataURL('image/webp', PHOTO_QUALITY);
  let type = 'image/webp';
  if (!dataUrl.startsWith('data:image/webp')) {
    dataUrl = canvas.toDataURL('image/jpeg', PHOTO_QUALITY);
    type = 'image/jpeg';
  }

  return {
    dataUrl,
    type,
    width,
    height,
    originalBytes: file.size,
    bytes: dataUrlBytes(dataUrl),
    fileName: file.name
  };
}

function setPhotoStatus(message) {
  els.photoStatus.hidden = !message;
  els.photoStatus.textContent = message || '';
}

function resetPhoto() {
  pendingPhoto = null;
  photoBusy = false;
  els.sellPhoto.value = '';
  els.photoPreview.hidden = true;
  els.photoPreviewImg.removeAttribute('src');
  els.photoDrop.hidden = false;
  els.photoRemove.hidden = true;
  setPhotoStatus('');
}

function showPhotoResult(photo) {
  pendingPhoto = photo;
  els.photoPreviewImg.src = photo.dataUrl;
  els.photoPreview.hidden = false;
  els.photoDrop.hidden = true;
  els.photoRemove.hidden = false;

  const saving = photo.originalBytes
    ? Math.round((1 - photo.bytes / photo.originalBytes) * 100)
    : 0;
  const label = photo.type === 'image/webp' ? 'WebP' : 'JPEG (WebP 미지원 브라우저)';
  const dimension = `${photo.width}×${photo.height}`;
  const change = saving > 0
    ? `${formatBytes(photo.originalBytes)} → ${formatBytes(photo.bytes)} (${saving}% 감소)`
    : `${formatBytes(photo.bytes)}`;
  setPhotoStatus(`${label} 변환 완료 · ${change} · ${dimension}px`);
}

async function handlePhotoChange(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  els.sellPhoto.value = '';
  if (!file.type.startsWith('image/')) {
    setPhotoStatus('');
    els.sellError.textContent = '이미지 파일만 첨부할 수 있습니다.';
    els.sellError.hidden = false;
    return;
  }
  if (file.size > PHOTO_MAX_BYTES) {
    els.sellError.textContent = `사진 용량이 너무 큽니다. ${formatBytes(PHOTO_MAX_BYTES)} 이하 파일을 선택해 주세요.`;
    els.sellError.hidden = false;
    return;
  }

  els.sellError.hidden = true;
  photoBusy = true;
  els.photoDrop.classList.add('is-busy');
  setPhotoStatus('사진을 WebP로 압축하는 중…');

  try {
    const photo = await compressPhoto(file);
    showPhotoResult(photo);
  } catch (err) {
    resetPhoto();
    els.sellError.textContent = err && err.message ? err.message : '사진을 변환하지 못했습니다. 다른 사진으로 시도해 주세요.';
    els.sellError.hidden = false;
  } finally {
    photoBusy = false;
    els.photoDrop.classList.remove('is-busy');
  }
}

function openSell() {
  if (!state.user) {
    pendingIntent = 'sell';
    showAuth();
    toast('로그인 후 판매할 수 있습니다.');
    return;
  }
  els.sellForm.reset();
  els.sellError.hidden = true;
  resetPhoto();
  openModal(els.sellModal);
}

function formatPriceInput(event) {
  const digits = event.target.value.replace(/\D/g, '').slice(0, 9);
  event.target.value = digits ? Number(digits).toLocaleString('ko-KR') : '';
}

function handleSell(event) {
  event.preventDefault();

  const category = els.sellCategory.value;
  const title = $('#sell-title').value.trim();
  const price = Number(els.sellPrice.value.replace(/\D/g, ''));
  const contact = els.sellContact.value.trim();
  const description = els.sellDescription.value.trim();

  const fail = (message, field) => {
    els.sellError.textContent = message;
    els.sellError.hidden = false;
    if (field) field.focus();
  };

  if (!category) return fail('카테고리를 선택해 주세요.', els.sellCategory);
  if (title.length < 2) return fail('품명을 2자 이상 입력해 주세요.', $('#sell-title'));
  if (!price) return fail('가격을 입력해 주세요.', els.sellPrice);
  if (contact.length < 5) return fail('연락처를 입력해 주세요.', els.sellContact);
  if (photoBusy) return fail('사진 변환이 끝난 뒤에 등록해 주세요.', els.sellPhoto);

  const item = {
    id: `u-${Date.now()}`,
    ownerId: state.user.id || state.user.name,
    title,
    category,
    price,
    trade: [],
    region: '',
    contact,
    postedAt: Date.now(),
    likes: 0,
    views: 0,
    seller: {
      name: state.user.name,
      joined: `${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, '0')}`,
      deals: 0,
      response: 100
    },
    desc: description,
    image: pendingPhoto ? pendingPhoto.dataUrl : (CATEGORY_IMAGES[category] || CATEGORY_IMAGES[CAT.ETC]),
    photoType: pendingPhoto ? pendingPhoto.type : null,
    custom: true
  };

  state.custom.unshift(item);
  const stored = writeJSON('sy_custom_listings', state.custom);
  if (!stored) {
    state.custom.shift();
    fail('브라우저 저장 공간이 부족해 등록하지 못했습니다. 사진을 작게 바꾸거나 다른 매물을 정리한 뒤 다시 시도해 주세요.');
    return;
  }

  const photoSummary = pendingPhoto && pendingPhoto.type === 'image/webp'
    ? ` (사진 WebP ${formatBytes(pendingPhoto.bytes)})`
    : '';

  closeModal(els.sellModal);
  resetAll(true);
  render();
  toast(`매물이 등록되었습니다.${photoSummary}`);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  requestAnimationFrame(() => {
    const card = $(`.listing-card[data-id="${item.id}"]`);
    if (card) {
      card.classList.add('is-new');
      clearTimeout(newCardTimer);
      newCardTimer = setTimeout(() => card.classList.remove('is-new'), 2600);
    }
  });
}

/* --------------------------------------------------------- inquiry board */

function formatInquiryDate(ts) {
  return new Date(ts).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
}

function renderInquiries() {
  const admin = state.admin;
  const list = state.inquiries.slice().sort((a, b) => b.createdAt - a.createdAt);

  els.adminState.textContent = admin
    ? (isAdminUser()
      ? '관리자 계정으로 로그인됨 · 문의 제목과 내용이 모두 표시됩니다'
      : '관리자 열람 중 · 문의 제목과 내용이 모두 표시됩니다')
    : '일반 이용자 · 문의 내용은 관리자만 열람할 수 있습니다';
  els.adminBar.classList.toggle('is-admin', admin);
  els.adminToggle.hidden = isAdminUser();
  els.adminToggle.textContent = admin ? '관리자 로그아웃' : '관리자 확인';
  els.adminForm.hidden = true;
  els.adminError.hidden = true;

  if (!list.length) {
    els.inquiryList.innerHTML = '<li class="inquiry-empty">아직 등록된 문의가 없습니다.</li>';
    return;
  }

  els.inquiryList.innerHTML = list.map((item) => {
    if (!admin) {
      return `
        <li class="inquiry-item is-locked">
          <div class="inquiry-row">
            <span class="inquiry-lock" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="#6B7280" stroke-width="1.8"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#6B7280" stroke-width="1.8"/></svg>
            </span>
            <span class="inquiry-title">비밀글입니다 (관리자만 열람 가능)</span>
            <span class="inquiry-date">${formatInquiryDate(item.createdAt)}</span>
          </div>
          <p class="inquiry-meta">작성자 비공개</p>
        </li>`;
    }
    return `
      <li class="inquiry-item is-admin-view">
        <div class="inquiry-row">
          <span class="inquiry-title">${esc(item.title)}</span>
          <span class="inquiry-date">${formatInquiryDate(item.createdAt)}</span>
        </div>
        <p class="inquiry-meta">${esc(item.contact)} · 관리자 열람</p>
        <p class="inquiry-body">${esc(item.body)}</p>
      </li>`;
  }).join('');
}

function openInquiry() {
  if (isAdminUser() && !state.admin) {
    state.admin = true;
    writeAdminSession(true);
  }
  els.inquiryForm.hidden = true;
  els.inquiryError.hidden = true;
  els.inquiryWriteToggle.hidden = false;
  renderInquiries();
  openModal(els.inquiryModal);
}

function submitInquiry(event) {
  event.preventDefault();
  const title = $('#inquiry-title').value.trim();
  const contact = $('#inquiry-contact').value.trim();
  const body = $('#inquiry-body').value.trim();

  const fail = (message, field) => {
    els.inquiryError.textContent = message;
    els.inquiryError.hidden = false;
    if (field) field.focus();
  };

  if (title.length < 2) return fail('제목을 2자 이상 입력해 주세요.', $('#inquiry-title'));
  if (contact.length < 2) return fail('작성자 또는 연락처를 입력해 주세요.', $('#inquiry-contact'));
  if (body.length < 2) return fail('문의 내용을 입력해 주세요.', $('#inquiry-body'));

  state.inquiries.unshift({
    id: `q-${Date.now()}`,
    title,
    contact,
    body,
    createdAt: Date.now()
  });
  if (!writeJSON(INQUIRY_KEY, state.inquiries)) {
    state.inquiries.shift();
    return fail('브라우저 저장 공간이 부족해 문의를 등록하지 못했습니다.');
  }

  els.inquiryForm.reset();
  els.inquiryForm.hidden = true;
  els.inquiryWriteToggle.hidden = false;
  els.inquiryError.hidden = true;
  renderInquiries();
  toast('문의가 등록되었습니다. 관리자만 열람할 수 있습니다.');
}

function setAdmin(on) {
  state.admin = on;
  writeAdminSession(on);
  els.adminPassword.value = '';
  renderInquiries();
  toast(on ? '관리자로 전환되었습니다. 문의 내용을 열람할 수 있습니다.' : '관리자 모드를 종료했습니다.');
}

/* ------------------------------------------------------------------ controls */

function resetAll(clearSort = true) {
  state.category = '전체';
  state.query = '';
  state.trades.clear();
  if (clearSort) state.sort = 'latest';
  els.search.value = '';
  els.searchClear.hidden = true;
  els.sort.value = state.sort;
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove('is-show'), 2400);
}

/* ---------------------------------------------------------------------- init */

function init() {
  buildNav();

  els.sellCategory.insertAdjacentHTML(
    'beforeend',
    CATEGORIES.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')
  );

  renderHeader();
  render();

  /* category nav */
  els.nav.addEventListener('click', (event) => {
    const btn = event.target.closest('.cat-btn');
    if (!btn) return;
    state.category = btn.dataset.category;
    render();
  });

  /* search */
  els.search.addEventListener('input', (event) => {
    state.query = event.target.value;
    render();
  });

  els.search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') event.preventDefault();
  });

  $('#search-form').addEventListener('submit', (event) => event.preventDefault());

  els.searchClear.addEventListener('click', () => {
    state.query = '';
    els.search.value = '';
    els.search.focus();
    render();
  });

  /* filters */
  $$('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.value;
      if (state.trades.has(value)) state.trades.delete(value);
      else state.trades.add(value);
      render();
    });
  });

  els.sort.addEventListener('change', (event) => {
    state.sort = event.target.value;
    render();
  });

  els.reset.addEventListener('click', () => {
    resetAll();
    render();
  });

  $('#empty-reset').addEventListener('click', () => {
    resetAll();
    render();
  });

  /* listing open + wish */
  const openFromTarget = (target) => {
    const card = target.closest('.listing-card');
    if (card) openDetail(card.dataset.id);
  };

  els.grid.addEventListener('click', (event) => openFromTarget(event.target));
  els.grid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (!event.target.closest('.listing-card')) return;
    event.preventDefault();
    openFromTarget(event.target);
  });

  /* detail actions */
  els.detailContent.addEventListener('click', (event) => {
    if (event.target.closest('[data-wish]')) {
      if (currentDetailId) toggleWish(currentDetailId);
      return;
    }

    if (event.target.closest('[data-delete]')) {
      if (currentDetailId) deleteListing(currentDetailId);
      return;
    }

    if (event.target.closest('[data-chat]')) {
      if (!state.user) {
        pendingIntent = 'chat';
        showAuth();
        toast('로그인 후 판매자에게 문의할 수 있습니다.');
        return;
      }
      const box = $('#chat-box');
      if (box) box.hidden = !box.hidden;
      if (box && !box.hidden) $('#chat-message').focus();
      return;
    }

    if (event.target.closest('[data-chat-cancel]')) {
      const box = $('#chat-box');
      if (box) box.hidden = true;
      return;
    }

    if (event.target.closest('[data-chat-send]')) {
      const textarea = $('#chat-message');
      if (!textarea.value.trim()) {
        toast('보낼 메시지를 입력해 주세요.');
        textarea.focus();
        return;
      }
      const box = $('#chat-box');
      if (box) box.hidden = true;
      toast('판매자에게 문의를 보냈습니다.');
    }
  });

  /* auth */
  $('#auth-btn').addEventListener('click', () => showAuth());
  $('#admin-login').addEventListener('click', loginAsAdmin);
  $('#kakao-login').addEventListener('click', startKakaoLogin);

  /* mypage */
  els.userMenu.addEventListener('click', openMypage);
  els.mypageLogout.addEventListener('click', logoutUser);
  els.mypageModal.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab]');
    if (tab) {
      setMypageTab(tab.dataset.tab);
      return;
    }

    const sell = event.target.closest('[data-mypage-sell]');
    if (sell) {
      closeModal(els.mypageModal);
      setTimeout(openSell, 120);
      return;
    }

    const open = event.target.closest('[data-mypage-open]');
    if (open) {
      openDetail(open.dataset.mypageOpen);
      return;
    }

    const unwish = event.target.closest('[data-mypage-unwish]');
    if (unwish) {
      toggleWish(unwish.dataset.mypageUnwish);
      return;
    }

    const remove = event.target.closest('[data-mypage-delete]');
    if (remove) {
      deleteListing(remove.dataset.mypageDelete);
    }
  });

  /* sell */
  els.sellBtn.addEventListener('click', openSell);
  els.sellForm.addEventListener('submit', handleSell);
  els.sellPrice.addEventListener('input', formatPriceInput);
  els.sellPhoto.addEventListener('change', handlePhotoChange);
  els.photoRemove.addEventListener('click', () => {
    resetPhoto();
    els.sellPhoto.focus();
  });

  /* inquiry board */
  $('#inquiry-btn').addEventListener('click', openInquiry);
  $('#footer-inquiry').addEventListener('click', (event) => {
    event.preventDefault();
    openInquiry();
  });
  els.inquiryWriteToggle.addEventListener('click', () => {
    els.inquiryForm.hidden = false;
    els.inquiryWriteToggle.hidden = true;
    els.inquiryError.hidden = true;
    $('#inquiry-title').focus();
  });
  $('#inquiry-cancel').addEventListener('click', () => {
    els.inquiryForm.reset();
    els.inquiryForm.hidden = true;
    els.inquiryWriteToggle.hidden = false;
    els.inquiryError.hidden = true;
  });
  els.inquiryForm.addEventListener('submit', submitInquiry);

  els.adminToggle.addEventListener('click', () => {
    if (state.admin) {
      setAdmin(false);
      return;
    }
    els.adminForm.hidden = !els.adminForm.hidden;
    els.adminError.hidden = true;
    if (!els.adminForm.hidden) els.adminPassword.focus();
  });
  els.adminForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (els.adminPassword.value === ADMIN_PASSWORD) {
      setAdmin(true);
      return;
    }
    els.adminError.textContent = '비밀번호가 맞지 않습니다.';
    els.adminError.hidden = false;
    els.adminPassword.select();
  });
  $('#admin-cancel').addEventListener('click', () => {
    els.adminForm.hidden = true;
    els.adminError.hidden = true;
    els.adminPassword.value = '';
  });

  /* modal close */
  document.addEventListener('click', (event) => {
    const closer = event.target.closest('[data-close]');
    if (!closer) return;
    closeModal(closer.closest('.modal'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const top = modalStack[modalStack.length - 1];
    if (top) closeModal(top);
  });

  /* inert placeholder links */
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-noop]');
    if (link) {
      event.preventDefault();
      toast('데모 화면에서는 지원하지 않는 기능입니다.');
    }
  });

  /* 카카오 로그인 모드 표시 + 리다이렉트 복귀 처리 */
  initKakaoMode();
  completeKakaoLogin();
}

init();
