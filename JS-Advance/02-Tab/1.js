$(function() {
	// click button change class
	$('.four-button li').click(function() {
		$('.four-button li').removeClass('active');
		$(this).addClass('active');

		// let show content respectively with button clicked
		$('.four-content ul li').removeClass('show');
		$('.four-content ul li:nth-child(' + ($(this).index() + 1) + ')').addClass('show');
	})
})
