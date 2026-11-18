/* ==========================================================================
   SoundYard — app.js
   ========================================================================== */

'use strict';

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
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 12,
    likes: 41,
    views: 812,
    seller: { name: '정오의스튜디오', joined: '2021.03', deals: 41, response: 98 },
    specs: [
      ['제조사', 'Neumann'],
      ['모델명', 'TLM 103'],
      ['구입 시기', '2023년 5월'],
      ['구성품', '원박스, 충격방지 케이스, 시리얼 카드'],
      ['시리얼·박스', '시리얼 카드와 박스 모두 있음']
    ],
    desc: '2023년 5월에 새로 구입해 개인 보컬 녹음에만 사용했습니다. 그릴 찍힘 없이 깔끔하고 본체 스크래치도 거의 없습니다.\n\n박스, 충격방지 케이스, 시리얼 카드 모두 있습니다. 마포구 합정동 직거래 또는 택배 가능하며, 택배는 선불로 보내드립니다.',
    image: 'assets/mic-tlm103.svg'
  },
  {
    id: 'sy-002',
    title: 'Neve 1073 SPX 마이크 프리앰프',
    category: CAT.OUTBOARD,
    brand: 'AMS Neve',
    price: 3900000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 강남구',
    minutesAgo: 68,
    likes: 22,
    views: 504,
    seller: { name: '아날로그공방', joined: '2020.11', deals: 58, response: 96 },
    specs: [
      ['제조사', 'AMS Neve'],
      ['모델명', '1073 SPX'],
      ['구입 시기', '2020년 11월'],
      ['구성품', '원박스, 매뉴얼, 전원 케이블'],
      ['시리얼·박스', '모두 있음']
    ],
    desc: '2020년 말에 구입해서 스튜디오 랙에 고정으로만 사용했습니다. 노브 헤이즈나 채널 노이즈 없이 정상 작동하고, 올해 초 정식 서비스센터에서 점검받았습니다.\n\n원박스와 매뉴얼 있습니다. 강남구 신사동 직거래 선호하고, 택배는 운송비 별도로 보내드립니다.',
    image: 'assets/outboard-neve1073.svg'
  },
  {
    id: 'sy-003',
    title: 'API 512c 500 시리즈 프리앰프',
    category: CAT.OUTBOARD,
    brand: 'API',
    price: 780000,
    condition: 'B급',
    trade: ['직거래', '택배'],
    region: '경기 성남시',
    minutesAgo: 180,
    likes: 18,
    views: 377,
    seller: { name: '랙마스터', joined: '2022.02', deals: 23, response: 94 },
    specs: [
      ['제조사', 'API'],
      ['모델명', '512c'],
      ['구입 시기', '2022년 2월'],
      ['구성품', '모듈 본체, 전원 케이블'],
      ['시리얼·박스', '박스 없음, 시리얼 스티커 확인 가능']
    ],
    desc: '500 시리즈 랙에 꽂아 쓰던 모듈입니다. 페이스에 미세한 기스가 몇 군데 있고 노브 상태는 깔끔합니다. 게인 노이즈나 채널 이상 없습니다.\n\n박스는 없고 모듈과 전원 케이블만 드립니다. 성남시 분당구 직거래 가능하고 택배도 됩니다.',
    image: 'assets/outboard-api512.svg'
  },
  {
    id: 'sy-004',
    title: 'Genelec 8030C 스튜디오 모니터 페어',
    category: CAT.SPEAKER,
    brand: 'Genelec',
    price: 1480000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 용산구',
    minutesAgo: 240,
    likes: 27,
    views: 691,
    seller: { name: '모니터링랩', joined: '2021.08', deals: 19, response: 99 },
    specs: [
      ['제조사', 'Genelec'],
      ['모델명', '8030C (페어)'],
      ['구입 시기', '2021년 8월'],
      ['구성품', '전원 케이블 2개, 원박스 2개'],
      ['시리얼·박스', '시리얼 일치, 박스 모두 있음']
    ],
    desc: '페어로 2021년에 구입했습니다. 스튜디오에서만 사용했고 하우징 변색이나 우퍼 눌림 없이 상태 좋습니다.\n\n전원 케이블과 원박스 2개 모두 있습니다. 용산구 이촌동 직거래 또는 택배 가능하며, 오셔서 시연 후 거래하셔도 됩니다.',
    image: 'assets/speaker-genelec8030.svg'
  },
  {
    id: 'sy-005',
    title: 'Yamaha HS8 화이트 스튜디오 모니터 페어',
    category: CAT.SPEAKER,
    brand: 'Yamaha',
    price: 620000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '경기 구리시',
    minutesAgo: 1560,
    likes: 12,
    views: 205,
    seller: { name: '구리사운드', joined: '2023.11', deals: 12, response: 95 },
    specs: [
      ['제조사', 'Yamaha'],
      ['모델명', 'HS8 (화이트, 페어)'],
      ['구입 시기', '2023년 11월'],
      ['구성품', '전원 케이블 2개, 박스 1개'],
      ['시리얼·박스', '시리얼 확인 가능, 박스는 한쪽만']
    ],
    desc: '화이트 모델 페어입니다. 2023년 말에 구입해서 홈스튜디오에서 가볍게 사용했습니다. 우퍼 주변 먼지 정도만 있고 외관 상태 좋습니다.\n\n박스는 한쪽만 있고 전원 케이블은 포함입니다. 구리시 갈매동 직거래 가능하고, 택배는 착불로 보내드립니다.',
    image: 'assets/speaker-hs8.svg'
  },
  {
    id: 'sy-006',
    title: 'Universal Audio Apollo Twin X Duo Heritage Edition',
    category: CAT.INTERFACE,
    brand: 'Universal Audio',
    price: 1290000,
    condition: 'S급',
    trade: ['직거래', '택배'],
    region: '서울 송파구',
    minutesAgo: 25,
    likes: 35,
    views: 742,
    seller: { name: '송파레코딩', joined: '2024.01', deals: 31, response: 97 },
    specs: [
      ['제조사', 'Universal Audio'],
      ['모델명', 'Apollo Twin X Duo Heritage Edition'],
      ['구입 시기', '2024년 1월'],
      ['구성품', '원박스, USB-C 케이블, 등록 카드'],
      ['시리얼·박스', '모두 있음, 플러그인 미등록 상태']
    ],
    desc: '2024년 1월 구입한 Heritage Edition입니다. 개인 작업실에서 데스크에 고정해 사용했고 페이스 눌림이나 잭 헐거움 없습니다.\n\n원박스와 USB-C 케이블, 등록 카드 있습니다. 구입 후 플러그인은 등록하지 않았습니다. 송파구 잠실 직거래 또는 택배 가능합니다.',
    image: 'assets/interface-apollo.svg'
  },
  {
    id: 'sy-007',
    title: 'RME Babyface Pro FS 오디오 인터페이스',
    category: CAT.INTERFACE,
    brand: 'RME',
    price: 950000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '대전 유성구',
    minutesAgo: 2880,
    likes: 19,
    views: 463,
    seller: { name: '대전톤랩', joined: '2022.06', deals: 16, response: 96 },
    specs: [
      ['제조사', 'RME'],
      ['모델명', 'Babyface Pro FS'],
      ['구입 시기', '2022년 6월'],
      ['구성품', '원박스, USB 케이블, 광출력 어댑터'],
      ['시리얼·박스', '모두 있음']
    ],
    desc: '2022년에 구입해서 노트북 작업용으로 사용했습니다. 알루미늄 하우징에 생활 기스가 조금 있고, 노브와 모든 입출력은 정상입니다.\n\n박스, USB 케이블, 광출력 어댑터 포함입니다. 대전 유성구 직거래 또는 택배로 보내드립니다.',
    image: 'assets/interface-babyface.svg'
  },
  {
    id: 'sy-008',
    title: 'SSL SiX 데스크톱 콘솔',
    category: CAT.MIXER,
    brand: 'Solid State Logic',
    price: 1750000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 360,
    likes: 16,
    views: 389,
    seller: { name: '합정뮤직', joined: '2021.10', deals: 27, response: 98 },
    specs: [
      ['제조사', 'Solid State Logic'],
      ['모델명', 'SiX'],
      ['구입 시기', '2021년 10월'],
      ['구성품', '원박스, 전원 어댑터'],
      ['시리얼·박스', '모두 있음']
    ],
    desc: '2021년 구입해서 홈스튜디오 메인 콘솔로 사용했습니다. 페이더 노이즈 없고 모든 채널 정상 작동합니다.\n\n원박스와 전원 어댑터 포함, 매뉴얼은 PDF로 드립니다. 마포구 서교동 직거래 가능하고 택배는 착불입니다.',
    image: 'assets/mixer-sslsix.svg'
  },
  {
    id: 'sy-009',
    title: 'Ableton Live 12 Suite 정품 라이선스 이전',
    category: CAT.SOFTWARE,
    brand: 'Ableton',
    price: 480000,
    condition: 'S급',
    trade: ['직거래'],
    region: '서울 관악구',
    minutesAgo: 300,
    likes: 9,
    views: 288,
    seller: { name: '관악비트', joined: '2023.09', deals: 8, response: 92 },
    specs: [
      ['제조사', 'Ableton'],
      ['모델명', 'Live 12 Suite'],
      ['구입 시기', '2023년 9월'],
      ['구성품', '정품 라이선스 (박스·USB 없음)'],
      ['시리얼·박스', '라이선스만 이전, 계정 이전 동의 필요']
    ],
    desc: 'Ableton Live 12 Suite 정품 라이선스 이전 판매입니다. 제 계정에서 이전 처리 도와드리고, 결제 후 Ableton 고객센터 이전 절차까지 같이 진행합니다.\n\n박스나 USB는 없는 디지털 라이선스 상품입니다. 관악구 봉천동 직거래 또는 원격으로 진행 가능합니다.',
    image: 'assets/software-ableton.svg'
  },
  {
    id: 'sy-010',
    title: 'Nord Stage 3 88 스테이지 피아노',
    category: CAT.KEYBOARD,
    brand: 'Nord',
    price: 3200000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 서초구',
    minutesAgo: 480,
    likes: 31,
    views: 655,
    seller: { name: '서초키보드', joined: '2022.03', deals: 22, response: 97 },
    specs: [
      ['제조사', 'Nord'],
      ['모델명', 'Stage 3 88'],
      ['구입 시기', '2022년 3월'],
      ['구성품', '하드 케이스, 원박스, 전원 케이블'],
      ['시리얼·박스', '모두 있음']
    ],
    desc: 'Nord Stage 3 88, 2022년 구입했습니다. 집에서만 사용해서 건반 헐거움이나 노브 유격 없고 모든 기능 정상입니다.\n\n하드 케이스와 원박스, 전원 케이블 포함입니다. 서초구 반포동 직거래 선호하고 택배는 운송비 별도입니다.',
    image: 'assets/keyboard-nord.svg'
  },
  {
    id: 'sy-011',
    title: 'Roland FP-30X 디지털 피아노 (화이트)',
    category: CAT.KEYBOARD,
    brand: 'Roland',
    price: 620000,
    condition: 'B급',
    trade: ['직거래', '택배'],
    region: '인천 부평구',
    minutesAgo: 2880,
    likes: 7,
    views: 164,
    seller: { name: '부평피아노', joined: '2024.02', deals: 11, response: 95 },
    specs: [
      ['제조사', 'Roland'],
      ['모델명', 'FP-30X (화이트)'],
      ['구입 시기', '2024년 2월'],
      ['구성품', '스탠드, 악보대, 원박스'],
      ['시리얼·박스', '모두 있음']
    ],
    desc: '2024년 2월에 구입한 화이트 모델입니다. 입문용으로 집에서 1년 정도 사용했고 건반과 스피커 모두 정상입니다.\n\n스탠드와 악보대, 원박스 포함입니다. 인천 부평구 직거래 가능하고 택배도 됩니다.',
    image: 'assets/keyboard-fp30x.svg'
  },
  {
    id: 'sy-012',
    title: 'Fender American Professional II Stratocaster (3-Color Sunburst)',
    category: CAT.GUITAR,
    brand: 'Fender',
    price: 1850000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 30,
    likes: 44,
    views: 1038,
    seller: { name: '홍대기타', joined: '2022.09', deals: 44, response: 98 },
    specs: [
      ['제조사', 'Fender'],
      ['모델명', 'American Professional II Stratocaster'],
      ['구입 시기', '2022년 9월 (미국 현지 구입)'],
      ['구성품', '하드 케이스, 트레몰로 암, 백플레이트'],
      ['시리얼·박스', '시리얼 카드 있음, 원박스 없음']
    ],
    desc: '2022년 미국에서 직접 구입한 American Professional II Stratocaster입니다. 3-Color Sunburst, 로즈우드 지판입니다.\n\n연주 흔적은 약간 있지만 넥과 프렛 상태 좋고 개조나 수리 이력 없습니다. 하드 케이스, 암, 백플레이트 포함이며 마포구 홍대입구 직거래 선호합니다.',
    image: 'assets/guitar-strat.svg'
  },
  {
    id: 'sy-013',
    title: 'Fender Player Jazz Bass (Mexican, Sunburst)',
    category: CAT.BASS,
    brand: 'Fender',
    price: 780000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '경기 수원시',
    minutesAgo: 1440,
    likes: 15,
    views: 342,
    seller: { name: '수원베이스', joined: '2023.04', deals: 18, response: 96 },
    specs: [
      ['제조사', 'Fender'],
      ['모델명', 'Player Jazz Bass (멕시코산)'],
      ['구입 시기', '2023년 4월'],
      ['구성품', '기그백, 트러스로드 렌치'],
      ['시리얼·박스', '시리얼 확인 가능, 박스 없음']
    ],
    desc: 'Fender Player Jazz Bass, 2023년 구입했습니다. 선셋 새틴 마감이고 픽가드에 미세 기스 외에는 깔끔합니다.\n\n넥 휨 없고 프렛 마모 거의 없습니다. 기그백 포함이며 수원시 인계동 직거래 또는 택배 가능합니다.',
    image: 'assets/bass-jazz.svg'
  },
  {
    id: 'sy-014',
    title: 'Roland TD-17KVX 전자드럼 세트',
    category: CAT.DRUM,
    brand: 'Roland',
    price: 1050000,
    condition: 'A급',
    trade: ['직거래'],
    region: '서울 광진구',
    minutesAgo: 660,
    likes: 23,
    views: 517,
    seller: { name: '광진드럼', joined: '2023.07', deals: 14, response: 95 },
    specs: [
      ['제조사', 'Roland'],
      ['모델명', 'TD-17KVX'],
      ['구입 시기', '2023년 7월'],
      ['구성품', '모듈, 패드 일체, 하이햇 스탠드, 페달, 드럼키'],
      ['시리얼·박스', '시리얼 확인 가능, 원박스 일부']
    ],
    desc: 'Roland TD-17KVX 전자드럼 세트입니다. 2023년 구입해서 집에서만 사용했고 패드 감도와 모듈 모두 정상입니다.\n\n하이햇 스탠드, 페달, 드럼키, 원박스 일부 포함입니다. 부피 때문에 광진구 구의동 직거래만 가능합니다.',
    image: 'assets/drums-td17.svg'
  },
  {
    id: 'sy-015',
    title: 'Yamaha YAS-280 알토 색소폰',
    category: CAT.WIND,
    brand: 'Yamaha',
    price: 950000,
    condition: 'B급',
    trade: ['직거래', '택배'],
    region: '대구 수성구',
    minutesAgo: 4320,
    likes: 6,
    views: 198,
    seller: { name: '대구관악', joined: '2021.12', deals: 9, response: 93 },
    specs: [
      ['제조사', 'Yamaha'],
      ['모델명', 'YAS-280'],
      ['구입 시기', '2021년 12월'],
      ['구성품', '케이스, 마우스피스, 리가처, 스트랩'],
      ['시리얼·박스', '시리얼 확인 가능, 박스 없음']
    ],
    desc: 'Yamaha YAS-280 알토 색소폰입니다. 2021년 구입 후 취미로만 불었고, 최근에 패드 교체와 오버홀을 받아 상태 좋습니다.\n\n케이스, 마우스피스, 리가처, 스트랩 포함입니다. 대구 수성구 직거래 또는 택배 가능합니다.',
    image: 'assets/wind-sax.svg'
  },
  {
    id: 'sy-016',
    title: 'Yamaha V5SC 4/4 바이올린 세트',
    category: CAT.STRING,
    brand: 'Yamaha',
    price: 320000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 노원구',
    minutesAgo: 5760,
    likes: 4,
    views: 121,
    seller: { name: '노원스트링', joined: '2024.03', deals: 6, response: 94 },
    specs: [
      ['제조사', 'Yamaha'],
      ['모델명', 'V5SC 4/4'],
      ['구입 시기', '2024년 3월'],
      ['구성품', '활, 케이스, 어깨받침'],
      ['시리얼·박스', '시리얼 확인 가능, 박스 있음']
    ],
    desc: 'Yamaha V5SC 4/4 바이올린입니다. 2024년에 구입했지만 학원을 그만두게 되어 판매합니다.\n\n활, 케이스, 어깨받침 포함이고 스트링은 기본 상태입니다. 서울 노원구 직거래 또는 택배 가능합니다.',
    image: 'assets/strings-violin.svg'
  },
  {
    id: 'sy-017',
    title: 'Strymon BigSky 리버브 페달',
    category: CAT.PEDAL,
    brand: 'Strymon',
    price: 520000,
    condition: 'S급',
    trade: ['직거래', '택배'],
    region: '서울 마포구',
    minutesAgo: 15,
    likes: 38,
    views: 864,
    seller: { name: '마포페달', joined: '2023.02', deals: 36, response: 99 },
    specs: [
      ['제조사', 'Strymon'],
      ['모델명', 'BigSky'],
      ['구입 시기', '2023년 2월'],
      ['구성품', '원박스, 매뉴얼, 전원 어댑터'],
      ['시리얼·박스', '모두 있음']
    ],
    desc: 'Strymon BigSky 리버브입니다. 2023년 구입해서 보드에 올려 집에서만 사용했습니다. 스위치와 노브 정상이고 스크래치 거의 없습니다.\n\n원박스, 매뉴얼, 전원 어댑터 포함입니다. 마포구 상수동 직거래 가능하고 택배도 됩니다.',
    image: 'assets/pedal-bigsky.svg'
  },
  {
    id: 'sy-018',
    title: '높이조절 원목 스튜디오 데스크 1500 (8U 랙 포함)',
    category: CAT.FURNITURE,
    brand: '자작',
    price: 280000,
    condition: 'A급',
    trade: ['직거래'],
    region: '경기 하남시',
    minutesAgo: 2880,
    likes: 5,
    views: 143,
    seller: { name: '하남목공', joined: '2022.11', deals: 13, response: 97 },
    specs: [
      ['제조사', '자작 (하남목공)'],
      ['모델명', '스튜디오 데스크 1500'],
      ['구입 시기', '2022년 11월'],
      ['구성품', '상판, 8U 랙 베이, 케이블 트레이'],
      ['시리얼·박스', '해당 없음 (가구)']
    ],
    desc: '높이 조절되는 원목 스튜디오 데스크 1500입니다. 상판은 자작나무 집성목이고 8U 랙 베이와 케이블 트레이가 포함됩니다.\n\n사용감은 있지만 흔들림 없고 상태 좋습니다. 하남시 미사동에서 직접 가져가실 분만 구합니다. 택배는 어렵습니다.',
    image: 'assets/furniture-desk.svg'
  },
  {
    id: 'sy-019',
    title: 'Mogami 2549 XLR 케이블 5m 4본 (Neutrik)',
    category: CAT.CABLE,
    brand: 'Mogami',
    price: 180000,
    condition: 'A급',
    trade: ['직거래', '택배'],
    region: '서울 성동구',
    minutesAgo: 420,
    likes: 11,
    views: 276,
    seller: { name: '성동케이블', joined: '2024.05', deals: 21, response: 96 },
    specs: [
      ['제조사', 'Mogami'],
      ['모델명', '2549 (Neutrik 커넥터, 5m)'],
      ['구입 시기', '2024년 5월'],
      ['구성품', 'XLR 케이블 4본, 케이블 타이'],
      ['시리얼·박스', '해당 없음']
    ],
    desc: 'Mogami 2549 케이블 5m 4본입니다. Neutrik XLR 커넥터로 작업해서 사용했고 모두 정상입니다.\n\n케이블 타이 묶어서 드리고 커넥터 접점 이상 없습니다. 성동구 성수동 직거래 또는 택배 가능합니다.',
    image: 'assets/cable-xlr.svg'
  },
  {
    id: 'sy-020',
    title: 'SKB 8U 랙 케이스 (충격 방지)',
    category: CAT.ETC,
    brand: 'SKB',
    price: 150000,
    condition: 'B급',
    trade: ['직거래'],
    region: '경기 고양시',
    minutesAgo: 7200,
    likes: 3,
    views: 98,
    seller: { name: '고양라이브', joined: '2021.05', deals: 17, response: 94 },
    specs: [
      ['제조사', 'SKB'],
      ['모델명', '8U 랙 케이스'],
      ['구입 시기', '2021년 5월'],
      ['구성품', '케이스 본체, 랙 나사 세트'],
      ['시리얼·박스', '시리얼 확인 가능, 박스 없음']
    ],
    desc: 'SKB 8U 랙 케이스입니다. 2021년에 구입해서 이동 공연 때 몇 번 사용했습니다. 잠금쇠와 손잡이 모두 정상이고 내부 랙 레일 나사도 구비되어 있습니다.\n\n무게가 있어 고양시 일산동 직거래만 가능합니다.',
    image: 'assets/etc-rackcase.svg'
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
  } catch (err) {
    /* 저장이 막힌 브라우저에서는 이번 세션에만 유지 */
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
  conditions: new Set(),
  trades: new Set(),
  sort: 'latest',
  user: readJSON('sy_user', null),
  wishlist: new Set(readJSON('sy_wishlist', [])),
  custom: readJSON('sy_custom_listings', []).map((item) => ({
    ...item,
    image: item.image || CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES[CAT.ETC]
  }))
};

