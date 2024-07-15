// Массивы
const numArr = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 3 && numArr[i] < 10) {
        console.log(numArr[i]);
    }
    
}
console.log('-----------------------------');

let sum = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

console.log('-----------------------------');

const array2 = [2, 5, 9, 3, 1, 4];
let elSum = 0;
for (let i = 0; i < array2.length; i++) {
    elSum += array2[i]; 
}
console.log(elSum);

console.log('-----------------------------');

let str = '-';

for (let i = 1; i <= 9; i++) {
    str +=  i + '-';
    console.log(str);
}

console.log('-----------------------------');

const array3 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < array3.length; i++) {
    if(array3[i] === 0){
        break;
    }else{
        console.log(array3[i]);
    }
}

console.log('-----------------------------');


const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// console.log(arr.length);

arr.push(4, 5);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i]++;
}
console.log(arr);

console.log('-----------------------------');

const array = ['a', 'b', 'c', 'd', 'e'];
console.log(array);

array[0] = 1;
array[1] = 2;
array[2] = 3;

console.log(array);
console.log(array.length);

array.pop();
array.pop();
console.log(array);
console.log('-----------------------------');

const arr2 = [];
arr2[3] = 'a';
arr2[8] = 'b';

console.log(arr2.length);
console.log('-----------------------------');

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 99; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }
let num = 20;
let count = 0;

while (num < 1000) {
    num = num * 3;
    count++;
    console.log(num);
}
console.log(count);

