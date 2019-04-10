function whatIsInName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        // фитр массива 
        for (var i = 0; i < srcKeys.length; i++) {
            // перебор каждого элемента
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                // if проверка на ключ из коллекции у объекта
                return false;
            }
        }
        return true;
    });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));