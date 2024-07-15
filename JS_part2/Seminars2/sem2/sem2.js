// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст "Элемент внутри" и задать
// Цвет текста синий
// Paмка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16рх
// Добавить данному блоку класс item_1 (использовать setAttribute)

const block = document.querySelector('.block');
const item = document.createElement('div');

block.appendChild(item);

item.textContent = 'Элемент внутри';
item.style.color = 'blue';
item.style.border = '1px solid black';
item.style.backgroundColor = 'orange';
item.style.padding = '16px';
item.setAttribute('class', 'item_1');

// Необходимо c помощью guerySelector найти параграф с классом text
// вывести в консоль соседний элемент h2
// вывести в консоль родительский элемент content
// вывести в консоль картинку
// вывести в консоль родительский элемент elem

const text = document.querySelector('.text');
console.log(text.previousElementSibling);
console.log(text.parentElement);
console.log(text.parentElement.previousElementSibling);
console.log(text.parentElement.parentElement);
console.log('----------');
// с помощью querySelector найти
// элемент h2 и вывести в консоль всех его родителей
const st = document.querySelector('h2');
console.log(st.parentElement);
console.log(st.parentElement.parentElement);
console.log(st.parentElement.parentElement.parentElement);


// let parent = st.parentElement;
// while (parent) {
//     console.log(parent);
//     parent = parent.parentElement;
// }


// Дано поле ввода и Кнопка отправить, необходимо реализовать функционал, если пользователь нажимает на кнопку, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом "Вы не заполнили поле ввода"
// Цвет у рамки сделать красным


const input = document.querySelector('input');
const but = document.querySelector('.btn');
but.addEventListener('click', (event) => {
    event.preventDefault;
    if (document.querySelector('h2')) {
        document.querySelector('h2').remove();
        input.style.border = '1px solid black'  
    }else{
        if (input.value.trim() === "" ) {
            const h2 = document.createElement('h2');
            h2.textContent = 'Вы не заполнили поле ввода';
            h2.style.fontSize = '10px'
            input.parentElement.insertAdjacentElement('afterend', h2);
            input.style.border = '3px solid red'  
        }
    }
})