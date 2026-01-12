import Button from "./Button";

function List() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map(product =>
        <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
            {product.title}
        </li>
    );

    return(<ul>{listItems}</ul>);
}


function MainPage() {
    let content = {
        title: 'Main Page',
        text: 'This is about main page'
    }

    return (
        <>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <Button />
            <List/>
        </>
    );
}

export default MainPage;