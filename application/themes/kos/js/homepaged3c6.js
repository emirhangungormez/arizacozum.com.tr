$(document).ready(function () {
  var home = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.metaCount();
      // this.cookiePopup();
      this.cookieManage();
    },
    cookieManage: function () {
      $(".cookie-custom").click(function () {
        $(".cookie-side").toggleClass("active");
        $(".cookie-overlay").toggleClass("active");
      });
      $(".cookie-overlay").click(function () {
        $(".cookie-side").toggleClass("active");
        $(".cookie-overlay").toggleClass("active");
      });
      $(".close-btn").click(function () {
        $(".cookie-side").toggleClass("active");
        $(".cookie-overlay").toggleClass("active");
      });

      $(".button-collapse").click(function () {
        $(this).parents("li").toggleClass("active");
      });

      $(".allow-all").click(function () {
        $(".cookie-list .cookie_item").attr("data-switch", 1);
      });
      $(".reject-all").click(function () {
        $(".cookie-list .cookie_item").attr("data-switch", 0);
      });
      $(".switch").click(function () {
        var value = $(this).parents("li").attr("data-switch");
        if (value == 0) {
          $(this).parents("li").attr("data-switch", 1);
        }
        if (value == 1) {
          $(this).parents("li").attr("data-switch", 0);
        }
      });

      $(".cookie-allow").click(function () {
        $(".cookie-list .cookie_item").attr("data-switch", 1);
        setCookie("cookie");
      });

      $(".col-button .cookie-disable").click(function () {
        $(".cookie-list .cookie_item").attr("data-switch", 0);
        setCookie("cookie");
      });

      var cookie_item = $(".cookie-list li");
      var cookie_data = cookie_item.attr("data-cookie");

      if (!$("body").hasClass("edit")) {
        checkCookie();
        $(".cookie-confirm").click(function () {
          var x = $(this).attr("data-accept");
          setCookie(x);
        });
      }

      function enableCookie(x) {
        // console.log(x);
        if (x == "cookie_marketing") {
          // console.log('cookie_marketing : enable');
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "");
        }
        if (x == "cookie_analytics") {
          // console.log('cookie_analytics : enable');
        }
        if (x == "cookie_targeting") {
          // console.log('cookie_targeting : enable');
        }
      }

      function checkCookie() {
        if ($.cookie(cookie_data)) {
          $(".cookie").hide();
          $(".cookie-side").hide();
          $(".cookie-overlay").hide();
        }
        var switch_lenght = cookie_item.length;
        var i = 0;
        for (i; i < switch_lenght; i++) {
          var data_cookie = cookie_item.eq(i).attr("data-cookie");
          if ($.cookie(data_cookie)) {
            enableCookie(data_cookie);
          }
        }
      }

      function setCookie(x) {
        if (x == "cookie") {
          // console.log(x);
          $.cookie(cookie_data, "t", {
            expires: 7,
          });
          var switch_lenght = cookie_item.length;
          var i = 0;
          // console.log(switch_lenght);
          for (i; i < switch_lenght; i++) {
            var data_cookie = cookie_item.eq(i).attr("data-cookie");
            var data_switch = cookie_item.eq(i).attr("data-switch");
            // console.log(data_switch);
            if (data_switch == 1) {
              // console.log(data_cookie);
              enableCookie(data_cookie);
              $.cookie(data_cookie, "t", {
                expires: 7, // 1 = 24h , 0.5 = 12h
              });
            }
          }
          $(".cookie").fadeOut();
          $(".cookie-side").fadeOut();
          $(".cookie-overlay").fadeOut();
          cookieSubmit();
        } else {
          console.log("error");
        }
      }

      cookieSubmit = () => {
        var cookie_marketing = $("#cookie_marketing").attr("data-switch");
        $("#input_marketing").val(cookie_marketing);
        var cookie_analytics = $("#cookie_analytics").attr("data-switch");
        $("#input_analytics").val(cookie_analytics);
        var cookie_targeting = $("#cookie_targeting").attr("data-switch");
        $("#input_targeting").val(cookie_targeting);
        $("#btnSend").click();
      };
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
    // cookiePopup: function () {
    //   checkCookie();
    //   $(".close-cookie").click(function () {
    //     setCookie();
    //     $("#cookiePopup").fadeOut();
    //   });
    //   function checkCookie() {
    //     var cookie = $("#cookiePopup");
    //     var accept = $(".close-cookie");
    //     var datacookie = $(".close-cookie").attr("data-cookie"); //get name form data-cookie
    //     if ($.cookie(datacookie)) {
    //       if ($("body").hasClass("no-edit")) {
    //         cookie.hide();
    //       }
    //     } else {
    //       cookie.show();
    //     }
    //   }
    //   function setCookie() {
    //     var cookie = $("#cookiePopup");
    //     var pop = $(".close-cookie");
    //     pop.each(function () {
    //       var _this = $(this);
    //       var datacookie = _this.attr("data-cookie"); //get name form data-cookie
    //       if (!$("body").hasClass("edit")) {
    //         //console.log('test')
    //       }
    //       if ($.cookie(datacookie)) {
    //         //_this.hide();
    //       } else {
    //         //console.log('text');
    //         //_this.hide();
    //         if (!body.hasClass("edit")) {
    //           _this.show();
    //           $.cookie(datacookie, "t", {
    //             expires: 7, //set time as '0.5' for half-day 30 for 30days
    //           });
    //         } else {
    //           //_this.hide();
    //         }
    //       }
    //     });
    //   }
    // },
  };
  home.init();
});
