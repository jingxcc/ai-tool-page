$("#goToTop").on("click", (e) => {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});
