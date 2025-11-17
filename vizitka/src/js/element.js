class Element {
    constructor (elementName) {
        this.name = elementName;
        this.classes = [];
        this.id = "";
        this.childrens = [];
        this.css = [];
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


    render(parentElement){
        let el = document.createElement(this.name);
        el.id = this.id;

        for(let c of this.classes){
            el.classList.add(c);
        }

        console.dir(el);

        parentElement.append(el);
    }


}

export default Element;