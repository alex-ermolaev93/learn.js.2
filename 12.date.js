    // var may  = new Date( 2077, 0 , 1 , 0 , 50 );
    // console.log( may );




        function getWeekDay( date ) {
            var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
            return days[date.getDay()];
        }

        var date = new Date( 1995, 0, 3 ); 
        console.log( getWeekDay( date ) );  


        // var date = new Date( 2077, 0, 3 );
        //     console.log( date.toLocaleString( 'en', { weekday: 'short' }) ); 
