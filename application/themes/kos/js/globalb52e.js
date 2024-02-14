$(document).ready(function () {
  ({
    init: function () {
      this.get_lazy(),
        this.xs_menu_toggle(),
        this.scroll_shrink(),
        this.popup_toggle(),
        this.scrollto(),
        this.get_csselect(),
        this.get_image_background(),
        this.page_min_height(),
        this.padding_top_head(),
        this.tabs_toggle(),
        this.w_space_container(),
        this.resize(),
        this.overlay_load(),
        this.search_btn(),
        this.navbar_toggler(),
        // this.nav_link(),
        this.dropdownHover();
      $("*[data-sr]").length && ScrollReveal().reveal("*[data-sr]");
    },
    dropdownHover: function () {
      $(window)
        .resize(function () {
          if ($(window).width() > 991) {
            var isHover = false;
            $("li.nav-dropdown").hover(
              function () {
                if (!$("header").hasClass("header-white")) {
                  $("header").addClass("header-white");
                  isHover = true;
                }
              },
              function () {
                if (isHover == true) {
                  $("header").removeClass("header-white");
                }
              }
            );
          }
        })
        .resize();
    },
    nav_link: function () {
      $(".nav-dropdown > a").click(function (e) {
        e.preventDefault();
      });
    },
    navbar_toggler: function () {
      if ($("header").hasClass("header-white")) {
        var isWhite = true;
      }
      $(".toggle-menu").click(function () {
        $("body").toggleClass("menu-active");
        if (!isWhite) {
          $("header").toggleClass("header-white");
        }
      });
    },
    search_btn: function () {
      $(".search-btn")
        .find("img")
        .click(function () {
          $(this).parents("header").addClass("search-active");
        });
      $(window).scroll(function () {
        $(".search-active").removeClass("search-active");
      });
      $(window).mouseup(function (e) {
        var searchForm = $(".search-form");
        if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
          $(".search-active").removeClass("search-active");
        }
      });
    },
    GetBrowser: function () {
      var browser_name = "";
      isIE = /*@cc_on!@*/ false || !!document.documentMode;
      isEdge = !isIE && !!window.StyleMedia;
      if (navigator.userAgent.indexOf("Chrome") != -1 && !isEdge) {
        browser_name = "chrome";
      } else if (navigator.userAgent.indexOf("Safari") != -1 && !isEdge) {
        browser_name = "safari";
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser_name = "firefox";
      } else if (
        navigator.userAgent.indexOf("MSIE") != -1 ||
        !!document.documentMode == true
      ) {
        //IF IE > 10
        browser_name = "ie";
      } else if (isEdge) {
        browser_name = "edge";
      } else {
        browser_name = "other-browser";
      }
      return browser_name;
    },
    overlay_load: function () {
      $("#overlay-load").fadeOut();
    },
    get_lazy: function () {
      $(".lazy").lazy();
    },
    xs_menu_toggle: function () {
      var t = $(".xs-head-bars"),
        i = $(".xs-head-toggle");
      t.click(function () {
        t.toggleClass("active"), i.toggleClass("open");
      });
    },
    padding_top_head: function () {
      var t = $(".padding-top-head"),
        i = header.outerHeight();
      t.css("padding-top", i);
    },
    scroll_shrink: function () {
      var t = this;
      if (!edit) {
        $window.height();
        $(window).scroll(function () {
          var i = window.pageYOffset;
          i >= 600 ? body.addClass("shrink-2") : body.removeClass("shrink-2");
          i >= 300 ? body.addClass("shrink") : body.removeClass("shrink");
          // 0 == i && setTimeout(function () {
          //     t.padding_top_head()
          // }, 400)
        });
      }
    },
    scrollto: function () {
      $(".scrollto").click(function () {
        var t = $(this).attr("data-pos");
        if (void 0 === t) {
          var i = $(this).attr("data-id");
          $("#" + i).length &&
            $("html,body").animate(
              {
                scrollTop: $("#" + i).offset().top,
              },
              500
            );
        } else
          "" != t &&
            $("html,body").animate(
              {
                scrollTop: parseInt(t),
              },
              500
            );
        return !1;
      }),
        $('a[href^="#"]').click(function () {
          var t = $(this).attr("href");
          if ($(t).length)
            return (
              $("html,body").animate(
                {
                  scrollTop: $(t).offset().top - 100,
                },
                500
              ),
              !1
            );
        });
    },
    popup_toggle: function () {
      $(".toggle-pop").click(function () {
        var t = $(this).attr("data-pop"),
          i = $("#" + t);
        $(this).toggleClass("active"),
          i.each(function () {
            "fade" == $(this).attr("data-action")
              ? $(this).fadeToggle()
              : "slide" == $(this).attr("data-action") &&
                $(this).stop(!0, !0).slideToggle(),
              $(this).toggleClass("active");
          });
        return false;
      });
    },
    get_image_background: function () {
      $(".background").each(function () {
        var t = $(this).find("img");
        if (t.length) {
          var i = t.attr("src");
          $(this).css("background-image", "url(" + i + ")");
        }
      });
    },
    page_min_height: function () {
      var t = $window.height(),
        i = footer.outerHeight();
      main.css("min-height", t - i);
    },
    get_csselect: function () {
      var t = $("select.cs-select");

      function i() {
        [].slice
          .call(document.querySelectorAll(".cs-select"))
          .forEach(function (t) {
            new SelectFx(t, {
              onChange: function (i) {
                t.classList.contains("cs-redirect") && (window.location = i);
              },
            });
          });
      }
      $("select.cs-select.cs-select-wload").length
        ? $window.load(function () {
            i();
          })
        : t.length && i();
    },
    get_istope: function () {
      $(".col-list--isotope").isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1,
        },
      });
    },
    tabs_toggle: function () {
      var section = $(".content-tabs-toggle");
      var nav = section.find(".nav-item");
      nav.click(function () {
        if (!$(this).hasClass("active")) {
          var index = $(this).index();
          $(this)
            .parents(".content-tabs-toggle")
            .find(".nav-item")
            .removeClass("active");
          $(this).addClass("active");
          $(this)
            .parents(".content-tabs-toggle")
            .find(".content-item")
            .slideUp();
          $(this)
            .parents(".content-tabs-toggle")
            .find(".content-item")
            .eq(index)
            .slideDown();
        }
      });
    },
    w_space_container: function () {
      var t = $("body").find(".container"),
        e = ($("body").width() - t.width()) / 2;
      $(".ws-container").width(e);
      $(".pl-container").css("padding-left", e);
      $(".pr-container").css("padding-right", e);
    },
    resize: function () {
      var t = this;
      $window.resize(function () {
        t.page_min_height(), t.w_space_container();
      });
    },
  }).init();
});
