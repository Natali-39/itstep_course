import $ from 'jquery';
const bcColors = ['black', 'red', 'yellow', 'pink', 'purple', 'green'];

function changeBgColor(){
    const rand = () => {
        return Math.floor(Math.random() * (bcColors.length -1));
    }

    $('[data-colored]').each(function(){
        $(this).css('backgroundColor', bcColors[rand()]);
    });
}

setInterval(changeBgColor, 3000);
