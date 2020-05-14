var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var block = document.querySelector('.block');

btn1.addEventListener('click', function() {
    block.style.transform = 'rotateX(0deg)';
});

btn2.addEventListener('click', function() {
    block.style.transform = 'rotateY(90deg)';
});

btn3.addEventListener('click', function() {
    block.style.transform = 'rotateY(-90deg)';
});

btn4.addEventListener('click', function() {
    block.style.transform = 'rotateX(-90deg)';
});

btn5.addEventListener('click', function() {
    block.style.transform = 'rotateX(90deg)';
});

btn6.addEventListener('click', function() {
    block.style.transform = 'rotateY(180deg)';
});