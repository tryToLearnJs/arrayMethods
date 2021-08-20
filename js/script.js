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

// Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру)

let arrayWithDuplicate = [1, 5, 5, 5, 6, 'sd', 'ds', 'Sd', 'ds', 'ds', 50, 5];

function removeDuplicates(arr) {
    let noDublicatesArray = arr.filter(function (item, index, arr) {
        for (i = 1; i < arr.length; i++) {
            if (item == arr[index + i]) {
                return false;
            }
        }
        return true;
    });
    return noDublicatesArray;
}
console.log(removeDuplicates(arrayWithDuplicate));

function removeDuplicates2(array) {
    let noDuplicate = array.filter(function (item, index) {
        return array.indexOf(item) == index;
    });
    return noDuplicate;
}
console.log(removeDuplicates2(arr));

function removeDuplicates3(arr) {
    let emptyArr = [];
    for (let a = 0; a <= arr.length; a++) {
        emptyArr[a] = arr[a];
        for (let index = 1; index < arr.length; index++) {
            if (arr.some((arr[index]), [emptyArr[a]])) {
                emptyArr.splice(a, 1);
            }
        }
        return emptyArr;
    }
}
console.log(removeDuplicates3(arrayWithDuplicate));

function removeDuplicates4(arr) {
    let arr2 = [];
    arr2[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (returnBooleanDuplicate(arr2, arr[i]) == false) {
            arr2[i] = arr[i];
        }
    }
    return arr2.filter(elm => elm != null);
}

console.log(removeDuplicates4(arrayWithDuplicate));

function returnBooleanDuplicate(arr, value) {
    return arr.some(function (arrVal) {
        return value === arrVal;
    });
}

// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// Результат – // [5,7,9,4,5] (edited) 

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

function sumArray(arr1, arr2) {
    arr1.forEach(function (element, index) {

    });
}