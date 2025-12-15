import $ from 'jquery';

const url = 'https://catfact.ninja/fact';

function catFacts(){
    $('[data-fact]').each(function(){
        fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            $(this).text(data.fact);
        })
        .catch(error => {
            $(this).text('ошибка при получении фактов');
        });
    });
}

catFacts();

setInterval(catFacts, 5000);