// Dark Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
const mobileDarkToggle = document.getElementById('mobileDarkToggle');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  const icon = isDark ? '/assets/light.svg' : '/assets/dark.svg';
  darkToggle.src = icon;
  mobileDarkToggle.src = icon;
}

darkToggle.addEventListener('click', toggleDarkMode);
mobileDarkToggle.addEventListener('click', toggleDarkMode);

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
