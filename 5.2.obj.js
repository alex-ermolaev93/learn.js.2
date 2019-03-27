    function isEmpty ( obj ) {
        for( var key in obj ) {
            return false;
        }
        return true;
    }
    var clock = {};
        console.log( isEmpty( clock ) );
        clock['8:11'] = 'wake up!';
        console.log( isEmpty( clock ) );