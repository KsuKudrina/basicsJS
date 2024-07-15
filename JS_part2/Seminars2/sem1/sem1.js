
const p = document.querySelector('p')
console.log(p);

const p2 = document.querySelectorAll('.www')[0];
console.log(p2);

/*
Задание 2
Вам необходимо поменять текст внутри ссылки на "link text js"
Заменить href, на значение htEps://developer.mozilla.org/ru/
Дан тег <img class="photo"
src=""
alt="">
Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/

const a = document.querySelector('.link');

a.textContent = 'link text js';
a.href = 'https://developer.mozilla.org/ru/';

const img = document.querySelector('.photo');
// img.src = 'https://avatars.mds.yandex.net/i?id=9667ee5ff88d3f2614376c1a5246cd24b7dddac8-11497947-images-thumbs&n=13'

/*
Дан тег ‹div class="content"></div›
Создайте новый элемент р
Добавьте в него текст
"Новый текстовый элемент"
Добавьте созданный
элемент внутри ‹div class="content"></div›
Удалите добавленный узел
*/
const p3 = document.createElement('p');
p3.textContent = 'Новый текстовый элемент';
const d = document.querySelector('.content');
d.appendChild(p3);

d.removeChild(p3);

/*
Создать элемент button, добавить в блок ‹div class="content"›‹/div› При клике на который в
консоль выводится сколько раз пользователь нажал на данную кнопку
*/

const btn = document.createElement('button')
btn.textContent = 'click';

d.appendChild(btn);
let count = 0;

// btn.onclick = function () {
//     count++;
//     console.log(count);
// }
btn.onclick = () => {
    count++;
    console.log(`клик ${count} раз`);
}

/*
Дан тег ‹div class="content"></div>
Создайте с-помощью javascript новый элемент button 
Добавьте текст для кнопки "Отправить"
При клике на данную кнопку необходимо чтобы текст поменялся на "Текст отправлен"
*/

const but = document.createElement('button');
but.textContent = 'Отправить'
d.appendChild(but);
but.addEventListener('click', () => {
    but.textContent = 'Текст отправлен'
}) 