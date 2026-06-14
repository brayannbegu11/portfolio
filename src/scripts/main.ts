// Portfolio interactivity — vanilla TS, no dependencies.
// Handles: mobile sidebar toggle, page tabs, portfolio filter, contact-form validation.

const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string) =>
  Array.from(document.querySelectorAll<T>(sel));

/* ---- mobile sidebar toggle ---- */
const sidebar = $('[data-sidebar]');
$('[data-sidebar-btn]')?.addEventListener('click', () =>
  sidebar?.classList.toggle('active'),
);

/* ---- page navigation (tabs) ---- */
const navLinks = $$<HTMLButtonElement>('[data-nav-link]');
const pages = $$<HTMLElement>('[data-page]');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.navLink;
    pages.forEach((page) =>
      page.classList.toggle('active', page.dataset.page === target),
    );
    navLinks.forEach((l) => l.classList.toggle('active', l === link));
    window.scrollTo(0, 0);
  });
});

/* ---- portfolio filter ---- */
const filterItems = $$<HTMLElement>('[data-filter-item]');
const selectValue = $<HTMLElement>('[data-select-value]');

const applyFilter = (value: string) => {
  filterItems.forEach((item) =>
    item.classList.toggle(
      'active',
      value === 'all' || value === item.dataset.category,
    ),
  );
};

// large-screen filter buttons
const filterButtons = $$<HTMLButtonElement>('[data-filter-btn]');
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = (btn.textContent ?? '').toLowerCase().trim();
    if (selectValue) selectValue.textContent = btn.textContent;
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(value);
  });
});

// small-screen custom select
const select = $('[data-select]');
select?.addEventListener('click', () => select.classList.toggle('active'));

$$<HTMLButtonElement>('[data-select-item]').forEach((item) => {
  item.addEventListener('click', () => {
    const value = (item.textContent ?? '').toLowerCase().trim();
    if (selectValue) selectValue.textContent = item.textContent;
    select?.classList.remove('active');
    applyFilter(value);
  });
});

/* ---- contact form validation ---- */
const form = $<HTMLFormElement>('[data-form]');
const formBtn = $<HTMLButtonElement>('[data-form-btn]');
const formInputs = $$<HTMLInputElement | HTMLTextAreaElement>('[data-form-input]');

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (formBtn) formBtn.disabled = !form?.checkValidity();
  });
});
