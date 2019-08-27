document.addEventListener("DOMContentLoaded", function () {
	// declare variable need to use
	var button = document.querySelector('.btn-event'),
		menuLeft = document.querySelector('.menu-left'),
		contentChild = document.querySelector('.content-child'),
		contentLarge = document.querySelector('.content-large'),
		white = document.querySelector('.white');
	
	// when click button
	button.onclick = function() {
		contentChild.classList.add('show');
		white.classList.add('rotateWhite');
		menuLeft.classList.remove('to-the-left');
	}

	// when click content-child
	contentChild.onclick = function() {
		contentChild.classList.remove('show');
		contentLarge.classList.remove('to-the-right');
		white.classList.remove('rotateWhite');
		menuLeft.classList.add('to-the-left');
	}

}, false)