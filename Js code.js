document.querySelectorAll('.modal-trigger, .nav-cta, .btn-gold').forEach(btn => {
    btn.addEventListener('click', e => {
      if (btn.getAttribute('href') === '#donate-modal' || btn.classList.contains('modal-trigger')) {
        e.preventDefault();
        document.getElementById('donate-modal').style.cssText = 'opacity:1;pointer-events:all';
      }
    });
  });

  document.querySelector('.modal-close').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('donate-modal').style.cssText = 'opacity:0;pointer-events:none';
  });