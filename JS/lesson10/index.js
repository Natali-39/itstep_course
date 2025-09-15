let a = document.createElement("a");
a.href = "https://google.com";
a.innerText = "Это ссылка на Google";

let a1 = document.createElement("a");
a1.href = "https://ya.ru";
a1.innerText = "Это ссылка на Яндекс";
a.classList.add("no-decoration"); //стилизация 
a.style.color = "red"; //можно и так стилизовать

let div = document.querySelector("#root");

// 1ый элемент
div.append(a); //вставляет элемент перед закрывающим тегом

//2ой элемент
div.prepend(a1); //вставляет элемент после открывающего тегом

//3ий вариант
div.before(a); // вставляет перед открывающим тегом

//4ый вариант
div.after(a1); //после закрывающего тега

let texts = [`Пункт 1`,`Пункт 2`,`Пункт 3`,`Пункт 4` ];

let ul = document.createElement("ul");

/*let li = document.createElement("li");
li.innerText = texts[0];
ul.append(li);

let li1 = document.createElement("li");
li1.innerText = texts[0];
ul.append(li1);*/  //как ВАРИАНТ - ДОЛГИЙ

/*for(let text of texts){

}*/ //как вариант

//применяет переданную функцию каждому элемту массива
texts.forEach(function(elem){
    let li = document.createElement("li");
    li.innerText = elem;
    ul.append(li);
});

div.append(ul);

//удаление элемента
a1.remove();

//вставить код
let h1 = "<h1>это заголовок</h1>";

div.textContent = h1;

//div.innerHTML = h1; - затирает предыдущие добавления

//div.insertAdjacentHTML("afterbegin",h1); //вставляет элемент после открывающего тегом
//div.insertAdjacentHTML("afterend",h1);  //после закрывающего тега
//div.insertAdjacentHTML("beforebegin",h1); // вставляет перед открывающим тегом
// div.insertAdjacentHTML("beforeend",h1); //вставляет элемент перед закрывающим тегом



