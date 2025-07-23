/*let n = +prompt('введите число');
let m = +prompt('введите значение степени');*/

/*if (n == 0) {
    alert('результат операции равен 0');
}

if (n == 1) {
   alert('результат операции равен 1'); 
}

if (n > 1) {
    let result = n**m;
    alert(`результат операции равен ${result}`);
}*/

// как записать более сокращенно, условие выше
/*if (n == 0) {
    alert('результат операции равен 0');
} else if (n == 1) {
    alert('результат операции равен 1');
} else if (n == 2) {
    alert('не могу вычислить результат');
} else {
    let result = n**m;
    alert(`результат операции равен ${result}`);
}*/

/*let a = null;

alert(a == 0);*/

/*if (n >= 0) {
    let result = n**m;
    alert(`результат операции равен ${result}`);
} else {
    alert('вы ввели отрицательное число');
}*/

/*if (n < 5) {
    alert ('неверное число, число должно попадать в диапозон от 5 до 10');
}

if (n > 10) {
    alert ('неверное число, число должно попадать в диапозон от 5 до 10');
} можно записать по другому, строка 47*/
/*if (n >= 5 && n <= 10) {
    if (m <= 2 || m >=4) {
    let result = n**m;
    alert(`результат операции равен ${result}`);
    }
    /*let result = n**m;
    alert(`результат операции равен ${result}`);
}*/
/*if (n >= 5 && n <= 10 && n !=4) {
    if (m <= 2 || m >=4) {
    let result = n**m;
    alert(`результат операции равен ${result}`);
    }
}*/

/*let a = 10;
let b = !a;
console.log(b);

if (typeof a != "underfind") {
    alert('ура, неопределенности нет');
}*/

// Task 1
/*let officialNameJS = prompt('введите официальное название JavaScript');
if (officialNameJS == "ECMAScript") {
    console.log('верно');
} else {
    console.log('не знаете ECMAScript')
} */

//Task 2
/*let num = +prompt('введите число');
if (num > 0) {
    alert(1);
}else if (num < 0) {
    alert(-1);
}else if (num == 0) {
    alert(0);
}*/

//Task2
console.log('task2');
/*let age = 36;
if (age > 0 && age <= 120) {
    console.log ('возраст верный');
}else {
    console.log ('возрост не верный')
}*/
let age = -15;
if (age >= 0 || age < 120) {
   console.log ('возрост неверный')
}

//task3
console.log('task3');
let num = -56;
if (num < 0) {
    num = -num;
}
console.log(num);

//task4
console.log('task4');

let a =1;
console.log(a++);

let b = 1;
let c = a++;
console.log(c);

//task4.4
let hours = 34;
let minutes = 54;
let seconds = 28;

if ((hours < 0 || hours > 24) || (minutes < 0 || minutes >60) || (seconds < 0 || seconds > 60)) {
    console.log('данные введены неверно')
}

//task 5
let month = "январь";
/*if (month == 1) {
    console.log('январь');
}
if (month == 2) {
    console.log('феврвль');
}
if (month == 3) {
    console.log('');
}
if (month == 4) {
    console.log('');
}*/
switch(month) {
    case "январь":
        console.log('зима');
        break;
    case 2:
        console.log('февраль');
        break;
    case "март":
        console.log('весна');
        break;
    case 4:
        console.log('апрель');                
        break;
    default:
        console.log('месяц неопределен');
}

//task6
console.log('task4');

let num1 = 2;
let num2 = 6;
let action = '*'
switch (action) {
    case '+':
        console.log(num1+num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
    case '-':
        console.log(num1-num2);
        break;                            
    default:
        console.log('такая операция не поддерживается')
}

// Task 1.1 тернарный оператор
let n = 5;
let m = 10;

console.log ((m > n )? m: n);

//task 1.2
let number = 16;
console.log ((number % 5 == 0)? true:false);

//task 1.3
let namePlanet = "Земля";
console.log ((namePlanet == "Земля") || (namePlanet == "земля")? "Привет,землянин!": 'Привет, инопланетянин!');