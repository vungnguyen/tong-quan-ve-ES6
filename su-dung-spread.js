// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1,"NISSAN","TOYOTA"];
//
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

// vi-du-2
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = ["NISSAN","TOYOTA"];
// const cars3 = [...cars1,...cars2];
// console.log(cars3)

// const cars1 = {
//     brand: 'BMW',
//     color: 'RED'
// }
// const cars2 = {...cars1}
// console.log(cars2)

// const cars1 = {
//     Brand : "Toyota",
//     Color : "RED"
// }
// const cars2 = {
//     Brand : "Nissan",
//     Color : "BLUE",
//     Year : 2004
// }
// const  cars3 = {...cars1,...cars2};
// console.log(cars3)

// su dung spread de chia chuoi thanh mang chuoi
// const car = 'AUDI';
// const a = [...car];
// console.log(a)

// su dung spread de cau truc lai mang
const numbers = [1,2,3,5,6,8,9];
const [a,b,c,...others] = numbers;
console.log(a)
console.log(b)
console.log(c)
console.log(others)