// function sayHi (name) {
//     var str = 'hello, ' + name;
//     console.log( str );
// }
// sayHi('alex');


// var userName ='sgf';
// function sayHi2( ) {
//     console.log(userName);
// }
// sayHi2(userName);
// // функция сначало ищет внутри себя перменную, когда ее там нет, то проверяет снаружи

// //всегода текущее значеник

// var user = 'hello';
// function sayHi3 (name ) {
//     console.log( user + ', ' + name );
// }
// sayHi3( 'alex' );
// user = 'bay';
// sayHi3('alex');
// ///


// // функция вложения 
// function sayHiBay ( firstN, lastN ) {
//     console.log( 'hello, ' + getFullName() );
//     console.log( 'bay, ' + getFullName() );
//     function getFullName () {
//         return firstN + ' ' + lastN;
//     //вспомогательная функция
//     }
// }
// sayHiBay( 'alex', ' yerm');

// // возврат функции 
// function makeCounter (){
//     var currentCount = 1;
//     return function (){
//         return currentCount++;
//     };
// }
// var counter = makeCounter();
// console.log( counter() );


// //свойстава функции

// makeCounter.test = 6;
// console.log(makeCounter.test);


// function makeCounter () {
//     function counter () {
//         return counter.currentCount++;
// }
//         counter.currentCount =6;
//         return counter;
// }
// var counter = makeCounter();
// console.log( counter());
// console.log( counter());
// // замыкание - это функция + все внешние переменные

// [задачи]
// say ('alex');

// function say (name) {
//     var phrase = 'hello';
//     console.log( name + ' ' + phrase );
// }


// var vaiue = 0;
// function f(){
//     if(1) {
//         Value = true;
//     } else {
//     var value = false;
//     }
//     console.log( value );
// }
// f(); //undefined

// function test1 () {
//     console.log( window );
//     var window = 5;
//     console.log( window );
// }
// test1();// undefined   5
// // директива var window обрабатывается до начала кода функции

// var a = 3;
// (function( ) {
//     console.log(a)
// })()

var currentCount =1;
function makeCounter(){
    return function(){
        return currentCount++;
    };
}
var counter = makeCounter();
var counter2 = makeCounter();
console.log( counter( ) );//1
console.log( counter( ) );//2
console.log( counter2( ) );//3
console.log( counter2( ) );//4 будут брать из глобал
