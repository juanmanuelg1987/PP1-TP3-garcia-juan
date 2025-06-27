window.addEventListener("scroll", function () {
  const navCollapse = document.querySelector(".navbar-collapse");
  const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);

  if (navCollapse.classList.contains("show")) {
    bsCollapse.hide();
  }
});
