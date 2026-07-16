// ===== Footer year =====
(function footerYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
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

// ===== Hero: fill in profile content and trigger entrance animation =====
(function renderHero() {
  const p = SITE.profile;
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };

  setText('statusText', p.status);
  setText('heroName', p.firstName + ' ' + p.lastName);
  setText('heroTagline', p.tagline);
  setText('heroBio', p.heroBio);

  const linkedinBtn = document.getElementById('linkedinBtn');
  if (linkedinBtn) {
    if (p.social.linkedin) {
      linkedinBtn.href = p.social.linkedin;
    } else {
      linkedinBtn.href = '#contact';
      linkedinBtn.removeAttribute('target');
    }
  }

  requestAnimationFrame(() => {
    document.getElementById('heroCopy').classList.add('is-ready');
  });
})();

// ===== About =====
(function renderAbout() {
  const root = document.getElementById('aboutText');
  if (!root) return;
  root.innerHTML = SITE.profile.aboutBio.map((p) => `<p>${p}</p>`).join('');

  const edu = document.getElementById('eduList');
  if (edu) {
    edu.innerHTML = SITE.education.map((e) => `
      <div class="edu-item">
        <span class="edu-period">${e.period}</span>
        <span class="edu-degree">${e.degree}</span>
        <span class="edu-org">${e.org}</span>
        ${e.detail ? `<p class="edu-detail">${e.detail}</p>` : ''}
      </div>
    `).join('');
  }
})();

