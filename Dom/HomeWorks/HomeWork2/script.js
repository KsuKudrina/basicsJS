const sliderItemsEl = document.querySelectorAll('.slider__item');
const navigationEl = document.querySelectorAll('.navigation__link');
const previous = document.querySelector('.btn__previous');
const next = document.querySelector('.btn__next');

let currentIndex = 0;

function imageSwitch(index) {
    sliderItemsEl.forEach(img => {
        img.classList.remove('active');
    });
    navigationEl.forEach(nav => {
        nav.classList.remove('active');
    });
    sliderItemsEl[index].classList.add('active');
    navigationEl[index].classList.add('active');
}
next.addEventListener('click', () =>{
    currentIndex++;
    if (currentIndex >= sliderItemsEl.length) {
        currentIndex = 0;
    }
    imageSwitch(currentIndex);
});
previous.addEventListener('click', () =>{
    currentIndex --;
    if (currentIndex < 0) {
        currentIndex = sliderItemsEl.length - 1; 
    }
    imageSwitch(currentIndex);
});
navigationEl.forEach((nav, index)=> {
    nav.addEventListener('click', () => {
        currentIndex = index;
        imageSwitch(currentIndex);
    });
});

function carusel() {
    setTimeout(() => {
        currentIndex++;
    if (currentIndex >= sliderItemsEl.length) {
        currentIndex = 0;
    }
    imageSwitch(currentIndex);
    carusel();
    }, 2000);
}

carusel();