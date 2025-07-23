/*
let n = +prompt('введите число больше 2');
while (n < 2) {
    n = +prompt('Неверное число. введите число больше 2');
}
let m = +prompt('введите степень числа');
console.log(`результат равен ${n**m}`);
*/

//Task 1.1
let count = 10;
while (count > 0) {
    console.log(`${count} = #`);
    // console.log ('#');
    count--;
    //count - = 2;
}

//task 1.2
let num = 7;
while (num >= 0) {
    console.log(`число - ${num}`);
    num--;
}

//task 1.3
let n = 3; 
let m = 6; 
let result = 1;

let i = 1;
while (i <= m) {
    result = result *n;
    console.log(`Промежуточный - ${n}`);
    i++;
}
console.log(`результат - ${result}`);

//task 1.5
let num1 = 8;
i = 1;
result = 1;
while (i <= num1) {
    result = result * i;
    i++;
}
console.log(`фактариал числа ${num1} равен ${result}`);

//task 2.1
num = 45;

do { 
    result = +prompt('я загадал число, отгадай его');
}while (result != num);

//task 3.1
//let j; - можно сразу объявить внутри
for (let j = 1; j <= 10; j+=2) {
    console.log(j);
}

//task2.2
let num2 = 1000;
do {
    num2 = num2 / 2;
}while (num2 >= 50)
console.log(num2);   

//task3.2
let start = 10;
let end = 146;
for (let k = start; k <= 146; k += 4) {
    console.log(`элемент ${k}`);
}