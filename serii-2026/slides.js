/* 서울교육연구정보원 교수학습정보부 사례 발표. 시연만 하고 체험은 하지 않는다.
   인트로(교실에서 바뀐 것 → 디지털화·데이터화 → 교실·교무실에서 교육청으로 이어지는 피드백 루프 → 작은 성공 사례)는 설계 전.
   지금은 선도교사단 덱의 사례 장만 이어 둔 뼈대이고, 표지 제목은 정해지지 않았다. */
(function () {
  var K = window.KIT, X = window.CASES;
  // 비트 세상 3D: 표지 아래 줄과 마지막 문장은 인트로 설계 때 정한다(지금은 비워 둔다)
  window.BITWORLD = {};

  window.SLIDES = [].concat([
  { sec: '시작', title: '표지', html:
    '<div class="cover">' +
      '<div class="eyebrow">서울교육연구정보원 교수학습정보부</div>' +
      '<h1>제목 미정</h1>' +
      '<div class="who"><b>당곡고등학교 송석리</b></div>' +
    '</div>',
    notes: '' }
  ],
  K.part('소개', [X.intro1, X.intro2, X.intro3, X.atomBit, X.bitWorld]),
  K.part('바이브 코딩 프로젝트', [X.sepVibe, X.heatDays, X.heatWeek, X.fourQs, X.tinkervis, X.weaver, X.chat, X.oral, X.interview, X.exambank, X.q4a, X.q4b]));
})();
