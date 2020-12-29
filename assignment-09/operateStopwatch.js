function updateTimer() {
   
    if (seconds == 59) {
        minutes = minutes + 1;
        seconds = 0;
    }
    else {
        seconds = seconds + 1;
    }
    document.getElementById("timerDisplay").innerHTML = minutes + ":" + seconds;
    
}

function runTimer() {
    
    if (flag == false) {
        timerID = setInterval(updateTimer, 1000);
        flag = true;
    }
}

function stopTimer() {
    
    clearInterval(timerID);
    flag = false;
    
    
}

function restartTimer() {
    
    minutes = 0;
    seconds = 0;
    clearInterval(timerID);
    document.getElementById("timerDisplay").innerHTML = minutes + ":" + seconds;
    flag = false;
    
 
}

var myTimerID;
var minutes = 0;
var seconds = 0;
var flag = false;
document.getElementById("timerDisplay").innerHTML = minutes + ":" + seconds;