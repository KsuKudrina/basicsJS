

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropit = document.querySelectorAll('.dropdown-item');

dropit.forEach(element => element.classList.add('super-dropdown'));
console.log(dropit);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const but = document.querySelector('.btn');
let condition;
if (but.classList.contains('btn-secondary')) {
    condition = false;
}else{
    condition = true;
}
but.classList.toggle('btn-secondary', condition);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menu = document.querySelector('.menu');
menu.classList.remove('dropdown-menu');


// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const link = document.querySelector('div.dropdown');
link.insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dmb = document.querySelector('#dropdownMenuButton');
dmb.setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const dd = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
dd.dataset.dd = '3';

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dt = document.querySelector('.dropdown-toggle');
dt.removeAttribute('type');