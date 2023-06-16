$(document).ready(function () {
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
});
