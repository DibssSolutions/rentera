import { tns } from 'tiny-slider';

var slider = tns({
  container: '#js-flats-slider',
  items: 1,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: true,
  navContainer: '#js-flats-thumbs',
  navAsThumbnails: true,
  mouseDrag: true,
  controls: false
  // gutter: 20
});

var thumbs = tns({
  loop: false,
  container: '#js-flats-thumbs',
  items: 3,
  // "edgePadding": 50,
  // slideBy: 'page',
  mouseDrag: true,
  // center: true,
  // autoWidth: true,
  nav: false,
  controlsText: ['<span> <= </span>', '<span> => </span>'],
  // arrowKeys: true,
  gutter: 20,
  responsive: {
    '600': {
      items: 4
    },
    '1000': {
      items: 7
    }
  }
});

let _prev = document.querySelector("[data-controls='prev']"),
  _next = document.querySelector("[data-controls='next']");

_prev.addEventListener('click', () => {
  thumbs.goTo('prev');
});
_next.addEventListener('click', () => {
  thumbs.goTo('next');
});
