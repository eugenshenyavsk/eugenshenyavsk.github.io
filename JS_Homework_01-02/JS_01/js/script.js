var pow = function(x, n) {

    var result = 1;

    for (n; n > 0; n--) {
        result *= x;
    }

    return result;
};

var x = prompt('Введите число');
var n = prompt('Введите степень');

console.log( pow(x, n) );