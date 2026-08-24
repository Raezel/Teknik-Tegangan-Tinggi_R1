// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar && navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(
  '.prak-card, .alat-card, .alat-full-card, .tim-card, .dok-item, .peng-item, .jurnal-item, .contact-card, .strip-stat'
).forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Accordion for praktikum detail
document.querySelectorAll('.prak-detail-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.prak-detail-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Tabs inside praktikum
document.querySelectorAll('.prak-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    const parent = tab.closest('.prak-detail-body');
    parent.querySelectorAll('.prak-tab').forEach(t => t.classList.remove('active'));
    parent.querySelectorAll('.prak-tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const content = parent.querySelector(`[data-content="${target}"]`);
    if (content) content.classList.add('active');
  });
});

// Contact form
function submitForm() {
  const name = document.getElementById('name')?.value;
  const email = document.getElementById('email')?.value;
  const msg = document.getElementById('message')?.value;
  if (!name || !email || !msg) { alert('Mohon lengkapi semua field yang wajib diisi (*)'); return; }
  const success = document.getElementById('successMsg');
  if (success) success.classList.add('show');
  ['name','email','nim','topic','subject','message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}
