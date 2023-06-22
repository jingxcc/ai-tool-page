// $(document).ready(function () {
// scroll to top
$("#scrollToTop").on("click", (e) => {
  $("html,body").animate({ scrollTop: 0 }, 500);
});

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,

  breakpoints: {
    // 768: {
    // },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// menu
$(".nav-btn").click(function (e) {
  const defaultButton = "menu";
  const changeButton = "close";
  e.preventDefault();
  $(".nav-menu").toggleClass("show");
  $(this)
    .find("span")
    .text(
      $(this).find("span").text() === defaultButton
        ? changeButton
        : defaultButton
    );
});

// dropdown
$(".tool-dropdown").click((e) => {
  e.preventDefault();
  $(".tool-dropdown-menu").toggleClass("d-none");
});

$(".tool-dropdown-item").click(function (e) {
  e.preventDefault();
  const selectedItem = $(this).text();
  $(".tool-dropdown-btn-text").text(selectedItem);
});
// });
