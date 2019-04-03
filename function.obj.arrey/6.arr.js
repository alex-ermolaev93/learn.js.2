//метод split переделывает строку в массив 
var names ='masha, alex, morgan, danya'
var arr = names.split(', ');
for (var i = 0; i< arr.length; i++) {
    console.log('massenge ' + arr[i]);
}
// метод join скеивает из массива в строку
var arr1 = ['mary','dan','fs','weed'];
var str = arr1.join('; ');
console.log(str);

// delete удаление из массива
var arr2 = ['i','love','this','fucking','world'];
delete arr2 [2];
console.log(arr2[2]);

//метод splice удаляет элементы 
// удаляние элементов
var arr3 = ['i','learning','js'];
arr3.splice(1,1);
console.log( arr3 );

// удалить нескольких элементов с заменой
var arr4 = ['i','learning','js'];
arr4.splice(0,2,'i','you','need');
console.log(arr4);




