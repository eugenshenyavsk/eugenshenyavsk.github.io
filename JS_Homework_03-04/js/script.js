var createDom = {
    createDiv: function() {
        var elementDiv = document.createElement('div');
        return elementDiv;
    },
    createH1: function() {
        var elementH1 = document.createElement('h1');
        return elementH1;
    },
    createForm: function() {
        var elementForm = document.createElement('form');
        return elementForm;
    },
    createInput: function() {
        var elementInput = document.createElement('input');
        return elementInput;
    },
    createP: function() {
        var elementP = document.createElement('p');
        return elementP;
    },
    createLabel: function() {
        var elementLabel = document.createElement('label');
        return elementLabel;
    },
    createLabelText: function() {
        var elementLabelText = document.createElement('labelText');
        return elementLabelText;
    },
    createBr: function() {
        var elementBr = document.createElement('br');
        return elementBr;
    },
    createButton: function() {
        var elementButton = document.createElement('submit');
        return elementButton;
    }

}

var mainDiv = createDom.createDiv();
mainDiv.classList.add('mainWrapper');

var body = document.querySelector('body');
body.appendChild(mainDiv);

var mainH1 = createDom.createH1();
mainH1.innerHTML = 'Тест по программированию';
mainH1.classList.add('mainH1');
mainDiv.appendChild(mainH1);

var mainForm = createDom.createForm();
mainForm.setAttribute('name','TestForm');
mainForm.classList.add('mainForm');
mainDiv.appendChild(mainForm);


for (var i = 1; i<=3; i++) {
    var pInForm = createDom.createP();
    pInForm.innerHTML = i + '. Вопрос №' + i;
    pInForm.classList.add('pInForm');
    mainForm.appendChild(pInForm);

    for (var j = 1; j<=3; j++) {
        var labelForm = createDom.createLabel();
        mainForm.appendChild(labelForm);

        var inputForm = createDom.createInput();
        inputForm.setAttribute('type','checkbox');
        inputForm.setAttribute('name','question'+j);
        inputForm.setAttribute('value', j);
        inputForm.classList.add('checkbox');
        labelForm.appendChild(inputForm);

        var textLabel = createDom.createLabelText();
        textLabel.classList.add('textLabel');
        labelForm.appendChild(textLabel);
        textLabel.innerHTML = 'Вариант ответа №' + j;

        var brTag = createDom.createBr();
        mainForm.appendChild(brTag);
    }
}


var brTag = createDom.createBr();
mainForm.appendChild(brTag);

var buttonForm = createDom.createInput();
buttonForm.setAttribute('type', 'submit');
buttonForm.setAttribute('value', 'Проверить мои результаты');
buttonForm.classList.add('buttonForm');
mainForm.appendChild(buttonForm);
