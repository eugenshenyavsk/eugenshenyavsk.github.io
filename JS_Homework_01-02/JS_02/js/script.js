var login = (function () {
    var userNames = [];
    var userName,
        found;

    var addUserNames = function () {
        var number;

        for (number = 1; number <= 5; number++) {
            newName = prompt('Please, enter a name # ' + number);
            userNames.push(newName);
        }
    };

    var askUserName = function () {
        userName = prompt('Please, enter your name');
    };

    var checkUserName = function () {
        found = false;
        var i;
        var length = userNames.length;

        for (i = 0; i <= length; i++) {
            if (userName == userNames[i]) {
                found = true;
            }
        }

        if (!found) {
            document.write(userName, ', you\'re not allowed!');
        } else {
            document.write(userName, ', welcome to the website!');
        }
    };

    return {
        addUserNames: addUserNames,
        askUserName: askUserName,
        checkUserName: checkUserName
    }
})();

login.addUserNames();
login.askUserName();
login.checkUserName();