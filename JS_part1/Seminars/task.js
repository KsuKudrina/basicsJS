let age = prompt("Ваш возраст: ");
console.log(`Вам ${age} лет`);

let userName = prompt("Ваше имя: ")
console.log(`Добро пожаловать на сайт ${userName}`);

let a = '2';
a = Number(a);
let b = '3';
b = Number(b);

console.log(a + b);

let num1 = Number(prompt('Введите первое число'))

let num2 = Number(prompt('Введите первое число'))

console.log(`Сумма чисел равна: ${num1 + num2}`);
console.log(`Разность чисел равна: ${num1 - num2}`);
console.log(`Произведение чисел равно: ${num1 * num2}`);
console.log(`Частное чисел равно: ${num1 / num2}`);
console.log(`Остаток от деления чисел равен: ${num1 % num2}`);

let num = Number(prompt('Введите число'));
if (num === 5) {
    console.log('Число равно 5');
} else if (num < 5) {
    console.log('Число меньше 5');
} else {
    console.log('Число больше 5');
}


let test1 = Number(prompt('Введите число'));
let test2 = Number(prompt('Введите число'));

(test1 === test2) ? console.log(true) : console.log(false);

if (test1 < test2) {
    console.log(`${test1} минимальное число`);
} else if (test2 < test1) {
    console.log(`${test2} минимальное число`);
} else {
    console.log(`Числа равны`);
}

(test1 > 0 && test1 < 15) ? console.log('Чило подходит') : console.log('Не то!');
 
