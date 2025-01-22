window.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;

    if (targetElement) {
      const offset = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});
