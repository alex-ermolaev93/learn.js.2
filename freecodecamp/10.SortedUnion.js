function uniteUnique(arr) {
    var endArr = [];
    // пустрой массив для конечного результата
    for (var i = 0; i < arguments.length; i++) {
        // перебор объекта arguments, и сохранение его в arrArgs
        var arrArgs = arguments[i];
        for (var j = 0; j < arrArgs.length; j++) {
            // для обхода отдельных элементов
            var indexVal = arrArgs[j];
            // проверка конечного массива
            if (endArr.indexOf(indexVal) < 0) {
                endArr.push(indexVal);
            }
        }
    }
    return endArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));