var names = 'Alex, Gerald, Kyoko, Rin';
var arr = names.split(', ',3 );
for( var i = 0; i < arr.length; i++ ) {
    console.log( 'new message ' + arr[i] );
}