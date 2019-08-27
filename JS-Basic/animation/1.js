document.addEventListener("DOMContentLoaded", function () {
	var btnEffect = document.getElementById('btn-effect');
	var block = document.getElementById('block-content');
	var state = 'one';
	btnEffect.onclick = function() {
		if (state === 'one') {
			block.classList.remove('toggle-two');
			block.classList.add('toggle-one');
			state = 'two';
		} else {
			block.classList.remove('toggle-one');
			block.classList.add('toggle-two');
			state = 'one';
		}
	}
}, false)