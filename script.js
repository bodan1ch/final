document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".about, .mission, .vision");
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) { 
        section.classList.add("visible");
      }
    });
  });
  