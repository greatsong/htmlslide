/* 사례 발표 「데이터가 흐르는 서울교육이 되려면」. 시연만 하고 체험은 하지 않는다.
   흐름: 아톰과 비트(3D) → '만약 ㅇㅇㅇ을 데이터화한다면?' 사례 다섯 → 바이브 코딩 프로젝트(도구 넷) → 마무리 문장 → 질문.
   사례 장은 선도교사단 덱의 본문을 그대로 쓰고 제목만 데이터화 질문으로 바꾼다(KIT.retitle). 장 제목·마무리 문장은 진행자 문장 그대로 */
(function () {
  var K = window.KIT, X = window.CASES, qttl = K.qttl;
  // 아톰·비트 장: 예전 인트로 키노트가 기본(진행자 확정). 주소에 ?atom=3d를 붙이면 3D 비트 세상
  var KEY = !/[?&]atom=3d/.test(location.search);
  window.KEYNOTE = {};   // 표지 아래 줄 없음, 마지막 장(last)도 넣지 않는다: 일곱 장으로 끝나고 데이터화 간지로 이어진다
  window.BITWORLD = {};
  var dq = function (n, name, question) { return qttl(String(n), name, String(n), question, '', 5); };   // 알약: 사례 이름, 큰 제목: 데이터화 질문
  var dcase = function (s, n, name, question) { return K.retitle(s, dq(n, name, question), n + ') ' + question); };
  var weaver = dcase(X.weaver, 1, '서울교육청 협력적 수업설계 AI 에이전트 개발 사례', '성취기준을 데이터화한다면?');
  weaver.html = weaver.html.replace('<li>국어·영어·음악 교사 세 명이 절차를 끝까지 밟아 수업까지 실행한 사례</li>', '');   // 이 발표에서는 뺀다(진행자 지시)

  window.SLIDES = [].concat([
  { sec: '시작', title: '표지', html:
    '<div class="cover">' +
      '<h1>데이터가 흐르는<br><span class="a">서울교육이 되려면</span></h1>' +
      '<div class="who"><b>당곡고등학교 송석리</b></div>' +
    '</div>',
    onStep: function () { if (KEY) K.knLoad(); else K.bwLoad(); },   // 다음 장(아톰·비트)을 미리 불러 둔다
    notes: '' }
  ],
  K.part('시작', [KEY ? X.keynote : X.bitWorld]),
  K.part('데이터화', [
    { title: '만약 ㅇㅇㅇ을 데이터화한다면?', fx: 'fade', html: K.sep('만약 ㅇㅇㅇ을 데이터화한다면?'), notes: '' },
    weaver,
    dcase(X.chat, 2, '당곡 AI 서비스 운영 사례', '학생들의 AI 채팅 기록을 데이터화한다면?'),
    dcase(X.oral, 3, '구술 평가', '프로젝트 과정을 데이터화한다면?'),
    dcase(X.interview, 4, 'AI 면접 앱', '대입 면접 준비 과정을 데이터화한다면?'),
    dcase(X.exambank, 5, '정보과 문항 나눔', '정기 고사 문제를 성취기준별로 데이터화한다면?')
  ]),
  // 도구 넷: 이 발표에는 네 가지 질문 장이 없으므로 알약 번호를 4 대신 1·2로
  K.part('바이브 코딩 프로젝트', [X.sepVibe,
    K.retitle(X.q4a, qttl('1', 'AI 시대에 더 필요해진 사고력과 창조적 문제해결능력', '1', 'pythink2 · VPyLab', '', 2), '1) pythink2 · VPyLab'),
    K.retitle(X.q4b, qttl('2', 'AI 시대에 더 필요해진 AI에 대한 수학적 이해와 데이터 리터러시', '2', 'Neural Explorer · 당곡고 데이터 과학', '', 2), '2) Neural Explorer · 당곡고 데이터 과학')]),
  [
  // 마무리 문장: 앞쪽 장처럼 제목을 두고, 클릭할 때마다 한 문장씩 나타난다
  { sec: '마무리', title: '마무리', html:
    K.ttl('마무리') +
    '<div class="closing">' +
      '<p data-s="1">모든 것이 디지털화된 것 같지만, 아직 우리는 어떤 데이터를 어떻게 수집하고 어떻게 가공해서 어떤 피드백 루프를 만들 것인지 고민하지 않았습니다.</p>' +
      '<p data-s="2" class="b">그리고 지금이 우리 서울교육이 데이터화되기에 가장 빠른 때입니다.</p>' +
    '</div>',
    notes: '' },

  // 마지막: 감사 인사와 질문(간지와 같은 보라 바탕)
  { sec: '마무리', title: '감사합니다 · Q&A', fx: 'fade', html: '<div class="sep end"><h2>감사합니다</h2><p class="qa">Q&amp;A</p></div>', notes: '' }
  ]);
})();
