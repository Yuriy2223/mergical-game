// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules"; // Імпорт модулів
// import "swiper/css"; // Основні стилі Swiper
// import "swiper/css/navigation"; // Стилі для навігації
// import "swiper/css/pagination"; // Стилі для пагінації

// // Ініціалізація Swiper
// const swiper = new Swiper(".swiper-container", {
//   modules: [Navigation, Pagination], // Додайте модулі до конфігурації
//   direction: "horizontal",
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper-container", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800, // Швидкість анімації
});
 // freeMode: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
