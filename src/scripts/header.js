const chrome = document.querySelector('.site-chrome');
const triggers = [...chrome.querySelectorAll('.site-trigger')];
const toggle = chrome.querySelector('.site-mobile');
const banner = chrome.querySelector('.site-banner');
const desktopHover = window.matchMedia('(min-width:768px) and (hover:hover)');
const mobileLayout = window.matchMedia('(max-width:767px)');
let closeTimer = 0;
let hoverOpened = null;
function closeGroups(except) {
  triggers.forEach((button) => {
    if (button === except) return;
    button.setAttribute('aria-expanded', 'false');
    document.getElementById(button.getAttribute('aria-controls')).hidden = true;
  });
  if (!except) hoverOpened = null;
}
function openGroup(button) {
  window.clearTimeout(closeTimer);
  closeGroups(button);
  button.setAttribute('aria-expanded', 'true');
  document.getElementById(button.getAttribute('aria-controls')).hidden = false;
}
// While the mobile menu is open the rest of the page is inert, so Tab and screen readers stay in the menu.
let lockedByMenu = [];
function lockPage() {
  lockedByMenu = [...document.querySelectorAll('main, .base-footer, .base-footer-rule')].filter(
    (el) => !el.inert
  );
  lockedByMenu.forEach((el) => {
    el.inert = true;
  });
}
function unlockPage() {
  lockedByMenu.forEach((el) => {
    el.inert = false;
  });
  lockedByMenu = [];
}
function closeMenu() {
  closeGroups();
  unlockPage();
  chrome.classList.remove('site-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  if (chrome.classList.contains('site-open')) return closeMenu();
  chrome.classList.add('site-open');
  lockPage();
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Close navigation');
});
triggers.forEach((button) => {
  const group = button.parentElement;
  group.addEventListener('pointerenter', (event) => {
    if (desktopHover.matches && event.pointerType !== 'touch') {
      openGroup(button);
      hoverOpened = button;
    }
  });
  group.addEventListener('pointerleave', () => {
    if (desktopHover.matches) closeTimer = window.setTimeout(closeGroups, 150);
  });
  button.addEventListener('click', () => {
    if (hoverOpened === button) {
      hoverOpened = null;
      return;
    }
    if (button.getAttribute('aria-expanded') === 'true') closeGroups();
    else openGroup(button);
  });
  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openGroup(button);
      group.querySelector('.site-dropdown a').focus();
    }
  });
});
chrome.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
chrome.addEventListener('focusout', (event) => {
  if (event.relatedTarget && !chrome.contains(event.relatedTarget)) closeMenu();
});
document.addEventListener('pointerdown', (event) => {
  if (!chrome.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const open = triggers.find((button) => button.getAttribute('aria-expanded') === 'true');
  if (open) {
    closeGroups();
    open.focus();
  } else if (chrome.classList.contains('site-open')) {
    closeMenu();
    toggle.focus();
  }
});
mobileLayout.addEventListener('change', closeMenu);
window.addEventListener('hashchange', closeMenu);

function dismiss() {
  banner.hidden = true;
  document.documentElement.classList.add('site-no-banner');
}
chrome.querySelector('.site-dismiss').addEventListener('click', () => {
  dismiss();
  chrome.querySelector('.site-mark').focus({ preventScroll: true });
});
function updateHeader() {
  chrome.classList.toggle('site-scrolled', window.scrollY > 8);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
