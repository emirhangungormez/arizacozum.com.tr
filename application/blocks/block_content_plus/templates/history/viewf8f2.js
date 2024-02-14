$(document).ready(function () {
  var history = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.swiper_slide();
    },
    swiper_slide: function () {
      var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: 4,
        // centeredSlides: true,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1.455,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 4.7,
          },
        },
      });
    },
  };
  history.init();
});
