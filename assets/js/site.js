(() => {
  const VERSION = "v0.8";

  const NAV = [
    { href: "/about/", label: "About" },
    { href: "/download/", label: "Download" },
    { href: "/docs/", label: "Docs" },
    { href: "/learn/", label: "Learn" },
    { href: "/blog/", label: "Blog" },
  ];

  const DOCS = [
    {
      title: "Start here",
      items: [
        { href: "/docs/", label: "What is S8" },
        { href: "/learn/", label: "Your first app" },
        { href: "/download/", label: "Install" },
      ],
    },
    {
      title: "API",
      items: [
        { href: "/docs/api/", label: "API overview" },
        { href: "/docs/api/s8.html", label: "S8" },
        { href: "/docs/api/s8-sync-flow.html", label: "S8SyncFlow" },
        { href: "/docs/api/server.html", label: "Server & boot" },
        { href: "/docs/api/front.html", label: "Front" },
        { href: "/docs/api/tables.html", label: "TablesDB" },
        { href: "/docs/api/spaces.html", label: "SpacesDB" },
        { href: "/docs/api/repositories.html", label: "RepositoriesDB" },
        { href: "/docs/api/mail.html", label: "Mail" },
        { href: "/docs/api/annotations.html", label: "Annotations" },
        { href: "/docs/api/serial.html", label: "Serial & bytes" },
        { href: "/docs/api/scripts.html", label: "Scripts" },
      ],
    },
    {
      title: "Modules",
      items: [
        { href: "/docs/modules/", label: "Module system" },
        { href: "/docs/modules/s8-module.html", label: "S8Module" },
        { href: "/docs/modules/s8-env.html", label: "S8Env & modes" },
      ],
    },
    {
      title: "Build",
      items: [
        { href: "/docs/build/", label: "Build system" },
        { href: "/docs/build/properties.html", label: "build.properties" },
        { href: "/docs/build/s8-stack-builder.html", label: "S8StackBuilder" },
      ],
    },
    {
      title: "For machines",
      items: [{ href: "/llms.txt", label: "llms.txt" }],
    },
  ];

  const JAVA_KW =
    /^(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|var|record|sealed|permits|yield|true|false|null)$/;

  function highlightJava(src) {
    const escaped = src
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const parts = escaped.split(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|@[A-Za-z_][\w.]*)/g);
    return parts
      .map((part) => {
        if (!part) return "";
        if (part.startsWith("//") || part.startsWith("/*")) return `<span class="com">${part}</span>`;
        if (part.startsWith("@")) return `<span class="ann">${part}</span>`;
        if (part.startsWith('"') || part.startsWith("'")) return `<span class="str">${part}</span>`;
        return part.replace(/\b([A-Za-z_][\w]*)\b/g, (m) => {
          if (JAVA_KW.test(m)) return `<span class="kw">${m}</span>`;
          if (/^[A-Z]/.test(m)) return `<span class="type">${m}</span>`;
          return m;
        }).replace(/\b(\d[\d_]*L?)\b/g, `<span class="num">$1</span>`);
      })
      .join("");
  }

  function normalize(p) {
    return (p || "/").replace(/index\.html$/, "").replace(/\/$/, "") || "/";
  }

  function isExact(href) {
    return normalize(location.pathname) === normalize(href);
  }

  function isSection(href) {
    const here = normalize(location.pathname);
    const there = normalize(href);
    if (there === "/") return here === "/";
    return here === there || here.startsWith(`${there}/`);
  }

  function headerHTML() {
    const links = NAV.map(
      (n) => `<a href="${n.href}" class="${isSection(n.href) ? "is-active" : ""}">${n.label}</a>`
    ).join("");
    return `
      <a class="skip" href="#content">Skip to content</a>
      <header class="site-header">
        <div class="wrap inner">
          <a class="brand" href="/">
            <img src="/assets/brand/s8-logo.png" width="44" height="44" alt="S8">
          </a>
          <nav class="nav" data-nav>${links}</nav>
          <div class="nav-extra" data-nav-extra>
            <a href="/community/">Community</a>
            <a href="https://github.com/S8-stack" rel="noopener">GitHub</a>
          </div>
          <button class="menu-btn" type="button" aria-label="Open menu" data-menu><span></span></button>
        </div>
      </header>`;
  }

  function footerHTML() {
    return `
      <footer class="site-footer">
        <div class="wrap footer-grid">
          <div>
            <div class="foot-brand">
              <img src="/assets/brand/s8-logo.png" width="36" height="36" alt="S8">
              S8
            </div>
            <p>The unified JAVA stack. Server, front, databases, and orchestration — already assembled.</p>
          </div>
          <div>
            <h3>Get started</h3>
            <ul>
              <li><a href="/download/">Download ${VERSION}</a></li>
              <li><a href="/learn/">Learn</a></li>
              <li><a href="/docs/">Documentation</a></li>
              <li><a href="/docs/api/">API reference</a></li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li><a href="/about/">About S8</a></li>
              <li><a href="/community/">Community</a></li>
              <li><a href="/blog/">Blog</a></li>
              <li><a href="/security/">Security</a></li>
            </ul>
          </div>
          <div>
            <h3>For humans &amp; AI</h3>
            <ul>
              <li><a href="/llms.txt">llms.txt</a></li>
              <li><a href="/ecosystem/">Ecosystem</a></li>
              <li><a href="https://github.com/S8-stack" rel="noopener">GitHub</a></li>
              <li><a href="mailto:contact@alphaventor.com">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap legal">
          Copyright © ${new Date().getFullYear()} Pierre Convert / AlphaVentor. All rights reserved.
          S8 and Stack8 are used to identify the S8 stack. Domain <a href="https://stack8.tech">stack8.tech</a>.
        </div>
      </footer>`;
  }

  function docsNavHTML() {
    const q = "";
    const groups = DOCS.map((g) => {
      const items = g.items
        .map((it) => `<a href="${it.href}" class="${isExact(it.href) ? "is-active" : ""}" data-label="${it.label.toLowerCase()}">${it.label}</a>`)
        .join("");
      return `<h4>${g.title}</h4>${items}`;
    }).join("");
    return `<input type="search" placeholder="Filter docs" aria-label="Filter documentation" data-doc-filter>
      ${groups}`;
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        return document.execCommand("copy");
      } catch {
        return false;
      } finally {
        ta.remove();
      }
    }
  }

  function mountSiteBg() {
    if (normalize(location.pathname) !== "/") return;
    document.body.classList.add("home");
    if (document.querySelector(".site-bg")) return;
    const wrap = document.createElement("div");
    wrap.className = "site-bg";
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML =
      '<img class="site-bg-img" alt="" decoding="async" src="/assets/wallpapers/dream-of-paradise.jpg">' +
      '<div class="site-bg-veil"></div>';
    document.body.prepend(wrap);

    const img = wrap.querySelector(".site-bg-img");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scrollTimeline =
      typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline: scroll()");

    const update = () => {
      if (reduce.matches || scrollTimeline) return;
      const viewH = window.innerHeight;
      const imgH = img.getBoundingClientRect().height;
      const maxShift = Math.max(0, imgH - viewH);
      const maxScroll = document.documentElement.scrollHeight - viewH;
      const p = maxScroll <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / maxScroll));
      img.style.transform = `translate3d(-50%, ${-maxShift * p}px, 0)`;
    };

    img.addEventListener("load", update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduce.addEventListener("change", update);
    update();
  }

  function mountChrome() {
    mountSiteBg();
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const apple = document.createElement("link");
      apple.rel = "apple-touch-icon";
      apple.href = "/apple-touch-icon.png";
      document.head.appendChild(apple);
    }
    const fav = document.querySelector('link[rel="icon"]');
    if (fav) fav.href = "/favicon.png?v=2";
    const headerHost = document.getElementById("site-header");
    const footerHost = document.getElementById("site-footer");
    if (headerHost) headerHost.outerHTML = headerHTML();
    if (footerHost) footerHost.outerHTML = footerHTML();

    const nav = document.querySelector("[data-nav]");
    const extra = document.querySelector("[data-nav-extra]");
    const btn = document.querySelector("[data-menu]");
    if (btn) {
      btn.addEventListener("click", () => {
        nav.classList.toggle("is-open");
        extra.classList.toggle("is-open");
      });
    }

    const docsHost = document.querySelector("[data-docs-nav]");
    if (docsHost) {
      docsHost.innerHTML = docsNavHTML();
      const filter = docsHost.querySelector("[data-doc-filter]");
      const apply = () => {
        const q = filter.value.trim().toLowerCase();
        docsHost.querySelectorAll("a[data-label]").forEach((a) => {
          a.hidden = Boolean(q) && !a.dataset.label.includes(q);
        });
        docsHost.querySelectorAll("h4").forEach((h) => {
          let n = h.nextElementSibling;
          let any = false;
          while (n && n.tagName !== "H4") {
            if (n.matches("a[data-label]") && !n.hidden) any = true;
            n = n.nextElementSibling;
          }
          h.hidden = Boolean(q) && !any;
        });
      };
      ["input", "keyup", "change", "search"].forEach((ev) => filter.addEventListener(ev, apply));
    }
  }

  function enhanceCode() {
    document.querySelectorAll("pre[data-lang='java'] code, code.lang-java").forEach((el) => {
      if (el.dataset.hl) return;
      el.innerHTML = highlightJava(el.textContent);
      el.dataset.hl = "1";
    });
    document.querySelectorAll("pre[data-lang='properties'] code, code.lang-properties").forEach((el) => {
      if (el.dataset.hl) return;
      el.innerHTML = el.textContent
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/#.*/g, (m) => `<span class="com">${m}</span>`)
        .replace(/^([^#<][^=]*)=/gm, `<span class="kw">$1</span>=`);
      el.dataset.hl = "1";
    });

    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const box = btn.closest(".codebox");
        const pre = box.querySelector("pre:not([hidden])") || box.querySelector("pre");
        const text = pre.innerText;
        const ok = await copyText(text);
        const prev = btn.textContent;
        btn.textContent = ok ? "Copied" : "Copy failed";
        setTimeout(() => (btn.textContent = prev), 1400);
      });
    });

    document.querySelectorAll("[data-tabs]").forEach((bar) => {
      const box = bar.closest(".codebox");
      bar.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          bar.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"));
          tab.classList.add("is-active");
          box.querySelectorAll("pre[data-panel]").forEach((p) => {
            p.hidden = p.dataset.panel !== tab.dataset.panel;
          });
        });
      });
    });
  }

  function buildToc() {
    const host = document.querySelector("[data-toc]");
    if (!host) return;
    const heads = [...document.querySelectorAll(".docs-main h2[id]")];
    if (!heads.length) {
      host.hidden = true;
      return;
    }
    host.innerHTML =
      `<strong>On this page</strong>` +
      heads.map((h) => `<a href="#${h.id}">${h.textContent}</a>`).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountChrome();
    enhanceCode();
    buildToc();
  });

  window.S8_VERSION = VERSION;
})();
