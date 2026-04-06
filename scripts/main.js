document.getElementById('year').textContent = new Date().getFullYear();
console.log(new Date().getFullYear());

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});