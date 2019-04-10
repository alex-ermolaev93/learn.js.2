function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = sfter.charArt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(befor, after); 3
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));