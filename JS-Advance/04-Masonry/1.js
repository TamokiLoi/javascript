$(function(){

	// init Isotope
	$effect = $('.content').isotope({
		// options
		itemSelector: '.block-image',
		layoutMode: 'masonry'
	});

	// layout Isotope after each image loads
	$effect.imagesLoaded().progress( function() {
		$effect.isotope('layout');
	});

	// handle button filter category
	$('.category a').click(function(){
		$('.category a').removeClass('active');
		$(this).addClass('active');

		nameCatetory = $(this).attr('href');
		$effect.isotope({filter: nameCatetory});

		return false;
	});
})