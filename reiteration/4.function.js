// function sayHi() {
//     console.log('hello')
// }
// var func = sayHi;
// func ();


// var age = prompt ('old you?');
// var sayHi;
// if(age>= 18) {
//     sayHi = function sayHi(){
//         alert('you to');
//     } else {
//     sayHi = function sayHi(){
//         alert('>18 can not');
//     }
// }
// sayHi();

// function ask( question, yes, no ) {
//     if( confirm(question)) yes()
//     else no();
// }
// ask(
//     'Do you agree?',
//     function() {alert('you agree!'); },
//     function() { alert('you don\'t agree.') ;}
// );

// function sumTo (n){
//     if(n==1) return 1;
//     return n + sumTo(n-1);
// }
// console.log( sumTo(10000));

// function sumTo ( n ) {
//     var sum = 0;
//     for ( var i = 1; i <= n; i++ ){
//         sum += i;
//     }
//     return sum;
// } 
// console.log( sumTo( 100 ) );

// function sum (n) {
//     var res = 0;
//     for (var i = 1;i < n; i++) {
//         res += i;
//     }
//     return res;
// }
// console.log( sum( 100000 ));

function sum (n) {
    if (n == 1){
    return 1;
    } else {
    return n + sum(n-1);
    }
}
console.log( sum(1000));
