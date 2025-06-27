window.addEventListener("scroll", function () {
  const navCollapse = document.querySelector(".navbar-collapse");
  const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);

  if (navCollapse.classList.contains("show")) {
    bsCollapse.hide();
  }
});







function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/ocultar el botón según el scroll
window.addEventListener('scroll', function() {
    const btnInicio = document.getElementById('btnInicio');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Mostrar el botón cuando esté cerca del final (80% del scroll)
    if (scrollPosition > (documentHeight - windowHeight) * 0.8) {
        btnInicio.style.display = 'block';
    } else {
        btnInicio.style.display = 'none';
    }
});



