/// <reference path = "../../../global.d.ts" />

// import React from "react";
import React, {JSX, useState} from 'react';

const PER_PAGE: number = 5;

export default function Table({products}: {products: Array<Product>}) {
    const createPagesLinks = () => {
        let links = [];

        for(let i: number = 1; i <= pages; i++){
            links.push(i)
        }

        return links;
    }

    const [productsPerPage, setProductsPerPage] = useState(products.slice(0,PER_PAGE));
    const [perPage, setPerPage] = useState(PER_PAGE);
    const [pages, setPages] = useState(Math.round(products.length / PER_PAGE));
    const [pagesLinks, setPagesLinks] = useState(createPagesLinks());

    const getPageProducts = function(event: React.MouseEvent<HTMLButtonElement>) {
        let pageNumber: number = parseInt(event.currentTarget.dataset.page);
        const items: Array<Product> = products.slice((pageNumber - 1) * perPage, pageNumber * perPage);

        setProductsPerPage(items);
    };

    return (
    <table>
        <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
        </thead>
        <tbody>
            {
                (productsPerPage.length > 0) ? productsPerPage.map(function(item) {
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                }) : <tr><td colSpan={4}>Товаров в таблице пока нет</td></tr>
            }
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={4}>{pagesLinks.map(function(link, index){
                    return <button key={index} onClick={getPageProducts} data-page={link}>{link}</button>;
                })}
                    <select>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </td>
            </tr>
        </tfoot>
    </table>
    );
}