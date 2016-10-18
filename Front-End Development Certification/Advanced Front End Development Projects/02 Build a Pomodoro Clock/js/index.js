$(document).ready(function() {
 
 var sessionMinutes = 25;
 var breakMinutes = 5;
 var seconds = 0;
 var minutes = 25;
 var timeCount = 0;
 var pause = false;
 
 //Adding listeners to time adjust controls 
 $("#minusBreak").on("click", minusBreak);
 $("#plusBreak").on("click", plusBreak);
 $("#minusSession").on("click", minusSession);
 $("#plusSession").on("click", plusSession); 
 
 //Start button on click function
 //Disable time adjust controls listeners, hiding start button, showing stop button, starting clock 
 $("#startButton").on("click", function() {
    $("#minusSession, #plusSession, #minusBreak, #plusBreak").off("click");
    $(this).hide();
    $("#stopButton").show();
    callTime();  
  });
  
  //Stop button on click function
  //Hiding stop button, showing resume button, calling clock function
  $("#stopButton").on("click", function() {
    $(this).hide();
    $("#resumeButton").show();
    callTime(); 
  });
  
  //Resume button on click function
  //Hiding resume button, showing stop button, calling clock function
  $("#resumeButton").on("click", function() {
    $(this).hide();
    $("#stopButton").show();
    callTime(); 
  });
  
  //Reset button on click function
  //Adding listeners to time adjust controls, Hiding stop and resume button, showing start button, setting variables to default, displaying default time variables
  $("#resetButton").on("click", function() {
    $("#minusSession").on("click", minusSession);
    $("#plusSession").on("click", plusSession);
    $("#minusBreak").on("click", minusBreak);
    $("#plusBreak").on("click", plusBreak);
    $("#stopButton").hide();
    $("#resumeButton").hide();
    $("#startButton").show();
    sessionMinutes = 25;
    breakMinutes = 5;
    seconds = 0;
    minutes = sessionMinutes;
    $("#timeClock").text(sessionMinutes + ":00");
    $("#breakContainer").text(breakMinutes + ":00");
    $("#sessionContainer").text(sessionMinutes + ":00");
  }); 
 
 //Function subtracting from break variable and displaying it, working only on positive vaules
 function minusBreak() {
    if (breakMinutes > 1) {
        breakMinutes -= 1;
        $("#breakContainer").text(breakMinutes + ":00");
    }
} 
 
 //Function adding to break variable and displaying it, working only to 1 full hour
 function plusBreak() {
    if (breakMinutes < 60) {
        breakMinutes += 1;
        $("#breakContainer").text(breakMinutes + ":00");
    }
}
 
 //Function subtracting from session variable, working only on positive values
 //Displaying result both on session control time and clock
 //Resetting time values: second to 0 and minutes to actual changed 
 function minusSession() {
    if (sessionMinutes > 1) {
        sessionMinutes -= 1;
        $("#sessionContainer").text(sessionMinutes + ":00");
        $("#timeClock").text(sessionMinutes + ":00");
        seconds = 0;
        minutes = sessionMinutes;
    }
}
 //Function adding to session variable, working only to 1 full hour
 //Displaying result both on session control time and clock
 //Resetting time values: second to 0 and minutes to actual changed 
 function plusSession() {
    if (sessionMinutes < 60) {
        sessionMinutes += 1;
        $("#sessionContainer").text(sessionMinutes + ":00");
        $("#timeClock").text(sessionMinutes + ":00");
        seconds = 0;
        minutes = sessionMinutes;
    }
}  

//Function setting countdown with checking every second for change
//pause variable used to control start/stop/resume controls
function callTime() {  
   if (pause === false) {
        timeCount = setInterval(pomodoroClock, 1000);
        pause = true;
   } else if (pause === true) {
        clearInterval(timeCount);
        pause = false;
   }
}

//Function for time countdown  
function pomodoroClock() {  
   if (minutes == 0 && seconds == 0) { //Countdown to zero
        if ($("#timeText").text() == "Session") { //If actual countdown is session
            $("#timeText").text("Break"); //Displaying break text
            minutes = breakMinutes; //Setting time variable to break minutes
            $("#timeClock").html(minutes + ":0" + seconds); //Displaying break time on clock
        } else if ($("#timeText").text() == "Break") { //If actual countdown is break...
            $("#timeText").text("Session");
            minutes = sessionMinutes;
            $("#timeClock").html(minutes + ":0" + seconds);
        }
   } else { //If time is counting
        if (seconds == 0) { //Countdown to end of the minute
          seconds = 60; //Setting second to new 60
          minutes--; //Subtracting minute
        }
        seconds--; //Subtracting second: remember that it's called every second
        if (seconds < 10) { //If second less that 10, displaying 0 before
          $("#timeClock").html(minutes + ":0" + seconds);
        } else {
          $("#timeClock").html(minutes + ":" + seconds);
        }
   }
}
 
});