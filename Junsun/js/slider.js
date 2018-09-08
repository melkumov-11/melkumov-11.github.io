$(document).ready(function(){
  $('.feedback-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		adaptiveHeight: true,
		prevArrow: $('.arr'),
		nextArrow: $('.arr-r'),
		speed: 2000,
		responsive: [
    	{
      	breakpoint: 992,
      	settings: {
        	slidesToShow: 2
      	}
    	},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
  	]
	});
});