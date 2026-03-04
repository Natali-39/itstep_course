/// <reference path = "../../global.d.ts" />
import {createRoot} from 'react-dom/client';
import Table from './components/Table';

const tableElement: HTMLElement = document.getElementById("table");

const root: any = createRoot(tableElement);

const products: Array<Product> = [
    {id: 1, name: "Товар 1", count: 25, price: 259},
    {id: 2, name: "Товар 2", count: 5, price: 285},
    {id: 3, name: "Товар 3", count: 4, price: 26},
    {id: 4, name: "Товар 4", count: 21, price: 254},
    {id: 5, name: "Товар 5", count: 11, price: 751},
    {id: 6, name: "Товар 6", count: 9, price: 463},
    {id: 7, name: "Товар 7", count: 3, price: 29},
    {id: 8, name: "Товар 8", count: 2, price: 156},
    {id: 9, name: "Товар 9", count: 8, price: 111},
    {id: 10, name: "Товар 10", count: 3, price: 357},
    {id: 11, name: "Товар 11", count: 9, price: 852},
    {id: 12, name: "Товар 12", count: 13, price: 741},
    {id: 13, name: "Товар 13", count: 4, price: 963},
    {id: 14, name: "Товар 14", count: 2, price: 456},
    {id: 15, name: "Товар 15", count: 16, price: 123},
    {id: 16, name: "Товар 16", count: 2, price: 789},
    {id: 17, name: "Товар 17", count: 9, price: 85},
    {id: 18, name: "Товар 18", count: 18, price: 951},
    {id: 19, name: "Товар 19", count: 22, price: 84},
    {id: 20, name: "Товар 20", count: 1, price: 96}
];

root.render(<Table products={products} />);