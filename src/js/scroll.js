document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight || 0;

    const offset = targetElement.offsetTop - headerHeight - 60; // Враховуємо відступ
    //     // Виконуємо прокрутку до цільового елемента
    //     window.scrollTo({
    //       top: Math.max(offset, 0),
    //       behavior: "smooth", // Плавна прокрутка
    //     });

    // Запускаємо кастомну анімацію прокрутки
    smoothScrollTo(window.scrollY, offset, 1800);
  });
});

// Функція для плавної кастомної прокрутки
function smoothScrollTo(start, end, duration) {
  const distance = end - start;
  let startTime = null;

  function animationStep(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Використовуємо easing функцію для плавної анімації
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animationStep);
    }
  }

  requestAnimationFrame(animationStep);
}
// Easing функція для плавної зміни швидкості
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
