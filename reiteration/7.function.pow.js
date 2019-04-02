function minNumber ( a, b ) {
    if ( a < b ) {
        return a;
    }
    return b;
};

console.log( minNumber( 2, 5 ) );
console.log( minNumber( 3, -1 ) );
console.log( minNumber( 1, 1) );
