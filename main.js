const progress = document.querySelector('#readingProgress');
const backTop = document.querySelector('#backTop');
const toc = document.querySelector('#toc');
const menuToggle = document.querySelector('#menuToggle');
const tocCount = document.querySelector('#tocCount');
const links = [...document.querySelectorAll('.toc-link')];
const sections = [...document.querySelectorAll('[data-section-block]')];

function updateReadingState() {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  if (progress) progress.style.width = `${ratio * 100}%`;
  backTop?.classList.toggle('visible', window.scrollY > 600);

  let current = sections[0]?.id;
  const threshold = window.scrollY + 150;
  sections.forEach((section) => {
    if (section.offsetTop <= threshold) current = section.id;
  });
  links.forEach((link) => link.classList.toggle('active', link.dataset.section === current));
  const index = Math.max(1, sections.findIndex((section) => section.id === current) + 1);
  if (tocCount) tocCount.textContent = `${String(index).padStart(2, '0')} / 16`;
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateReadingState();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = toc?.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(Boolean(open)));
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    toc?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const content = document.getElementById(trigger.getAttribute('aria-controls')) || trigger.nextElementSibling;
    const isOpen = trigger.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
    content?.classList.toggle('visible', isOpen);
  });
});

if (window.location.hash) {
  requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
}
updateReadingState();
