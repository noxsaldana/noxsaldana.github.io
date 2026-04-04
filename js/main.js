/* ================================================================
   NAVBAR — Hamburger toggle
================================================================ */
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('nav-drawer');

if (hamburger && navDrawer) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navDrawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (e) => {
    if (!navDrawer.contains(e.target) && !hamburger.contains(e.target)) {
      navDrawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close drawer when a link inside it is clicked
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ================================================================
   NAVBAR — Learning dropdown (click for touch devices)
================================================================ */
document.querySelectorAll('.nav-dropdown').forEach(dd => {
  const trigger = dd.querySelector('.nav-dropdown-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', (e) => {
    // Only intercept on touch / small screens where hover doesn't work
    if (window.matchMedia('(hover: none)').matches) {
      e.preventDefault();
      dd.classList.toggle('open');
    }
  });

  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) dd.classList.remove('open');
  });
});

/* ================================================================
   PARALLAX — Programs section background
================================================================ */
const parallaxBg = document.querySelector('.programs-parallax-bg');

if (parallaxBg) {
  function updateParallax() {
    const section = parallaxBg.closest('section');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const vh   = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) return;
    const progress = 1 - rect.bottom / (vh + rect.height);
    parallaxBg.style.transform = `translateY(${(progress - 0.5) * 120}px)`;
  }
  window.addEventListener('scroll', updateParallax, { passive: true });
  window.addEventListener('resize', updateParallax, { passive: true });
  updateParallax();
}

/* ================================================================
   DONATE — Amount button selection
================================================================ */
document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.donate-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ================================================================
   CONTACT FORM — Submission feedback
================================================================ */
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('form-submit-btn');

if (contactForm && submitBtn) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Message Sent!';
    submitBtn.classList.add('sent');
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = 'Send Message';
      submitBtn.classList.remove('sent');
      submitBtn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}
