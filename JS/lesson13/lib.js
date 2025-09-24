const calc = {
    summ: function(a,b) {
        console.log(a + b);
        return this;
    },
    sub: function(a,b) {
        console.log(a - b);
        return this;
    },
    mul: function(a,b) {
        console.log(a * b);
        return this;
    },
    div: function(a,b) {
        if(b == 0) {
            console.log(0);
        }else{
        console.log(a / b);
        }
        return this;
    }
}

let r = calc.summ(2,2);

r.div(2,2);
//calc.summ(2,2).div(2,2).sub(3,6); - тоже самое, только по цепочке

console.log(calc.summ(2,2));

/*function $(selector) {
    return document.querySelector(selector);
}*/
