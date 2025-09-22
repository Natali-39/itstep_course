let div = document.querySelector(`.block`);

div.addEventListener(`click`, function(event) {
    this.style.borderColor = "pink";
    
    if(event.target.tagName.toLowerCase() == `button`) {
        event.target.classList.toggle(`animated`);
    }
})

/*let button = document.querySelector(`button`);
button.addEventListener(`click`, function(event) {
    // event.stopPropagation(); //останавливает обработчик событий
    this.parentElement.style.backgroundColor = "yellow";
})*/