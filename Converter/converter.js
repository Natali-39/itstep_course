/*let myHeaders = new Headers();
myHeaders.append("apikey", "oghH3vTSXS1Lv5jCdN7e02NfCkajZfbV");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR%2CRUB%2CBYN", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result));*/ 


let courses = {
    "quotes": {
        "USDBYN": 2.901379,
        "USDEUR": 0.86013,
        "USDRUB": 77.723991
    },
    "sourse": "USD",
    "success": true,
    "timestamp": 1764607028
} 
let inputs = [...document.querySelectorAll()]

let converterCourses = function(inputs, )