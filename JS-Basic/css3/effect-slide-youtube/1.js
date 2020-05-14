var btnPrevious = document.querySelector('.btn-previous'),
    btnNext = document.querySelector('.btn-next'),
    content = document.querySelector('.content');
console.log(btnNext)

// click btnNext: show btnPrevious and slide move right
btnNext.addEventListener("click", function() {
    this.classList.remove('active');
    btnPrevious.classList.add('active');
    content.classList.add('move-right');
    content.classList.remove('move-left');
});

// click btnNext: show btnNext and slide move left
btnPrevious.addEventListener("click", function() {
    this.classList.remove('active');
    btnNext.classList.add('active');
    content.classList.remove('move-right');
    content.classList.add('move-left');
});