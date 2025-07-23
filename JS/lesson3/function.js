let stepen = 2;

function summ(a, b) {
    let result = (a+b) ** stepen;
    return result;
}
let num1 = 34;
let num2 = 47;
let rr = summ(num1, num2);
console.log(rr);

//task 1
function minNumber(num11, num22) {
    return (num11< num22)? num11:num22;

    /*if (num11 < num22){
        return num11;
    }else {
        return num22;
    }*/
}
console.log(minNumber(5,9));

//task 2
stepen = 9;
function numInStepen(a) {
    let result = a ** stepen;
    return result;
}
console.log(5);