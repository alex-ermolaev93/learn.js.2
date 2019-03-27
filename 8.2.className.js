function addClass( obj, name ) {
    obj.className = name;
    }
    var obj ={
        className: 'open menu'
    }
    addClass( obj, 'new' );
    console.log( obj ); 
    addClass( obj, 'open' );
    console.log( obj ); 
    addClass( obj, 'me' );
    console.log( obj ); 