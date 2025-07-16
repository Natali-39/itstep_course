 // alert('first message'); - одностроч коммент.
/* многострочный
коммент
alert - выводит значение в модальное окно
*/

// объявление переменных

let message ='это сообщение';

// let message ="что-то другое" - нельзя одной и то же переменной задать другое значение

message ='второе значение и поледующие';
// можно так, только не объявлять еще раз (let), значение может быть сколько угодно. ОБЪЯВЛЯТЬ можно только новую переменную.

alert(message);

const COLOR = "#fffff";
/* нельзя перенозначить, как правило пишутся с большой буквы, если знаем заранее, если нет - то с маленьких
const color


color ="3+2" */

let firstSuperMessage = "First message";

/* может встречаться как введение переменных
var */

/*let admin;
let name;
name ='джон'
admin = name;
alert(джон);*/


let planetEarthName ="Земля";
let currentUserName = {}


// const birthday = '18.04.1982'; - не верно, нужно большими

// const age = someCode(birthday); - верно


/*// существует 8 типов переменных - любят спрашивать на собесах
let age = -40.8;

// Bigint - большое очень число
let hugeNumber = 26546556654889999999999999999n;

alert('bnjnn'/5); // Nan

let name = 'Natali';
// =
name = "Natali";
// =
name = `My name is Natali, i'm ${age} years old`;
// только в такие ковычки можно вставить значение, называется ИНТЕРПОЛЯЦИЕЙ
alert(name);

// переменная без значение
let money = null;

//  переменная underfine
let happyDay;

// логический или булевый тип
let nam = true;  // (false)

// комплексный тип - объект (практически основной в js)
let parameters = {};

alert(typeof hugeNumber); 
*/

let age = prompt('введите свой возрост');
alert(`ваш возрост ${age} лет');

let result = confirm('Вам уже есть 18 лет?');
alert(result);