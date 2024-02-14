$(document).ready(function () {
  var contact = {
    edit: $("body").hasClass("edit"),
    init: function () {
      this.showMoreBTN();
    },
    showMoreBTN: function () {
      $(".show-btn").click(function () {
        $('.box-show').removeClass('active')
        $('.show-btn').removeClass('active')
        $(this).prev(".box-show").toggleClass("active");
        $(this).toggleClass("active");
      });
    },
  };
  contact.init();
});
