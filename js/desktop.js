// Slider Relate
const iconPrev = $(".relate__icon--left");
const iconNext = $(".relate__icon--right");

$(".relate-slider").owlCarousel({
  loop: true,
  margin: 48,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  smartSpeed: 850,
  autoplaySpeed: 850,
  autoplayHoverPause: true,
  mouseDrag: false,
  items: 3,
});

$(iconPrev).on("click", function () {
  $(".owl-prev").click();
});
$(iconNext).on("click", function () {
  $(".owl-next").click();
});


// Table of Contents
const tocContainer = $(".content-right__list");
let lastH1Li = null;

$(".content-left")
  .find("h1,h2")
  .each(function () {
    const headingText = $(this).text();
    const headingId = headingText.replace(/\s+/g, "_");
    $(this).attr("id", headingId);

    if ($(this).is("h1")) {
      lastH1Li = $(
        '<li><a href="#' + headingId + '">' + headingText + "</a></li>"
      );
      tocContainer.append(lastH1Li);
    } else if ($(this).is("h2")) {
      let h2Ul = lastH1Li.find("ul");

      if (h2Ul.length === 0) {
        h2Ul = $("<ul></ul>");
        lastH1Li.append(h2Ul);
      }

      h2Ul.append(
        '<li><a href="#' + headingId + '">' + headingText + "</a></li>"
      );
    }
  });
