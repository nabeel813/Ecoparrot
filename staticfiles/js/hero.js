document.addEventListener('DOMContentLoaded', function () {

    if (typeof gsap === 'undefined') return;

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', { opacity: 0, y: -20, duration: 0.7 })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
      .from('.hero-description', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
      .from('.hero-buttons .btn', { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, '-=0.4')
      .from('.hero-mini-stats div', { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }, '-=0.3')
      .from('.hero-image img', { opacity: 0, scale: 0.9, duration: 1 }, '-=0.9');

});
