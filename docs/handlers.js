

$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens")
    var $appendSeconds = $("#seconds")
    var $buttonStart = $("#button-start");
    var $buttonStop =$("#button-stop");
    var $buttonReset = $("#button-reset");
    var $timerDiv = $("#timer");
    var interval;
    var blinkInterval;
    var stopwatch = $(".wrapper")


    $timerDiv.addClass("timer-background")

    $(".timer-background").css({
    "background-color": "aqua",
    "margin": "auto",
    "text-align": "center",
    "padding": "10px",
})

    $buttonReset.addClass("btn")
    $buttonStart.addClass("btn")
    $buttonStop.addClass("btn")

    $(".btn").css({
        "background-color": "green",
        "margin": "auto",
        "margin-top": "10px",
        "color": "white",
        "padding": "10px",
        "border-radius": "25px",

    })

    stopwatch.css({
        "margin": "auto",
        "text-align": "center",
        "background-color": "yellow",
        "padding": "10px",
        "font-family": "\"Lucida Console\", \"Courier New\", monospace",
        "border": "2px solid black",
        "border-radius": "15px",
    })

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        clearInterval(blinkInterval);
        blinkInterval = setInterval(startBlink, 4000);
        $timerDiv.css("background-color", "seagreen");
    })

    $buttonStop.on("click", function () {
        clearInterval(blinkInterval);
        clearInterval(interval);
        if(seconds != 00 || tens != 00)
            $timerDiv.css("background-color", "violet");
        $timerDiv.css("opacity", 1);
    })

    $buttonReset.on("click", function () {
        clearInterval(blinkInterval);
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.text(tens);
        $appendSeconds.text(seconds);
        $timerDiv.css("background-color", "aqua");
        $timerDiv.css("opacity", 1);
    })

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.text("0" + tens);
        }

        if (tens > 9) {
            $appendTens.text(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.text("0" + seconds);
            tens = 0;
            $appendTens.text("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }

    function startBlink() {
        $timerDiv.fadeOut(2000, 1.0)
        $timerDiv.fadeIn(2000, .8)
        console.log("working")
    }
});