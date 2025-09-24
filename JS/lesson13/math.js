/*let num1 = 1200;
let num2 = 34;

console.log(calc.div(num1, num2));

let block = $(`.block`);

if(block) {
    block.style.width = `300px`;
    block.style.height = `200px`;
    block.style.backgroundColor = `purple`;
}*/


//JQUERY

/*$(`.block`).html(`<h1>я добавлен при помощи JQUERY</h1>`).css({
    width: `300px`,
    height: `200px`,
    backgroundColor: `pink`, 
})/*.fadeOut(`slow`, function() {
    console.log(`блок исчез`);
});

$(`#hide`).click(function() {

    $(`.block`).slideToggle(1000, () => {
        if ($(this).html() == `скрыть блок`){
            $(this).html(`открыть блок`);
        } else {
            $(this).html(`скрыть блок`);
        }
    });

});*/


/*$(window).on(`load`, function() {
    alert(`вся страница загрузилась`);
});*/

$(document).ready(function() {
    $(`.block`).html(`<h1>я добавлен при помощи JQUERY</h1>`).css({
        width: `300px`,
        height: `200px`,
        backgroundColor: `pink`, 
    })/*.fadeOut(`slow`, function() {
        console.log(`блок исчез`);
    })*/;
    
    $(`#hide`).click(function() {
    
        $(`.block`).slideToggle(1000, () => {
            if ($(this).html() == `скрыть блок`){
                $(this).html(`открыть блок`);
            } else {
                $(this).html(`скрыть блок`);
            }
        });
    }); 

    let a = $("<a href=`https://google.com`></a>");

    a.html(`this is link`);

    $(`body`).append(a); // добавляет ссылку перед закрывающими скобками
    $(`div`).remove(`.block`); //удаляет блок с классом block
});

