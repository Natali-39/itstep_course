class Element {
    constructor (elementName) {
        this.name = elementName;
        this.classes = [];
        this.id = null;
        this.children = [];
        this.css = {};
    }
    setId(id){
        this.id = id;
    }

    addClasses(...classes){
        /*for( let c of classes){
            this.classes.push(c);
        }*/

        //2ой вариант
        this.classes = [...this.classes, ...classes];
    }
    
    removeClasses(...classes){
        for(let c of classes){
            let index = this.classes.indexOf(c);

            if(index != -1){
                this.classes.splice(index, 1);
            }
        }
    }

    addStyles(styles){
        Object.assign(this.css, styles);
    }

    deleteStyles(...styles){
        for(let key of styles) {
            delete this.css [key];
        }
    }

    appendChilds(...childs){
        for(let c of childs){
            this.children.push(c);
        }
    }

    createDomElement(){
        let el = document.createElement(this.name);

        if(this.id){
            el.id = this.id;
        }

        for(let c of this.classes){
            el.classList.add(c);
        }

        for(let key in this.css){
            //let styleName = key;
            //let styleValue = this.css[key];

            //el.style[styleName] = styleValue;
            el.style[key] = this.css[key];
        }

        //el.style.border = "1px solid black"; - тоже самое ниже
        //el.style['border'] = "1px solid black"

        for(let child of this.children){
            el.append(child.createDomElement());
        }

        return el;
    }

    
}

export default Element;