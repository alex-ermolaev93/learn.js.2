function pairElement(str) {
  // вернуть каждую прядь как массив из двух элементов, оригинала и пары.
  var pair = [];
  function search(char) {
    // функция для проверки
    switch (char) {
      case 'C': pair.push(['C', 'G']);
        break;
      case 'A': pair.push(['A', 'T']);
        break;
      case 'T': pair.push(['T', 'A']);
        break;
      case 'G': pair.push(['G', 'C']);
        break;
    }
  };
  // цикл для перебора
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return pair;
}

pairElement("GCG");
console.log(pairElement("GCG"));
