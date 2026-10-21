document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));

      link.classList.add('active');

      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const btnSaga = document.getElementById('btn-saga');
  const btnMomentos = document.getElementById('btn-momentos');
  const btnProductos = document.getElementById('btn-productos');

  if (btnSaga) {
    btnSaga.addEventListener('click', () => {
      alert('Cargando la información de la saga completa de RÁPIDOS Y FURIOSOS...');
    });
  }

  if (btnMomentos) {
    btnMomentos.addEventListener('click', () => {
      const momentosSection = document.querySelector('.moments-section');
      if (momentosSection) {
        momentosSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (btnProductos) {
    btnProductos.addEventListener('click', () => {
      alert('Redirigiendo a la tienda de productos oficiales...');
    });
  }
});