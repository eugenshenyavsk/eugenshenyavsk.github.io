'use strict';

$(function () {

    var testOne = {
        data: {
            title: 'Тест по программированию',
            questions: [
                {
                    title: 'Вопрос № 1',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: true},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: false},
                        {name: 'Вариант ответа № 6 ', flag: false},
                        {name: 'Вариант ответа № 7 ', flag: false}
                    ]
                },
                {
                    title: 'Вопрос № 2',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: false},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: true},
                        {name: 'Вариант ответа № 6 ', flag: false},
                        {name: 'Вариант ответа № 7 ', flag: false}
                    ]
                },
                {
                    title: 'Вопрос № 3',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: false},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: false},
                        {name: 'Вариант ответа № 6 ', flag: false},
                        {name: 'Вариант ответа № 7 ', flag: true}
                    ]

                },
                {
                    title: 'Вопрос № 4',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: false},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: false},
                        {name: 'Вариант ответа № 6 ', flag: true},
                        {name: 'Вариант ответа № 7 ', flag: false}
                    ]

                }
            ]
        }
    };

    var testMulti = {
        data: {
            title: 'Тест по геграфии',
            questions: [
                {
                    title: 'Вопрос № 1',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: true},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: false},
                        {name: 'Вариант ответа № 6 ', flag: true},
                        {name: 'Вариант ответа № 7 ', flag: false}
                    ]
                },
                {
                    title: 'Вопрос № 2',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: true},
                        {name: 'Вариант ответа № 3 ', flag: false},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: true},
                        {name: 'Вариант ответа № 6 ', flag: false},
                        {name: 'Вариант ответа № 7 ', flag: false}
                    ]
                },
                {
                    title: 'Вопрос № 3',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: true},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: true},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: true},
                        {name: 'Вариант ответа № 6 ', flag: false},
                        {name: 'Вариант ответа № 7 ', flag: true}
                    ]

                },
                {
                    title: 'Вопрос № 4',
                    answers: [
                        {name: 'Вариант ответа № 1 ', flag: false},
                        {name: 'Вариант ответа № 2 ', flag: false},
                        {name: 'Вариант ответа № 3 ', flag: false},
                        {name: 'Вариант ответа № 4 ', flag: false},
                        {name: 'Вариант ответа № 5 ', flag: false},
                        {name: 'Вариант ответа № 6 ', flag: true},
                        {name: 'Вариант ответа № 7 ', flag: false}
                    ]

                }
            ]
        }
    };

    var serialOne = JSON.stringify(testOne);
    var serialMul = JSON.stringify(testMulti);
    localStorage.setItem("myKeyOne", serialOne);
    localStorage.setItem("myKeyMul", serialMul);
    var returnOne = JSON.parse(localStorage.getItem("myKeyOne"));
    var returnMul = JSON.parse(localStorage.getItem("myKeyMul"));
    var compilOne = _.template($('#testO').html());
    var contentOne = compilOne({'ldata':returnOne});
    $('.wrapOne').append(contentOne);


    var buttExamOne = $('.container').find('#myButtOne');
    var wrapModal= document.getElementById('wrapModal');
    var h1Modal=document.getElementById('rightAns');

    buttExamOne.on('click',function () {
        var inputExamed = $('.container').find('.inputRadio');
        var maxLength = inputExamed.length;
        var totalTrue = 0;
        var checkedTrue = 0;
        for(var i = 0; i < maxLength ; i++){
            var answerTrue = inputExamed[i].getAttribute('value');
            if(answerTrue=='true'){
                totalTrue++;
            }
            if($(inputExamed[i]).is(':checked')&&(answerTrue=='true')){
                checkedTrue++;
            }
        }
        h1Modal.innerText='Вы выбрали: '+checkedTrue+' из '+totalTrue +' правилных ответов';
        wrapModal.setAttribute('class','wrapModalShow');
    });

    var compilMul = _.template($('#testMulti').html());
    var contentMul = compilMul({'Mdata':returnMul});
    $('.wrapMulti').append(contentMul);

    var buttExamMul = $('.container').find('#myButtMulti');
    buttExamMul.on('click',function () {
        var inputExamedM = $('.container').find('.inputCheck');
        var maxLengthM = inputExamedM.length;
        var totalTrueM = 0;
        var checkedFalseM=0;
        var checkedTrueM = 0;
        for(var i = 0; i < maxLengthM ; i++){
            var answerTrueM = inputExamedM[i].getAttribute('value');
            if(answerTrueM=='true'){
                totalTrueM++;
            }
            if($(inputExamedM[i]).is(':checked')&&(answerTrueM=='true')){
                checkedTrueM++;
            }
            if($(inputExamedM[i]).is(':checked')&&(answerTrueM=='false')){
                checkedFalseM++;
            }

        }
        h1Modal.innerText='Вы выбрали: ' + checkedTrueM + ' из '+ totalTrueM +' правилных ответов '+' ,неправилных ответов: '+ checkedFalseM ;
        wrapModal.setAttribute('class','wrapModalShow');
    });

    var butModal= document.getElementById('butModal');
    butModal.addEventListener('click',function () {
        wrapModal.setAttribute('class','wrapModalHide');
        //находим все чекбоксы
        var tempRadio=document.getElementsByClassName('inputRadio');
        var tempChek=document.getElementsByClassName('inputCheck');
        //обнуляем все чекбоксы
        _.forEach(tempRadio,function (item) {
            item.checked = false;
        });
        _.forEach(tempChek,function (item2) {
            item2.checked = false;
        })
    })

});

























































