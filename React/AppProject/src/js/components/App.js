import Main from '../CatalogProduct/Main';
import NotFound from '../CatalogProduct/NotFound';
import Catalog from '../CatalogProduct/Catalog';
import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';

function App() {

    return(
        <>
            <Header headerText={"Добавить товар:"}/>

            <Input placeholder="Наименование товара" onChange={(event) => console.log(event.target.value)} />
            <Input placeholder="Краткое описание" onChange={(event) => console.log(event.target.value)} />
            <Input placeholder="Ссылка на изображение" onChange={(event) => console.log(event.target.value)} />
            <Input placeholder="Цена BYN" onChange={(event) => console.log(event.target.value)} />
            <Input placeholder="Цена со скидкой BYN" onChange={(event) => console.log(event.target.value)} />
            <Button btnClass = "btn" />
        </>
    );
}


export default App;