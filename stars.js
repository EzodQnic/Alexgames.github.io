/* Twinkling starfield for the Starbob / AlexGames site.
   Lightweight canvas of glowing gold + white stars. Honours
   prefers-reduced-motion: draws a static field and stops animating. */
(function () {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, stars, dpr;

  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round((w * h) / 6500); // density scales with viewport
    stars = [];
    for (let i = 0; i < count; i++) {
      const gold = Math.random() < 0.28;
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        base: Math.random() * 0.5 + 0.3,
        amp: Math.random() * 0.45 + 0.15,
        speed: Math.random() * 0.9 + 0.25,
        phase: Math.random() * Math.PI * 2,
        gold: gold,
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const tw = reduce ? s.base : s.base + s.amp * Math.sin(t * 0.001 * s.speed + s.phase);
      const a = Math.max(0, Math.min(1, tw));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      if (s.gold) {
        ctx.fillStyle = 'rgba(255, 211, 77, ' + a + ')';
        ctx.shadowColor = 'rgba(255, 211, 77, 0.9)';
        ctx.shadowBlur = s.r * 4;
      } else {
        ctx.fillStyle = 'rgba(232, 232, 255, ' + a + ')';
        ctx.shadowColor = 'rgba(200, 205, 255, 0.6)';
        ctx.shadowBlur = s.r * 2.5;
      }
      ctx.fill();
    }
    ctx.shadowBlur = 0;
  }

  function loop(t) {
    draw(t);
    if (!reduce) requestAnimationFrame(loop);
  }

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { build(); if (reduce) draw(0); }, 150);
  });

  build();
  if (reduce) draw(0);
  else requestAnimationFrame(loop);
})();
