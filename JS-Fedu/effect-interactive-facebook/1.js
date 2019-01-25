// basic
// document.addEventListener("DOMContentLoaded", function () {
// 	// declare variable
// 	var triangles = document.getElementsByClassName('triangle-icon');
// 	var triangle = triangles[0];
// 	var listContents = document.getElementsByClassName('list-content');
// 	var listContent = listContents[0];

// 	// used function onclick and toggle class for triangle transform color
// 	triangle.onclick = function() {
// 		// used style
// 		// this.style.color = 'white';

// 		this.classList.toggle('triangle-white');
// 		listContent.classList.toggle('list-content-show');
// 	};
// }, false);

// advance
document.addEventListener("DOMContentLoaded", function() {
    var btnEffects = document.getElementsByClassName('btn-effect');
    for (var i = 0; i < btnEffects.length; i++) {
        btnEffects[i].onclick = function() {
            console.log(this.getAttribute('data-password'));
        }
    }
}, false);