let time = new Date("2026-02-17");
time = new Date(2026, 1, 17, 13, 29, 45);

let months = ["Январь", "февраль", "март", "апрель"];

console.dir(months[time.getMonth(1)]);

console.log(time.setFullYear(2027));
console.log(time);

for(let i = 0; i < 10; i++){
    let day = time.getDate();
    day++;
    time.setDate(day);
    console.log(time);
}

console.log(Date.now());