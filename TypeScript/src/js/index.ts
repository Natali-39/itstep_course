import '../scss/index.scss';

let n: number = 5;

let city: string | null = "Питер";


let result: boolean = true;

let nothing = null;

let m: number | undefined;

let some: any;

let color: "red" | "green" | "blue"
color = "red"

let status: 200 | 404 | 500;


//Object Type
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

let user: Person = {
    name: "Иван Иванович",
    age: 35,
    isStudent: false
}


//Array Type
let numbers: number[] = [1, 2, 3, 4, 5];
numbers[2] = 3;

let strings: Array<string|number> = ["Tom", "1235", "Alice"];


//Тип void используется для указания на то, что функция не возвращает никакого значения
function showInConsole(str: string) {
    console.log(str)
}

function summ(m: number, n: number): number{
    return m + n;
}

function createPerson(name: string, age: number, isStudent: boolean): Person {
    return{
        name: name,
        age: age,
        isStudent: isStudent
    };
}


//Тип never представляет собой тип данных, который указывает на то, что функция никогда не завершается нормально.
function throwError(message: string): never {
    throw new Error(message);
}


//Тип object представляет любой объект JavaScript: это может быть объект, массив, функция, класс и т. д. Но он не включает в себя примитивные типы данных (number, string, boolean, symbol, null или undefined).
let obj: object;
obj = { name: "John", age: 30 };
obj = [1, 2, 3];
obj = function() { 
    console.log("Hello"); 
};
