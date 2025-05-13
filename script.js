<script>
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const intro = document.getElementById('introText');

    // 自己紹介文を2秒後に表示
    setTimeout(() => {
      if (intro) {
        intro.classList.add('visible');
      }
    }, 2000);

    // メニュー外クリックで閉じる
    document.addEventListener('click', (e) => {
      const menu = document.querySelector('.menu');
      const menuIcon = document.querySelector('.menu-icon');
      if (
        menuToggle &&
        menu &&
        !menu.contains(e.target) &&
        !menuIcon.contains(e.target) &&
        e.target !== menuToggle
      ) {
        menuToggle.checked = false;
      }
    });

    // スクロール時にメニューを閉じる
    window.addEventListener('scroll', () => {
      if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
</script>
