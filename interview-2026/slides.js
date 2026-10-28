/* 「당곡 AI 모의 면접」 사례 공유 슬라이드. 모양은 구술 평가 덱(ai-ta-project-assessment)을 따른다(scenes.css).
   문구: 장 제목과 화면 이름표는 고정, 리드·항목·노트는 솔라 프로4 집필(_src/interview-2026/solar_v1*.md에서 골라 조립).
   화면은 모두 가짜 학생(김당곡) 자료: 교사 화면은 시연 서버(demo/data-aileader)에서, 학생 화면은 interview-coach/manual/shots에서.
   그림: art/iv_*.webp는 같은 캐릭터 시트를 참고해 새로 그린 것, 나머지는 구술 평가 덱 그림 */
(function () {
  var C = function (f) { return 'captures/' + encodeURI(f); };
  var A = function (f) { return 'art/' + f + '.webp'; };
  var shot = function (f, cap, attr) { return '<div class="shotbox"' + (attr || '') + '><div style="display:flex;flex-direction:column;align-items:center;min-height:0"><img class="shot" alt="" src="' + C(f) + '">' + (cap ? '<div class="cap">' + cap + '</div>' : '') + '</div></div>'; };
  var phone = function (f, lab, attr) { return '<div' + (attr || '') + '><div class="phone"><img alt="" src="' + C(f) + '"></div>' + (lab ? '<div class="lab">' + lab + '</div>' : '') + '</div>'; };
  var ttl = function (t, tag, cls) { return '<div class="ttl"><h2>' + t + '</h2>' + (tag ? '<span class="tag ' + (cls || '') + '">' + tag + '</span>' : '') + '</div>'; };
  var pts = function (s) { return '<ul style="margin:0;padding-left:1.1em">' + s.split(' | ').map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  // 한 바퀴 네 장의 진행 표시
  var LOOP = ['① 준비', '② 질문', '③ 연습', '④ 메모'];
  var ttlL = function (t, k) { return '<div class="ttl"><h2>' + t + '</h2><div class="lp">' + LOOP.map(function (x, i) { return '<span class="' + (i + 1 === k ? 'on' : i + 1 < k ? 'done' : '') + '">' + x + '</span>'; }).join('<i>→</i>') + '</div></div>'; };

  window.SLIDES = [
  // ── 시작 ─────────────────────────────────────────────
  { sec: '시작', title: '표지', html: '' +
    '<div style="flex:1;display:flex;align-items:center;gap:20px">' +
    '<div style="flex:0 0 700px;display:flex;flex-direction:column;justify-content:center;gap:24px;padding-left:10px">' +
    '<div class="chip" style="align-self:flex-start;background:#fff0eb;border-color:#ffd9cc;color:var(--ai)">진행 중인 사례 · 2026 고3 수시 면접 준비</div>' +
    '<h1 style="margin:0;font-size:76px;line-height:1.18;letter-spacing:-.03em;font-weight:800">당곡<br>AI 모의 면접<br><span style="color:var(--muted);font-weight:700;font-size:52px">사례 공유</span></h1>' +
    '<div style="font-size:26px;color:var(--ink);font-weight:600">대입 수시 학생부종합 면접 질문으로 말로 답하는 연습</div>' +
    '<div style="display:flex;gap:12px;align-items:center;font-size:24px;color:var(--muted)"><b style="color:var(--ink)">당곡고등학교 송석리</b></div>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px"><span class="chip" style="color:var(--student)">학생 · 말로 답하고 다시 연습한다</span><span class="chip" style="color:var(--teacher)">교사 · 질문을 확정하고 메모를 확인한다</span><span class="chip" style="color:var(--ai)">AI · 받아 적고 추가 질문과 연습 메모 초안을 작성한다</span></div>' +
    '</div>' +
    '<div style="flex:1;min-width:0;height:100%;display:flex;align-items:center;justify-content:center"><img alt="" src="' + A('iv_cover') + '" style="max-width:100%;max-height:640px;object-fit:contain"></div>' +
    '</div>',
    notes: '안녕하십니까, 당곡고등학교 정보 교사 송석리입니다. 오늘 고3 학생의 대입 면접 연습을 돕는 도구를 실제 화면으로 보여 드리겠습니다. 화면에 나오는 학생은 모두 가짜 학생 자료입니다.' },

  // ── 문제 ─────────────────────────────────────────────
  { sec: '문제', title: '두 가지 어려움', html: '' +
    ttl('대입 면접 준비의 두 가지 어려움') +
    '<p class="lead">학생부종합 면접 질문은 학생마다 다른 생기부에서 나오고, 한 번 답하고 끝나지 않고 답에 이어 추가 질문이 나옵니다.</p>' +
    '<div class="body" style="gap:26px">' +
      '<div class="card col" data-s="1" style="border-top:8px solid var(--student);gap:10px;padding:16px 20px"><h3 class="pain-h">① 내 생기부에서<br>무엇을 물을지 알기 어렵다</h3>' +
        '<div class="pic" style="flex:1;min-height:0"><img alt="" src="' + A('iv_pain_1') + '" style="object-position:40% 40%">' +
          '<span class="scn-chip" style="left:14px;top:14px;color:var(--student)">답에 이어 다시 물어 줄 사람이 없다</span>' +
          '<span class="scn-chip" style="left:14px;bottom:14px;color:var(--ai)">혼자 연습하면 같은 답만 반복</span></div></div>' +
      '<div class="card col" data-s="2" style="border-top:8px solid var(--teacher);gap:10px;padding:16px 20px"><h3 class="pain-h">② 학생마다 생기부를 읽고<br>질문을 만드는 데 시간이 많이 든다</h3>' +
        '<div class="pic" style="flex:1;min-height:0"><img alt="" src="' + A('iv_pain_2') + '" style="object-position:55% 40%">' +
          '<span class="scn-chip" style="left:14px;top:14px;color:var(--teacher)">모의 면접을 학생마다 여러 번 하기 어렵다</span>' +
          '<span class="scn-chip" style="left:14px;bottom:14px;color:var(--ai)">면접 기간에 여러 학생이 한꺼번에 몰린다</span></div></div>' +
    '</div>',
    notes: '학생마다 생기부 내용이 달라 면접 질문이 다르고 추가 질문이 이어집니다. 이 때문에 혼자 답을 연습하면 같은 답만 반복하기 쉽습니다.\n교사는 학생마다 생기부를 읽고 질문을 만들어야 해서 시간이 많이 듭니다. 모의 면접을 학생마다 여러 번 하기도 어렵습니다.' },

  // ── 해법 ─────────────────────────────────────────────
  { sec: '해법', title: '해결의 흐름', steps: 4, html: '' +
    ttl('해결의 흐름') +
    '<p class="lead" style="margin-bottom:18px">생기부와 대학 공식 자료로 AI가 질문 초안을 만들고, 교사가 확정한 질문으로 학생이 말로 연습하고, 연습 메모가 다음 연습 목표가 됩니다.</p>' +
    '<div class="iv-flow">' +
      '<div class="iv-st in" data-s="1"><em>입력</em><img alt="" src="' + A('fig_note') + '"><b>생기부 · 대학 자료</b><p>이름·학번을 가린 생기부와 지원 대학 공식 면접 자료</p></div>' +
      '<div class="iv-arr" data-s="2">→</div>' +
      '<div class="iv-st ai" data-s="2"><em>정리</em><img alt="" src="' + A('fig_ai') + '"><b>AI</b><p>질문 초안·받아 적기·추가 질문·연습 메모 초안</p></div>' +
      '<div class="iv-arr" data-s="3">→</div>' +
      '<div class="iv-st tc" data-s="3"><em>결정</em><img alt="" src="' + A('fig_teacher_stamp') + '"><b>교사</b><p>질문 확정과 메모 확인</p></div>' +
      '<div class="iv-arr" data-s="4">→</div>' +
      '<div class="iv-st stu" data-s="4"><em>연습</em><img alt="" src="' + A('fig_students') + '"><b>학생</b><p>다음 연습 목표를 받아 다시 연습</p></div>' +
    '</div>',
    notes: '네 단계를 차례로 보면, 입력은 이름·학번을 가린 생기부와 지원 대학 공식 면접 자료입니다. AI는 질문 초안, 받아 적기, 추가 질문, 연습 메모 초안을 맡습니다.\n교사는 질문을 확정하고 메모를 확인합니다. 학생은 다음 연습 목표를 받아 다시 연습합니다. 무엇을 물을지는 교사가 정합니다.' },

  // ── 사례 ─────────────────────────────────────────────
  { sec: '사례', title: '이 사례', html: '' +
    ttl('이 사례: 수시 학생부종합 면접 연습', '2026 고3') +
    '<p class="lead">2026년 고3이 2027학년도 수시 학생부종합 면접을 준비하도록 2026년 10월 22일부터 운영하며 구술 평가 체계를 대입 면접 연습으로 옮깁니다.</p>' +
    '<div class="body" style="flex-direction:column;justify-content:center;gap:26px">' +
      '<div class="iv-band"><span class="chip" style="color:var(--teacher)">2027학년도 대학 자료 묶음</span></div>' +
      '<div class="iv-nums">' +
        '<div class="card"><div class="big">22</div><p>대학</p></div>' +
        '<div class="card"><div class="big">66</div><p>전형</p></div>' +
        '<div class="card"><div class="big">439</div><p>공식 출처</p></div>' +
        '<div class="card"><div class="big">2,290</div><p>기출 항목</p></div>' +
      '</div>' +
      '<div class="iv-band" data-s="1"><span class="chip">교사 노트북의 서버</span><i>·</i><span class="chip">학생은 연습 링크로 접속</span><i>·</i><span class="chip">함께 연습 · 혼자 연습</span></div>' +
    '</div>',
    notes: '대학별 공식 모집요강·면접 안내·기출을 미리 모아 둔 대학 자료 묶음은 질문과 추가 질문의 근거로 사용합니다.\n서버는 교사 노트북에서 돌고 학생은 교사가 보낸 연습 링크로 접속합니다. 교사와 함께 화면을 보는 연습과 학생 혼자 하는 연습 두 가지 방식이 있습니다.' },

  // ── 한 바퀴 ───────────────────────────────────────────
  { sec: '한 바퀴', title: '① 준비', html: '' +
    ttlL('대학 공식 자료와 생기부로 시작한다', 1) +
    '<p class="lead">교사가 대학·전형·모집단위를 고르면 공식 면접 정보가 출처 쪽수와 함께 나옵니다. 생기부를 올리면 이름·학번·학교명을 자동으로 가리고 학년·영역·과목 단위로 나눕니다.</p>' +
    '<div class="body" style="gap:28px;align-items:stretch">' +
      '<div class="col" style="flex:1;min-width:0">' + shot('c2_면접정보.png', '대학 공식 면접 정보와 출처') + '</div>' +
      '<div class="col" style="flex:1.25;min-width:0" data-s="1">' + shot('c3_AI로가는글.png', '이름을 가린 뒤 AI로 보낼 생기부 단위') + '</div>' +
    '</div>',
    notes: '먼저 대학·전형·모집단위를 고르면 공식 면접 정보가 출처 쪽수와 함께 나옵니다. 그다음 생기부를 올리면 이름·학번·학교명이 자동으로 가려집니다.\n가린 글은 학년·영역·과목 단위로 나뉘고, AI로 보낼 단위를 교사가 확인하고 고릅니다. 생기부 원본 파일은 저장하지 않고, 가린 글을 교사가 직접 확인한 뒤 저장합니다.' },

  { sec: '한 바퀴', title: '② 질문', html: '' +
    ttlL('교사가 확정한 질문만 면접에 나온다', 2) +
    '<p class="lead">AI가 만든 질문 초안을 교사가 고치고 순서를 바꾸고 확정하며, 확정한 질문만 연습에 나옵니다.</p>' +
    '<div class="body" style="gap:28px">' +
      '<div class="col" style="flex:1.5;min-width:0">' + shot('c4_기본질문.png', '확정 질문 네 개: 난이도와 종류 표시') + '</div>' +
      '<div class="col" style="flex:1;gap:14px;justify-content:center">' +
        '<div class="card sm" data-s="1"><p>질문마다 생기부 문장을 원문 그대로 근거로 붙임</p></div>' +
        '<div class="card sm" data-s="2"><p>근거가 원문에 없으면 질문을 버림</p></div>' +
        '<div class="card sm" data-s="3"><p>대학 평가 요소의 비중에 맞춰 질문을 나눔</p></div>' +
      '</div>' +
    '</div>',
    notes: 'AI가 그럴듯하지만 생기부에 없는 내용을 묻는 일을 막는 장치가 있습니다. 질문마다 생기부 문장을 원문 그대로 근거로 붙이고, 근거가 원문에 없으면 질문을 버립니다.\n최종 결정은 교사가 합니다.' },

  { sec: '한 바퀴', title: '③ 연습', html: '' +
    ttlL('답마다 이어지는 추가 질문', 3) +
    '<p class="lead">면접관 목소리로 질문을 들려주고, 학생이 말로 답하면 받아 적고 답에 이어 추가 질문을 합니다.</p>' +
    '<div class="body iv-phones" style="justify-content:center">' +
      phone('s_03_질문.png', '질문 듣기') + phone('s_04_녹음중.png', '말로 답하며 녹음', ' data-s="1"') +
      phone('s_06_추가질문.png', '답에 이은 추가 질문', ' data-s="2"') + phone('s_07_코치.png', '질문 의도 코치', ' data-s="3"') +
    '</div>',
    notes: '추가 질문은 기본 질문 하나에 1개이며 설정으로 0~2개까지 바꿉니다. 처리가 30초를 넘으면 건너뜁니다.\n코치는 답 문장을 써 주지 않고 질문 의도·근거·답하는 순서만 안내합니다. 학생은 코치를 한 번 연습에 5회까지 부를 수 있습니다.' },

  { sec: '한 바퀴', title: '④ 메모', html: '' +
    ttlL('점수 대신 다음 연습 목표', 4) +
    '<p class="lead">연습이 끝나면 점수 대신 다음 연습 목표와 질문별 메모를 받고, 녹음을 다시 들을 수 있습니다.</p>' +
    '<div class="body iv-phones" style="justify-content:center">' +
      phone('s_08_결과_위.png', '결과 첫 화면') + phone('s_09_결과_메모.png', '연습 메모', ' data-s="1"') +
      '<div class="col" style="flex:0 0 400px;gap:10px;justify-content:center" data-s="2">' +
        '<div class="card sm"><h3>다음 연습 목표</h3><p>가장 먼저 보이는 한 가지</p></div>' +
        '<div class="card sm"><h3>바로잡고 채울 내용</h3><p>빨간색 표시로 고칠 부분</p></div>' +
        '<div class="card sm"><h3>이번 연습에서 잘한 점</h3><p>학생 답을 그대로 인용한 0~3개</p></div>' +
        '<div class="card sm"><h3>지난 연습과 달라진 점</h3><p>이전 연습과 비교해 바뀐 부분</p></div>' +
      '</div>' +
      phone('s_12_멘토.png', 'AI 멘토', ' data-s="3"') +
    '</div>',
    notes: '메모에는 점수·등급·합격 예측·성격 단정·명령조를 쓰지 않습니다. AI 멘토에게 글로 물을 수 있고, 한 번 연습에 30회까지 가능합니다.\n멘토 답에는 근거가 된 질문과 분석 카드가 표시됩니다. 교사는 메모를 확인하고 선생님 메모를 덧붙입니다.' },

  // ── 운영 ─────────────────────────────────────────────
  { sec: '운영', title: '데이터는 어디로', html: '' +
    ttl('데이터는 어디로 가나', '코드 기준', 'live') +
    '<p class="lead" style="margin-bottom:12px">학생 이름·학번과 생기부 원본 파일, 기록·녹음은 교사 노트북에 저장되고, AI에는 이름·학번·학교명을 가리고 날짜를 지운 글만 보냅니다.</p>' +
    '<div class="body" style="gap:22px;align-items:stretch">' +
      '<div class="col" style="flex:1;gap:16px;min-width:0">' +
        '<div class="iv-box keep"><h3>교사 노트북에 남는 것</h3>' + pts('학생 이름과 학번 | 생기부 원본 파일(서버가 읽기만 하고 저장하지 않음) | 가린 생기부 단위와 모든 연습 기록 | 답 녹음 파일, 매일 새벽 같은 노트북 안 백업') + '</div>' +
        '<div class="iv-box out" data-s="1"><h3>밖으로 나가는 것</h3>' + pts('가린 생기부 글은 질문 만들기와 분석을 위해 OpenAI와 Anthropic으로 보냄 | 스캔 생기부는 인적 사항 줄을 지운 쪽 이미지를 Upstage 글자 인식으로 보냄 | 답 녹음은 받아 적기 설정이 클라우드일 때만 밖으로 나감 | 구글 시트에는 학생 코드·질문·가린 답·메모만 저장됨') + '</div>' +
      '</div>' +
      '<div class="col" style="flex:0 0 470px;min-width:0" data-s="2">' + shot('c5_보낸기록.png') + '</div>' +
    '</div>' +
    '<div class="pv-strip" data-s="3"><span>보내기 직전 코드가 이름·학번이 남았는지 다시 검사하고 남으면 멈춤</span><span>무엇을 언제 어느 AI로 보냈는지 교사 화면에 기록</span><span>국외 AI 전송의 동의 범위와 개인 노트북 보관은 학교와 먼저 정하기</span></div>',
    notes: '이름만 가린 글은 가명 수준이라 활동 내용 조합으로 학생을 짐작할 여지가 남습니다. 그래서 학교와 개인정보 처리 원칙을 먼저 정해야 합니다.\n오른쪽 화면은 AI로 보낸 기록을 보여줍니다. 시각, AI, 목적, 글자 수를 확인할 수 있습니다.' },

  { sec: '운영', title: '지금까지', html: '' +
    ttl('지금까지, 그리고 처리 시간', '운영 기록에서 집계', 'live') +
    '<p class="lead">2026년 10월 22일부터 27일까지 운영한 기록이며 교사가 시험한 회차가 섞여 있습니다.</p>' +
    '<div class="body" style="align-items:center;gap:26px"><div class="col" style="flex:1.2"><div class="iv-stats">' +
      '<div class="card"><div class="big">14</div><p>연습 회차</p></div>' +
      '<div class="card"><div class="big">68</div><p>답</p></div>' +
      '<div class="card"><div class="big">30.7<small>분</small></div><p>답 녹음</p></div>' +
    '</div><div class="iv-foot">2026-10-22 ~ 10-27 · 교사 시험 회차 포함</div></div>' +
    '<div class="col iv-time" style="flex:1;gap:14px" data-s="1">' +
      '<div class="card"><div class="big">7.6<small>초</small></div><p>답 하나 처리</p></div>' +
      '<div class="card"><div class="big">12.9<small>초</small></div><p>연습 메모 작성 (이전 60.8초)</p></div>' +
    '</div></div>',
    notes: '아직 운영 초기라 교사 시험 회차가 숫자에 섞여 있습니다. 처리 시간은 AI 경로를 바꾼 뒤 줄었고, 연습 메모는 60.8초에서 12.9초로 줄었습니다.\n회차별 비용은 아직 계산하지 않았습니다. 교사 업무가 얼마나 줄었는지도 아직 측정하지 않았습니다.' },

  // ── 의미 ─────────────────────────────────────────────
  { sec: '의미', title: '의미와 가치', html: function () {
    var col = function (k, cls, img, who, head, a, b) {
      return '<div class="v3 ' + cls + '" data-s="' + k + '"><div class="v3-pic"><img alt="" src="' + A(img) + '"></div>' +
        '<div class="v3-who">' + who + '</div><h3>' + head + '</h3><ul><li>' + a + '</li><li>' + b + '</li></ul></div>';
    };
    return ttl('의미와 가치') +
    '<div class="body v3s">' +
      col(1, 's', 'fig_students', '학생 <span class="v3-top">가장 중요한 변화</span>', '자기 생기부에서 나온 질문으로 원하는 만큼 연습한다', '답에 이어지는 추가 질문으로 실제 면접 흐름을 경험한다', '점수 대신 다음 연습 목표를 확인한다') +
      col(2, 't', 'fig_teacher_read', '교사', '교사는 질문 확정과 메모 확인 같은 판단에 집중한다', '생기부 읽기·질문 초안·받아 적기는 AI가 처리한다', '학생마다 연습 기록이 남아 상담에 활용한다') +
      col(3, 'c', 'fig_school', '학교', '데이터 과학 수업의 구술 평가 체계를 대입 면접으로 옮긴 사례다', '같은 구조를 진로 상담이나 발표 준비 같은 다른 연습으로 옮길 가능성이 있다', '개인정보 원칙을 학교와 함께 정하는 계기가 된다') +
    '</div>'; },
    notes: '학생 쪽 변화는 자기 생기부에서 나온 질문으로 반복 연습할 수 있게 된 것입니다. 교사 쪽은 질문 확정과 메모 확인 같은 판단에 집중하게 됩니다.\n학교 쪽은 개인정보 원칙을 학교와 함께 정하는 계기가 됩니다. 효과는 아직 측정하지 않았습니다.' },

  // ── 앞으로 ─────────────────────────────────────────────
  { sec: '앞으로', title: '앞으로', html: function () {
    var nx = function (n, imgs, h, a) {
      return '<div class="nx"><span class="nx-n">' + n + '</span><div class="nx-pic">' + imgs.map(function (f) { return '<img alt="" src="' + A(f) + '">'; }).join('') + '</div>' +
        '<div class="nx-t"><b>' + h + '</b><p>' + a + '</p></div></div>';
    };
    return ttl('앞으로') +
    '<p class="lead">진행 중인 사례이고, 수시 면접 기간이 끝나면 결과를 모아 같은 자료를 갱신합니다.</p>' +
    '<div class="body nxb"><div class="col" style="flex:1;gap:14px;min-width:0">' +
      nx(1, ['fig_students'], '효과 확인', '연습 회차마다 답이 나아지는가, 학생이 도움이 되었다고 느끼는가, 교사 시간은 얼마인가') +
      nx(2, ['fig_teacher_read'], '운영 안정', '고정 접속 주소, 비용 상한, 교사가 없을 때 서버를 맡을 담당자') +
      nx(3, ['fig_school'], '학교와 정하기', '국외 AI 전송 동의 범위, 개인 노트북 보관 허용 여부') +
      '<div class="lim" data-s="1"><span>지금의 한계</span><i>효과 측정 전인 운영 초기</i><i>아이폰 실기기 시험 전인 상태</i><i>교사 노트북 한 대에 기대는 서버</i></div>' +
    '</div><div class="qrp"><img alt="" class="qrp-art" src="' + A('iv_cover') + '"></div></div>'; },
    notes: '다음 할 일은 효과 확인, 운영 안정, 학교와 정하기입니다. 한계는 운영 초기라 효과가 측정 전이고, 아이폰 실제 기기 시험을 하지 않았으며, 서버가 교사 노트북 한 대에 기대고 있다는 점입니다.\n들어 주셔서 감사합니다.' }
  ];
})();
