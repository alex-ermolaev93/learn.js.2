var user = {};
user.name = 'Alex';
user.surname = 'Yerm';
delete user.name;
user.name = 'Danya';
console.log(user.name);
console.log(user.surname);