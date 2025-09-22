let button = document.querySelector(`button`);

button.addEventListener(`click`, function(event) {
    let menu = document.querySelector(`nav`);

    menu.classList.toggle(`opened`);
})