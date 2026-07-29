/**
 * Aero Intelli — Premium Footer Component
 * ──────────────────────────────────────────────
 * Premium floating glassmorphism footer inspired by
 * Apple, Anthropic, Stripe, Linear, Vercel, Rivian
 *
 *  • Floating layout with top-radius of 50px
 *  • Aurora Organic Motion blurred background orbs
 *  • Premium social icons with outline glass circle
 *  • Minimal newsletters form with validation
 *  • Built-in keyboard accessibility
 */

(function () {
  'use strict';

  /* ── Social Media SVGs ── */
  const INSTAGRAM = `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="2"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="currentColor" stroke-width="2"></line></svg>`;

  const X_TWITTER = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"></path></svg>`;

  const YOUTUBE = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="none" stroke="currentColor" stroke-width="2"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon></svg>`;

  class AeroFooter {
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

      this.render();
      this.listen();
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

    render() {
      this.root.innerHTML = `
        <footer class="footer-container" role="contentinfo" aria-label="Aero Intelli Footer">
          <!-- Animated Background Orbs -->
          <div class="footer-orb footer-orb--1" aria-hidden="true"></div>
          <div class="footer-orb footer-orb--2" aria-hidden="true"></div>

          <div class="footer-inner">
            <!-- Bottom Navigation -->
            <div class="footer-top">
              <!-- Left Column (Brand & Socials) -->
              <div class="footer-brand">
                <a href="${this.getLink('index.html')}" class="f-logo" aria-label="Aero Intelli — Home">
                  <img src="${this.pathPrefix}assets/logo.png" alt="Aero Intelli logo" width="52" height="52">
                  <span class="f-logo-name">Aero Intelli</span>
                </a>
                <p class="f-tagline">Building the Future of Food, Water &amp; Sustainability.</p>
                
                <div class="f-socials">
                  <a href="https://x.com/aerointelli" class="f-social-btn" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    ${X_TWITTER}
                  </a>
                  <a href="https://instagram.com/aerointelli" class="f-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    ${INSTAGRAM}
                  </a>
                  <a href="https://youtube.com/@aerointelli" class="f-social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    ${YOUTUBE}
                  </a>
                </div>
              </div>

              <!-- Right Column (Navigation Grid) -->
              <div class="footer-nav-grid">
                <div class="footer-nav-col">
                  <h4 class="f-nav-title">Company</h4>
                  <ul class="f-nav-links">
                    <li><a href="${this.getLink('about.html')}">About</a></li>
                    <li><a href="${this.getLink('#technology')}">Technology</a></li>
                    <li><a href="${this.getLink('#solutions')}">Solutions</a></li>
                    <li><a href="${this.getLink('#products')}">Products</a></li>
                    <li><a href="${this.getLink('#careers')}">Careers</a></li>
                  </ul>
                </div>
                
                <div class="footer-nav-col">
                  <h4 class="f-nav-title">Resources</h4>
                  <ul class="f-nav-links">
                    <li><a href="${this.getLink('#blog')}">Blog</a></li>
                    <li><a href="${this.getLink('#research')}">Research</a></li>
                    <li><a href="${this.getLink('#case-studies')}">Case Studies</a></li>
                    <li><a href="${this.getLink('contact.html')}">Contact</a></li>
                  </ul>
                </div>

                <div class="footer-nav-col">
                  <h4 class="f-nav-title">Legal</h4>
                  <ul class="f-nav-links">
                    <li><a href="${this.getLink('legal/privacy-policy.html')}">Privacy Policy</a></li>
                    <li><a href="${this.getLink('legal/terms-and-conditions.html')}">Terms of Service</a></li>
                    <li><a href="${this.getLink('legal/cookie-policy.html')}">Cookie Policy</a></li>
                    <li><a href="#cookie-settings">Cookie Settings</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Newsletter Section -->
            <div class="footer-newsletter">
              <div class="f-news-text">
                <div class="f-news-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>INSIGHTS &amp; UPDATES</span>
                </div>
                <h4 class="f-news-title">Stay Updated</h4>
                <p class="f-news-desc">Receive insights about sustainable agriculture, food systems and innovation.</p>
              </div>
              <form class="f-news-form input-wrapper" id="footer-newsletter-form">
                <input type="email" id="footer-newsletter-email" placeholder="xyz@gmail.com" required class="f-news-input input" aria-label="Email address for newsletter">
                <button type="submit" class="f-news-btn Subscribe-btn">
                  Subscribe
                  <svg class="arrow" viewBox="0 0 38 15" height="15" width="24" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"></path>
                  </svg>
                </button>
              </form>
            </div>

            <!-- Divider -->
            <div class="footer-divider" aria-hidden="true"></div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
              <p class="f-copyright">&copy; 2026 Aero Intelli. All Rights Reserved.</p>
              <div class="f-bottom-links">
                <a href="${this.getLink('legal/terms-and-conditions.html')}">Terms &amp; Conditions</a>
                <a href="${this.getLink('legal/privacy-policy.html')}">Privacy Policy</a>
                <div class="f-more-menu-wrapper">
                  <button type="button" class="f-more-btn" id="f-more-menu-btn" aria-label="More legal policies" aria-expanded="false" aria-haspopup="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></svg>
                  </button>
                  <div class="f-more-dropdown" id="f-more-dropdown-menu" role="menu" aria-hidden="true">
                    <a href="${this.getLink('legal/refund-policy.html')}" role="menuitem">Refund &amp; Cancellation Policy</a>
                    <a href="${this.getLink('legal/shipping-policy.html')}" role="menuitem">Shipping &amp; Delivery Policy</a>
                    <a href="${this.getLink('legal/disclaimer.html')}" role="menuitem">Disclaimer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      `;
    }

    listen() {
      const form = document.getElementById('footer-newsletter-form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailInput = document.getElementById('footer-newsletter-email');
          const email = emailInput ? emailInput.value.trim() : '';

          if (email) {
            // Elegant premium transition instead of alert/popup
            const container = form.closest('.footer-newsletter');
            if (container) {
              container.innerHTML = `
                <div class="f-news-text" style="max-width: 100%; text-align: center; width: 100%; animation: footerFadeUp 400ms ease;">
                  <h4 class="f-news-title" style="color: #008F7D;">Thank you for subscribing!</h4>
                  <p class="f-news-desc">You have successfully subscribed to the Aero Intelli newsletter with: <strong>${escapeHtml(email)}</strong></p>
                </div>
              `;
            }
          }
        });
      }

      // Dropdown menu toggle
      const moreBtn = document.getElementById('f-more-menu-btn');
      const dropdown = document.getElementById('f-more-dropdown-menu');
      if (moreBtn && dropdown) {
        moreBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isExpanded = moreBtn.getAttribute('aria-expanded') === 'true';
          moreBtn.setAttribute('aria-expanded', !isExpanded);
          moreBtn.classList.toggle('active');
          dropdown.classList.toggle('show');
        });

        // Click outside closes the dropdown
        document.addEventListener('click', (e) => {
          if (!moreBtn.contains(e.target) && !dropdown.contains(e.target)) {
            moreBtn.setAttribute('aria-expanded', 'false');
            moreBtn.classList.remove('active');
            dropdown.classList.remove('show');
          }
        });

        // ESC key closes the dropdown
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && dropdown.classList.contains('show')) {
            moreBtn.setAttribute('aria-expanded', 'false');
            moreBtn.classList.remove('active');
            dropdown.classList.remove('show');
            moreBtn.focus();
          }
        });
      }
    }
  }

  // Simple HTML escaping helper
  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AeroFooter('footer-root'));
  } else {
    new AeroFooter('footer-root');
  }
})();
