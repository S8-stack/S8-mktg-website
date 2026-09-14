(function () {
  const page = document.body.getAttribute('data-page') || '';
  const showCookies = document.body.hasAttribute('data-cookies');

  const links = [
    { id: 'home', href: '/index.html', label: 'Home' },
    { id: 'start', href: '/get-started.html', label: 'Get Started' },
    { id: 'plans', href: '/plans.html', label: 'Plans' },
    { id: 'core', href: '/core.html', label: 'Core' },
    { id: 'packages', href: '/packages.html', label: 'Packages' },
    { id: 'extensions', href: '/extensions.html', label: 'Extensions' }
  ];

  const linkClass = (id, extra) =>
    `${extra}${page === id ? ' nav-link--active' : ''}`;

  const navLinks = (cls) =>
    links.map((l) => `<a href="${l.href}" class="${linkClass(l.id, cls)}" onclick="closeMenu()">${l.label}</a>`).join('');

  const menuIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  const closeIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  window.closeMenu = function closeMenu() {};
  window.toggleFaq = function toggleFaq() {};

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
  <nav class="nav" id="navbar">
    <div class="container">
      <div class="nav-inner">
        <a href="/index.html" class="nav-logo">
          <div class="nav-logo-icon"><img src="/logos/S8-logo-v4-200px.png" alt="S8"></div>
          <div>
            <div class="nav-logo-text">S8</div>
            <div class="nav-logo-dot">stack8.io</div>
          </div>
        </a>
        <div class="nav-links">
          ${navLinks('nav-link')}
        </div>
        <div class="nav-social">
          <a href="https://www.linkedin.com/company/s8-stack" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="/assets/social/linkedin-icon-256px.png" alt=""></a>
          <a href="https://x.com/Stack8Official" target="_blank" rel="noopener" aria-label="X"><img src="/assets/social/x-icon-256px.png" alt=""></a>
        </div>
        <a href="/get-started.html" class="nav-cta">Get started</a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">${menuIcon}</button>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    ${navLinks('')}
    <a href="/get-started.html" class="mobile-cta" onclick="closeMenu()">Get started</a>
  </div>`
  );

  window.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/index.html" class="nav-logo" style="margin-bottom:1.5rem">
            <div class="nav-logo-icon"><img src="/logos/S8-logo-v4-200px.png" alt="S8"></div>
            <div class="nav-logo-text" style="color:#fff">S8</div>
          </a>
          <p class="footer-brand-desc">The high-productivity stack for rich SaaS development. Built by project developers for project developers.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/s8-stack" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="/assets/social/linkedin-icon-256px.png" alt=""></a>
            <a href="https://x.com/Stack8Official" target="_blank" rel="noopener" aria-label="X"><img src="/assets/social/x-icon-256px.png" alt=""></a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Product</h4>
          <ul class="footer-list">
            <li><a href="/get-started.html" class="footer-link">Get started</a></li>
            <li><a href="/plans.html" class="footer-link">Plans</a></li>
            <li><a href="/core.html" class="footer-link">Core</a></li>
            <li><a href="/packages.html" class="footer-link">Packages</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">Legal</h4>
          <ul class="footer-list">
            <li><a href="/legal/terms-and-conditions.html" class="footer-link">Terms &amp; Conditions</a></li>
            <li><a href="/legal/cookies-policy.html" class="footer-link">Cookies Policy</a></li>
            <li><a href="/legal/disclaimer.html" class="footer-link">Disclaimer</a></li>
            <li><a href="/legal/legal-contact.html" class="footer-link">Legal Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">&copy; ${new Date().getFullYear()} S8 / AlphaVentor. All rights reserved.</p>
        <p class="footer-copy">contact@stack8.io</p>
      </div>
    </div>
  </footer>
  ${
    showCookies
      ? `<div class="cookie" id="cookieBox" role="dialog" aria-labelledby="cookieTitle">
    <div class="cookie-card">
      <h2 id="cookieTitle">0 cookies: total privacy</h2>
      <p>Zero cookie policy means that no tracking of any kind is used on this site.</p>
      <button class="btn btn--primary" id="cookieProceed" type="button">Proceed to website</button>
    </div>
  </div>`
      : ''
  }`
    );

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          navbar.classList.toggle('nav--scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    });

    window.closeMenu = function closeMenu() {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      navToggle.innerHTML = menuIcon;
    };

    navToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      navToggle.innerHTML = menuOpen ? closeIcon : menuIcon;
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });

    window.toggleFaq = function toggleFaq(btn) {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    };

    const cookieBox = document.getElementById('cookieBox');
    if (cookieBox && !sessionStorage.getItem('has-cookies-already-been-displayed')) {
      cookieBox.classList.add('open');
      document.getElementById('cookieProceed').addEventListener('click', () => {
        cookieBox.classList.remove('open');
        sessionStorage.setItem('has-cookies-already-been-displayed', 'true');
      });
    }

    document.querySelectorAll('[data-snippet]').forEach(async (el) => {
      try {
        const res = await fetch(el.getAttribute('data-snippet'));
        const source = await res.text();
        const lang = (el.getAttribute('data-lang') || 'java').replace(/[^\w-]/g, '');
        if (window.hljs) {
          try {
            el.innerHTML = window.hljs.highlight(source, { language: lang }).value;
          } catch (err) {
            el.textContent = source;
          }
        } else {
          el.textContent = source;
        }
      } catch (err) {
        el.textContent = 'Unable to load snippet.';
      }
    });
  });
})();
