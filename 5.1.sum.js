        var salaries = {
          "Вася": 100,
          "Петя": 300,
          "Даша": 250,
        };
        
        var sum = 0;
        for (var name in salaries) {
          sum += salaries[name];
        }
        
        console.log( sum );
