import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".swiper-container", {
  modules: [Navigation, Pagination],
  // direction: "horizontal",
  // loop: true, // Безкінечна прокрутка
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
});
