class User {

    name: string;
    protected _age: number; 
    readonly gender: string;
 //protected _age: - модификация доступа (снаружи недоступны, но наследуются; privet - недоступны и ненаследуемые)

    constructor(name: string, gender: string, _age?: number) {
        this.name = name;
        this._age = _age;
        this.gender = gender;
    }

    //age? - необязательный параметр ОПЦИОНАЛЬНЫЙ

    showInfo() {
        console.log(`my name is ${this.name}, i'm ${this._age} years old`);
    }

    toString(): string{
        return `${this.name}: ${this._age}`;
    }

    //МОДИФИКАТОРЫ ДОСТУПА
    public set age(n: number){
        this._age = n;
    }

    public get age(): number{
        return this._age;
    }
}

let user: User = new User("Ivan Ivanov", "male");

/*user.name = "Ivan Ivanov";
user.age = 25;*/
user.age = 25;
console.log(user.age);


user.showInfo();
console.log(user.toString());

//user.gender = "female"; - ошибка. ТОЛЬКО для чтения. НЕЛЬЗЯ менять READONLY



//НАСЛЕДОВАНИЕ

class Employee extends User{
    compony: string;
    rank: string;

    constructor(name: string, gender: string, age?: number) {
        super(name, gender, age);
    }

    //переопределение метода
    toString(): string{
        console.log(super.toString()); //метод базового класса
        return `${this.name}: ${this._age}: ${this.compony}`;
    }

    // СТАТИЧЕСКИЕ ПОЛЯ И МЕТОДЫ
    static retirementAge: number = 65;
    static calculateYears(age: number): number {
        return Employee.retirementAge - age;
    }
}

let worker: Employee = new Employee ("Sergei Morozov", "male", 45);
worker.compony = "Amazon";
console.log(worker.toString());




//ОБСТРАКТНЫЕ КЛАССЫ

abstract class Figure {
    name: string;

    abstract getArea(): number;

    showName(){
        console.log(this.name);
    }
}

class Rectangle extends Figure {
    width: number;
    height: number;

    constructor(width: number, height: number){ 
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number{
        return this.width * this.height;
    }
}

let rect: Rectangle = new Rectangle (100, 30);
console.log(`Rectangle area = ${rect.getArea()}`);

console.log(Employee.calculateYears(37));





// ИНТЕРФЕЙСЫ ОБЪЕКТОВ

interface IUser {
    id: number;
    name: string;
}

let employee: IUser = {
    id: 1, 
    name: "Tom"
}

interface ICar {
    id: number;
    name: string;
    showInfo(): void;
}

class Sedan implements ICar{
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number) {
        this.id = id;
        this.name = name;
        this.weight = weight;
    }


    showInfo(): void {
        console.log(`${this.name}`);
    }
}

class Vehicle implements ICar{
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number) {
        this.id = id;
        this.name = name;
        this.weight = weight;
    }


    showInfo(): void {
        console.log(`${this.name}`);
    }
}

let car1 = new Sedan(1, "ford", 1340);
let car2 = new Vehicle(2, "maz", 15000);

function showCarInfo(car: ICar){
    car.showInfo();
}

showCarInfo(car1);
showCarInfo(car2);

//Интерфейсы функций
interface IFullNameBuilder {
    (name: string, surname: string): string;
}

let simpleBuilder: IFullNameBuilder = function (name:string, surname: string): string {
    return `${name} ${surname}`;
}

console.log(simpleBuilder("Nataliya", "Savchenko"));

//Интерфейсы массивов
interface IStringArray {
    [index: number]: string;
}

let addresses: IStringArray = ["адрес 1", "адрес 2"];



interface IDictionary {
    [index: string]: string;
}

let colors: IDictionary;

colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
 
console.log(colors["red"]);

/*let colors = {
    red = "#ff0000",
    green = "#00ff00",
}*/




//Преобразование типов

let tom: User = new Employee("Tom Soyer", "male");
let employeeTom: Employee = <Employee>tom;

employeeTom.compony = "Amazon";

