let m = new Map();

m.set("1", "str1").set(1, "num1");

let o = {
    prop: "Prop",
    name: "Name",
    age: 25

}

m.set(o, "hvbgjhgbuk");

for(let key of Object.entries(o)){
    // console.log(key);
    //['prop', 'Prop']
    
    let [keyName, keyValue] = key; 
    //    ===
    /*let keyName = key[0];
    let keyValue = key[1];*/


    console.log(keyName);
    console.log(keyValue);
}



// SET

let arr = ["1", "1", "3", "4"];
console.log(arr);

let set = new Set(arr);
console.log(set);
set.add("1");
set.add("123");
console.log(set);




// любят на собесах 
//ЧТО ТАКОЕ ЗАМЫКАНИЕ (тема: облости видимости переменных) ЭТО - Переменная обновляется в том лексическом окружении, в котором она существует.

function makeCounter() {
    let count = 0;
  
    return function() {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter());
console.log(counter());





/*class User{
    constructor(){
        this.name = null;
        this.age = 0;
    }
}

let user1 = new User();
user1.name = "Ivan";
user1.age= 34;*/
//    ====
function User(){
    this.name = null;
    this.age = 0;
    this.showName = function(){
        console.log(this.name);
    }
}

let user1 = new User();
user1.showName();