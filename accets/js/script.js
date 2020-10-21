// control mobile-nav

$('.mobile-nav_btn').click(function(){
	$('.mobile-nav').animate({width: 'toggle'});
});

// control search-open

$('.search').click(function(){
    $('.search-form').animate({heigh: 'toggle'});
});


// owl carosel
$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		margin: 30,
		dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                	0: {
                		items: 1,
                	},
                	600: {
                		items: 1,
                	},
                	1000: {
                		items: 3,
                	}
                }
            });
	$('.play').on('click', function() {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function() {
		owl.trigger('stop.owl.autoplay')
	})
})

