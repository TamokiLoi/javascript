document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll('.change-slide ul li');
    var slides = document.querySelectorAll('.slides ul li');

    // run auto-slide
    var time = setInterval(function () { autoSlide() }, 5000);

    // Start event btns
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            clearInterval(time);
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
            }
            this.classList.add('active');

            // handle position
            var btnActive = this;
            var positionBtn = 0
            for (positionBtn = 0; btnActive = btnActive.previousElementSibling; positionBtn++) { }
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[positionBtn].classList.add('active');
            }
        });
    }
    // End event btns

    // function auto-slide
    function autoSlide() {
        var positionSlide = 0;
        var currentSlide = document.querySelector('.slides ul li.active');
        for (positionSlide = 0; currentSlide = currentSlide.previousElementSibling; positionSlide++) { }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            btns[i].classList.remove('active');
        }
        if (positionSlide == slides.length - 1) {
            positionSlide = 0;
            slides[positionSlide].classList.add('active');
            btns[positionSlide].classList.add('active');
        } else {
            slides[positionSlide].nextElementSibling.classList.add('active');
            btns[positionSlide].nextElementSibling.classList.add('active');
        }
    }
});