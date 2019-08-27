document.addEventListener("DOMContentLoaded", function () 
{
	// declare variable
	var menu = document.querySelector('.menu'),
		about = document.querySelector('.about');
	var statusMenu = 'below100';
	var statusAbout = "notShowAbout";	
	var positionAbout = about.offsetTop;
	var distanceShowAbout = 600;
	var stopPositionAbout = positionAbout + distanceShowAbout;

	// event for menu
	window.addEventListener('scroll', function() 
	{
		if(window.pageYOffset > 100 && statusMenu == 'below100') 
		{
			statusMenu = 'above100';
			menu.classList.add('change-menu');
		}
		else if (window.pageYOffset <= 100 && statusMenu == 'above100') 
		{
			statusMenu = 'below100';
			menu.classList.remove('change-menu');
		}

		// event for about
		if ((window.pageYOffset > positionAbout) && (statusAbout == 'notShowAbout') &&  (window.pageYOffset < stopPositionAbout)) 
		{
			statusAbout = 'showAbout';
			about.classList.add('fixed-about');
		} 
		else if ((window.pageYOffset < positionAbout && statusAbout == 'showAbout') || (window.pageYOffset > stopPositionAbout)) 
		{
			statusAbout = 'notShowAbout';
			about.classList.remove('fixed-about');
		}
	});
	
	

}, false)