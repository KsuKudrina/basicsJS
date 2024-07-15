// Объекты

const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};
console.log(week[2]);

const user = {
    name: 'Alex',
    surname: 'Ka',
    age: 18
}
console.log(`${user.surname}-${user.name}-${user.age}`);

// user.patronymic = prompt('Отчество');
console.log(user);

delete user.surname;
console.log(user);

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const dayWeek = {};

if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        dayWeek[arr1[i]] = arr2[i];
    }
} else {
    console.log('Массивы не равны');
}
console.log(dayWeek);

const obj = { x: 1, y: 2, z: 3 };
console.log(obj);
for (const item in obj) {
    obj[item] = obj[item] ** 2;
}
console.log(obj);
console.log('-------');
const object = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = 0;
for (const item in object) {
    const element = object[item];
    for (const key in element) {
        sum += element[key];
    }
}
console.log(sum);
console.log('-------');

const riddles = {
    question: 'зимой и летом одним цветом',
    answer: 'елка',

    askQuestion: function () {
        const quest = prompt(this.question);
        quest = quest.toLocaleLowerCase();
        if (quest === this.answer) {
            console.log('Мололец');
        } else {
            console.log('Вы проиграли');
        }
    }
}
riddles.askQuestion();