// load document ready
document.addEventListener("DOMContentLoaded", function() {
	// access btn-1
	var btnOne = document.getElementById('btn-1');
	// access block-content
	var block = document.getElementsByClassName('card');
	// call event click button
	btnOne.onclick = function() {
		// used when write by transition
		block[0].classList.toggle('turn-right');
	};
}, false)