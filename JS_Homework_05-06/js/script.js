var counts = document.getElementById('count');
counts.innerHTML = "00:00:00:00";

var start = document.getElementById('start');
start.addEventListener('click', toggle);


var stop = document.getElementById('stop');
stop.addEventListener('click', stopFunction);


var counter = 0;
var go = false;
var timerState = 'stop';
var interval;

function toggle() {
    if(timerState === 'stop') {
        start.innerHTML = "Pause";
        start.style.backgroundColor = "green";
        go = true;
        interval = setInterval(startFunction, 10);
        timerState = 'run';
    } else if (timerState === 'run'){
        start.innerHTML = "Continue";
        start.style.backgroundColor = "blue";
        go = false;
        timerState = 'paused';
    } else if (timerState === 'paused'){
        start.innerHTML = "Pause";
        start.style.backgroundColor = "green";
        go = true;
        timerState = 'run';
    }
}

function startFunction() {
    if(go == true) {
        counter++;
        var msek=counter%100;
        if (msek<10) {msek = "0"+msek;}
        var sek=Math.floor(counter/100)%60;
        if (sek<10) {sek = "0"+sek;}
        var min = Math.floor(counter/6000)%60;
        if (min<10) {min = "0"+min;}
        var hours = Math.floor(counter/360000)%24;
        if (hours<10) {hours = "0"+hours;}
        var str = hours+":"+min+":"+sek+":"+msek;
        count.innerHTML = str;
    }
}

function stopFunction(){
    go=false;
    counter = 0;
    count.innerHTML = '00:00:00:00';
    start.innerHTML = "Start";
    clearInterval(interval);
    timerState="stop";
    start.style.backgroundColor = "green";

}