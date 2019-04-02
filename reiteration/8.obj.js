var array = ["test", 2, 1.5, false];

function find(array,value) { 
    if (array.indexOf){
        return array.indexOf(value);
    }
    for (var i = 0; i < array.length; i++){
        if ( array[i] == value ) 
        return i;
    }
    return -1;
}
console.log( find( array, "test"));
console.log( find( array, 2));
console.log( find( array, 1.5));
console.log( find( array, 0));


