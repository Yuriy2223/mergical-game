import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const swiper = new Swiper(".swiper-container", {
  modules: [Navigation, Pagination],
  // direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  // loop: true, // Безкінечна прокрутка
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600, // Швидкість анімації
});
// freeMode: true,
// autoplay: {
//   delay: 3000,
//   disableOnInteraction: false,
// },
