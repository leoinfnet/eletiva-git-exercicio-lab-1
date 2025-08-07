// Ano automático no footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Menu mobile
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('show'));
}

// Tema claro/escuro com persistência
const themeBtn = document.getElementById('themeToggle');
const applyTheme = (t) => {
  document.documentElement.dataset.theme = t;
  localStorage.setItem('theme', t);
  // Ajuste de cores simples
  if (t === 'light') {
    document.documentElement.style.setProperty('--bg', '#fafafa');
    document.documentElement.style.setProperty('--fg', '#111');
    document.documentElement.style.setProperty('--muted', '#444');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--border', '#e8e8e8');
  } else {
    document.documentElement.style.setProperty('--bg', '#0b0c10');
    document.documentElement.style.setProperty('--fg', '#e6e6e6');
    document.documentElement.style.setProperty('--muted', '#a8a8a8');
    document.documentElement.style.setProperty('--card', '#14151a');
    document.documentElement.style.setProperty('--border', '#2a2c34');
  }
};
const saved = localStorage.getItem('theme');
if (saved) applyTheme(saved);
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = (localStorage.getItem('theme') || 'dark') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
}
