    function checkSpam( str ) {
        var liveStr = str.toLowerCase();

        return !!(~liveStr.indexOf( 'viagra' ) || ~liveStr.indexOf( 'xxx' ));
}

            console.log( checkSpam( 'buy ViAgRA now' ) );
            console.log( checkSpam( 'free xxxxx' ) );
            console.log( checkSpam( "innocent rabbit" ) ); 
