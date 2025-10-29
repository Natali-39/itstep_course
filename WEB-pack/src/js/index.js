import _ from 'lodash';
//import showAlert from './alert';
import '../scss/index.scss';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); // _функция lodash
  
    return element;
}
  
document.body.appendChild(component())

// в package.json удалить type