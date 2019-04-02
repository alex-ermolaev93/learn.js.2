// forEach   'arr.forEach(callback[, thisArg])' перебор массива по каждому элементу через callback 
var arr = ['1', '2','3'];
arr.forEach(function(item, i, arr){
  console.log(i + ': ' + item + ' (arrey:' + arr + ')');
});

// filter 'arr.filtre(callback[, thisArg])' для фильтрации массива через функцию
// создает новый массив в котором будут фильтрованные элементы
var arr1 = [1, -1, 2, -2, 3];
var positiveArr = arr1.filter(function(number){
  return number > 0;
});
console.log( positiveArr );

// map 'arr.map(callback[, thisArg]) используется для трансформации массива 
// в новом массив будет из результатов 
var names = [ 'HTML','CSS','JS'];
var nameLengths = names.map(function(name){
  return name.length;
});
console.log( nameLengths );

//every 'arr.every(callback [, thisArg])' true для каждого элемента
//some  'arr.some(callback [, thisArg])' true для какого небудь элемента

var arr3 = [1, -1, 2, -2, 3];
function isPositive(number) {
  return number > 0;
}
console.log( arr.every(isPositive) );
console.log( arr.some(isPositive) );

// reduce/reduceRight используется для последовательной обоработки элементов в массиве  
// с сохранением промежуточного результата
var arr4 = [1, 2, 3, 4, 5];
var result = arr4.reduce(function(sum, current){
  return sum + current;
} , 0);
console.log( result );
 