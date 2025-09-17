/*function show1(num1, num2) {
    if(num1 < 0) { // база рекурсии - чтоб не было ложного вызыва
        return;
    }else {
        console.log(`числа ${num1} и ${num2}`);
        show1(num1 - 1, num2 - 1);
    }
}*/

/* function show2(num1, num2) {
    show1(num1, num2);
}

show2(2, 3);

show1(2,3);*/


// 1ый вариант - проще
/*function showNumbers(start, end) {
    for(let i = start; i <= end; i++) {
        console.log(i);
    }
}
showNumbers(0, 10);*/

// 2ой вариант - при помощи рекурсии
/*function showNumbers(start, end) {
    if(start > end){
        return;
    }else {
        console.log(start);
        showNumbers(start + 1, end);
    }
}

showNumbers(0, 10);*/



// СОБЫТИЯ

/*function changeLinkText(event) {
    let a = document.querySelector("a");

    a.innerText = "это ссылка на google";

    console.dir(event);
}

let button = document.querySelector("button");*/


/*button.onclick = changeLinkText; //затерлось значение
button.onclick = function() {
    document.body.style.backgroundColor = `pink`;
}*/

// несколько свойств событию одному
/*button.addEventListener(`click`, changeLinkText);
button.addEventListener(`click`, function() {
    document.body.style.backgroundColor = `pink`;
});//удаление через remove с фун-цией НЕ работает

//button.removeEventListener(`click`, changeLinkText); //удаление eventL...

button.onclick = function(event) {
    console.dir(event.target);
    // alert(this.innerText);
}
button.onclick = null; //удалить событие из onclick

console.dir(button);*/

// TASK 1, 2
/*let button = document.querySelector('button');

button.addEventListener('click', function() {
    let div = document.getElementById('text');
    div.remove();
});//удалился текст

button.addEventListener('click', function() {
    this.hidden = true;
});//скрылась кнопка*/

const ball = document.querySelector(`.ball`);

function moveBall(event) {
    let clientX = event.clientX;
    let clientY = event.clientY;

    console.dir(ball);

    ball.style.left = clientX - Math.floor(ball.offsetWidth / 2) + "px";
    ball.style.top = clientY - Math.floor(ball.offsetHeight / 2) + "px";
}

document.body.addEventListener(`click`, moveBall);