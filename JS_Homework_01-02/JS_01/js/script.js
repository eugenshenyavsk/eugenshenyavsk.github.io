
function pow(x,n) {
    var result = 1;
    var x = prompt ( 'Введите число','' );
    var n = prompt ( 'Введите степень', '' );
    for (var i = 0; i<n; i++) {
        result *= x;
    }
    console.log('result = ', result);
    return result;
}

pow();
