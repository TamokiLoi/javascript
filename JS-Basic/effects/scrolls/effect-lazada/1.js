var logo  = document.querySelector('.img-logo'),
    menu = document.querySelector('.menu'),
    btnAllCategories = document.querySelector('.all-categories'),
    menuBottom = document.querySelector('.menu-bottom'),
    btn = document.querySelector('.btn'),
    status = 'normal';

// function for event scroll page and transform show menu
window.addEventListener('scroll', function() {
    var position = window.pageYOffset;
    if (position > 300) {
        logo.classList.add('scroll-top');
        menu.classList.add('transform-menu');
    } else {
        logo.classList.remove('scroll-top');
        menu.classList.remove('transform-menu');
    }
});

// function for event show sub menu and transform text in btn
btnAllCategories.addEventListener('click', function() {
    if(status == 'normal') {
        menuBottom.classList.add('show-sub-menu');
        btn.innerHTML = 'Hide Menu Categories';
        status = 'transform';
    } else {
        menuBottom.classList.remove('show-sub-menu');
        btn.innerHTML = 'Show All Menu Categories';
        status = 'normal';
    }
});
