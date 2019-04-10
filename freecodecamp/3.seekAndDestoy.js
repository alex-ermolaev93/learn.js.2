function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    // создаю  массив аргументовб  для  проверки аргументов.
    for (var i = 0; i < arr.length; i++) {
        // for для аргументов заменив i => j, и arr => args. 
        for (var j = 0; j < args.length; j++) {
            // if для строгого равенства, что (arr[i] === args[j]) 
            if (arr[i] === args[j]) {
                // если значение в индекса, равно в обоих массивах удаляем его и за arr
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
    // возвращаем массив для фильтрации любых нулевых ( удаленных объектов )
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));