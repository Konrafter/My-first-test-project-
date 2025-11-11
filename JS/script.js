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
const a = 5;
console.log(a);