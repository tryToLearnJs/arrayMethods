// Двоеточие между нечётными числами
// Пользователь вводит многозначное число. Напишите функцию colonOdd(num), 
// которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
//  Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. 


let numbers = prompt('Введите многозначное число', 0);
let splitNum;
let result = [];

function colonOdd(num) {
    splitNum = num.split('');
    console.log(splitNum);

    splitNum.forEach(function (item, index) {
        if (index == splitNum.length - 1) {
            result += item;
        } else if ((item % 2 !== 0) && (splitNum[index + 1] % 2 !== 0)) {
            result += item + ':';
        } else {
            console.log(result, item, index);
            result += item;
        }
    });

    return console.log(result);
}

// Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру)

let arr = [5, 6, 5, 'sd', 'ds', 'Sd', 'ds', 50, 5];

function removeDuplicates(array) {
    let stringArray = array.map((item) => {
        return item.toString();
    });

    stringArray.forEach(function (item, index) {
        for (let i = 1; i < stringArray.length; i++) {
            if (stringArray[index].includes(stringArray[index + i])) {
                stringArray.splice(index + i, 1);
            } else {
                stringArray[index] = item;
            }
        }
    });
    return stringArray;
}
console.log(removeDuplicates(arr));

function removeDuplicates2(array) {
    let noDuplicate = array.filter(function (item, index) {
        return array.indexOf(item) == index;
    });
    return noDuplicate;
}
console.log(removeDuplicates2(arr));