document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".about, .mission, .vision");
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});


scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


function toggleTheme() {
  document.body.classList.toggle('dark');
}