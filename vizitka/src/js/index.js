import Element from './element'
import ImageElement from './image';

const el = new Element('div');

el.setId('block');

el.addClasses("border", "flex");
//el.removeClasses("flex");

el.addStyles({
    width: "200px",
    height: "200px",
    border: "1px solid black",
    backgroundColor: "purple",
});


const link = new Element('a');

const img = new ImageElement('img');
img.setSrc('https://polinka.top/uploads/posts/2023-05/1684355252_polinka-top-p-yarkaya-kartinka-dlya-pechati-krasivo-6.jpg');
img.setAlt("This is lion")
console.log(img);

img.addStyles({
    width: "100%",
    height: "100%",
    objectFit: "cover",
});


link.appendChilds(img);
el.appendChilds(link);

document.body.append(el.createDomElement());