function unique( arr ){
var obj = {} ;


    for( var i = 0; i < arr.length; i++ ) {
        var key = arr[ i ];
        obj[ key ] = true;
    }

    return Object.keys( obj );
}
var strings = ['div', 'a', 'form', 'h1', 'body'];
console.log( unique( strings ) );