// ===== Journey: render, filter, scroll-activate dots =====
(function renderJourney() {
  const track = document.getElementById('journeyTrack');
  if (!track) return;

  track.innerHTML = SITE.journey.map((j, i) => `
    <div class="journey-item" data-tag="${j.tag}" style="transition-delay:${i * 0.02}s">
      <span class="journey-tag">${j.tag}</span>
      <span class="journey-period">${j.period}</span>
      <h3 class="journey-role">${j.role}</h3>
      <p class="journey-org">${j.org}</p>
      ${j.bullets && j.bullets.length ? `<ul class="journey-bullets">${j.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : ''}
    </div>
  `).join('');

  const items = track.querySelectorAll('.journey-item');

  // Scroll-activate: dot fills in as each entry enters view
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-active');
    });
  }, { threshold: 0.35 });
  items.forEach((it) => io.observe(it));

  // Filter buttons
  const filterBtns = document.querySelectorAll('#journey .filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.getAttribute('data-filter');
      items.forEach((it) => {
        const show = filter === 'all' || it.getAttribute('data-tag') === filter;
        it.classList.toggle('is-hidden', !show);
      });
    });
  });
})();

// ===== Projects =====
(function renderProjects() {
  const root = document.getElementById('projectGrid');
  if (!root) return;
  root.innerHTML = SITE.projects.map((proj) => `
    <article class="project-card">
      <div class="project-cover project-cover-${proj.cover}"></div>
      <div class="project-body">
        <h3 class="project-name">${proj.name}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">${proj.tags.map((t) => `<span class="project-tag">${t}</span>`).join('')}</div>
        <a href="${proj.github}" class="project-link" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
  `).join('');
})();

// ===== Tech stack (icons via Simple Icons CDN) =====
(function renderStack() {
  const root = document.getElementById('stackGroups');
  if (!root) return;

  // A few readable display labels for slugs that don't match their common name.
  const LABELS = {
    cplusplus: 'C++', gnubash: 'Bash', nextdotjs: 'Next.js', nodedotjs: 'Node.js',
    scikitlearn: 'scikit-learn', tailwindcss: 'Tailwind', huggingface: 'Hugging Face',
    microsoftazure: 'Azure', amazonaws: 'AWS', visualstudiocode: 'VS Code',
    postgresql: 'PostgreSQL', mongodb: 'MongoDB', mysql: 'MySQL', html5: 'HTML',
    css3: 'CSS', numpy: 'NumPy', pandas: 'Pandas', django: 'Django', flask: 'Flask',
    fastapi: 'FastAPI', react: 'React', bootstrap: 'Bootstrap', docker: 'Docker',
    firebase: 'Firebase', redis: 'Redis', git: 'Git', github: 'GitHub', linux: 'Linux',
    vercel: 'Vercel', jupyter: 'Jupyter', figma: 'Figma', postman: 'Postman',
    python: 'Python', javascript: 'JavaScript', typescript: 'TypeScript', c: 'C',
    kotlin: 'Kotlin', tensorflow: 'TensorFlow', pytorch: 'PyTorch', opencv: 'OpenCV'
  };
  const label = (slug) => LABELS[slug] || (slug.charAt(0).toUpperCase() + slug.slice(1));

  root.innerHTML = SITE.techStack.map((group) => `
    <div class="stack-group">
      <h3>${group.group}</h3>
      <div class="stack-tiles">
        ${group.items.map((slug) => `
          <div class="stack-tile">
            <img src="https://cdn.simpleicons.org/${slug}/f3efe7" alt="${label(slug)}" loading="lazy"
                 onerror="this.style.display='none'">
            <span>${label(slug)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
})();

// ===== Publications: render, filter, search =====
(function renderPublications() {
  const grid = document.getElementById('pubGrid');
  const empty = document.getElementById('pubEmpty');
  const search = document.getElementById('pubSearch');
  const filterBtns = document.querySelectorAll('#publications .filter-btn');
  if (!grid) return;

  let activeFilter = 'all';
  let query = '';

  function render() {
    const q = query.trim().toLowerCase();
    const items = SITE.publications.filter((p) => {
      const typeOk = activeFilter === 'all' || p.type === activeFilter;
      const text = `${p.title} ${p.venue} ${p.year} ${p.authors}`.toLowerCase();
      return typeOk && (!q || text.includes(q));
    });

    grid.innerHTML = items.map((p) => `
      <article class="pub-card">
        <div class="pub-thumb" aria-hidden="true"></div>
        <div class="pub-main">
          <h3>${p.title}</h3>
          <p class="pub-venue">${p.venue} · ${p.year}</p>
          <p class="pub-authors">${p.authors}</p>
          <div class="pub-meta-row">
            <span class="pub-status pub-status-${p.status}">${p.status}</span>
            <div class="pub-actions">
              ${p.link ? `<a href="${p.link}" class="pub-action" target="_blank" rel="noopener">View</a>` : `<span class="pub-action" style="opacity:0.5">View</span>`}
              ${p.link ? `<a href="${p.link}" class="pub-action" target="_blank" rel="noopener">Download</a>` : `<span class="pub-action" style="opacity:0.5">Download</span>`}
            </div>
          </div>
        </div>
      </article>
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
  if (search) search.addEventListener('input', (e) => { query = e.target.value; render(); });

  render();
})();

// ===== Milestones =====
(function renderMilestones() {
  const root = document.getElementById('milestoneList');
  if (!root) return;
  const sorted = [...SITE.milestones].sort((a, b) => b.year - a.year);
  root.innerHTML = sorted.map((m) => `
    <div class="milestone-item">
      <span class="milestone-year">${m.year}</span>
      <span class="milestone-type">${m.type}</span>
      <span class="milestone-text">${m.text}</span>
    </div>
  `).join('');
})();

// ===== Contact =====
(function renderContact() {
  const p = SITE.profile;
  const emailPill = document.getElementById('emailPill');
  const emailValue = document.getElementById('emailValue');
  if (emailPill && emailValue) {
    emailPill.href = `mailto:${p.email}`;
    emailValue.textContent = p.email;
  }
  const linkedinPill = document.getElementById('linkedinPill');
  if (linkedinPill) linkedinPill.href = p.social.linkedin || '#';
  const githubPill = document.getElementById('githubPill');
  if (githubPill) githubPill.href = p.social.github || '#';
  const scholarPill = document.getElementById('scholarPill');
  if (scholarPill) scholarPill.href = p.social.scholar || '#';
})();

// ===== Scroll reveal for section headers =====
(function scrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  targets.forEach((t) => io.observe(t));
})();

// ===== Scrollspy =====
(function scrollspy() {
  const navLinks = document.querySelectorAll('.site-nav a, .site-nav-mobile a');
  const sections = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = `#${entry.target.id}`;
        navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === id));
      }
    });
  }, { threshold: 0, rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));
})();
