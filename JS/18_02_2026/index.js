//ОПЦИОНАЛЬНАЯ ЦЕПОЧКА

let user = {
    address: {
        street: {}
    }
};

// console.log(user.address ? user.address.street : null);
//или
console.log(user.address?.street?.name);

let html = document.querySelector('.elem').innerHTML;

let users = [ 
    {
        address: {
            street: {
                name: "Ленина"
            }
        }, 
        isAdmin: function(){
            console.log("Я админ")
        }
    },
    {
        address: {}
    }
];

let addressName = "address";

for(let user of users) {
    let street = user?.["address"]?.["street"]?.["name"];

    /*let street = user.address?.street?.name;

    if(street) {
        console.log(street);
    }*/

    if(user.address && user.address.street && user.address.street.name){
        console.log(user.address.street.name);
    }

    user.isAdmin?.();
}