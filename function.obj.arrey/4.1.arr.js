// var arr = ['есть', 'жизнь','на','марсе'];
// var arrLength = [];
// for (var i = 0; i < arr.length; i ++ ) {
//     arrLength[i] = arr[i].length;
// }
// console.log( arrLength );


var arr = ['есть', 'жизнь','на','марсе'];
var arrLength = arr.map(function(name){
    return name.length;
// через map создаю функцию с аргументом name
// возвращаю через
});
console.log( arrLength );



// var arr1 = [1,2,3,4,5];
function getSums( arr1 ) {
    var result = [];
    if (!arr.length) return result;
    var totalSum = arr1.reduce(function(sum, item){
        result.push(sum);
        return sum + item; 
    });
    result.push(totalSum);
    return result;
}
console.log(gatSums([1,2,3,4,5]));
