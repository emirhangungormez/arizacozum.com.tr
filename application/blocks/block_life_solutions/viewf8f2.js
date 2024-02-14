$(document).ready(function () {
  var lifeSolutions = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.swiper_slide();
      this.lifeSolutionsPopup();
    },
    lifeSolutionsPopup: function () {
      $(".box-life-solution").click(function () {
        var popupTarget = $(this).attr("id");
        $("." + popupTarget).fadeIn();
        $(".overlay").fadeIn();
      });
      $(".overlay").click(function () {
        $(".life_solutions_popup").fadeOut();
        $(".overlay").fadeOut();
      });
      $(".close-btn-popup").click(function () {
        $(this).parents(".life_solutions_popup").fadeOut();
        $(".overlay").fadeOut();
      });

      $(".arrow-left").click(function () {
        $(this).parents(".life_solutions_popup").fadeOut();
        var elementExists = $(this)
          .parents(".life_solutions_popup")
          .prev(".life_solutions_popup").length;
        if (elementExists == 0) {
          $(".life_solutions_popup").last().fadeIn();
        } else {
          $(this)
            .parents(".life_solutions_popup")
            .prev(".life_solutions_popup")
            .fadeIn();
        }
      });
      $(".arrow-right").click(function () {
        $(this).parents(".life_solutions_popup").fadeOut();
        var elementExists = $(this)
          .parents(".life_solutions_popup")
          .next(".life_solutions_popup").length;

        if (elementExists == 0) {
          $(".life_solutions_popup").first().fadeIn();
        } else {
          $(this)
            .parents(".life_solutions_popup")
            .next(".life_solutions_popup")
            .fadeIn();
        }
      });
    },
    swiper_slide: function () {
      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        // freeMode: true,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1.2,
          },
          "@0.75": {
            slidesPerView: 1.6764,
          },
          "@1.00": {
            slidesPerView: 2,
          },
          "@1.50": {
            slidesPerView: 2.6764,
          },
        },
      });
    },
  };
  lifeSolutions.init();
});
