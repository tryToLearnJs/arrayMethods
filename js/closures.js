//Сделайте функцию, которая считает и выводит количество своих вызовов.
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4

let count = 0;

function func() {
    console.log(count++);
}
func();
func();
func();

//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. 
//Решите задачу через замыкания

function createRandomArray() {
    let randomNumberArray = [];
    let randomNumber;
    return function f() {
        randomNumber = Math.round(Math.random() * 100);

        if (randomNumberArray.length == 100) {
            return;
        }
        for (let i = 0; i < randomNumberArray.length; i++) {
            if (randomNumber == randomNumberArray[i]) {
                return f();
            }
        }
        randomNumberArray.push(randomNumber);
        return randomNumberArray;
    };
}
let notReplayNumber = createRandomArray();
console.log(notReplayNumber());

// Реализовать функцию суммирования, которая работает следующим образом:
// sum(1)(2)(3)() === 6
// sum(5)(4)() === 9

function sum(a) {
    return function add(b) {
        if (b !== undefined) {
            a = a + b;
            return add;
        } else {
            return a;
        }
    };
}
console.log(sum(1)(0)(3)());