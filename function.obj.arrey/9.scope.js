var sum = new Function(' a , b ', ' retune a + b; ');
var a = 1, b = 2;
console.log( sum( a, b ) );


// локальные переменные для объекта 
function makeCounter (){
    var currentCount = 1;
    return function (){
        return currentCount ++;
    };
}
var counter = makeCounter();
console.log( counter( ) );

// возможности для счетчика-объектов

