
  // script.js
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
  
    if (toggle && menu) {
      toggle.addEventListener('change', function () {
        menu.style.display = toggle.checked ? 'flex' : 'none';
      });
    }
  });
  