function addClass(obj, cls){
  var classes = obj.className ? obj.className.split(' '):[ ];
  // переделываем из массива в объект
  for ( var i = 0; i< classes.length; i++) {
    if( classes[i] == cls ) return;
  // проверка на наличие существующих элементов в классе и возвращаем его
  }
  classes.push(cls); 
  // добовляем новые элементы

obj.className = classes.join(' ');
}
  // обновляем свойства и возвращаем в массив 


var obj = {
  className: 'open menu'
}
//



//

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
console.log( obj.className ); // "open menu new me"