var btn1 = document.getElementById('btn1');
var big = document.querySelector('.big');

btn1.addEventListener('click', function() {
    big.classList.toggle('rotateX');
});