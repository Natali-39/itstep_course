import $ from 'jquery';
import '../scss/index.scss';

let conn = new XMLHttpRequest();

conn.onerror = function(){
    console.log('не могу соедениться с целевым сервером');
}

conn.onload = function(){
    if(this.status !== 200) {
        console.log(`Получен статус ответа ${this.status} Ошибка`);
        return;
    }

    renderBeerCard(this.response);
}

setInterval(() => {
    conn.open('GET', 'https://punkapi.online/v3/beers/random');
    conn.responseType = 'json'; //если точно знаем что получим текстовое значение JSON
    conn.send();
}, 5000)

function renderBeerCard(beer) {
    document.body.innerHTML = `<img style="width:200px" src="https://punkapi.online/v3/images/${beer.image}" alt="${beer.name}"/> <p>${beer.name}</p>`;
    
    //document.body.innerText = `https://punkapi.online/v3/${beer.name}`;
    
}