// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const sl = document.getElementById('super_link');
console.log(sl);

// []()
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cl = document.querySelectorAll('.card-link')
cl.forEach(element => {
    element.textContent = "ссылка";
});

// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const cl2 = document.querySelectorAll('.card-body .card-link')
// cl2.forEach(el => {
//     console.log(el);
// });

const cl2 = document.querySelectorAll('.card-body .card-link')
console.log(cl2);

// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dn = document.querySelector('[data-number = "50"]');
console.log(dn);

// []()
// 5. Выведите содержимое тега title в консоль.

const t = document.title;
console.log(t);
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const ct = document.querySelector('.card-title').parentNode;

console.log(ct);

// []()
// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const cp = document.createElement('p');
cp.textContent = 'Привет';
const card = document.querySelector('.card');

card.prepend(cp);

// 8. Удалите тег h6 на странице.
// const cs = document.querySelector('.card-subtitle');
// cs.remove();
const h = document.querySelector('h6');
h.remove();