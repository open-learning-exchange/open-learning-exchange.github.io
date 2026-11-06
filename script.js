const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
  navigation.inert = !open;
  document.querySelector('main').inert = open;
  document.querySelector('footer').inert = open;
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) navigation.querySelector('a').focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setMenu(false);
  const target = document.querySelector(link.hash);
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}));
document.addEventListener('keydown', event => {
  if (toggle.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') { setMenu(false); toggle.focus(); }
  if (event.key === 'Tab') {
    const items = [toggle, ...navigation.querySelectorAll('a')];
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.about h2, .about-bottom').forEach(element => {
    element.classList.add('reveal'); observer.observe(element);
  });
}
