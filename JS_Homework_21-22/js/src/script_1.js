'use strict';


$(function() {
    let testOne = {
        data: {
            title: 'Тест по программированию',
            questions: [
                {
                    title: 'Семь умножить на восемь',
                    answers: [
                        {name: 'Вариант ответа 33 ', flag: false},
                        {name: 'Вариант ответа 44 ', flag: false},
                        {name: 'Вариант ответа 56 ', flag: true},
                        {name: 'Вариант ответа 99 ', flag: false},
                        {name: 'Вариант ответа 54 ', flag: false}

                    ]
                },
                {
                    title: 'Шесть умножить на восемь',
                    answers: [
                        {name: 'Вариант ответа 33 ', flag: false},
                        {name: 'Вариант ответа 37 ', flag: false},
                        {name: 'Вариант ответа 40 ', flag: false},
                        {name: 'Вариант ответа 44 ', flag: false},
                        {name: 'Вариант ответа 48 ', flag: true}

                    ]
                },
                {
                    title: 'Сто поделить на 20',
                    answers: [
                        {name: 'Вариант ответа 2 ', flag: false},
                        {name: 'Вариант ответа 3 ', flag: false},
                        {name: 'Вариант ответа 5 ', flag: true},
                        {name: 'Вариант ответа 7 ', flag: false},
                        {name: 'Вариант ответа 9 ', flag: false}
                    ]

                },
                {
                    title: 'Двенадцать в квадрате',
                    answers: [
                        {name: 'Вариант ответа 101 ', flag: false},
                        {name: 'Вариант ответа 115 ', flag: false},
                        {name: 'Вариант ответа 144 ', flag: true},
                        {name: 'Вариант ответа 151 ', flag: false},
                        {name: 'Вариант ответа 308 ', flag: false}
                    ]

                }
            ]
        }
    };
    let testMulti = {
        data: {
            title: 'Тест по географии',
            questions: [
                {
                    title: 'Флаг Украины состоит из ...цветов',
                    answers: [
                        {name: ' 5 ', flag: false},
                        {name: ' 4 ', flag: false},
                        {name: ' 2 ', flag: true},
                        {name: ' 8 ', flag: false},
                        {name: ' 9 ', flag: false},

                    ]
                },
                {
                    title: 'Какого цвета флаг Украины',
                    answers: [
                        {name: ' Зеленый ', flag: false},
                        {name: ' Голубой ', flag: true},
                        {name: ' Красный', flag: false},
                        {name: ' Белый ', flag: false},
                        {name: ' Желтый ', flag: true},

                    ]
                },
                {
                    title: 'Где находится Украина',
                    answers: [
                        {name: ' в Европе', flag: true},
                        {name: ' в Америке ', flag: false},
                        {name: ' в Евразии ', flag: true},
                        {name: ' в Африке ', flag: false},
                        {name: 'Рядом с Польшей ', flag: true},

                    ]

                },
                {
                    title: 'Столица Украины',
                    answers: [
                        {name: ' Жмеренка ', flag: false},
                        {name: ' Киев', flag: true},
                        {name: ' Харьков ', flag: false},
                        {name: ' Чернигов', flag: false},
                        {name: ' Бердичев ', flag: false},

                    ]

                }
            ]
        }
    };

    let serialOne = JSON.stringify(testOne);
    let serialMul = JSON.stringify(testMulti);
    localStorage.setItem("myKeyOne", serialOne);
    localStorage.setItem("myKeyMul", serialMul);

    let returnOne = JSON.parse(localStorage.getItem("myKeyOne"));
    let returnMul = JSON.parse(localStorage.getItem("myKeyMul"));

    let compilOne = _.template($('#testO').html());
    let contentOne = compilOne({'ldata':returnOne});
    $('.wrapOne').append(contentOne);

    let buttExamOne = $('.container').find('#myButtOne');
    let wrapModal= document.getElementById('wrapModal');
    let h1Modal=document.getElementById('rightAns');

    buttExamOne.on('click',function () {
        let inputExamed = $('.container').find('.inputRadio');
        let totalTrue = 0;
        let checkedTrue = 0;
        for(let item of inputExamed){
            let answerTrue = item.getAttribute('value');

            if(answerTrue === 'true'){
                totalTrue++;
            }
            if($(item).is(':checked')&&(answerTrue==='true')){
                checkedTrue++;
            }
        }
        h1Modal.innerText='Вы выбрали: '+checkedTrue+' из '+totalTrue +' правилных ответов';
        wrapModal.setAttribute('class','wrapModalShow');
    });

    let compilMul = _.template($('#testMulti').html());
    let contentMul = compilMul({'Mdata':returnMul});
    $('.wrapMulti').append(contentMul);

    let buttExamMul = $('.container').find('#myButtMulti');
    buttExamMul.on('click',function () {
        let inputExamedM = $('.container').find('.inputCheck');
        let totalTrueM = 0;
        let checkedFalseM=0;
        let checkedTrueM = 0;
        for(let itemM of inputExamedM){
            let answerTrueM = itemM.getAttribute('value');
            if(answerTrueM === 'true'){
                totalTrueM++;
            }
            if($(itemM).is(':checked')&&(answerTrueM === 'true')){
                checkedTrueM++;
            }
            if($(itemM).is(':checked')&&(answerTrueM === 'false')){
                checkedFalseM++;
            }
        }
        h1Modal.innerText='Вы выбрали: ' + checkedTrueM + ' из '+ totalTrueM +' правилных ответов '+' ,неправилных ответов: '+ checkedFalseM ;
        wrapModal.setAttribute('class','wrapModalShow');
    });

    let butModal= document.getElementById('butModal');
    butModal.addEventListener('click',function () {
        wrapModal.setAttribute('class','wrapModalHide');
        //находим все чекбоксы
        let tempRadio=document.getElementsByClassName('inputRadio');
        let tempChek=document.getElementsByClassName('inputCheck');
        //обнуляем все чекбоксы
        _.forEach(tempRadio,function (item) {
            item.checked = false;
        });
        _.forEach(tempChek,function (item2) {
            item2.checked = false;
        })
    })

});