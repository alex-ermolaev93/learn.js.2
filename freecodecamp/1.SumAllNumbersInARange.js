function sumAll(arr) {
  var maxNum = Math.max(arr[0], arr[1]);
  var minNum = Math.min(arr[0], arr[1]);
  var sum = 0;
  for (var i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
console.log(sumAll([1, 4]));


    //Sum All Numbers in a Range