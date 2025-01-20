document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-toggle").textContent = "+";
      }
    });

    const toggle = item.querySelector(".faq-toggle");
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      toggle.textContent = "+";
    } else {
      item.classList.add("open");
      toggle.textContent = "-";
    }
  });
});