/* 모든 발표가 함께 사용하는 슬라이드 부품(window.KIT). 발표 폴더는 저장소 바로 아래에 있으므로 그림은 ../shared/에서 찾는다.
   [data-s="k"]는 k번째 클릭부터 보인다. 사례 슬라이드는 shared/cases.js, 발표별 순서·표지는 각 폴더의 slides.js */
(function () {
  var BASE = '../shared/';
  var K = window.KIT = {};
  K.C = function (f) { return BASE + 'captures/' + encodeURI(f); };
  K.I = function (f) { return BASE + 'img/' + encodeURI(f); };
  K.ttl = function (t, tag) { return '<div class="ttl"><h2>' + t + '</h2>' + (tag ? '<span class="tag">' + tag + '</span>' : '') + '</div>'; };
  // 질문·체험 장 제목: 위에 질문 알약(번호 + 질문), 아래에 큰 이름과 몇 번째 답인지 보여 주는 점(total개 중 idx번째).
  // phrase가 없으면 배지와 제목을 한 줄로. 체험 장(tone 'exp')은 알약을 '체험 n'으로
  K.qttl = function (q, phrase, idx, name, tone, total) {
    var cls = 'ttl q' + (tone ? ' ' + tone : '') + (phrase ? '' : ' one');
    if (!phrase) return '<div class="' + cls + '"><span class="qno">' + q + '</span><h2>' + name + '</h2></div>';
    var chip = tone === 'exp' ? phrase + ' <b>' + q + '</b>' : '<b>' + q + '</b>' + phrase;
    var dots = '';
    for (var k = 1; k <= (total || 0); k++) dots += '<i' + (String(k) === String(idx || q) ? ' class="on"' : '') + '></i>';
    return '<div class="' + cls + '"><div class="chip">' + chip + '</div>' +
      '<h2>' + name + (dots ? '<span class="dots">' + dots + '</span>' : '') + '</h2></div>';
  };
  K.pts = function (s, attr) { return '<ul class="pts"' + (attr || '') + '>' + s.split(' | ').map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  K.shot = function (f) { return '<img class="shot" alt="" src="' + K.C(f) + '">'; };
  K.go = function (href, label, sub) { return '<a class="go' + (sub ? ' sub' : '') + '" href="' + href + '" target="_blank" rel="noopener">' + label + ' ↗</a>'; };
  K.demo = function (side, pic) { return '<div class="demo"><div class="side">' + side + '</div><div class="pic">' + pic + '</div></div>'; };
  // 한 장에 도구 둘. 카드마다 캡처 · 이름 · 항목 · 버튼(gos는 go() 이어 붙인 것)
  K.card = function (name, f, items, gos) {
    return '<div class="pc"><div class="pic">' + K.shot(f) + '</div><h3>' + name + '</h3>' + K.pts(items) + '<div class="gos">' + gos + '</div></div>';
  };
  // 간지: 세종과학고 특강(260923) 간지 모양 그대로(보라 바탕 #6B46FF에 흰 굵은 글자 한 줄)
  K.sep = function (t) { return '<div class="sep"><h2>' + t + '</h2></div>'; };

  // 실제 화면을 끼우는 상자. from 요소 가운데에서 원으로 펼쳐진다
  K.live = function (src, title, from) { return '<div class="live" data-src="' + src + '" data-from="' + from + '"><iframe title="' + title + '"></iframe></div>'; };
  var hookKeys = function (f) {   // 끼운 화면을 누른 뒤에도 → ← 와 리모컨(PageDown/Up)은 덱이 받는다(같은 출처일 때만)
    try { f.contentDocument.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown') { e.preventDefault(); window.DECK.next(); }
      else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); window.DECK.prev(); }
    }); } catch (e) {}
  };
  K.liveStep = function (el, step) {
    var box = el.querySelector('.live'), f = box.querySelector('iframe');
    if (!f.getAttribute('src')) { f.addEventListener('load', function () { hookKeys(f); }); f.src = box.dataset.src; }   // 장에 들어오면 미리 불러 둔다
    var o = el.querySelector(box.dataset.from), x = 0, y = 0, n = o;
    while (n && n !== el) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    if (o) { box.style.setProperty('--cx', (x + o.offsetWidth / 2) + 'px'); box.style.setProperty('--cy', (y + o.offsetHeight / 2) + 'px'); }
    box.classList.toggle('on', step >= 1);
  };
  // 3D 비트 세상(shared/bitworld.html)은 WebGL이 무거워 앞 장에 들어올 때 한 번만 불러 둔다(장을 떠나 있으면 그리지 않는다).
  // 발표마다 다른 문구는 window.BITWORLD = {단계: {cap, then, ...}}로 덮어쓴다
  K.bwLoad = function () {
    var f = document.querySelector('.bw iframe');
    if (f && !f.getAttribute('src')) f.src = BASE + 'bitworld.html?embed=1';
  };

  // 아톰·비트 인트로 키노트(shared/intro-keynote.html, vibe1 인트로를 가져온 것)도 앞 장에서 미리 불러 둔다.
  // 발표마다 다른 표지 아래 줄·마지막 장은 window.KEYNOTE = {sub, last}로 정한다
  K.knLoad = function () {
    var f = document.querySelector('.intro iframe');
    if (f && !f.getAttribute('src')) f.src = BASE + 'intro-keynote.html?embed=1';
  };

  // 사례 슬라이드의 제목(맨 앞 .ttl 블록)만 바꾼 사본. 본문·노트는 그대로, title을 주면 전체 보기·노트의 장 이름도 바꾼다
  K.retitle = function (s, ttl, title) {
    var o = {}, k, cut = s.html.indexOf('</h2></div>') + 11;
    for (k in s) o[k] = s[k];
    o.html = ttl + s.html.slice(cut);
    if (title) o.title = title;
    return o;
  };

  // 사례 슬라이드를 발표의 섹션 이름으로 복사해 넣는다
  K.part = function (sec, list) {
    return list.map(function (s) { var o = {}, k; for (k in s) o[k] = s[k]; o.sec = sec; return o; });
  };
})();
