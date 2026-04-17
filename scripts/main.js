document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
const goTopBtn = document.getElementById('go-top-btn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 300) {
    goTopBtn.classList.add('show');
  } else {
    goTopBtn.classList.remove('show');
  }
});


const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let current = '';

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(function (link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#1a1814';
    }
  });
});


const words = ['Problem Solver.', 'Full Stack Developer.', 'Open Source Enthusiast.'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const current = words[wordIndex];

  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  document.getElementById('typing').textContent = current.substring(0, letterIndex);

  if (!isDeleting && letterIndex === current.length) {
    setTimeout(function () { isDeleting = true; }, 1500);
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();