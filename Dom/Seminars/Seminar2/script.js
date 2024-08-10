const menuEl = document.querySelector(".menu");

menuEl.addEventListener("click", ({ target }) => {
    if (!target.closest(".menu__link")) {
      return;
    }
    menuEl.querySelector(".menu__link.active")?.classList.remove("active");

    target.classList.add("active")
});
// Задание 2
const btnOpenEl = document.querySelector('.btnOpen');
const btnCloseEl = document.querySelector('.btnClose');
const modalEl = document.querySelector('.modal');

btnOpenEl.addEventListener('click', () => modalEl.classList.add('act'));

btnCloseEl.addEventListener('click', () => modalEl.classList.remove('act'));

// Задание 3
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', (e) =>{
    if(!e.isTrusted){
        return;
    }
    buttonEl.textContent = 'Товар добавлен в корзину'
    setTimeout(()=> buttonEl.textContent = 'Купить', 2000)
});

// Задание 4