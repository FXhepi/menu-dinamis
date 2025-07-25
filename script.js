const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const themeToggle = document.getElementById('themeToggle');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Tutup menu saat klik link (mobile)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});

// Toggle dropdown submenu
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.parentElement;

    // Tutup dropdown lain (jika perlu)
    document.querySelectorAll('.dropdown.open').forEach(item => {
      if (item !== parent) item.classList.remove('open');
    });

    parent.classList.toggle('open');
  });
});

// Toggle dark mode
// Cek preferensi saat halaman load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
