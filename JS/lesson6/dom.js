class HTMLElement {
    constructor (name) {
        this.name = name;
        this.id = null;
        this.style = {};
        this.classList = {
            classes: [], 
            add: function(...classNames) {
                for(let className of classNames) {
                this.classes.push(className);
                }
            },
            delete: function(...classNames) {
                for(let className of classNames){
                    let index = this.classes.indexOf(className); // если с 0 - ничего не пишем, либо указываем с какого числа вторым параметром

                    if(index > -1){
                        this.classes.splice(index, 1);
                    }
                }
            }  
        }; 
    }

    addStyle(name, value){
        this.style[name] = value;
    }

    getStylesList() {
        // проходит по всем ключам
        let styles = ``;

        for(let key of Object.keys(this.style)) {
            let styleName = key;
            let styleValue = this.style[key];

            let styleString = `${styleName}:${styleValue};`;

            styles += styleString;
        }

        return styles ? ` style="${styles}"` : ``;
    }

    getClassList() {
        return this.classList.classes.length > 0? ` class = "${this.classList.classes.join(` `)}"` : ``;
    }

    renderHTML() {
        return `<${this.name}${this.getClassList()}${this.getStylesList()}></${this.name}>`;
    }

    drawHTML() {
        document.body.insertAdjacentHTML(`afterbegin`, this.renderHTML());
    }
}

// наследование класса (только одиночное поддерживается)
class HTMLHrefElement extends HTMLElement {
    /*constructor (name) {
        this.name = name;
        this.id = null;
        this.style = [];
        this.classList = {};
        }*/
        constructor(href) {
            super(`a`);
            this.href = ``;
        }
}


const div = new HTMLElement (`div`);

div.id = `block`;
div.classList.add(`container`, `color`, `main-section`);

div.classList.delete(`class1`, `class2`, `class3`);
div.classList.delete(`superclass`);

// console.log(div.renderHTML());
div.classList.delete(`color`);

div.addStyle(`height`, `100vh`);
div.addStyle(`background-color`, `purple`);

console.log(div);

div.drawHTML();


const a = new HTMLHrefElement (`https://google.com`);
a.id = `external_link`;

console.log(a.renderHTML());
