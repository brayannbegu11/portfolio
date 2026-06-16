// Portfolio interactivity — vanilla TS, no dependencies.
// Handles: mobile sidebar toggle, page tabs (with hash deep-linking), contact-form validation.

const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string) =>
  Array.from(document.querySelectorAll<T>(sel));

/* ---- mobile sidebar toggle ---- */
const sidebar = $('[data-sidebar]');
$('[data-sidebar-btn]')?.addEventListener('click', () =>
  sidebar?.classList.toggle('active'),
);

/* ---- page navigation (tabs + hash deep-linking) ---- */
const navLinks = $$<HTMLButtonElement>('[data-nav-link]');
const pages = $$<HTMLElement>('[data-page]');

const activateTab = (target: string) => {
  pages.forEach((page) => page.classList.toggle('active', page.dataset.page === target));
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.navLink === target));
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.navLink!;
    activateTab(target);
    history.replaceState(null, '', `#${target}`);
    window.scrollTo(0, 0);
  });
});

// Honor a deep link like /#portfolio (e.g. "Back to portfolio" from a case study).
const initial = location.hash.replace('#', '');
if (initial && pages.some((p) => p.dataset.page === initial)) {
  activateTab(initial);
}

/* ---- contact form validation ---- */
const form = $<HTMLFormElement>('[data-form]');
const formBtn = $<HTMLButtonElement>('[data-form-btn]');
const formInputs = $$<HTMLInputElement | HTMLTextAreaElement>('[data-form-input]');

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (formBtn) formBtn.disabled = !form?.checkValidity();
  });
});
