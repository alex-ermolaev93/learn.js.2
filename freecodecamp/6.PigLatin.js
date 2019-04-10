function translatePigLatin(str) {
  // создаю переменную для использования. пустая строка, 
  var pigLatin = '';
  // подходящее регулярное выражение переменной 
  var reg = /[aeiou]+/gi;
  // проверкак на регистр первого символа 
  if (str[0].match(reg)) {
    pigLatin = str + 'way';
    // проверка на согласные
  } else if (str.match(reg) === null) {
    pigLatin = str + 'ay';
  } else {
    // найти согласные перед гласными 
    var vowelIn = str.indexOf(str.match(reg)[0]);
    // строка от первого гласного до последнего символа. 
    // добавить согласные которык были пропущены + окончаник
    pigLatin = str.substr(vowelIn) + str.substr(0, vowelIn) + 'ay';
  }
  return pigLatin;

}
translatePigLatin("consonant");
console.log(translatePigLatin("consonant"));