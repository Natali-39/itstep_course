import {useState} from 'raect';

const PER_PAGES = 10;

export default function Table({products}) {
    const [items, setItems] = useState(products.slice(0,9));
    const [pagesCount, setPagesCount]
}