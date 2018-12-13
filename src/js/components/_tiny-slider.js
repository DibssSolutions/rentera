import { tns } from 'tiny-slider';
const buildIcon = name =>
  `<svg class="icon icon-${name}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${name}"></use></svg>`;

var slider = tns({
  container: '#js-flats-slider',
  items: 1,
  mode: 'gallery',
  slideBy: 'page',
  // autoplay: true,
  navContainer: '#js-flats-thumbs',
  navAsThumbnails: true,
  mouseDrag: true,
  controls: false
  // gutter: 20
});

const arrowLeft = buildIcon('chevron-left');
const arrowRight = buildIcon('chevron-right');
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
  controlsText: [`${arrowLeft}`, `${arrowRight}`],
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
