$(document).ready(function () {
  var about = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.boardPopup();
    },
    boardPopup: function () {
      $(".board-item").click(function () {
        $(this).next(".board-popup").fadeIn();
      });
      $(".overlay").click(function () {
        $(this).parent(".board-popup").fadeOut();
      });
      $(".close-btn").click(function () {
        $(this).parents(".board-popup").fadeOut();
      });
    },
  };
  about.init();
});
