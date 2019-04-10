function diffArray(arr1, arr2) { // различие двух массивов Intermediate Algorithm Scripting: Diff Two Arrays
  var newArr = [];

  function onlyOne(first, second) {
    //функция обратного вызова.
    //Цикл для поиска элементов, не существующих в другом массиве - "undefined"
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        //Перемещение элементов, уникальных для первого, в newArr
        newArr.push(first[i]);
      }
    }
  }
  onlyOne(arr1, arr2);
  onlyOne(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
