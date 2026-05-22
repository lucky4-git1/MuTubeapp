const stickyCta = document.getElementById('stickyCta');
const nav = document.querySelector('nav');
const carousel = document.querySelector('.carousel-container');

document.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (stickyCta) {
    stickyCta.classList.toggle('visible', scrolled > 1000);
  }
  if (nav) {
    nav.classList.toggle('scrolled', scrolled > 50);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false
          }
        }
      );
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const heroElements = document.querySelectorAll('.hero .animate-in');
  heroElements.forEach((el, i) => {
    gsap?.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay: i * 0.12
      }
    );
  });
});

document.addEventListener('mousemove', (e) => {
  const preview = document.querySelector('.hero-preview');
  if (preview && window.innerWidth > 768) {
    const x = (e.clientX / window.innerWidth - 0.5) * 3;
    const y = (e.clientY / window.innerHeight - 0.5) * 3;
    preview.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg)`;
  }
});

document.addEventListener('mouseleave', () => {
  const preview = document.querySelector('.hero-preview');
  if (preview) {
    preview.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)';
  }
});

if (carousel) {
  carousel.addEventListener(
    'wheel',
    (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
      }
    },
    { passive: false }
  );
}

function downloadApp() {
  window.location.href = 'MuTube Setup 1.0.0.exe';
}

window.downloadApp = downloadApp;
