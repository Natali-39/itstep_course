let a = 5;
let b = 6;
let counter = 0;

//let c = (a + b) * 7;

function summ(a, b){
    //counter++; - уже будет НЕ чистая функция
    return a + b;
} //чистые фук-ции (всегда возвращает один и тот же результат, и не меняет внешнюю среду, не должны использовать значение из вне)

function mul(a, b){
    return a * b;
}//чистые фук-ции (всегда возвращает один и тот же результат, и не меняет внешнюю среду, не должны использовать значение из вне)

let c = mul (summ(a, b), b);

function fff(a, b){
    return(a + b) / Math.random();
} // не чистая


// цикл FOR в виде рекурсии ниже
/*for(let i = 0; i < 10; i++){
    console.log(i);
}*/

let show = function(i){
    console.log(i);
}

function cicle(counter, func){
    if(counter < 0){
        return;
    }
    func(counter);
    counter--;
    cicle(counter, func);
}

cicle(10, show);




let array = [1, 2, 3, -1, 8, -7];
/*let newArray = [];

for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 2);
}*/

newArray = array.map(function(nameParam){
    return nameParam * 2;
}) // функция высшего порядка - т.к. принемает функцию другую в виде параметра


/*let negative = [];
for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        negative.push(array[i]);
    }
}

let odd = [];
for(let num of array){
    if(num % 2 === 0){
        odd.push(num);
    }
}*/



// ФУНКЦИОНАЛЬНОЕ ПРОГРАМ. Фун-ция 

let filtered = [];

let negativeCondition = function(n) {
    /*if(n < 0){
        return true;
    } else{
        return false;
    }*/

    return n < 0;
};

let oddCondition = function(n) {
    return n % 2 === 0;
}

filtered = array.filter((nameParam) => {
    return negativeCondition(nameParam);
})// встроинный метод массива
console.log(filtered); 

function filter(elements, condition) {
    let result = [];

    elements.forEach(function(element){
        condition(element) ? result.push(element) : null;
    });

    return result;
} //функциональная функция - простая

/*console.log(filter(array, negativeCondition));
console.log(filter(array, oddCondition));*/



/*for(let element of array){
    if(oddCondition(element)){
        filtered.push(element);
    }
} 
console.log(filtered);*/ //цикл по одиночке (отрицательные либо четные)



/*console.log(negative);
console.log(odd);*/


//TASK 2
let cart = [
    {
        name: 'товар 1',
        count: 2,
        price: 120,
    },
    {
        name: 'товар 2',
        count: 1,
        price: 12,
    },
    {
        name: 'товар 3',
        count: 6,
        price: 3,
    },
];

//МЕТОД REDUCE - метод массива
let totalCount = cart.reduce(function(acc, item){
    acc += item.count;
    return acc;
},0);

let totalPrice = cart.reduce(function(acc, item){
    acc += item.price * item.count;
    return acc;
},0);



/*for(let item of cart){
    totalCount += item.count;
    totalPrice += item.count * item.price;
}*/

/*cart.forEach(function(item){
    totalCount += item.count;
    totalPrice += item.count * item.price;
});*/ //- не подходит, т.к. не чистая функция



console.log(totalPrice);
console.log(totalCount);






//НЕМЕДЛЕННО ВЫЗЫВАЕМЫЕ ФУНКЦИИ IIFE
function render(message){
    console.log(message);
}

render('this is message');

(function(message){
    console.log(message)
})(`сумма чисел равна ${5 + 6}`);// IIFE