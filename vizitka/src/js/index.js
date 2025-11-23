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
    margin: "0 auto",
    marginTop: "140px",
});

const firstname = new Element('h1');

firstname.setText('Lion Colorful');

const link = new Element('a');

const img = new ImageElement('img');
img.setSrc('https://polinka.top/uploads/posts/2023-05/1684355252_polinka-top-p-yarkaya-kartinka-dlya-pechati-krasivo-6.jpg');
img.setAlt("This is lion")

img.addStyles({
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

const link1 = new Element('p');
link1.setText('Linkedin: https://ru.linkedin.com/');

const link2 = new Element('p');
link2.setText('GitHub: https://github.com/');


link.appendChilds(img);
el.appendChilds(link);
el.appendChilds(firstname);
el.appendChilds(link1);
el.appendChilds(link2);


document.body.append(el.createDomElement());