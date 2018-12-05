import slick from 'slick-carousel';

$(document).ready(function() {
  /* FLATS SLIDER */
  var slider = $(".js-flats-slider");

  $(slider).on("init", function(event, slick) {
    $(slider).css({ opacity: "1", visibility: "visible" });
  });

  $(slider).slick({
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    speed: 1000
    // fade: true
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  });
});
