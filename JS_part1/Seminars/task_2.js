// Функции

function hello(userName, userLastName, age) {
    console.log(`Привет ${userName} ${userLastName} с возрастом ${age}`);
}

function square(num) {
    // let quare = Math.pow(num, 2)
    let quare = num ** 2;
    console.log(`Квадрат числа ${num} равен ${quare}`);
}

function positive(num) {
    if (num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

function sum(arg1, arg2, arg3) {
    let argSum = arg1 + arg2 + arg3;
    console.log(argSum);
}

function func(num = 5) {
    console.log(num * num);
}

function sqrtNum(num) {
    result = Math.sqrt(num);
    console.log(result);
    return result;
}

function minNum(a, b) {
    if (a < b) {
        console.log(`Минимальное число ${a}`);
    } else if (b < a) {
        console.log(`Минимальное число ${b}`);
    } else {
        console.log(`Числа равны`);
    }

}

function week(arg) {
    switch (arg) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            console.log('Введите число от 1 до 7');
            break;
    }

}

function greeting(name) {

    let time = Math.floor(Math.random() * (24 - 0));
    console.log(`Время ${time}`);
    if (0 <= time && time < 4) {
        console.log(`Доброй ночи ${name}`);
    } else if (3 < time && time < 11) {
        console.log(`Доброе утро ${name}`);
    } else if (10 < time && time < 16) {
        console.log(`Добрый день ${name}`);
    } else if (15 < time && time <= 23) {
        console.log(`Добрый вечер ${name}`);
    } else {

    }
}

hello("Ksu", "Kudrina", 32);
square(3);
positive(15);

let param1 = 1;
let param2 = 2;
let param3 = 3;
sum(param1, param2, param3);

func();

let number1 = 3;
let number2 = 4;
let result;

let res1 = sqrtNum(number1);
let res2 = sqrtNum(number2);
console.log(res1 + res2);

minNum(25, 10);
week(4);
greeting('Ksu');