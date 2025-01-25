import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

document.querySelectorAll(".swiper-container").forEach((container) => {
  const pagination = container.querySelector(".swiper-pagination");
  const nextButton = container.querySelector(".swiper-button-next");
  const prevButton = container.querySelector(".swiper-button-prev");

  new Swiper(container, {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    speed: 800,
  });
});
