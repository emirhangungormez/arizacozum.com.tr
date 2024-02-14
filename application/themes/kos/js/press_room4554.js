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

          $(newsroomFilter).find("span").text(liText);

          sectionLoad(dataURL);
        });
      function sectionLoad(dataURL) {
        $(".row-featured")
          .fadeOut(300)
          .load(dataURL + " .col-featured", function () {
            $(".row-featured").fadeIn(300);
            $(".loading").hide();
          });

        $(".row-latestnews")
          .fadeOut(300)
          .load(dataURL + " .col-pressroom-list", function () {
            $(".row-latestnews").fadeIn(300);
          });
      }
      $(document).on("DOMNodeInserted", function (e) {
        $(".page-link").click(function (event) {
          event.preventDefault();
          var dataURL = $(this).attr("href");
          sectionArticleLoad(dataURL);
        });
      });
      function sectionArticleLoad(dataURL) {
        $(".row-latestnews")
          .fadeOut(300)
          .load(
            dataURL + " main .section-latestnews .container .row-latestnews",
            function () {
              $(".row-latestnews").fadeIn(300);
            }
          );
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
