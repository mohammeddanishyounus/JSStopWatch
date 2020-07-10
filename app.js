var minutes=0;
var second=0;
var milisecond=0;
var minutesHeading=document.getElementById("mintues");
var secondsHeading=document.getElementById("seconds");
var milisecondsHeading=document.getElementById("miliseconds");
var interval;

function timer(){
    milisecond++
    milisecondsHeading.innerHTML=milisecond;
    if(milisecond >= 100){
        second++;
        secondsHeading.innerHTML=second;
        milisecond=0;
    }
    else if(second >= 10){
        minutes++;
        minutesHeading.innerHTML=minutes;
        second=0;
    }
}

function start(){
    interval = setInterval(timer, 10);
    onClick=this.disabled=false;
}

function pause(){
   clearInterval(interval);
}

function reset(){
    minutes=0;
    second=0;
    milisecond=0;
    milisecondsHeading.innerHTML=milisecond;
    secondsHeading.innerHTML=second;
    minutesHeading.innerHTML=minutes;
    pause();
}

