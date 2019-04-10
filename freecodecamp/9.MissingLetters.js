function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        // цикл для перебора строк
        var code = str.charCodeAt(i);
        // код вставленного символа
        if (code !== str.charCodeAt(0) + i) {
            // проверка на ожедание символа
            return String.fromCharCode(code - 1);
        }
    }
    // возвращается если в строке нет пропущенных символов
    return undefined;
}
fearNotLetter('abce');

console.log(fearNotLetter());