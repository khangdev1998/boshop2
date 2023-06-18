const iconPrev = $('.relate__icon--left');
const iconNext = $('.relate__icon--right');

$(".relate-slider").owlCarousel({
  loop: true,
  margin: 14,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  smartSpeed: 850,
  autoplaySpeed: 850,
  autoplayHoverPause: true,
  mouseDrag: true,
  items: 3,
});

$(iconPrev).on("click", function () {
  $(".owl-prev").click();
});
$(iconNext).on("click", function () {
  $(".owl-next").click();
});
