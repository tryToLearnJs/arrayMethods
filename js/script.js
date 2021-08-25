// Двоеточие между нечётными числами
// Пользователь вводит многозначное число. Напишите функцию colonOdd(num), 
// которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
//  Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. 

let numbers = prompt('Введите многозначное число', 0);
let splitNum;
let result = [];

function colonOdd(num) {
    splitNum = num.split('');

    splitNum.forEach(function (item, index) {
        const isOddPair = item % 2 !== 0 && splitNum[index + 1] % 2 !== 0;
        if (isOddPair && index !== splitNum.length - 1) {
            result += item + ':';
        } else {
            result += item;
        }
    });

    return console.log(result);
}

console.log(colonOdd(numbers));

// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// Результат – // [5,7,9,4,5] (edited) 

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

let results = [];
let count;
if (arr1.length < arr2.length) {
    count = arr2.length;
} else {
    count = arr1.length;
}
console.log(count);
for (let i = 0; i < count; i++) {
    if (arr1[i] === undefined) {
        arr1.push(0);
    } else {
        if (arr2[i] === undefined) {
            arr2.push(0);
        }
    }
    results.push(arr1[i] + arr2[i]);
}
console.log(results);

// Разворачивание массива массивов
// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.
// var arr1 = [1, [2,[3,[4]]]]; // 1,2,3,4
// var arr2 = [1, [2], [3, [[4]]],[5,6]]; // 1,2,3,4,5,6

var arr1 = [1, [2, [3, [4]]]];

function expand(arr) {
    let newArray = [];
    let storage;

    arr.forEach(item => {
        if (Array.isArray(item)) {
            storage = expand(item);
            newArray = newArray.concat(storage);
        } else {
            newArray.push(item);
        }
    });
    return newArray;
}
console.log(expand(arr1));