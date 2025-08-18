/*const summ = function (start, end) {
    let result = 0;

    for (let i = start; i <= end; i++) {
        if(i % 2 == 0){
            result += i
        }  
    }

    console.log (`сумма четных чисел диапозона от ${start} до ${end} равно ${result}`)
}
summ(1, 5);*/

/*const arr = (name) => {
    console.log(`hello, ${name}`);
}

arr(`Natali`);*/

const car = {
    name: `porshe`,
    type: `sedan`,
}
car.engine = `electric`;

const user = {
    // "first name": "Ivanov" - если нужен пробел берем в кавычки
    // console.log(user['first name']);
    name: 'Feder',
    age: 35,
    job: {
        name: 'developer',
        stage: 15,
    },
    gender: 'man',
    hello: /*function*/ () => {
        console.log(`hello!! my name is ${this.name}. I am ${this.age} years old`);
        console.log(`i have a ${car.name}`);
    } //   метод  
}
user.hello();




console.log(user.name);

console.log(`пользователь ${user.name} работает на должности ${user.job.name} ${user.job.stage} лет`);

user.login = 'dev';
user.password = '1235';

console.log(user);
console.log(user['age']);
console.log(user['job']['name']);

let vozrast = 'age';
console.log(user[vozrast]);


// Чтоб понять есть ли свойства у объекта:
if("gender" in user) {
    console.log(user.gender);
}
        // или (1ый вариант лучше)
if(user.age !== undefined) {
}

for (key in user) {
    console.log(`ключ - ${key}`);
    console.log(`значение - ${user[key]}`);
}


/*delete user.gender;
console.log(user);*/

let isEmpty = function (obj) {
    for (key in obj){
        return false;
    }
    return true;
}
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

const obj1 = {
    a:1
}
const obj2 = {
    a: obj1.a
}

/*const obj2 = {}
/*for (key in obj1) {
    obj2[key] = obj1[key];
}*/
Object.assign(obj2, obj1);

// чтоб склонировать обект и внутри него свойства с объектом, нужно: сделать рекурсивнрое (глубокое) копирование - рассмотрим позже

// Task 4

let salaries = {
    john: 100,
    ann: 160,
    peter:130,
}
function salariesSumm(obj3) {
    let result = 0;
    for(key in obj3) {
        result += obj3[key];
    }

    return result;
}
console.log(`сумма равна ${salariesSumm(salaries)}`);


// TASK

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep()


ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0