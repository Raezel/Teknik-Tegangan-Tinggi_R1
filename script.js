// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.svc-chip, .about-img-col, .about-text-col, .review-pill, .review-main, .area-card, .way-step, .promo-card, .partner-logo, .job-item, .careers-img, .careers-text'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => io.observe(el));

// Way step click
document.querySelectorAll('.way-step').forEach(step => {
  step.addEventListener('click', () => {
    document.querySelectorAll('.way-step').forEach(s => s.classList.remove('active'));
    step.classList.add('active');
  });
});

// Review pill click
document.querySelectorAll('.review-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.review-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});
