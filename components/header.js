/**
 * Aero Intelli — Floating Header Component
 * ──────────────────────────────────────────────
 * Premium floating glassmorphism header inspired by
 * Apple, Linear, Anthropic, Stripe, Arc Browser, Vercel
 *
 *  • Floating pill with visible screen-edge gaps
 *  • 4-column mega menus with hover delay bridge
 *  • Accordion mobile drawer with close button
 *  • Scroll-responsive glass intensity
 *  • Full WCAG keyboard navigation
 */

(function () {
  'use strict';

  /* ── SVG Icons (inline, zero HTTP requests) ── */
  const CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  const ARROW = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

  const CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  /* ── Mega Menu Data (4 columns each) ── */
  const MEGA = {
    solutions: {
      cols: [
        { title: 'Farming', items: ['NFT Hydroponics', 'Aeroponics', 'Aero Organic'] },
        { title: 'Water & Beverages', items: ['RAS System', 'Vireon™ (Longevity Mineral Water)', 'COCO Origin™ (Coconut Water)'] },
        { title: 'Intelligence', items: ['AEROS AI (Aero Ecosystem Operating System)'] },
      ],
      featured: {
        title: 'The Future of Agriculture',
        desc: 'Discover how zero-chemical farming systems are revolutionizing food production worldwide.',
        cta: 'Explore all solutions',
        href: 'solutions.html',
      },
    },
    technology: {
      cols: [
        { title: 'Bio-Systems', items: [{ label: 'Recirculating Aquaculture Systems (RAS)', href: 'Technology/RAS.html' }, 'Hydroponics', 'Aeroponics'] },
        { title: 'Hardware & Control', items: ['Water Technologies', 'Automation & Intelligence', 'IoT & Sensors'] },
        { title: 'Data & AI', items: ['Machine Learning', 'Computer Vision', 'Data Analytics'] },
      ],
      featured: {
        title: 'Deep-Tech Innovation',
        desc: 'Our proprietary technology stack powers the next generation of sustainable food systems.',
        cta: 'View all technology',
        href: '#technology',
      },
    },
    products: {
      cols: [
        { title: 'Hardware', items: ['AeroGrow\u2122', 'AquaSmart\u2122', 'SensorGrid\u2122'] },
        { title: 'Software', items: ['CropVision AI', 'NutriFlow\u2122', 'FarmOS\u2122'] },
        { title: 'Services', items: ['Installation', 'Training', 'Support Plans'] },
      ],
      featured: {
        type: 'product',
        image: 'assets/product-coco.png',
        title: 'Coco Origin',
        desc: 'Innovating the future of Food, Water & Sustainability.',
        cta: 'Learn more',
        href: '#products',
      },
    },
  };

  /* ── Navigation Items ── */
  const NAV = [
    { label: 'About',      href: 'about.html'  },
    { label: 'Solutions',  href: 'solutions.html',  mega: 'solutions'  },
    { label: 'Technology', href: '#technology', mega: 'technology' },
    { label: 'Contact',    href: 'contact.html' },
  ];


  /* ═══════════════════════════════════════
     AeroHeader Class
     ═══════════════════════════════════════ */
  class AeroHeader {
    constructor(id) {
      this.root = document.getElementById(id);
      if (!this.root) return;

      const path = window.location.pathname.toLowerCase();
      this.isHomepage = path.endsWith('/index.html') || path === '/' || path === '' || (!path.includes('.html') && !path.includes('/legal/') && !path.includes('/resources/'));

      // Check if we are in a subdirectory (like /resources/ or /legal/ or /technology/)
      this.pathPrefix = '';
      if (path.includes('/resources/') || path.includes('/legal/') || path.includes('/technology/')) {
        this.pathPrefix = '../';
      }

      this.drawerOpen = false;
      this.hoverTimers = new Map();
      this.render();
      this.cache();
      this.listen();
      this.onScroll();
    }

    getLink(href) {
      if (href.startsWith('#')) {
        return this.isHomepage ? href : this.pathPrefix + 'index.html' + href;
      }
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return href;
      }
      return this.pathPrefix + href;
    }

    /* ── Mega Menu Template ── */
    megaHTML(key) {
      const d = MEGA[key];

      /* First 3 columns — link lists */
      const cols = d.cols.map(col => {
        const items = col.items
          .map(item => {
            const label = typeof item === 'string' ? item : item.label;
            const href = typeof item === 'string' ? '#' : item.href;
            return `<li><a href="${this.getLink(href)}" class="mega-link" role="menuitem">${label}</a></li>`;
          })
          .join('');
        return `
          <div class="mega-col">
            <h4 class="mega-col-title">${col.title}</h4>
            <ul class="mega-col-list">${items}</ul>
          </div>`;
      }).join('');

      /* 4th column — featured / product */
      const f = d.featured;
      let featured;

      if (f.type === 'product') {
        featured = `
          <div class="mega-col mega-featured">
            <div class="mega-product-card">
              <div class="mega-product-img" style="background-image:url('${this.pathPrefix}${f.image}')"></div>
              <div class="mega-product-body">
                <p class="mega-product-title">${f.title}</p>
                <p class="mega-product-desc">${f.desc}</p>
                <a href="${this.getLink(f.href)}" class="mega-cta">${f.cta} ${ARROW}</a>
              </div>
            </div>
          </div>`;
      } else {
        featured = `
          <div class="mega-col mega-featured">
            <div class="mega-highlight">
              <h4 class="mega-highlight-title">${f.title}</h4>
              <p class="mega-highlight-desc">${f.desc}</p>
              <a href="${this.getLink(f.href)}" class="mega-cta">${f.cta} ${ARROW}</a>
            </div>
          </div>`;
      }

      const totalCols = d.cols.length + 1;
      return `<div class="mega-menu mega-menu--cols-${totalCols}" id="mega-${key}" role="menu"><div class="mega-grid mega-grid--cols-${totalCols}">${cols}${featured}</div></div>`;
    }

    /* ── Desktop Nav ── */
    navHTML() {
      return NAV.map(n => {
        const has = !!n.mega;
        const chev = has ? `<span class="nav-chev">${CHEVRON}</span>` : '';
        const mega = has ? this.megaHTML(n.mega) : '';
        const aria = has ? ' aria-expanded="false" aria-haspopup="true"' : '';
        return `<div class="nav-item${has ? ' has-mega' : ''}">`
             + `<a href="${this.getLink(n.href)}" class="nav-link"${aria}>${n.label}${chev}</a>`
             + mega
             + `</div>`;
      }).join('');
    }

    /* ── Mobile Nav ── */
    mobileNavHTML() {
      return NAV.map(n => {
        if (!n.mega) {
          return `<li><a href="${this.getLink(n.href)}" class="mob-link">${n.label}</a></li>`;
        }
        const d = MEGA[n.mega];
        const items = d.cols
          .flatMap(c => c.items)
          .map(item => {
            const label = typeof item === 'string' ? item : item.label;
            const href = typeof item === 'string' ? '#' : item.href;
            return `<li><a href="${this.getLink(href)}" class="mob-sub-link">${label}</a></li>`;
          })
          .join('');
        return `
          <li class="mob-acc">
            <button class="mob-link mob-acc-btn" aria-expanded="false">
              ${n.label}
              <span class="mob-chev">${CHEVRON}</span>
            </button>
            <ul class="mob-sub">${items}</ul>
          </li>`;
      }).join('');
    }

    /* ── Full Render ── */
    render() {
      this.root.innerHTML = `
        <header class="header" id="site-header" role="banner">
          <a href="${this.getLink('index.html')}" class="h-logo" aria-label="Aero Intelli — Home">
            <img src="${this.pathPrefix}assets/logo.png" alt="" width="42" height="42">
            <div class="h-logo-txt">
              <span class="h-logo-name">Aero Intelli</span>
              <span class="h-logo-sub">Future of Food, Water &amp; Sustainability</span>
            </div>
          </a>

          <nav class="h-nav" aria-label="Main navigation">
            ${this.navHTML()}
          </nav>

          <div class="h-cta h-cta--desk">
            <a href="${this.getLink('#shop')}" class="btn btn--solid" id="cta-shop">Shop Now ${ARROW}</a>
          </div>

          <button class="h-burger" id="h-burger"
                  aria-label="Open menu" aria-expanded="false">
            <span class="burger-lines"><span></span><span></span><span></span></span>
          </button>
        </header>

        <aside class="mob-drawer" id="mob-drawer"
               role="dialog" aria-modal="true" aria-label="Mobile menu">
          <div class="mob-top">
            <a href="${this.getLink('index.html')}" class="h-logo">
              <img src="${this.pathPrefix}assets/logo.png" alt="" width="32" height="32">
              <span class="h-logo-name">Aero Intelli</span>
            </a>
            <button class="mob-close" id="mob-close" aria-label="Close menu">${CLOSE}</button>
          </div>
          <ul class="mob-nav">
            ${this.mobileNavHTML()}
          </ul>
          <div class="mob-bottom-cta">
            <a href="${this.getLink('#shop')}" class="btn btn--solid btn--full">Shop Now</a>
          </div>
        </aside>

        <div class="h-overlay" id="h-overlay" aria-hidden="true"></div>
      `;
    }

    /* ── Cache DOM References ── */
    cache() {
      this.header   = document.getElementById('site-header');
      this.burger   = document.getElementById('h-burger');
      this.drawer   = document.getElementById('mob-drawer');
      this.overlay  = document.getElementById('h-overlay');
      this.closeBtn = document.getElementById('mob-close');
      this.megas    = this.root.querySelectorAll('.nav-item.has-mega');
      this.accBtns  = this.drawer.querySelectorAll('.mob-acc-btn');
    }

    /* ── Event Listeners ── */
    listen() {
      /* Scroll — glass intensity change */
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => { this.onScroll(); ticking = false; });
          ticking = true;
        }
      }, { passive: true });

      /* Hamburger */
      this.burger.addEventListener('click', () => this.toggleDrawer());
      this.closeBtn.addEventListener('click', () => this.shutDrawer());
      this.overlay.addEventListener('click', () => this.shutDrawer());

      /* Close drawer on link click */
      this.drawer.querySelectorAll('.mob-link:not(.mob-acc-btn), .mob-sub-link, .mob-bottom-cta a').forEach(a =>
        a.addEventListener('click', () => this.shutDrawer())
      );

      /* Mobile Accordions */
      this.accBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const isOpen = btn.getAttribute('aria-expanded') === 'true';
          /* Close all first */
          this.accBtns.forEach(b => {
            b.setAttribute('aria-expanded', 'false');
            b.closest('.mob-acc').classList.remove('open');
          });
          if (!isOpen) {
            btn.setAttribute('aria-expanded', 'true');
            btn.closest('.mob-acc').classList.add('open');
          }
        });
      });

      /* Mega Menu — Hover with delay bridge */
      this.megas.forEach(item => {
        let timer;

        item.addEventListener('mouseenter', () => {
          clearTimeout(timer);
          /* Close other mega menus */
          this.megas.forEach(el => {
            if (el !== item) {
              el.classList.remove('mega-open');
              el.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
            }
          });
          this.openMega(item);
        });

        item.addEventListener('mouseleave', () => {
          timer = setTimeout(() => {
            item.classList.remove('mega-open');
            item.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
          }, 150);
        });
      });

      /* Mega Menu — Keyboard */
      this.megas.forEach(item => {
        const link = item.querySelector('.nav-link');
        link.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleMega(item);
          }
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const first = item.querySelector('.mega-link, .mega-cta');
            if (first) { this.openMega(item); first.focus(); }
          }
        });
      });

      /* Click outside → close mega */
      document.addEventListener('click', e => {
        if (!e.target.closest('.nav-item.has-mega')) this.closeMegas();
      });

      /* Escape */
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          this.shutDrawer();
          this.closeMegas();
        }
      });

      /* Resize */
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && this.drawerOpen) this.shutDrawer();
      });
    }

    /* ── Scroll Handler ── */
    onScroll() {
      this.header.classList.toggle('scrolled', window.scrollY > 50);
    }

    /* ── Drawer ── */
    toggleDrawer() { this.drawerOpen ? this.shutDrawer() : this.openDrawer(); }

    openDrawer() {
      this.drawerOpen = true;
      this.burger.classList.add('active');
      this.burger.setAttribute('aria-expanded', 'true');
      this.drawer.classList.add('open');
      this.overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    shutDrawer() {
      if (!this.drawerOpen) return;
      this.drawerOpen = false;
      this.burger.classList.remove('active');
      this.burger.setAttribute('aria-expanded', 'false');
      this.drawer.classList.remove('open');
      this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    /* ── Mega Menu ── */
    toggleMega(el) {
      const open = el.classList.contains('mega-open');
      this.closeMegas();
      if (!open) this.openMega(el);
    }

    openMega(el) {
      el.classList.add('mega-open');
      el.querySelector('.nav-link').setAttribute('aria-expanded', 'true');
    }

    closeMegas() {
      this.megas.forEach(el => {
        el.classList.remove('mega-open');
        el.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
      });
    }
  }

  /* ── Auto-Init ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AeroHeader('header-root'));
  } else {
    new AeroHeader('header-root');
  }
})();
