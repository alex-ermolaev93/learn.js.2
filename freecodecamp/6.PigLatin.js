function transLatePigLatin(str) {
  // создаю переменную для использования пустая строка, 
  var pigLatin = '';
  // подходящее регулярное выражение переменной 
  var regex = /[aeiou]/gi;
  // проверкак на регистр первого символа 
  if(str[0].match(regex)){
    pigLatin = str + 'way';
  // проверка на согласные
  }else if (str.match(regex) === null){
    pigLatin = str + 'ay';
  } else {
  // найти согласные перед гласными 
    var vowelIn = str.indexOf(str.match(regex)[0]);
  // строка от первого гласного до последнего символа. добавить согласные которык были пропущены + окончаник
    pigLatin = str.substr(vowelIn) + str.substr(0, vowelIn) + 'ay';
  }
  return pigLatin;

}
  
