var user = {};
user.name = 'Sasha';
user.age = '25';
user.name = 'Alex';
delete user.name;
if ("name" in user) {
    alert( "Свойство name существует!" );
}

// Создайте пустой объект user.
// Добавьте свойство name со значением Вася.
// Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей.
// Удалите свойство name из объекта.