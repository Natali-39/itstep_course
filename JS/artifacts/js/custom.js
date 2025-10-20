let totalPages = 0;
let currentPageIndex = 1;

function setSliderPagination() {
    $(`#slider-pagination`).html(`${currentPageIndex} из ${totalPages}`);
}

$(document).ready(function(){
    let options = {
        items: 4,
        margin: 30,
        dots: false,
        slideBy: 4,
    }

    let owl = $('.owl-carousel');
    owl.owlCarousel(options);

    $(`#slider-left`).click(function(){
        owl.trigger('prev.owl.carousel');

        if(currentPageIndex > 1) {
            currentPageIndex--
        }

        setSliderPagination();
    });

    $(`#slider-right`).click(function(){
        owl.trigger('next.owl.carousel');

        if(currentPageIndex < totalPages) {
            currentPageIndex++;
        }

        setSliderPagination();
    });

    let totalCards = $(`.owl-item`).length;

    totalPages = Math.ceil(totalCards / options.items);

    setSliderPagination()

   // $("#form-login").validate();

   const loginForm = document.querySelector('#form-login');

   if(loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!this.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            this.classList.add('was-validated');
        });
   }
});

function validate(){
    let isValid = true;

    let form = document.forms[0];
    let name = form.elements[0];
    let email = form.elements[1];

    //let str = "hi! my name is Natali.";
    //let regax = /\sNatali/; //\s - пробельный симвал
    //let regax = /\d{2,}/; // симвал цифр {кол-во цифр ,-означает диапозон}

    let name_regax = /^[A-Za-zА-Яа-я]{2,20}\s*[A-Za-zА-Яа-я]{0,20}$/;

    let email_regax = /^[a-zA-Z_\-0-9]+@[a-zA-Z_\-0-9]+\.[a-z]{2,3}$/;

    name.classList.remove(`is-invalid`);
    if(!name_regax.test(name.value)) {
        name.classList.add(`is-invalid`);
        isValid = false;
    }
// второй вариант

    if(!email_regax.test(email.value)) {
        email.classList.add(`is-invalid`);
        isValid = false;
    }else {
        email.classList.remove(`is-invalid`);
    }

    return isValid;
}

