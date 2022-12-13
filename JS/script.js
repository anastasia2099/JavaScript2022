"use script";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

//интерполяция
const category = 'toys';
console.log(`https://someurl.com/${category}`/4);

const user = 'Ivan';
alert(`Hello, ${user}`);

//program

const numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//const a = prompt ('Какие фильмы вы смотрели?',''),
  //    b = prompt ('как вы оцените фильмы?',''),
   //   c = prompt ('Какие фильмы вы смотрели?',''),
   //   d = prompt ('как вы оцените фильмы?','');

//personalMovieDb.movies[a]=b;
//personalMovieDb.movies[c]=d;

for (let i = 0; i < 2; i++) {
    const a = prompt ('Какие фильмы вы смотрели?','');
          b = prompt ('как вы оцените фильмы?','');
if (a != null && b != null && a !='' && b != '' && a.length < 50){
    personalMovieDb.movies[a]=b;
    console.log('done');
} else {
    console.log('errpr');
    i--;
}
if (personalMovieDb.count < 10){
    console.log('Little');
} else if (personalMovieDb.count > 10 && personalMovieDb.count <30){
    console.log('Yes');
} if (personalMovieDb.count<30){
    console.log('Cinema');
}

    
};
console.log(personalMovieDb);

//условия
if ( 4 == 9){
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49){
    console.log("Error");
} else if (num == 100) {
    console.log("Much");
} else {
    console.log("OK");
}

//тернальный оператор
(num ===50) ? console.log("OK") : console.log("Error");

const x = 150;
switch (x){
    case 149:
        console.log("No");
        break;
    case 100:
        console.log("No2");
        break;
    case 150:
        console.log("Yes");
        break;
    default:
        console.log("no no no");
        break;
}


function guessNumber (num){
    
if (num ==42){
    console.log('ok') ;
} else {
    console.log('error');
}
}


//циклы

let nast = 50;
while (nast < 55){
    console.log(nast);
    nast++;
}

do {
    console.log(nast);
    nast++;
}
while (nast<55);


for (let i = 1; i < 8; i++){
    console.log(nast);
    nast++;
}

let artem = [1,4,6,3,5,23,65];
for (let i = 0; i < 8; i++){
    if (artem[i] % 2 === 0) {
console.log(artem[i]);
    }

}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Who are you? ', name => {
    console.log(`Hey there ${name}`);
    readline.close();
  });2


  //функции

  function showFirst(text){
    console.log(text);
  }
  //вызвать функцию:
  showFirst('hello');

  //локальная переменная - внутри функции (невозможно вызвать за пределами функции);
 // function showFirst(text){
    //console.log(text);
    //let nimbr = 20;
 // }
  //глобальная переменная - за пределами функции
//let nimnbr = 20;
  //function showFirst(text){
   // console.log(text);
   // nimbr = 20;
 // }
 showFirst('hello');
console.log(nimbr);


function calc (a, b) {
    return a + b;
}
console.log(calc(4, 8));
console.log(calc(9, 1));
console.log(calc(413, 1));


function ret () {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//
const logger = function (){
    console.log('hello');
}
logger();

//стрелочная функция - не имеет конктекст вызова
const colc = (c , d) =>  c + d;


//методы


const str = "test";
console.log(str.toLocaleUpperCase());  //изменение регистра
console.log(str);

const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));  //поиск подстроки

const logg = "Hello world";
console.log(logg.slice(6,11));  //вырезать со строки
console.log(logg.substring(6,11));
console.log(logg.substr(6,5));  //сколько символов вырезать

const nim = 12.4;
console.log(Math.round(nim));  //окргуление
  

//callback функции - функция которая должна быть выполнена после того как другаю функция завершила свое выполнение

function learnJS(lang, callback){
    console.log(`I learn: ${lang}`);
    callback();
}
learnJS('JavaScript', function() {
    console.log('I finiched this lesson');
});


//массивы и пседводмассивы

const mass = [1, 2, 9, 89];

mass.pop(); //метод который убирает последние значение
mass.push(66); //метод который добавляет последние значение

//перебрать каждый елемент массива
//1
for(let i = 0; i < mass.length; i++){
    console.log(mass[i]);
}
//2 работает только с масивами
for (let value of mass) {
    console.log(value);
}
//сортировка
mass.sort(compareNum);

function compareNum(a, b){
    return a - b;
}
console.log(mass);

//вывести в консоль пользователей возраст которых больше 18-ти лет
const people = [
    {name: "anastasia", age: "20", budget: "3444"},
    {name: "aleks", age: "17", budget: "32444"},
    {name: "masha", age: "38", budget: "324442"},
    {name: "vasya", age: "15", budget: "132444"}
];
//с помощью цикла
const age = [];
for (let i = 0; i < people.length; i++ ){
    if (people[i].age >= 18) {
        age.push(people[i])
    }
};
console.log(age);
//с помощью метода Filter
const ages = people.filter(person => {
    if (person.age >= 18)
    return true;
});

//посчитать общую сумму елемена массива бюджет
//с помощью цикла
const amount = 0;
for (let i = 0; i < people.length; i++){
    amount += people[i].budget;
};
console.log(amount);
//c помощью метода Reduce 
const amounts = people.reduce((total, person) => {
    return total + person.budget;
}, 0);
/удалить из елемента массива и вернуть его в переменную
let arr = ['Vanya', 'Ischtvan', 'Olya'];
let remove = arr.splice(1,1);
console.log(remove);

//сделать из строки массив
let str = 'Vanya, Masha, Sasha';
let arr = str.split(',');
console.log(arr);
//сделать из массива строку с помощью join

let arr = [2, 5, 3, 9];
//let result;
for( let i = 0; i < arr.length; ++i){
  if (i < arr.length - 1) {
    console.log (arr[i]*2);
  }
}

console.log(result);

//объекты

//перебрать объект с помощью for in
let users = {
    name: 'Bill',
    age: '28',
    state: 'M'
};
Object.values(users);  //возвращает массив значаний
Object.keys(users); // возвращает массив ключей
Object.entries(users);  //возвращает массив из массива значаний и ключей


//ооп


