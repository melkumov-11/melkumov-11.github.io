$(document).ready(function(){
  $('.feedback-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		adaptiveHeight: true,
		prevArrow: $('.arr'),
		nextArrow: $('.arr-r'),
		speed: 2000
	});
});