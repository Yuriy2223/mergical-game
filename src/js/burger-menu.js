document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu-btn");
  const closeMenu = document.querySelector(".burger-menu-btn-close");
  const navMenu = document.querySelector(".header-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  const toggleMenu = (isOpen) => {
    navMenu.classList.toggle("active", isOpen);
    burgerMenu.classList.toggle("hidden", isOpen);
  };

  burgerMenu.addEventListener("click", () => toggleMenu(true));
  closeMenu.addEventListener("click", () => toggleMenu(false));

  navLinks.forEach((link) =>
    link.addEventListener("click", () => toggleMenu(false))
  );

  document.addEventListener("click", (event) => {
    if (
      !navMenu.contains(event.target) &&
      !burgerMenu.contains(event.target) &&
      !closeMenu.contains(event.target)
    ) {
      toggleMenu(false);
    }
  });
});
