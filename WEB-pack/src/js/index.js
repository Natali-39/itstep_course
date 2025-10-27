const _ = require('lodash');
const $ = require('jquery');
const alertModule = require('./alert.js');

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); // _функция lodash
  
    return element;
}
  
document.body.appendChild(component());

//$(`body`).css({backgroundColor: "pink"});
alertModule.myFunction(`this is alert`);