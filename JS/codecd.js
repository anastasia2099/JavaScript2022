"use script";
//условия
// let age = 5;

// if (age == 1) {
//     console.log("not ok");
// } else if (age ==5) {
//     console.log("ok");
// } else {
//     console.log("buy");
// }

// //тернарный оператор - используется при легких конструкциях
// (age == 1) ? console.log("not ok") : (age ==5) ? console.log("ok") : console.log("buy");


// //task

// let test = prompt('Number?');

// if (test%2 == 0){
//     alert ('even number');
// } else if (test%2 == 1) {
//     alert ('odd number');
// } else {
//     alert ('goodbuy');
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// };

// const c = prompt ('Введите ваш вес');
// const kg = 1;
// const funt = 2.204;
// const grn = 100;
// const sterling = 2.28;


// let d = (с/funt)*kg;
// let w = d*sterling/grn;

// if (c<5){
//     alert (d*w*3);
// } else if (c>5 && c>10){
//     alert (d*w*5);
// } else if (c>10 && c>15){
//     alert (d*w*10);
// }
// else {
//     alert ('error');
// }

// const inputing = prompt("Введите число больше 100");
// let number = 100;
// while(number){
//     if(number>100){
//         alert ('OK');
//         break;
//     } else if (number<100) {
//         alert('Введите еще раз');
//         continue;
//     }
// }

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// alert( fruits.length );

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles [1] = "Классика";
// styles.shift();
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// function sumInput(){
//   const inputValue = prompt ()
// }


const numberofFillms = +prompt("How much you watch movie?");

const personalMovieDbs = {
  numb: numberofFillms,
  sirials: {},
  actress: {},
  place: [],
  public: false,
};

let lastFolms=0;
//let rates;

do {
 lastFolms = prompt ("какой последний фильм?");
//  rates = prompt ("насколько оцените его?");
//lastFolms++;
 } while (lastFolms++ > 2);