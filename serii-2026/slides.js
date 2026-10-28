/* 서울교육연구정보원 교수학습정보부 사례 발표. 시연만 하고 체험은 하지 않는다.
   인트로(교실에서 바뀐 것 → 디지털화·데이터화 → 교실·교무실에서 교육청으로 이어지는 피드백 루프 → 작은 성공 사례)는 설계 전.
   소개·커밋 히트맵 장은 넣지 않고 사례까지만 이은 뒤 감사 인사와 Q&A로 마친다. 표지 제목은 정해지지 않았다. */
(function () {
  var K = window.KIT, X = window.CASES;

  window.SLIDES = [].concat([
  { sec: '시작', title: '표지', html:
    '<div class="cover">' +
      '<div class="eyebrow">서울교육연구정보원 교수학습정보부</div>' +
      '<h1>제목 미정</h1>' +
      '<div class="who"><b>당곡고등학교 송석리</b></div>' +
    '</div>',
    notes: '' }
  ],
  K.part('바이브 코딩 프로젝트', [X.sepVibe, X.fourQs, X.tinkervis, X.weaver, X.chat, X.oral, X.interview, X.exambank, X.q4a, X.q4b]),
  [
  // 마지막: 감사 인사와 Q&A(간지와 같은 보라 바탕)
  { sec: '마무리', title: '감사합니다 · Q&A', fx: 'fade', html: '<div class="sep end"><h2>감사합니다</h2><p class="qa">Q&amp;A</p></div>', notes: '' }
  ]);
})();