let currentDetailId = null;
let pendingIntent = null;
let lastFocused = null;
let toastTimer = null;
let sellCondition = 'A급';
let newCardTimer = null;

/* -------------------------------------------------------------------- views */

const els = {
  nav: $('#category-nav'),
  grid: $('#listing-grid'),
  empty: $('#empty-state'),
  count: $('#result-count'),
  title: $('#list-title'),
  sub: $('#list-sub'),
  search: $('#search-input'),
  searchClear: $('#search-clear'),
  sort: $('#sort-select'),
  reset: $('#reset-filters'),
  authBtn: $('#auth-btn'),
  sellBtn: $('#sell-btn'),
  userMenu: $('#user-menu'),
  userAvatar: $('#user-avatar'),
  userName: $('#user-name'),
  logoutBtn: $('#logout-btn'),
  authModal: $('#auth-modal'),
  detailModal: $('#detail-modal'),
  sellModal: $('#sell-modal'),
  detailContent: $('#detail-content'),
  authNotice: $('#auth-notice'),
  loginForm: $('#login-form'),
  signupForm: $('#signup-form'),
  tabLogin: $('#tab-login'),
  tabSignup: $('#tab-signup'),
  loginError: $('#login-error'),
  signupError: $('#signup-error'),
  sellForm: $('#sell-form'),
  sellCategory: $('#sell-category'),
  sellPrice: $('#sell-price'),
  sellDesc: $('#sell-desc'),
  descCount: $('#desc-count'),
  sellError: $('#sell-error'),
  toast: $('#toast')
};

