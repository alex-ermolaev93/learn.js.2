// var dom = { a:1, b:2 };
// var  dom1 = dom;
//   dom.a = 3;
// console.log( dom );
// console.log( dom1 );


// var str1 = 'str1' ;
// var  str2 = str1; 
//     str1 = 'str3' ;

// console.log( str1,'str1' );
// console.log( str2,'str2' );

var arr = [];

console.log( arr.length );

arr.push('1','2','3');
arr.unshift('0');


var arr2 = arr.map( myFunction );
function myFunction( value ){
  value = +value + 2;
  return value;
}


console.log( arr2 );


// var arr3 = arr2.filter( deadLine );
// function deadLine( value ) {
//   return value >= 3;
//   }
//   console.log( arr3 );
