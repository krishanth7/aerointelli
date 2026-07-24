/**
 * Aero Intelli — Premium Cookie Consent System
 * ──────────────────────────────────────────────
 * High-performance, GDPR-compliant glassmorphism Cookie Notice and Settings
 * 
 * Functions:
 *  - Checks and stores cookie consent status in localStorage.
 *  - Auto-resolves pathing to legal/cookie-policy.html based on active folder context.
 *  - Supports "Accept All", "Reject Non-Essential", and customizable "Cookie Settings".
 *  - Gracefully responds to site-wide trigger links (e.g. href="#cookie-settings").
 */

(function () {
  'use strict';

  const LOCAL_STORAGE_KEY = 'aero-cookie-consent';

  // Categories helper
  const ALL_ACCEPTED = {
    essential: true,
    performance: true,
    functional: true,
    marketing: true
  };

  const ONLY_ESSENTIAL = {
    essential: true,
    performance: false,
    functional: false,
    marketing: false
  };

  class AeroCookieConsent {
    constructor() {
      // Determine correct relative path to Cookie Policy
      const isLegalPage = window.location.pathname.toLowerCase().includes('/legal/');
      const isResourcesPage = window.location.pathname.toLowerCase().includes('/resources/');
      const prefix = (isLegalPage || isResourcesPage) ? '../' : '';
      this.policyPath = prefix + 'legal/cookie-policy.html';

      this.consent = this.getStoredConsent();
      this.injectElements();
      this.cache();
      this.listen();

      // If no consent exists, animate the banner in
      if (!this.consent) {
        setTimeout(() => {
          if (this.banner) {
            this.banner.classList.add('show');
          }
        }, 800);
      }
    }

    getStoredConsent() {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        console.warn('LocalStorage not accessible for cookie consent:', e);
        return null;
      }
    }

    setConsent(preferences) {
      this.consent = {
        ...preferences,
        timestamp: Date.now()
      };

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.consent));
      } catch (e) {
        console.warn('Could not write cookie consent to LocalStorage:', e);
      }

      // Dispatch event for analytics / scripts integration
      window.dispatchEvent(new CustomEvent('aeroCookieConsentChange', { detail: this.consent }));

      this.hideBanner();
      this.hideModal();
    }

    injectElements() {
      // Create Banner Container if not present
      if (!document.getElementById('aero-cookie-banner')) {
        const bannerDiv = document.createElement('div');
        bannerDiv.id = 'aero-cookie-banner';
        bannerDiv.className = 'aero-cookie-banner';
        bannerDiv.innerHTML = `
          <div class="aero-cookie-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #006B5E;">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
            Cookie Notice
          </div>
          <p class="aero-cookie-text">
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, improve our services, and support website functionality.
            By clicking <strong>"Accept All"</strong>, you consent to the use of all cookies in accordance with our <a href="${this.policyPath}">Cookie Policy</a>.
            You can manage your cookie preferences at any time.
          </p>
          <div class="aero-cookie-actions">
            <div class="aero-cookie-btn-row">
              <button type="button" class="aero-cookie-btn aero-cookie-btn--primary" id="aero-cookie-accept-all">Accept All</button>
              <button type="button" class="aero-cookie-btn aero-cookie-btn--secondary" id="aero-cookie-reject-non-essential">Reject Non-Essential</button>
            </div>
            <button type="button" class="aero-cookie-btn aero-cookie-btn--text" id="aero-cookie-settings-btn">Cookie Settings</button>
          </div>
        `;
        document.body.appendChild(bannerDiv);
      }

      // Create Settings Modal Overlay if not present
      if (!document.getElementById('aero-cookie-overlay')) {
        const overlayDiv = document.createElement('div');
        overlayDiv.id = 'aero-cookie-overlay';
        overlayDiv.className = 'aero-cookie-overlay';
        overlayDiv.innerHTML = `
          <div class="aero-cookie-modal" role="dialog" aria-modal="true" aria-labelledby="aero-cookie-title-text">
            <div class="aero-cookie-modal-header">
              <h2 class="aero-cookie-modal-title" id="aero-cookie-title-text">Cookie Preferences</h2>
              <button type="button" class="aero-cookie-modal-close" id="aero-cookie-modal-close" aria-label="Close Cookie Settings">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="aero-cookie-modal-body">
              <p class="aero-cookie-modal-desc">
                We use cookies to optimize your experience. You can choose which categories of cookies to allow. Disabling certain cookies may impact your experience on our website. Read our full <a href="${this.policyPath}" style="color: #006B5E; text-decoration: underline; font-weight: 500;">Cookie Policy</a>.
              </p>
              
              <!-- Essential -->
              <div class="aero-cookie-category">
                <div class="aero-cookie-cat-info">
                  <div class="aero-cookie-cat-header">
                    <span class="aero-cookie-cat-name">Essential Cookies</span>
                    <span class="aero-cookie-badge aero-cookie-badge--required">Required</span>
                  </div>
                  <p class="aero-cookie-cat-desc">Necessary for the website to function properly, enabling secure navigation, form submissions, session management, and basic security. Cannot be disabled.</p>
                </div>
                <label class="aero-cookie-switch" aria-label="Toggle Essential Cookies">
                  <input type="checkbox" id="aero-cook-essential" checked disabled>
                  <span class="aero-cookie-slider"></span>
                </label>
              </div>

              <!-- Performance & Analytics -->
              <div class="aero-cookie-category">
                <div class="aero-cookie-cat-info">
                  <div class="aero-cookie-cat-header">
                    <span class="aero-cookie-cat-name">Performance & Analytics Cookies</span>
                    <span class="aero-cookie-badge aero-cookie-badge--optional">Optional</span>
                  </div>
                  <p class="aero-cookie-cat-desc">Help us understand how visitors interact with our website by collecting page views, traffic sources, time spent, and general usage metrics in an aggregated form.</p>
                </div>
                <label class="aero-cookie-switch" aria-label="Toggle Performance and Analytics Cookies">
                  <input type="checkbox" id="aero-cook-performance">
                  <span class="aero-cookie-slider"></span>
                </label>
              </div>

              <!-- Functional -->
              <div class="aero-cookie-category">
                <div class="aero-cookie-cat-info">
                  <div class="aero-cookie-cat-header">
                    <span class="aero-cookie-cat-name">Functional Cookies</span>
                    <span class="aero-cookie-badge aero-cookie-badge--optional">Optional</span>
                  </div>
                  <p class="aero-cookie-cat-desc">Allow the website to remember choices you make (such as UI preferences, language settings, and region selection) to provide a more personalized experience.</p>
                </div>
                <label class="aero-cookie-switch" aria-label="Toggle Functional Cookies">
                  <input type="checkbox" id="aero-cook-functional">
                  <span class="aero-cookie-slider"></span>
                </label>
              </div>

              <!-- Marketing & Advertising -->
              <div class="aero-cookie-category">
                <div class="aero-cookie-cat-info">
                  <div class="aero-cookie-cat-header">
                    <span class="aero-cookie-cat-name">Marketing & Advertising Cookies</span>
                    <span class="aero-cookie-badge aero-cookie-badge--optional">Optional</span>
                  </div>
                  <p class="aero-cookie-cat-desc">Used by us and our third-party partners to deliver more relevant advertisements, measure promotional campaign performance, and understand your interest profile.</p>
                </div>
                <label class="aero-cookie-switch" aria-label="Toggle Marketing and Advertising Cookies">
                  <input type="checkbox" id="aero-cook-marketing">
                  <span class="aero-cookie-slider"></span>
                </label>
              </div>
            </div>
            <div class="aero-cookie-modal-footer">
              <button type="button" class="aero-cookie-btn aero-cookie-btn--secondary" id="aero-cookie-save-preferences" style="flex: 1;">Save Preferences</button>
              <button type="button" class="aero-cookie-btn aero-cookie-btn--primary" id="aero-cookie-modal-accept-all" style="flex: 1;">Accept All</button>
            </div>
          </div>
        </div>
        `;
        document.body.appendChild(overlayDiv);
      }
    }

    cache() {
      this.banner = document.getElementById('aero-cookie-banner');
      this.overlay = document.getElementById('aero-cookie-overlay');
      
      this.btnAcceptAll = document.getElementById('aero-cookie-accept-all');
      this.btnRejectNonEssential = document.getElementById('aero-cookie-reject-non-essential');
      this.btnSettings = document.getElementById('aero-cookie-settings-btn');
      
      this.modalClose = document.getElementById('aero-cookie-modal-close');
      this.modalSave = document.getElementById('aero-cookie-save-preferences');
      this.modalAcceptAll = document.getElementById('aero-cookie-modal-accept-all');

      // Toggles
      this.togglePerformance = document.getElementById('aero-cook-performance');
      this.toggleFunctional = document.getElementById('aero-cook-functional');
      this.toggleMarketing = document.getElementById('aero-cook-marketing');
    }

    listen() {
      // Banner Actions
      if (this.btnAcceptAll) {
        this.btnAcceptAll.addEventListener('click', () => this.setConsent(ALL_ACCEPTED));
      }
      if (this.btnRejectNonEssential) {
        this.btnRejectNonEssential.addEventListener('click', () => this.setConsent(ONLY_ESSENTIAL));
      }
      if (this.btnSettings) {
        this.btnSettings.addEventListener('click', () => this.showModal());
      }

      // Modal Actions
      if (this.modalClose) {
        this.modalClose.addEventListener('click', () => this.hideModal());
      }
      if (this.modalAcceptAll) {
        this.modalAcceptAll.addEventListener('click', () => this.setConsent(ALL_ACCEPTED));
      }
      if (this.modalSave) {
        this.modalSave.addEventListener('click', () => {
          const preferences = {
            essential: true,
            performance: this.togglePerformance ? this.togglePerformance.checked : false,
            functional: this.toggleFunctional ? this.toggleFunctional.checked : false,
            marketing: this.toggleMarketing ? this.toggleMarketing.checked : false
          };
          this.setConsent(preferences);
        });
      }

      // Close modal on click outside content
      if (this.overlay) {
        this.overlay.addEventListener('click', (e) => {
          if (e.target === this.overlay) {
            this.hideModal();
          }
        });
      }

      // Escape key to close modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.overlay && this.overlay.classList.contains('show')) {
          this.hideModal();
        }
      });

      // Hook up any link that clicks to `#cookie-settings`
      document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (anchor) {
          const href = anchor.getAttribute('href');
          if (href && (href === '#cookie-settings' || href.endsWith('#cookie-settings') || href === '#cookie' || href.endsWith('#cookie') && !href.includes('.html'))) {
            e.preventDefault();
            this.showModal();
          }
        }
      });
    }

    showModal() {
      // Sync toggles with current consent values
      const current = this.consent || ONLY_ESSENTIAL;
      if (this.togglePerformance) this.togglePerformance.checked = !!current.performance;
      if (this.toggleFunctional) this.toggleFunctional.checked = !!current.functional;
      if (this.toggleMarketing) this.toggleMarketing.checked = !!current.marketing;

      if (this.overlay) {
        this.overlay.classList.add('show');
        // Prevent scrolling of body when modal is open
        document.body.style.overflow = 'hidden';
      }
    }

    hideModal() {
      if (this.overlay) {
        this.overlay.classList.remove('show');
        // Restore scrolling of body
        document.body.style.overflow = '';
      }
    }

    hideBanner() {
      if (this.banner) {
        this.banner.classList.remove('show');
        // Remove after transition
        setTimeout(() => {
          this.banner.style.display = 'none';
        }, 400);
      }
    }
  }

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AeroCookieConsent());
  } else {
    new AeroCookieConsent();
  }
})();
