$(document).ready(function () {
  $("#scrollToTop").on("click", (e) => {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});
