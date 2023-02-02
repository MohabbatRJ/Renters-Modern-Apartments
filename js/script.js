$(document).ready(function () {
  // loader
  $(window).on("load", function () {
    setTimeout(function () {
      $("#loaders").css("display", "none");
    }, 500);
  });
});