function allListings() {
  return [...state.custom, ...seedListings];
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
      [item.title, item.brand, item.condition, item.region, item.category, item.desc]
        .join(' ').toLowerCase().includes(query)
    ));
  }

  if (state.conditions.size > 0) {
    list = list.filter((item) => state.conditions.has(item.condition));
  }

  if (state.trades.size > 0) {
    list = list.filter((item) => item.trade.some((t) => state.trades.has(t)));
  }

  if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => b.postedAt - a.postedAt);

  return list;
}

function cardHTML(item) {
  return `
    <article class="listing-card" role="button" tabindex="0" data-id="${esc(item.id)}" aria-label="${esc(item.title)}, ${won(item.price)}원, ${esc(item.condition)}, ${esc(item.region)}">
      <div class="card-thumb">
        <span class="badge" data-grade="${esc(item.condition)}">${esc(item.condition)}</span>
        <img src="${esc(item.image)}" alt="${esc(item.title)} 상품 이미지" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-brand">${esc(item.brand)}</p>
        <h3 class="card-title">${esc(item.title)}</h3>
        <p class="card-price">${won(item.price)}<span class="won">원</span></p>
        <div class="card-foot">
          <span class="region-time">
            <span class="region">${esc(item.region)}</span>
            <span class="dot">·</span>
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
  els.sub.textContent = state.query.trim()
    ? `‘${state.query.trim()}’ 검색 결과`
    : '중고 음향기기와 악기를 한자리에서';

  $$('.chip').forEach((chip) => {
    const set = chip.dataset.filter === 'condition' ? state.conditions : state.trades;
    chip.setAttribute('aria-pressed', set.has(chip.dataset.value) ? 'true' : 'false');
  });

  const hasFilters = state.category !== '전체' || state.query.trim() || state.conditions.size || state.trades.size;
  els.reset.hidden = !hasFilters;
  els.searchClear.hidden = !state.query;

  syncNav();
}

/* ------------------------------------------------------------------- modals */

function openModal(el) {
  lastFocused = document.activeElement;
  el.classList.add('is-open');
  el.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const focusTarget = $('.modal-close', el);
  if (focusTarget) setTimeout(() => focusTarget.focus(), 30);
}

function closeModal(el) {
  if (!el || !el.classList.contains('is-open')) return;
  el.classList.remove('is-open');
  el.setAttribute('aria-hidden', 'true');
  if (el === els.authModal) {
    pendingIntent = null;
    els.authNotice.hidden = true;
  }
  if (!document.querySelector('.modal.is-open')) {
    document.body.style.overflow = '';
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }
}

/* ------------------------------------------------------------------- detail */

function specRows(item) {
  const specs = Array.isArray(item.specs) ? item.specs.slice() : [];
  specs.push(['거래 지역', item.region]);
  specs.push(['거래 방식', item.trade.join(', ')]);
  return specs.map(([label, value]) => (
    `<div class="spec-row"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`
  )).join('');
}

function detailHTML(item) {
  const wished = state.wishlist.has(item.id);
  const initial = item.seller.name.trim().charAt(0) || '판';

  return `
    <div class="detail-media">
      <img src="${esc(item.image)}" alt="${esc(item.title)} 상품 이미지">
    </div>
    <div class="detail-body">
      <p class="detail-eyebrow">${esc(item.category)} <span>·</span> ${esc(item.brand)}</p>
      <h2 class="detail-title" id="detail-title">${esc(item.title)}</h2>
      <p class="detail-price">${won(item.price)}<span class="won">원</span></p>
      <div class="detail-tags">
        <span class="detail-tag is-grade">${esc(item.condition)}</span>
        ${item.trade.map((t) => `<span class="detail-tag">${esc(t)}</span>`).join('')}
        <span class="detail-tag">${esc(item.region)}</span>
      </div>

      <dl class="spec-list">${specRows(item)}</dl>

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
      <h3>상품 설명</h3>
      <p>${esc(item.desc)}</p>
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

/* --------------------------------------------------------------------- auth */

function setAuthTab(tab) {
  const isLogin = tab === 'login';
  els.tabLogin.classList.toggle('is-active', isLogin);
  els.tabSignup.classList.toggle('is-active', !isLogin);
  els.tabLogin.setAttribute('aria-selected', String(isLogin));
  els.tabSignup.setAttribute('aria-selected', String(!isLogin));
  els.loginForm.hidden = !isLogin;
  els.signupForm.hidden = isLogin;
  els.loginError.hidden = true;
  els.signupError.hidden = true;
}

function showAuth(notice) {
  els.authNotice.hidden = !notice;
  els.authNotice.textContent = notice || '';
  setAuthTab('login');
  els.loginForm.reset();
  els.signupForm.reset();
  openModal(els.authModal);
  setTimeout(() => els.loginForm.querySelector('input:not([type=hidden])').focus(), 80);
}

function renderHeader() {
  const loggedIn = Boolean(state.user);
  els.authBtn.hidden = loggedIn;
  els.userMenu.hidden = !loggedIn;

  if (loggedIn) {
    const name = state.user.name || '회원';
    els.userName.textContent = name;
    els.userAvatar.textContent = name.trim().charAt(0) || '회';
  }
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

function handleLogin(event) {
  event.preventDefault();
  const email = $('#login-email').value.trim();
  const password = $('#login-password').value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    els.loginError.textContent = '올바른 이메일 주소를 입력해 주세요.';
    els.loginError.hidden = false;
    $('#login-email').focus();
    return;
  }
  if (!password) {
    els.loginError.textContent = '비밀번호를 입력해 주세요.';
    els.loginError.hidden = false;
    $('#login-password').focus();
    return;
  }

  const name = email.split('@')[0].slice(0, 10);
  loginUser({ name, email, provider: 'email' });
}

function handleSignup(event) {
  event.preventDefault();
  const name = $('#signup-name').value.trim();
  const email = $('#signup-email').value.trim();
  const password = $('#signup-password').value;
  const password2 = $('#signup-password2').value;
  const agree = $('#signup-agree').checked;

  const fail = (message, field) => {
    els.signupError.textContent = message;
    els.signupError.hidden = false;
    if (field) field.focus();
  };

  if (name.length < 2) return fail('닉네임을 2자 이상 입력해 주세요.', $('#signup-name'));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('올바른 이메일 주소를 입력해 주세요.', $('#signup-email'));
  if (password.length < 8) return fail('비밀번호는 8자 이상이어야 합니다.', $('#signup-password'));
  if (password !== password2) return fail('비밀번호가 일치하지 않습니다.', $('#signup-password2'));
  if (!agree) return fail('이용약관 및 개인정보처리방침에 동의해 주세요.', $('#signup-agree'));

  loginUser({ name, email, provider: 'email' }, `${name}님, 가입이 완료되었습니다.`);
}

function loginWithProvider(provider) {
  loginUser(
    { name: '사운드러버', email: 'soundlover@soundyard.kr', provider },
    `${provider} 계정으로 로그인되었습니다. (데모)`
  );
}

/* --------------------------------------------------------------------- sell */

function openSell() {
  if (!state.user) {
    pendingIntent = 'sell';
    showAuth('판매하기는 로그인 후 이용할 수 있습니다.');
    return;
  }
  els.sellForm.reset();
  els.sellError.hidden = true;
  els.sellDesc.value = '';
  els.descCount.textContent = '0';
  sellCondition = 'A급';
  $$('.segment', $('#sell-condition')).forEach((seg) => {
    seg.setAttribute('aria-checked', String(seg.dataset.value === sellCondition));
  });
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
  const region = $('#sell-region').value.trim();
  const desc = els.sellDesc.value.trim();
  const trade = $$('input[name="trade"]:checked', els.sellForm).map((input) => input.value);

  const fail = (message, field) => {
    els.sellError.textContent = message;
    els.sellError.hidden = false;
    if (field) field.focus();
  };

  if (!category) return fail('카테고리를 선택해 주세요.', els.sellCategory);
  if (title.length < 2) return fail('제목을 2자 이상 입력해 주세요.', $('#sell-title'));
  if (!price) return fail('가격을 입력해 주세요.', els.sellPrice);
  if (!region) return fail('거래 지역을 입력해 주세요.', $('#sell-region'));
  if (trade.length === 0) return fail('거래 방식을 하나 이상 선택해 주세요.');

  const item = {
    id: `u-${Date.now()}`,
    title,
    category,
    brand: '개인 판매',
    price,
    condition: sellCondition,
    trade,
    region,
    postedAt: Date.now(),
    likes: 0,
    views: 0,
    seller: {
      name: state.user.name,
      joined: `${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, '0')}`,
      deals: 0,
      response: 100
    },
    specs: [
      ['카테고리', category],
      ['구성품', desc ? '상품 설명 참고' : '미기재'],
      ['시리얼·박스', '미기재']
    ],
    desc: desc || '상세 설명이 등록되지 않았습니다. 판매자에게 채팅으로 문의해 주세요.',
    image: CATEGORY_IMAGES[category] || CATEGORY_IMAGES[CAT.ETC],
    custom: true
  };

  state.custom.unshift(item);
  writeJSON('sy_custom_listings', state.custom);

  closeModal(els.sellModal);
  resetAll(true);
  render();
  toast('매물이 등록되었습니다.');

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

/* ------------------------------------------------------------------ controls */

function resetAll(clearSort = true) {
  state.category = '전체';
  state.query = '';
  state.conditions.clear();
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
      const set = chip.dataset.filter === 'condition' ? state.conditions : state.trades;
      const value = chip.dataset.value;
      if (set.has(value)) set.delete(value);
      else set.add(value);
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

    if (event.target.closest('[data-chat]')) {
      if (!state.user) {
        pendingIntent = 'chat';
        showAuth('채팅 문의는 로그인 후 이용할 수 있습니다.');
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
  $('#auth-btn').addEventListener('click', () => showAuth(''));
  els.logoutBtn.addEventListener('click', () => {
    state.user = null;
    try { localStorage.removeItem('sy_user'); } catch (err) { /* noop */ }
    renderHeader();
    toast('로그아웃되었습니다.');
  });

  els.tabLogin.addEventListener('click', () => setAuthTab('login'));
  els.tabSignup.addEventListener('click', () => setAuthTab('signup'));
  els.loginForm.addEventListener('submit', handleLogin);
  els.signupForm.addEventListener('submit', handleSignup);

  $$('.social-btn').forEach((btn) => {
    btn.addEventListener('click', () => loginWithProvider(btn.dataset.provider));
  });

  /* sell */
  els.sellBtn.addEventListener('click', openSell);
  els.sellForm.addEventListener('submit', handleSell);
  els.sellPrice.addEventListener('input', formatPriceInput);
  els.sellDesc.addEventListener('input', () => {
    els.descCount.textContent = String(els.sellDesc.value.length);
  });

  $$('.segment', $('#sell-condition')).forEach((seg) => {
    seg.addEventListener('click', () => {
      sellCondition = seg.dataset.value;
      $$('.segment', $('#sell-condition')).forEach((s) => {
        s.setAttribute('aria-checked', String(s === seg));
      });
    });
  });

  /* modal close */
  document.addEventListener('click', (event) => {
    const closer = event.target.closest('[data-close]');
    if (!closer) return;
    closeModal(closer.closest('.modal'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const open = $$('.modal.is-open');
    if (open.length) closeModal(open[open.length - 1]);
  });

  /* inert placeholder links */
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-noop]');
    if (link) {
      event.preventDefault();
      toast('데모 화면에서는 지원하지 않는 기능입니다.');
    }
  });
}

init();
