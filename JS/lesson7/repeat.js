// switch - перебор до нужного значения

let color = `blue`;

switch(color) {
    case `blue`:
        console.log(`синий`);

    case `black`:
        console.log(`черный`);  
        
    case `red`:
        console.log(`красный`);   
    break; 

    default:
        console.log(`неопределенный`) //если нет совпадений
}

if(color == `blue`) {
    console.log(`синий`);
} else if(color == `red`) {
    console.log(`красный`);
}else if(color == `black`) {
    console.log(`черный`);
}


// цикл - выполнение кода определенное кол-во раз
// 1
let hello = `hello!`;

let counter = 0;

while(counter < 10) {
    console.log(hello);
    counter += 1;
}
// 2
for(let i = 0; i < 10; i++) {
    console.log(hello);
}


// функции - вывести сумму чисел - функции
function summ(param1, param2) {
    let result = param1 + param2;

    console.log(result);

    return result; //прекращение и остановка работы функции
}
summ(2, 2); //вызов функции 
// summ(6, 2);
// summ(2, 10);
// summ(16, 2);
let total = summ(2, 2);

console.log(total ** 2);

// F=G*((m1*m2)/r**2)
function gravity(m1, m2, r) {
    const G = 6.6743e-11;
    let result = G * ((m1 * m2) / (r**2));

    return result;
}
let g = gravity(80,90,1);

console.log(g);


// объекты и функции
let user = {
    name: `developer programmer`,
    age: 25,
    is_married: false,
    salary: null,
    "has childs": true,
    say_hi: function() {
        console.log(`helloooooo, my name is ${this.name}`);
    },
    say_age() {
        console.log(`i am ${this.age} years old`);
    },
}
user.say_hi(); // 1ый способ вызыва фун-ции
user[`say_hi`](); // 2ой способ

user.say_age();

// копирование приметивных переменных
let perem = 345;
let terem = perem;

console.log(perem);
console.log(terem);

// копирование объектов - по ссылке
let elem = {
    name: `Block`,
}

let new_elem = {
    name: elem.name,
}

console.log(elem);
console.log(new_elem);

new_elem.name = `paragraf`;

console.log(elem);
console.log(new_elem);


// Конструкторы - создание множество разных объектов, но с разными значениями
function Car(name, year, factory) {
    this.name = name;
    this.year = year;
    this.factory = factory; 
}

let mercides = new Car(`mercides`, 1995, {name: `super zavod`, address: `germany`}); //вызыв фун-ции конструктор
let mazda = new Car(`mazda`, 1999, {name: `mazda`, address: `japan`});

console.log(mazda.factory.name);
console.log(`${mazda.factory.name}`, `${mazda.factory.address}`);

/* let mazda = {
    name: `mazda`,
    year: 1999,
}*/

// 2ой вариант функци:
/*function car(name, year) {
    let obj = {};

    obj.name = name;
    obj.year = year;

    return obj;
}*/
console.log(mercides);
console.log(mazda);


// свойства примитивов - вызов их методов
let num_three = 3;
let str = `hello`;
let str_inter = `${str}, world`;
let is_user = true;
let empty = null;

console.log(str.length);
console.log(str.toUpperCase());
console.log(`это число` + num_three.toString());
console.log(num_three);

let n = new Number(3.12546464324);
console.log(n.toFixed(2));
