$(document).ready(function() {
	$('.menu-top ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("html, body").animate({scrollTop: $('.chapter-1').offset().top}, 1500, 'easeOutBack');
	});
	$('.menu-top ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("html, body").animate({scrollTop: $('.chapter-2').offset().top}, 1500, 'easeOutBack');
	});
	$('.menu-top ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("html, body").animate({scrollTop: $('.chapter-3').offset().top}, 1500, 'easeOutBack');
	});
	$('.menu-top ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("html, body").animate({scrollTop: $('.chapter-4').offset().top}, 1500, 'easeOutBack');
	});

	// handle button scroll-top
	$('.btn-scroll-top').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("html, body").animate({scrollTop: 0}, 2000, 'easeOutCubic');
	});
});