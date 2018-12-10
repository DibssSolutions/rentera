import { tns } from "tiny-slider"

var slider = tns({
	container: '#js-flats-slider',
	items: 1,
	slideBy: 'page',
	autoplay: true,
	navContainer: '#js-flats-thumbs',
	navAsThumbnails: true,
	mouseDrag: true,
	controlsText: '[<span>prev</span>, <span>next</span>]'
	
});

var thumbs = tns({
	loop: false,
	container: '#js-flats-thumbs',
	items: 7,
	mouseDrag: true,
	nav: false,
	controls: false
	//axis: "vertical"
});

let _prev = document.querySelector("[data-controls='prev']"),
	_next = document.querySelector("[data-controls='next']");

_prev.addEventListener( 'click', () => {
	thumbs.goTo('prev');
} );
_next.addEventListener( 'click', () => {
	thumbs.goTo('next');
} );