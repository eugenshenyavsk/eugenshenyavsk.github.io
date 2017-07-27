var arrName = [];

for (i = 0; i < 5; i++) {
    arrName[i] = prompt("Введите имя: ");
}

var name = prompt("Введите имя пользователя: ");

for (i = 0; i < 5; i++) {
    var result = arrName[i].indexOf(name);
    if (result == 0) break;
}


if (result == 0) {
    alert(name + ', вы успешно вошли');
} else {
    alert('Ошибка входа');
}