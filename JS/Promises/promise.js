/*function loadScript(url, callback){
    let script = document.createElement('script');
    script.src = url;

    script.onload = () => {
        /*createHeader('this is title');//для того чтоб неполучилась асинхронная загрузка нужно вызывать через обработчик событий onload внутри фнкции
        setTimeout(() => {}, 3000);
        createH2Header("this is title too");*/
        /*callback();
    }*/

    /*document.body.append(script);
}*/

/*loadScript(`./header.js`, function(){
    createHeader('this is title');
    setTimeout(() => {}, 3000);
    createH2Header("this is title too");
});

let a = document.createElement('a');
a.innerText = 'this is link';
a.href = 'https://google.com';
document.body.prepend(a);*/






/*let promise = new Promise(function(resolve, reject){
    let summ = 12;

    setTimeout(() => {
        if(summ == 12) {
            console.log(`результат операции выполнения внутри промиса ${summ}`);
            resolve(summ);
        } else {
            console.log('ошибка выполнения операции промиса');
            let error = new Error("Число слишком не 12");
            reject(error);
        } 
        
    }, 3000);
});

console.log('это пример использования промиса');*/






let num = 4;

let button = document.querySelector("#btn");
let result = document.querySelector('#result');

button.addEventListener('click', () => {
    result.classList.remove('animated');
    let promise = new Promise((resolve, reject) => {
        let input = document.querySelector("#answer");

        if(input.value == num) {
            resolve("вы отгадали");
        } else {
            let error = new Error("вы НЕ отгадали");
            reject(error);
        }
    });

    promise.then((message) => {
        result.innerText = message;
        result.classList.add('animated');
        document.body.style.backgroundColor = "green";

    }).catch((error) => {
        result.innerHTML = error.message;
        result.classList.add('animated');
        document.body.style.backgroundColor = "pink";

    }).finally(() => {
        num = Math.floor(Math.random() * 10) + 1;
    });
});


