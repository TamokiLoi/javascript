$(document).ready(function() {

	$('.content-block').slideUp();

	// handle event click h3 toggle content-block collapse
	$('.block h3').click(function(event) {
		// $('.content-block').slideUp();
		
		$(this).next('.content-block').slideToggle();
		$(this).toggleClass('bg-hover-h3');
	});
});