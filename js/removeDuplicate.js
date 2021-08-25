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
    let result = [];
    let isDuplicate = function aaa(arr, value) {
        return arr.some(arrVal => value === arrVal)
    };

    for (let i = 1; i < arr.length; i++) {
        if (!isDuplicate(result, arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicates4(arrayWithDuplicate));