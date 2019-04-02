// var arr = ['live','on the', 'mars' ];

// var arrLength = [];
// for ( var i=0; i< arr.length; i++){
//     arrLength[i] = arr[i].length;
// }
// console.log( arrLength );

var arr = ['live','on the', 'mars' ];
var arrLength = arr.map(function(array){
    return array.length;
});
console.log( arrLength );
