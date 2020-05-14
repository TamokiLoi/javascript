var allBtn = document.querySelectorAll('._5btn ul li'),
    ULSlides = document.querySelector('._5slides ul');
console.log(allBtn);

// function add class active for button and add class slide by index for show slide when user click
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', function() {
        for (let j = 0; j < allBtn.length; j++) {
            allBtn[j].classList.remove('active');
        }
        this.classList.add('active');
        for (let i = 0; i < allBtn.length; i++) {
            ULSlides.classList.remove('slide' + i);
        }
        ULSlides.classList.add('slide' + i);
    });
}
