let message = document.createElement('span');
let frame = document.querySelector('.frame');

/*function load(){
    return new Promise (function(resolve, reject){
        let m = 7;
    
        setTimeout(() => {
            if(m < 5) {
                resolve('данные загружены успешно');
            } else {
                let error = new Error('ошибка загрузки данных');
                reject(error);
            }
        }, 5000);
    });
}*/

async function load() {
    let m = 2;

    if(m < 5) {
        return "данные загружены успешно";
    } else {
        let error = new Error('ошибка загрузки данных');
        throw error;
    }
}

/*setTimeout(() => {
        //let promise = load();
    load().then((result) => {
        message.innerText = result;
        frame.append(message);

    }).catch((error) => {
        message.innerHTML = error.message;
        frame.append(message);

    }).finally(() => {
        document.querySelector('.load').remove();
    });
}, 5000);*/


/*ПРИМЕР
async function rand(){
    return Math.random();
}

rand().then((result) => {console.log(result)});*/

setTimeout(async () => {
    try {
        message.innerText = await load();
    } catch(error) {
        message.innerHTML = error.message;
    } finally {
        frame.append(message);
        document.querySelector('.load').remove();
    }
}, 3000);