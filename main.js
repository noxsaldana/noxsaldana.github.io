/* ============================================================
   main.js — Evolving Wildlife Foundation
============================================================ */

// ── Hamburger / mobile nav drawer ──────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const drawer    = document.getElementById('nav-drawer');

function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close drawer when any drawer link is clicked
drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// Close drawer on outside click
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !drawer.contains(e.target)) {
    closeDrawer();
  }
});

// ── Parallax — Programs section background ─────────────────
const parallaxBg = document.getElementById('parallax-bg');

function updateParallax() {
  if (!parallaxBg) return;
  const section = document.getElementById('programs');
  const rect    = section.getBoundingClientRect();
  const vh      = window.innerHeight;

  // Only update when section is visible
  if (rect.bottom < 0 || rect.top > vh) return;

  // Progress: 0 when section top enters bottom of viewport,
  //           1 when section bottom exits top of viewport
  const progress = 1 - (rect.bottom / (vh + rect.height));
  const shift    = (progress - 0.5) * 120; // ±60px travel range
  parallaxBg.style.transform = `translateY(${shift}px)`;
}

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', updateParallax, { passive: true });
updateParallax(); // run once on load

// ── Donate amount selector ──────────────────────────────────
document.querySelectorAll('.donate-amount').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.donate-amount').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Contact form submission ─────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.style.background = 'var(--color-teal-dark)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}
