// Load user theme preference from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Theme toggle button logic
const button = document.getElementById('themeToggle');
const image = document.getElementById('animatedImage');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save theme to localStorage
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);

  // Trigger image animation
  image.classList.add('animate');

  // Remove animation class after animation completes
  setTimeout(() => {
    image.classList.remove('animate');
  }, 600);
});
