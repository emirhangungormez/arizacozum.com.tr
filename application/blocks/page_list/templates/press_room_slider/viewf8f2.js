var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // freeMode: true,
  spaceBetween: 12,
  navigation: {
    nextEl: ".button-next2",
    prevEl: ".button-prev2",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.14,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 3,
    },
    "@1.5": {
      slidesPerView: 4,
    },
  },
});
