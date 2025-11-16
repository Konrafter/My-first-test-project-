"use strict"
// konspekt one
// console.log(1);
// let number = 4;
// number = 10.5;
// const TestConst = 13;
// console.log(number);
// console.log(TestConst);
// console.log(-4/0);
// console.log('eight'*8);

// const testname = 'Name';
// console.log(testname);
// const text = '5';
// console.log(text);
// const bool = true;
// console.log(bool);
// // console.log(null); - variable not declared(необъявленная переменная и есть null);
// let testUndefined;
// console.log(testUndefined);
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }
// console.log(obj.name);
// // working
// console.log(obj['name']); 

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c'
// }

// arrObj.b = '1234';
// // or arrObj['b'] = '1234';
// let c = 'c';
// arrObj[c]= '4321';
// console.log(arrObj['b']);
// console.log(arrObj.b);
// console.log(arrObj.c);

// konspect two
// alert('Hello world');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('18?', "18");
// const answer = prompt('18?', ""); if IE from windows
// console.log(answer);
// console.log(typeof(answer));
//type is string!
//const answer = +prompt('18?', "18"); - number!
//string+string=stringstring

// const answers =[];
// answers[0] = prompt('Whats your name?', '');
// answers[1] = prompt('Whats your lastname?', '');
// answers[2] = prompt('Ages?', '');

// document.write(answers); // no use in real project
// alert confirm and prompt
// typeof(null) = object

// interpolation
// const category = 'toys';
// console.log('https://someurl.com/' + category + '/' + '5');
// console.log(`https://someurl.com/${category}/5`);
// const user = 'Ivan';
// alert(`Hello, ${user}`);

//konspect 3
// console.log(4 + '5'); //string
// console.log(4 + +'5'); //number

// let incr = 10,
//     decr = 10;

// incr++; //postfix
// decr--; //postfix

// ++incr; //prefix
// --decr; //prefix

// console.log(incr++); //posfix - old value on start moment, 
// console.log(--decr); //prefix - new value on start moment

// console.log(5%2); //like mod

// console.log(2*4 == '8'); //regular
// console.log(2*4 === '8'); //stronger!
// console.log(2 + 2 * 2 != 8); // RIGHT PRIORITY!!!
// console.log(2 + 2 * 2 !== '6'); // Stronger!!!

//&& - logic and
//|| - logic or
//! - logic not

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || !isClose);
// git init, git add -A, git commit -a -m"second" 
// const a = 5;
// console.log(a);

// ZADANIE ONE
// let numberOfFilms = prompt('How much you watching films?', "1");
// console.log(numberOfFilms);

// let numberOfFilms = 18;
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// console.log(personalMovieDB.privat);
// console.log(typeof(personalMovieDB.privat));
// console.log(numberOfFilms);
// personalMovieDB['movies['lastfilm']'] = prompt('What your lastfilm?', 'Drive');
// personalMovieDB['movies['filmRating']'] = prompt('What you rating of this film?', '5');
// console.log(personalMovieDB.movies);
// const lastfilm1 = prompt('What your lastfilm?', 'Drive');
// const filmRating1 = prompt('What you rating of this film?', '5');
// const lastfilm2 = prompt('What your lastfilm?', 'Drive');
// const filmRating2 = prompt('What you rating of this film?', '5');
// personalMovieDB.movies[lastfilm1] = filmRating1;
// personalMovieDB.movies[lastfilm2] = filmRating2;
// console.log(personalMovieDB);

// if (4 == 4) {
//     console.log('Ok');
// } else {
//     console.log('notOK');
// }

// if (1) {   //TRUE!!!
//     console.log('Ok');
// } else {
//     console.log('notOK');
// }

// if (0) {   //NO!
//     console.log('Ok');
// } else {
//     console.log('notOK');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('ok') : console.log('error'); // Это тернарный аргумент
// // Аргументы бывают тернарные, бинарные и унарные

// switch (num) {
//     case 49:
//         console.log('NO');
//         break;
//     case 100:
//         console.log('NO');
//         break;
//     case 50:
//         console.log('YES!');
//         break;
//     default:
//         console.log('Error');
//     break;
// }

// && (И) запинается на лжи, а ||(ИЛИ) запинается на правде!

// console.log(1 && "");

// let num = 50;

// while (num < 60) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 60);

// for (let i = 1; i < 8; i++) {
//     if (i === 5) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }
// let result = '';
// let lenght = 7;
// for (let i=1; i< lenght; i++) {
// result = result + '*';
// console.log(result);
// };
// let result = '';
// let lenght = 7;
// for (let i=1; i< lenght; i++) {
//     for (let j=0; j<i; j++){
//         result += '*';
//     }
// result += '\n';
// };
// console.log(result);

//METKA!!!!!!!!!!!
// first: for (let i=1; i < 4; i++) {
//     console.log(`1 - ${i}`);
//     for (let j=1; j < 4; j++) {
//         console.log(`2 - ${j}`);
//         for (let k=1; k < 4; k++) {
//             if (k === 3) continue first; 
//             console.log(`3 - ${k}`);
//         }
//     }
// }
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// ZADANIE ONE
// let numberOfFilms = prompt('How much you watching films?', "1");
// console.log(numberOfFilms);

// let numberOfFilms = 18;
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// console.log(personalMovieDB.privat);
// console.log(typeof(personalMovieDB.privat));
// console.log(numberOfFilms);
// personalMovieDB['movies['lastfilm']'] = prompt('What your lastfilm?', 'Drive');
// personalMovieDB['movies['filmRating']'] = prompt('What you rating of this film?', '5');
// console.log(personalMovieDB.movies);
// const lastfilm1 = prompt('What your lastfilm?', 'Drive');
// const filmRating1 = prompt('What you rating of this film?', '5');
// const lastfilm2 = prompt('What your lastfilm?', 'Drive');
// const filmRating2 = prompt('What you rating of this film?', '5');
// personalMovieDB.movies[lastfilm1] = filmRating1;
// personalMovieDB.movies[lastfilm2] = filmRating2;
// console.log(personalMovieDB);
// a.lenght - сколько символов
// function showFirstMessage() {
//     console.log('Hello world!');
// }
// showFirstMessage();
// let ZAMIKANIE = 1
// for (ZAMIKANIE = 1; ZAMIKANIE < 8; ZAMIKANIE++){
//     console.log(calcPlusZamikanie(0, 0));
// }

// function calcPlusZamikanie(a, b) {
//     return(a + b + ZAMIKANIE);
// }
// console.log(calcPlusZamikanie(0, 0));


// function ret() {
//     let n = 50;
//     return n;
// }
// const numFromFunction = ret();
// console.log(numFromFunction);

//Function Declaration!
//Function Expression!

// let logger = function(){
//     console.log('Hello World!');
// };

// logger();

// const calc = (a, b) => a + b;
// console.log(calc(1, 2));
// const calc = a => {
//     a++;
//     console.log(a);
// }
// calc(1);

// return заканчивает функцию даже если находится внутри цикла, который находится внутри функции
// undifined в браузере - по причине того, что функция - всегда возвращает что-то. и в случае например с console.log тут возвращается
// undifined, как и после функции function() {} без аргументов

//ZADANIE 1-2 AUTOR COPY

let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из нескольких просмотренных фильмов', ''),
              b = prompt('На сколько оцените его?','');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB['privat'] == false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();