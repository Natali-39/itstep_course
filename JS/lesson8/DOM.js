/*console.log(window);

function my_super_function(){
    console.log(`версия браузера ${window.navigator.appVersion}`)
    for(let plugin of window.navigator.plugins) {
        console.log(`плагин ${plugin.name}`);
    }
}

my_super_function();*/

/*let url = prompt(`введите url`);

if(confirm(`вы действительно хотите перейти по адресу ${url}?`)) {
    window.location.href = url;
}*/


// setInterval(function(){location.reload()}, 5000);

console.dir(document);

document.body.style.backgroundColor=`white`;
console.log(document.title);

// первый вариант
/*let html = document.children[0];
let body = html.children[1];
let h1 = body.children[0];
let text = h1.innerText;*/

// второй вариант
/*let text = document.children[0].children[1].children[0].innerText;

console.log(text);*/

/*let html = document.children[0];
let body = html.children[1];
let a = body.children[1];
let url = a.href;

console.dir(a);

window.location.href = url;*/


// ЗАДАЧА
/*Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?*/

// TASK 1
let html = document.children[0];
let body = html.children[1];
let div = body.children[0];

console.dir(div);

// TASK 2
/*let html = document.children[0];
let body = html.children[1];
let ul = body.children[1];

console.dir(ul);*/

// TASK 3
/*let html = document.children[0];
let body = html.children[1];
let ul = body.children[1];
let liPit = ul.children[1];

console.dir(liPit);*/


/*console.dir(document.body.children[2]);

let table = document.body.children[2]

for(let row of table.rows) {
    console.log(row.cells[0].innerText);
}*/

let table = document.body.children[3];
console.dir(table);

for(let i = 0; i < table.rows.length; i++) {
    // console.log(table.rows[i]);
    let row = table.rows[i];

    /*if(i == 0) {
        table.rows[0].style.backgroundColor = "violet";
    }*/

    for(let j = 0; j < row.cells.length; j++) {

        // table.rows[2].cells[j].style.backgroundColor = "violet";

        if(j == i) {
            table.rows[i].cells[j].style.backgroundColor = "green";
            table.rows[i].cells[j].style.color = "white";
            // table.rows[0].cells[j].style.backgroundColor = "violet";
            console.log(table.rows[i].cells[j]);

            table.rows[i].cells[j].textContent = "hi";
            

        }
    }
}

