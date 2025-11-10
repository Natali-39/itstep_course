import $ from 'jquery';
import '../scss/index.scss';

import products from './products.js';


const catalog = JSON.parse(products);

const products_list = $('#catalog');

window.add_to_cart = function(product_id) {
    console.log(catalog);
} //для модулей глобальной видимости window виден везде

catalog.forEach((product) => {
    let product_html = `<div class="col-4">
                            <div class="card mb-3">
                                <img src="${product.image}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">${product.description}</p>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary">Подробней</button>
                                        <button type="button" class="btn btn-primary" onclick="add_to_cart(${product.id})">В корзину</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    products_list.append(product_html);                    
});

let cart = window.localStorage.getItem('cart');

if(!cart) {
    cart = [];
}

$('#cart-count').html(cart.length);


