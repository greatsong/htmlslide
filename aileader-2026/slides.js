/* 동작관악 AI에듀테크 선도교사단 1일차(2026-10-29) 슬라이드. 원본은 aileader 레포 slides/(연수 기간 동안 그쪽에서 운영).
   연수 전용 장(표지·지도·체험·연수 메인)은 여기에, 사례는 shared/cases.js에. 2일차 내용은 넣지 않는다(연수생 비공개). */
(function () {
  var K = window.KIT, X = window.CASES, C = K.C, ttl = K.ttl, qttl = K.qttl, pts = K.pts, shot = K.shot, go = K.go, demo = K.demo, live = K.live, liveStep = K.liveStep;
  var HUB = 'greatsong.github.io/aileader', SITE = 'https://' + HUB + '/';
  // 비트 세상 3D의 표지 아래 줄과 마지막 문장
  window.BITWORLD = { 0: { cap: '동작관악 AI에듀테크 선도교사단' }, 8: { then: '오늘, 내일은 <span class="b">데이터</span>와 AI로<br>학교 현장의 여러 문제를<br>어떻게 해결할 수 있을지<br>함께 이야기 나눠볼까요?' } };

  window.SLIDES = [].concat([
  { sec: '시작', title: '표지', html:
    '<div class="cover">' +
      '<div class="eyebrow">동작관악 AI에듀테크 선도교사단</div>' +
      '<h1>바이브코딩 사례 나눔과<br><span class="a">아이데이션 해커톤</span></h1>' +
      '<div class="who"><b>당곡고등학교 송석리</b></div>' +
    '</div>',
    notes: '자, 오늘은 제가 직접 만든 수업용 도구를 보여 드리고 두 앱을 함께 체험하는 시간입니다.\n저는 당곡고등학교 정보 교사로, 올해 2월부터 수업용 도구를 직접 만들어 수업에 사용하고 있습니다.\n먼저 제가 만든 도구 사례를 간단히 살펴보겠습니다.' },

  // 표지 다음: 지도 QR을 크게. 화면을 누르면(1단계) QR 자리에서 실제 앞 화면 지도가 원으로 펼쳐진다
  { sec: '시작', title: '우리 학교를 지도에', steps: 1, html:
    ttl('우리 학교를 지도에') +
    '<div class="qrstage">' +
      '<div class="qrbig"><img alt="" src="qr-map.svg"></div>' +
      '<div class="qrurl">greatsong.github.io/<br>aileader/map</div>' +
    '</div>' +
    live(SITE + 'map/board.html', '앞 화면 지도', '.qrbig'),
    onStep: liveStep,
    notes: '학교를 올리면 앞 화면 지도에 바로 표시됩니다. 궁금한 것을 적어 주시면 오늘 이야기에 반영하겠습니다.\n올라오는 동안 지도를 함께 보며 어느 지역에서 오셨는지 짚어 보겠습니다. 활동 시간은 5분입니다.' }
  ],
  K.part('소개', [X.intro1, X.intro2, X.intro3, X.atomBit, X.bitWorld]),
  K.part('바이브 코딩 프로젝트', [X.sepVibe, X.heatDays, X.heatWeek, X.fourQs, X.tinkervis, X.weaver, X.chat, X.oral, X.interview, X.exambank, X.q4a, X.q4b]),
  [
  { sec: '바이브 코딩 프로젝트', title: '질문 4) 직접 해 보는 두 가지', html:
    qttl('4', '', '', 'AI 시대에 더 필요해진 AI 리터러시와 컴퓨팅 사고력 수업 체험') +
    '<div class="twin">' +
      '<div class="card"><div class="n">체험 1</div><h3>🤖 튜링 테스트</h3><p>반 친구들과 함께 \'기계는 생각할 수 있는가?\'라는 앨런 튜링의 역사적 질문에 참여해보는 게이미피케이션 수업</p><img alt="" src="' + C('기존-튜링-교사-진행화면.png') + '"></div>' +
      '<div class="card"><div class="n">체험 2</div><h3>🧊 프롬프트 코딩</h3><p>3차원 장면을 글로 표현하며 컴퓨팅 사고력을 기르는 게이미피케이션 수업</p><img alt="" src="' + C('10-프롬프트코딩-첫화면.png') + '"></div>' +
    '</div>',
    notes: '네 번째 질문에 대한 답은 말보다 직접 해 보시는 편이 낫습니다.\n두 앱 모두 연수 메인에서 바로 들어갑니다.' },

  { sec: '체험', title: '체험 1) 튜링 테스트', html:
    qttl('1', '체험', '', '튜링 테스트', 'exp', 2) +
    '<div class="url exp top"><div class="lab">연수 메인 → 튜링 테스트</div><div class="u sm">ai-turing-production.up.railway.app/turing-test</div></div>' +
    demo(pts("연수 메인에서 '튜링 테스트' 누르기 | 수업 코드와 팀 이름 넣기 | 질문하고 사람인지 AI인지 투표하기") +
         '<div class="gos">' + go('https://ai-turing-production.up.railway.app/turing-test/teacher', '진행자 화면', true) + '</div>',
         shot('기존-튜링-참가자-대화-확대.png')),   // 대화 부분만 잘라 크게
    notes: '두세 명이 노트북 한 대로 한 팀입니다. 답변을 맡은 팀은 학생인 척 답합니다.\n사람의 답과 AI의 답이 같은 말투로 바뀌고 같은 시간 뒤에 도착하므로 내용으로만 가려내야 합니다. 라운드 1회는 20분입니다.' }
  ],
  K.part('체험', [X.turingReview, X.turing1950]),
  [
  { sec: '체험', title: '체험 2) 프롬프트 코딩', html:
    qttl('2', '체험', '', '프롬프트 코딩', 'exp', 2) +
    '<div class="url exp top"><div class="lab">연수 메인 → 프롬프트 코딩</div><div class="u sm">vpython-prompt-challenge.fly.dev</div></div>' +
    demo(pts("연수 메인에서 '프롬프트 코딩' 누르기 | 수업 코드와 번호·이름 넣기 | 목표 장면을 보고 문장으로 설명해 제출하기") +
         '<div class="gos">' + go('https://vpython-prompt-challenge.fly.dev/training', '진행자 화면', true) + '</div>',
         shot('10-프롬프트코딩-첫화면.png')),
    notes: '두 사람이 한 팀입니다. 코드를 쓰지 않고 장면을 문장으로 설명하면 Claude가 3D 코드로 바꾸고 목표 장면과 비교해 점수를 냅니다.\n제출 뒤 결과까지 기다리는 시간을 안내하겠습니다. 결과까지 보통 15~25초입니다. 두 문제, 20분입니다.' }
  ],
  K.part('체험', [X.promptReview]),
  [
  // 연수 주소. 화면을 누르면(1단계) 주소 상자 자리에서 실제 연수 메인이 펼쳐져 직접 시연한다
  { sec: '마무리', title: '연수 메인 접속', steps: 1, html:
    ttl('연수 메인 접속') +
    '<div class="url"><div class="lab">노트북 주소창에 입력</div><div class="u">' + HUB + '</div></div>' +
    '<div class="dests">' +
      '<div class="d">🗺️ 우리 학교를 지도에</div><div class="d">🤖 튜링 테스트</div>' +
      '<div class="d">🧊 프롬프트 코딩</div><div class="d">🖼️ 웹앱 갤러리</div>' +
    '</div>' +
    live(SITE, '연수 메인', '.url'),
    onStep: liveStep,
    notes: '지금 노트북에서 이 주소를 입력해 주십시오.\n오늘 들어가는 곳은 모두 이 페이지의 링크로 연결됩니다. 열어 둔 채로 진행하겠습니다.' },

  // 마지막: 오늘 저녁 갤러리 올리기(과제, 선택)
  { sec: '마무리', title: '오늘 저녁 (선택)', html:
    ttl('오늘 저녁', '선택') +
    '<div class="url top"><div class="lab">연수 메인 → 웹앱 갤러리</div><div class="u sm">' + HUB + '</div></div>' +
    demo(pts('학교에서 풀고 싶은 문제 한 줄 올리기 | 다른 선생님 글에 좋아요와 댓글 남기기') +
         '<div class="gos">' + go(SITE + 'gallery/#submit', '갤러리에 올리기') + '</div>',
         shot('12-갤러리.png')),
    notes: '오늘 체험과 사례를 보며 떠오른 학교의 문제를 갤러리에 남겨 주십시오. 선택 사항입니다.\n둘째 날 활동은 내일 안내하겠습니다. 감사합니다.' }
  ]);
})();
