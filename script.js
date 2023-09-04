var Hr = 0;
var Min = 0;
var Sec = 0;
var Count = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;

    Hr = 0;
    Min = 0;
    Sec = 0;
    Count = 0;

    document.getElementById("Hr").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    document.getElementById("Sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        Count = Count + 1;

        if (Count == 100) {
            Sec = Sec + 1;
            Count = 0;
        }

        if (Sec == 60) {
            Min = Min + 1;
            Sec = 0;

        }

        if (Min == 60) {
            Hr = Hr + 1;
            Min = 0;
            Sec = 0;
        }

        var Hrstring = Hr;
        var Minstring = Min;
        var Secstring = Sec;
        var Countstring = Count;

        if (Hr < 10) {
            Hrstring = "0" + Hrstring
        }

        if (Min < 10) {
            Minstring = "0" + Minstring
        }

        if (Sec < 10) {
            Secstring = "0" + Secstring
        }

        if (Count < 10) {
            Countstring = "0" + Countstring
        }
        document.getElementById("Hr").innerHTML = Hrstring;
        document.getElementById("Min").innerHTML = Minstring;
        document.getElementById("Sec").innerHTML = Secstring;
        document.getElementById("count").innerHTML = Countstring;

        setTimeout("stopwatch()", 10);
    }
}
