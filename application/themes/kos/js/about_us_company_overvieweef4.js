$(document).ready(function () {
  var about = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.metaCount();
    },
    metaCount: function () {
      var i = 0;
      var z = 0;
      $(window).scroll(function () {
        var hT = $(".box-meta").offset().top,
          hH = $(".box-meta").outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
        if (wS > hT + hH - wH && i == 0) {
          $(".box-meta")
            .find("p:first-child")
            .each(function () {
              $(this)
                .prop("Counter", 0)
                .animate(
                  {
                    Counter: $(this).text(),
                  },
                  {
                    duration: 1000,
                    easing: "swing",
                    step: function (now) {
                      $(this).text(Math.ceil(now).toLocaleString("en"));
                    },
                  }
                );
            });
          i = 1;
        }
      });
    },
  };
  about.init();
});
