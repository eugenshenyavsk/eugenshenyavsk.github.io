'use strict';

var test;
test = {
    data: {
        title: 'Тест по программированию',
        questions: [
            {
                title: 'Вопрос № 1',
                answers: ['Вариант ответа № 1 ', 'Вариант ответа № 2', 'Вариант ответа № 3']
            },
            {
                title: 'Вопрос № 2',
                answers: ['Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3', 'Вариант ответа № 4']
            },
            {
                title: 'Вопрос № 3',
                answers: ['Вариант ответа № 1', 'Вариант ответа № 2']
            },
            {
                title: 'Вопрос № 4',
                answers: ['Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3', 'Вариант ответа № 4', 'Вариант ответа № 5']
            }
        ]
    },
    createMyHeader: function () {
        var h1 = document.createElement('h1');
        h1.className = "header";
        //h1.innerHTML = this.data.title;
        h1.appendChild(document.createTextNode(this.data.title));
        return h1;
    },
    createMyList: function () {
        var ol = document.createElement('ol');
        ol.className = 'questList';
        for (var keyQ in this.data.questions) {
            var ulAnswer = document.createElement('ul');
            ulAnswer.className = 'ansList';
            for (var keyA in this.data.questions[keyQ].answers) {
                var myId = 'quest' +keyQ+ '__' +'ans' +keyA;
                var textLabel = this.data.questions[keyQ].answers[keyA];
                var input = document.createElement('input');
                input.setAttribute('type','checkbox');
                input.className = "inputCheck";
                var label = document.createElement('label');
                label.className = "myLabel";
                var ansLi = document.createElement('li');
                ansLi.className = 'ansLi';
                input.setAttribute( 'id', myId );
                label.setAttribute( 'for', myId );
                //label.innerHTML = textLabel;
                label.appendChild(document.createTextNode(textLabel));
                ansLi.appendChild(input);
                ansLi.appendChild(label);
                ulAnswer.appendChild(ansLi);
            }
            var questionLi = document.createElement('li');
            questionLi.className = 'questLi';
            //questionLi.innerHTML = this.data.questions[keyQ].title;
            questionLi.appendChild(document.createTextNode(this.data.questions[keyQ].title));
            questionLi.appendChild(ulAnswer);
            ol.appendChild(questionLi);
        }
        return ol;
    }

};

var divContainer = document.createElement('div');
divContainer.className = "container";
var divRowHeader = document.createElement('div');
divRowHeader.className = "row row--header";
var divRowForm = document.createElement('div');
divRowForm.className = "row row--header";
var myForm = document.createElement('form');
myForm.setAttribute('action','#');
myForm.className = "myForm";



var divWrapBat = document.createElement('div');
divWrapBat.className = "wrapBat";
var button = document.createElement('input');
button.setAttribute('type','button');
button.className = "batCheck btn btn-primary btn-lg";
button.setAttribute('value','Проверить мои результаты');
var parentElem = document.body;
parentElem.appendChild(divContainer);
divContainer.appendChild(divRowForm);
divRowForm.appendChild(myForm);
myForm.appendChild(test.createMyHeader());
myForm.appendChild(test.createMyList());
myForm.appendChild(divWrapBat);
divWrapBat.appendChild(button);