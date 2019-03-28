var newUser = { names: 'D\.va' };
var admin = newUser;
admin.names = 'Traser';
console.log( newUser.names );





var user = {
    name:'alex',
    age: 25
};
var  clone = {};
for (var key in user) {
    clone[key] = user[key];
}
clone.name = 'ronin';
console.log( user.name);