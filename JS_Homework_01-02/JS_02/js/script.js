var arrName = [];

for (var i = 0; i < 5; i++) {
    arrName[i] = prompt('Введите имя', '');
}
var login = prompt ('Введите имя пользователя');
var flag = false;

for (var i = 0; i < arrName.length; i++ ) {
    if (login === arrName[i]) {
        alert(login + ', вы успешно вошли');
    }
    else {
        alert('Ошибка входа!');
    }
}