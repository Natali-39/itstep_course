// task 


/*function user3 (name, age) {
    let user3 = {}

    user3.name = name;
    user3.age = age;

    return user3;
}
let anna = user (`anna`, 45);

console.log(anna.name);*/

function User(name,age) {
    this.firstname = name;
    this.vozrost = age;

    this.hello = function() {
        console.log(`Привет, я ${this.firstname}`)
    }
}
let anna = new User(`anna`, 35);
console.log(anna.hello());

// <div class="block"></div>
/*let div = {
    name: `div`,
    attribute: {
        name: `class`,
        value: `block`,
    },
    innerHtml: ``
}
// <a href= "https://google.com">link</a>
let a = {
    name: `a`,
    attribute: {
        name: `href`,
        value: `https://google.com`,
    },
    innerHtml: `link`
}
// <input type="text"/>
let input = {
    name: `input`,
    attribute: {
        name: `type`,
        value: `text`,
    },
    innerHtml: null
}*/

/*class HTMLElement {
    constructor(name) {
        this.name = name
        this.innerHtml = null
        this.attribute = null
    }
    setInnerHtml(innerHtmlValue) {
        this.innerHtml = innerHtmlValue;
    }

    setAttributeValue(attributeValue) {
        this.attribute = attributeValue;
    }
}

let div = new HTMLElement(`div`);
div.setInnerHtml(``);
div.setInnerHtml(`125986`);
div.setAttributeValue({name:`class`, value: `block`});

console.log(div);*/

class HTMLElement {
    constructor(param1,param2,param3) {
        this.name = param1;
        this.attribute = param2;
        this.innerHTML = param3;
    }

    renderHTML(){
        // <div class="block"></div>
        return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHTML}</${this.name}>`
    }
}

const div = new HTMLElement(`div`, {name: `class`, value: `block`}, ``);

// div.name = `a`; для примера, изменить имя

console.log(div.renderHTML());


// task3

function HTMLElement1(param1,param2,param3) {
        this.name = param1;
        this.attribute = param2;
        this.innerHTML = param3;

    this.renderHTML = function(){
        if(this.attribute != null && this.attribute.name != undefined && this.attribute.value != undefined) {

        return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHTML}</${this.name}>`

        } 
    }
    this.addToPage = function() {
        document.body.insertAdjacentHTML(`beforeend`, this.renderHTML());
    }    
}
const a = new HTMLElement1(`a`, {name: `href`, value: `https://google.com`}, `Это ссылка на google`);
a.addToPage();

const p = new HTMLElement1(`p`, {}, `Это текстовый абзац`);
p.addToPage();



// TASK1 Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

/*read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.*/

function Calculator () {
    this.num1 = 0;
    this.num2 = 0;

    this.read = function () {
        this.num1 = +prompt(`введите число`, 0);
        this.num2 = +prompt(`введите второе число`, 0);
    }
    this.sum =function() {
        return this.num1 + this.num2;
    }
    this.mul = function() {
        return this.num1 * this.num2;
    }
}

const calc = new Calculator();

// task 2  Создайте функцию-конструктор Accumulator(startingValue).

/*Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
*/

function Accumulator (startingValue) {
    this.value = startingValue;

    this.read = function() {
        let num3 = +prompt(`введите число`)
        this.value += num3;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);