document.addEventListener("DOMContentLoaded", function () 
{
	var status = 'below300', menu = document.querySelector('.menu');
	window.addEventListener('scroll', function() 
	{
		if(window.pageYOffset > 300 && status == 'below300') 
		{
			status = 'above300';
			menu.classList.add('toSmall');
		} else if (window.pageYOffset <= 300 && status == 'above300') {
			status = 'below300';
			menu.classList.remove('toSmall');
		}
	})

}, false)