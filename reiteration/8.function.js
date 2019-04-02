function check ( arr1, arr2 ) {
 var arr1Arr2 = arr1.concat(arr2)
return arr1Arr2;
};
var arr1=['a']; 
var arr2=['b'];
check(arr1,arr2);
var result = check(arr1,arr2);
console.log(result);


function runn (obj1,obj2) {
    var result =0;
    for (var key in obj1){
        result += 1;
    }
    for ( var key in obj2){
        result++;
    } 
    return result;
};
var obj3 = { 
    name: 'alex',
    surname:'Yer'
};
var obj4 = {
    year: 2019
}
var result = runn(obj3,obj4);
console.log(result);