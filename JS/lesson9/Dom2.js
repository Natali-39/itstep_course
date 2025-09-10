let ul = document.body.children[2];

console.dir(ul);

ul.firstElementChild.style.textTransform = "uppercase";
ul.lastElementChild.style.color = "blue";

// ul.innerHTML = `<li>this is only one string</li>`;

ul.previousElementSibling.style.fontSize = "20px";

ul.parentElement.id = 'page-body';

console.log(ul.getAttribute(`id`));

// ul.setAttribute(`class`, `superlist`);

ul.classList.add(`normalized`); // добавляет классы
// ul.classList.add(`underlined`);

if(ul.classList.contains(`underlined`)){
    ul.classList.remove(`underlined`); //меняем если есть
}else {
    ul.classList.add(`underlined`); //добавляем если нет
}

ul.classList.toggle(`underlined`); // добавляет класс, если его нет, убирает - если есть


// поиск по DOM
//1ый вариант
let block = document.getElementById(`flexbox`);

block.innerText = "hello from founded block";
block.classList.add(`bordered`, `d-flex`);

let blocks = document.getElementsByClassName(`example`);
block = blocks[0];
block.classList.add(`padding-10`);

blocks = document.getElementsByTagName(`div`);
//2ой вариант, желательный
block = document.querySelector(`.example`);

block.classList.remove(`padding-10`);

blocks = document.querySelectorAll(`.example`);
block = blocks[0];


//стилизовать заголовок
let title =  document.querySelector(`h1`);
title.style.textAlign = `center`;

// найти ссылку и вставить картинку
let link = document.querySelector(`a`);
link.innerHTML = `<img src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg" alt=""/>`

ul = document.querySelector(`#list`);
ul.lastElementChild.style.textAlign = `right`;
ul.children[1].style.textAlign = `center`;
/*2ой способ
let li = document.querySelector(`#list li:nth-child(2)`);
li.style.textAlign = `center`;*/