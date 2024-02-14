var edit = $("body.edit").length,
  $window = $(window),
  html = $("html"),
  body = $("body"),
  header = $("header"),
  article = $("article"),
  main = $("main"),
  footer = $("footer"),
  kos = {
    get_background: function (i) {
      i.each(function () {
        var i = $(this).find("img");
        if (i.length) {
          var t = i.attr("src");
          $(this).css("background-image", "url(" + t + ")");
        }
      });
    },
    visibility: function (i) {
      i.css("visibility", "visible");
    },
    visibility_hidden: function (i) {
      i.css("visibility", "hidden");
    },
    visibility_toggle: function (i) {
      "visible" == i.css("visibility")
        ? i.css("visibility", "hidden")
        : i.css("visibility", "visible");
    },
    get_delay: function (i) {
      i.each(function () {
        var i = $(this).attr("data-delay");
        "" != i &&
          $(this).css({
            "-webkit-transition-delay": i + "s",
            "-moz-transition-delay": i + "s",
            "-o-transition-delay": i + "s",
            "-ms-transition-delay": i + "s",
            "transition-delay": i + "s",
          });
      });
    },
    addClass: function (i, t) {
      i.addClass(t);
    },
    removeClass: function (i, t) {
      i.addClass(t);
    },
    switch_elem: function (i, t) {
      edit ||
        i.each(function (i) {
          var s = $(this).find(".block-image"),
            n = $(this).find(".block-text");
          i % 2 == t && s.insertAfter(n);
        });
    },
    content_toggle: function (i, t, s) {
      var n = i.find(t),
        e = i.find(s);
      n.click(function () {
        if (!$(this).hasClass("active")) {
          var i = $(this).index();
          n.removeClass("active"),
            $(this).addClass("active"),
            e.slideUp(),
            e.eq(i).slideDown();
        }
      });
    },
  };
