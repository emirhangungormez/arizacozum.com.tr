$(document).ready(function () {
  var $window = $("window"),
    header = $("header"),
    article = $("article");
  var home = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.newsroomFillter();
    },
    newsroomFillter: function () {
      var newsroomFilter = $(".newsroom-filter");
      $(newsroomFilter).click(function (event) {
        $(this).toggleClass("expand");
        event.stopPropagation();
      });
      $(newsroomFilter)
        .find("li")
        .click(function () {
          var liText = $(this).text();
          var dataURL = $(this).attr("data-url");

          $(".loading")
            .delay(300)
            .queue(function (next) {
              $(this).css("display", "flex");
              next();
            });
          // .css("display", "flex");

          $(newsroomFilter).find("span").text(liText);

          sectionLoad(dataURL);
        });
      function sectionLoad(dataURL) {
        $(".mySwiper .swiper-wrapper")
          .fadeOut(300)
          .load(dataURL + " .mySwiper .swiper-slide", function () {
            $(".mySwiper .swiper-wrapper").fadeIn(300);
            $(".loading").hide();
          });
      }
      $(window).click(function () {
        $(".expand").removeClass("expand");
      });
      $(window).scroll(function () {
        $(".expand").removeClass("expand");
      });
    },
  };
  home.init();
});
