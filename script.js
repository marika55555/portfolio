<script>
 
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // ハンバーガークリックで開閉
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // スクロール・クリックでメニュー自動閉じる
  window.addEventListener('scroll', () => {
    navMenu.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

</script>


  
</script>
