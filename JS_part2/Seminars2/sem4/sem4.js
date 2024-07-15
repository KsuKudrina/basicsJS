// Задание 1 (тайминг 20 минут)
// 1 В html создать элемент checkbox и текст рядом с
// ним “Согласен с условиями”
// 2 Добавить кнопку отправить
// 3 При клике на кнопку отправить нужно проверять
// выбран ли активным элемент checkbox
// 4 Если элемент не выбран, добавить текст под
// чекбоксом “Необходимо согласиться с условиями”

const input = document.querySelector('.input');
const form = document.querySelector('form');
const btn = document.querySelector('.button');
// -------------------
let error = false;
// -------------------
const p = document.createElement('p');
p.textContent = 'Необходимо согласиться с условиями'
p.style.color = 'red';
p.style.fontSize = '8px';
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!input.checked && !error) {
        btn.insertAdjacentElement('afterend', p);
        error = true;
        
    }else if(input.checked) {
        form.submit();
        console.log('ok');
        p.remove()
    }
    
});

// Задание 1 (тайминг 25 минут)
// 1 В html создать 2 элемента радио кнопки (input
// type=”radio”) и текст “Чай”, “Кофе”
// соответственно
// 2 Кнопка отправить
// 3 Если выбран чай, необходимо вывести сообщение
// “Чай закончился”
// 4 Если выбран кофе, необходимо вывести
// соообщение “кофе закончился”

const radio = document.querySelectorAll('.radio');
const btn2 = document.querySelector('.btn');
const p2 = document.createElement('p');
btn2.insertAdjacentElement('afterend', p2);
p2.style.color = 'red';
p2.style.fontSize = '8px';

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    radio.forEach((i) => {
        if (i.checked && i.id === 'tea') {
            p2.textContent = 'Чай закончился'; 
            
        }else if (i.checked && i.id === 'coffee') {
            p2.textContent = 'Кофе закончился'; 
        }else {
        }
    })
});

// Задание 3 (тайминг 20 минут)
// 1 Создать поле ввода (пароль)
// 2 Кнопка отправить
// 3 Если пользователь вводит текст “пароль” то поле ввода
// должно быть подсвечено зеленым цветом
// 4 Если пароль неверный, у поля ввода появляется красная
// обводка и текст “пароль неверный”

const pwd = document.querySelector('.pwd');
const but = document.querySelector('.but');

but.addEventListener('click', (e) => {
    e.preventDefault();
    if (pwd.value === 'пароль') {
        pwd.style.border = '2px solid green';
    } else {
        pwd.style.border = '2px solid red';
        pwd.value = '';
        pwd.placeholder = 'Пароль не верный';

    }
});

// Задание 4 (тайминг 20 минут)
// 1 Создать поле ввода и под ним заголовок h1 с текстом
// “Заголовок”
// 2 При вводе текста в поле ввода необходимо чтобы текст
// внутри заголовка менятся на введенный в поле ввода

const inp = document.querySelector('.text');
const h1 = document.querySelector('h1');
inp.addEventListener('input',(e) =>{
    h1.textContent = inp.value;
});