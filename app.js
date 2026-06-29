document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // Scroll-Reveal Animation System
  // ============================
  const revealElements = document.querySelectorAll('.anim-reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ============================
  // Navbar Scroll Effect
  // ============================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  const handleNavScroll = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 32) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide navbar on scroll down, show on scroll up
    if (scrollY > 400) {
      if (scrollY > lastScroll + 5) {
        navbar.classList.add('nav-hidden');
      } else if (scrollY < lastScroll - 5) {
        navbar.classList.remove('nav-hidden');
      }
    } else {
      navbar.classList.remove('nav-hidden');
    }
    
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  // ============================
  // Animated Number Counters
  // ============================
  const statNumbers = document.querySelectorAll('.metric-number[data-target]');
  let statsAnimated = false;

  const animateCounters = () => {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 2000;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth ease-out quint curve
        const eased = 1 - Math.pow(1 - progress, 5);
        el.textContent = Math.round(target * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(step);
    });
  };

  const metricsSection = document.querySelector('.teaser-metrics');
  if (metricsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(metricsSection);
  }


  // ============================
  // Waitlist Subscription Form
  // ============================
  const waitlistForm = document.getElementById('waitlist-form');
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnArrow = submitBtn ? submitBtn.querySelector('.btn-arrow') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const successContainer = document.getElementById('success-container');
  const formInner = document.querySelector('.form-wrapper-inner');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput && emailError) {
    // Clear errors while typing
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('invalid')) {
        emailInput.classList.remove('invalid');
        emailError.style.display = 'none';
        emailError.textContent = '';
      }
    });
  }

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailValue = emailInput.value.trim();

      if (!emailValue) {
        showError('Please enter your email address.');
        return;
      }

      if (!emailRegex.test(emailValue)) {
        showError('Please enter a valid email address.');
        return;
      }

      // Check for duplicates before showing loading
      if (isAlreadySubscribed(emailValue)) {
        showError('This email is already on our waitlist!');
        return;
      }

      setLoadingState(true);

      // Simulate API call
      setTimeout(() => {
        saveToWaitlist(emailValue);
        setLoadingState(false);

        // Animate form out, success in
        if (formInner) {
          formInner.style.opacity = '0';
          formInner.style.transform = 'translateY(-8px)';
        }
        
        setTimeout(() => {
          if (formInner) formInner.style.display = 'none';
          const formNote = document.querySelector('.form-note');
          if (formNote) formNote.style.display = 'none';

          if (successContainer) {
            successContainer.style.display = 'block';
            // Trigger reflow for animation
            void successContainer.offsetHeight;
            successContainer.classList.add('visible');
          }
        }, 300);
      }, 1400);
    });
  }

  function showError(message) {
    if (!emailInput || !emailError) return;
    emailInput.classList.add('invalid');
    emailError.textContent = message;
    emailError.style.display = 'block';
    
    // Subtle shake animation
    emailInput.style.animation = 'none';
    void emailInput.offsetHeight;
    emailInput.style.animation = 'shake 0.4s ease';
    
    emailInput.focus();
  }

  function setLoadingState(isLoading) {
    if (!emailInput || !submitBtn) return;
    emailInput.disabled = isLoading;
    submitBtn.disabled = isLoading;
    if (isLoading) {
      if (btnText) btnText.style.opacity = '0';
      if (btnArrow) btnArrow.style.opacity = '0';
      if (btnSpinner) btnSpinner.style.display = 'block';
      submitBtn.style.pointerEvents = 'none';
    } else {
      if (btnText) btnText.style.opacity = '1';
      if (btnArrow) btnArrow.style.opacity = '1';
      if (btnSpinner) btnSpinner.style.display = 'none';
      submitBtn.style.pointerEvents = '';
    }
  }

  function isAlreadySubscribed(email) {
    try {
      const waitlist = JSON.parse(localStorage.getItem('aerointelli_waitlist') || '[]');
      return waitlist.some(item =>
        (typeof item === 'string' ? item : item.email) === email
      );
    } catch (e) {
      return false;
    }
  }

  function saveToWaitlist(email) {
    try {
      const waitlist = JSON.parse(localStorage.getItem('aerointelli_waitlist') || '[]');
      waitlist.push({
        email: email,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('aerointelli_waitlist', JSON.stringify(waitlist));
    } catch (e) {
      console.error('Failed to save waitlist to localStorage:', e);
    }
  }


  // ============================
  // Cookie Consent Banner
  // ============================
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookieBtn = document.getElementById('accept-cookie-btn');
  const hasConsent = localStorage.getItem('aerointelli_cookie_consent');

  if (cookieBanner && !hasConsent) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 2500);
  }

  if (acceptCookieBtn && cookieBanner) {
    acceptCookieBtn.addEventListener('click', () => {
      localStorage.setItem('aerointelli_cookie_consent', 'true');
      cookieBanner.classList.remove('show');
    });
  }


  // ============================
  // Privacy Policy Modal
  // ============================
  const cookiePrivacyLink = document.getElementById('cookie-privacy-link');
  const modalOverlay = document.getElementById('privacy-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openModal(e) {
    e.preventDefault();
    if (modalOverlay) {
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (modalCloseBtn) modalCloseBtn.focus();
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (cookiePrivacyLink) cookiePrivacyLink.addEventListener('click', openModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

});
