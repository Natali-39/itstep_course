/*let numbers = [3, 7, 9, -7, 111, 14];

let arr = [3, {name: "Natali"}, "hello", function(){console.log(`hi`)}];

console.log(`значение массива ${numbers[3]}`);

arr [3]();

for(let i = 0;i < numbers.length; i++) {
    console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
}*/

// TASK 1
/*Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
а не добавлять новую.
3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

class Product{
    constructor(productName, productCount,productIsBay, productPrice){
        this.name = productName;
        this.count = productCount;
        this.isBay = productIsBay;
        this.price = productPrice;
    }
}

let productsList = [
    new Product(`bread`, 1, true, 3.5),
    new Product(`milk`, 2, true, 2.2),
    new Product(`cream`, 1, false, 3.55),
    new Product(`carrot`, 3, false, 1.2),
    new Product(`vodka`, 1, false, 7.1),
    new Product(`apple`, 7, true, 1.25),
];

console.log(productsList);
// 1ое действие
function showProductsList(products) {
    console.log(`некупленные продукты`);

    for(let i = 0; i < products.length; i++){

        if(products[i].isBay === false){
            console.log(`${products[i].name}, количество ${products[i].count}`);
        }
    }

    console.log(`купленные продукты`);

    for(let i = 0; i < products.length; i++){

        if(products[i].isBay === true){
            console.log(`${products[i].name}, количество ${products[i].count}`);
        }
    }
}
// 2ое действие
function addProduct(newProduct) {
    let isProductExists = false;

    productsList.forEach(function(product, index){
        if(product.name == newProduct.name){
            isProductExists = true;
            productsList[index].count += newProduct.count;
        }
    });

    if(!isProductExists){
        productsList.push(newProduct);
    }
}
// 3ье действие
function bay(productName) {
    productsList.forEach(function(product, index){
        if(product.name == productName){
            productsList[index].isBay = true;
        }
    });

}

addProduct(new Product(`yogurt`, 3, false));
addProduct(new Product(`apple`, 5, true));

bay(`cream`);

showProductsList(productsList);

// Task 2
/* Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1. Распечатка чека на экран.
2. Подсчет общей суммы покупки.
2
Домашнее задание №2
3. Получение самой дорогой покупки в чеке.
4. Подсчет средней стоимости одного товара в чеке. */


// 1ое действие
function showBill(massivTovarov) {
    for(tovar of massivTovarov){
        let price = tovar.count * tovar.price;

        console.log(`товар - ${tovar.name}, количество - ${tovar.count}, цена - ${tovar.price}`);
    }
    

function totalPrice(massivTovarov){
    let result = 0;

    for(tovar of massivTovarov) {
        let price = tovar.count * tovar.price;
        result += price;
    }
    
    console.log(`общая цена ${result.toFixed(2)}`)
   }
}

function maxPriceProduct(massivTovarov) {
    let resultProduct = null;
    let totalProductPrice = 0
    massivTovarov.forEach(function(product, index) {
        let price = product.count * product.price;

        if(price > totalProductPrice) {
            resultProduct = product;
            totalProductPrice = price;
        }
    });

    console.log(`самая дорогая покупка в чеке ${resultProduct.name}`);
}

function srednee(massivProductov) {
    let resultPrice = 0;
    let resultCount = 0;

    for(tovar of massivTovarov){
        resultPrice += tovar.price * tovar.count;
        resultCount += tovar.count;
    }

    let result = resultPrice / resultCount;

    console.log (`средняя стоимость одного товара в чеке${result}`);
}

showBill(producstList);
totalPrice(producstList);
maxPriceProduct(producstList);
srednee(producstList);


let str = "hello, my   friend!";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

console.log(str.split(``));
console.log(str.replace(`hello`, `Privet`));

let stroka = new String();

console.log(stroka);
