// ===== Index strip: a decorative SPEI-style drought severity timeline =====
(function renderIndexStrip() {
  const strip = document.getElementById('indexStrip');
  if (!strip) return;

  const values = [
    -0.8, -0.6, -0.3, 0.1, 0.4, 0.2, -0.2, -0.5, -0.9, -1,
    -0.7, -0.4, 0.0, 0.3, 0.6, 0.5, 0.2, -0.1, -0.4, -0.6,
    -0.8, -1, -0.9, -0.5, -0.1, 0.2, 0.5, 0.7, 0.4, 0.1,
    -0.3, -0.6, -0.9, -0.7
  ];
  const drought = [201, 122, 61];
  const wet = [74, 139, 124];
  function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

  values.forEach((v) => {
    const t = (v + 1) / 2;
    const seg = document.createElement('span');
    seg.style.background = `rgb(${lerp(drought[0], wet[0], t)}, ${lerp(drought[1], wet[1], t)}, ${lerp(drought[2], wet[2], t)})`;
    strip.appendChild(seg);
  });
})();

// ===== Mobile nav toggle =====
(function mobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('site-nav-mobile');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ===== Footer year =====
(function footerYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ===== Mode switch (Academic / Industry) =====
(function modeSwitch() {
  const btnAcademic = document.getElementById('modeAcademic');
  const btnIndustry = document.getElementById('modeIndustry');
  const eyebrow = document.getElementById('heroEyebrow');
  const summary = document.getElementById('heroSummary');
  if (!btnAcademic || !btnIndustry) return;

  function setMode(mode) {
    const data = SITE_DATA.modes[mode];
    eyebrow.textContent = data.eyebrow;
    summary.textContent = data.summary;
    document.body.setAttribute('data-mode', mode);

    const isAcademic = mode === 'academic';
    btnAcademic.classList.toggle('is-active', isAcademic);
    btnIndustry.classList.toggle('is-active', !isAcademic);
    btnAcademic.setAttribute('aria-pressed', String(isAcademic));
    btnIndustry.setAttribute('aria-pressed', String(!isAcademic));

    // Re-highlight timeline relevance for the selected mode
    document.querySelectorAll('.timeline-item').forEach((item) => {
      const tag = item.getAttribute('data-tag');
      const relevant = tag === 'research' || tag === mode;
      item.classList.toggle('is-highlighted', relevant);
    });
  }

  btnAcademic.addEventListener('click', () => setMode('academic'));
  btnIndustry.addEventListener('click', () => setMode('industry'));
  setMode('academic');
})();

// ===== Timeline rendering (Education + Experience, expandable) =====
(function renderTimelines() {
  const eduRoot = document.getElementById('educationTimeline');
  const expRoot = document.getElementById('experienceTimeline');
  if (!eduRoot || !expRoot) return;

  function makeItem({ period, title, org, detail, bullets, tag }) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    if (tag) item.setAttribute('data-tag', tag);

    const hasBody = Boolean(detail) || (bullets && bullets.length);

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'timeline-header';
    header.setAttribute('aria-expanded', 'false');
    header.innerHTML = `
      <span class="timeline-period">${period}</span>
      <span class="timeline-main">
        <span class="timeline-title">${title}</span>
        <span class="timeline-org">${org}</span>
      </span>
      ${tag ? `<span class="timeline-tag timeline-tag-${tag}">${tag}</span>` : ''}
      ${hasBody ? '<span class="timeline-caret">+</span>' : ''}
    `;
    item.appendChild(header);

    if (hasBody) {
      const body = document.createElement('div');
      body.className = 'timeline-body';
      let html = '';
      if (detail) html += `<p>${detail}</p>`;
      if (bullets && bullets.length) {
        html += '<ul>' + bullets.map((b) => `<li>${b}</li>`).join('') + '</ul>';
      }
      body.innerHTML = html;
      body.hidden = true;
      item.appendChild(body);

      header.addEventListener('click', () => {
        const open = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', String(!open));
        body.hidden = open;
        item.classList.toggle('is-open', !open);
      });
    } else {
      header.style.cursor = 'default';
    }

    return item;
  }

  SITE_DATA.education.forEach((e) => {
    eduRoot.appendChild(makeItem({
      period: e.period,
      title: e.degree,
      org: e.org,
      detail: e.detail
    }));
  });

  SITE_DATA.experience.forEach((e) => {
    expRoot.appendChild(makeItem({
      period: e.period,
      title: e.role,
      org: e.org,
      bullets: e.bullets,
      tag: e.tag
    }));
  });
})();

// ===== Publications: render, filter, search =====
(function renderPublications() {
  const list = document.getElementById('pubList');
  const empty = document.getElementById('pubEmpty');
  const search = document.getElementById('pubSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!list) return;

  let activeFilter = 'all';
  let query = '';

  function render() {
    const q = query.trim().toLowerCase();
    const items = SITE_DATA.publications.filter((p) => {
      const typeOk = activeFilter === 'all' || p.type === activeFilter;
      const text = `${p.title} ${p.venue} ${p.year} ${p.authors}`.toLowerCase();
      const queryOk = !q || text.includes(q);
      return typeOk && queryOk;
    });

    list.innerHTML = items.map((p) => `
      <li class="pub-item">
        <div class="pub-main">
          <h3>${p.title}</h3>
          <p class="pub-venue">${p.venue} · ${p.year}</p>
          <p class="pub-authors">${p.authors}</p>
        </div>
        <div class="pub-side">
          <span class="pub-status pub-status-${p.status}">${p.status}</span>
          ${p.link ? `<a href="${p.link}" class="pub-link" target="_blank" rel="noopener">View →</a>` : ''}
        </div>
      </li>
    `).join('');

    empty.hidden = items.length !== 0;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.getAttribute('data-filter');
      render();
    });
  });

  if (search) {
    search.addEventListener('input', (e) => {
      query = e.target.value;
      render();
    });
  }

  render();
})();

// ===== Skills =====
(function renderSkills() {
  const root = document.getElementById('skillsGrid');
  if (!root) return;
  root.innerHTML = SITE_DATA.skills.map((group) => `
    <div class="skill-group">
      <h3>${group.group}</h3>
      <div class="skill-chips">
        ${group.items.map((i) => `<span class="chip">${i}</span>`).join('')}
      </div>
    </div>
  `).join('');
})();

// ===== Service, awards, memberships, academic exchanges, referees =====
(function renderService() {
  const awards = document.getElementById('awardsList');
  const service = document.getElementById('serviceList');
  const memberships = document.getElementById('membershipsList');
  const academicExp = document.getElementById('academicExpList');
  const referees = document.getElementById('refereesGrid');

  const li = (year, text) => `<li><span class="service-year">${year}</span>${text}</li>`;

  if (awards) awards.innerHTML = SITE_DATA.awards.map((a) => li(a.year, a.text)).join('');
  if (service) service.innerHTML = SITE_DATA.service.map((s) => li(s.year, s.text)).join('');
  if (memberships) memberships.innerHTML = SITE_DATA.memberships.map((m) => `<li>${m}</li>`).join('');
  if (academicExp) academicExp.innerHTML = SITE_DATA.academicExperience.map((a) => li(a.year, a.text)).join('');

  if (referees) {
    referees.innerHTML = SITE_DATA.referees.map((r) => `
      <div class="referee-card">
        <p class="referee-name">${r.name}</p>
        <p class="referee-role">${r.role}</p>
      </div>
    `).join('');
  }
})();
