$(document).ready(function() {
  
  //Setting  start options
  var gameStartFlag = false;
  
  //Adding listener to on/off button
  $("#onOffButton").click(clickOnOffButton);

  //Function use when on/off button is clicked
  function clickOnOffButton() {
    
    if (gameStartFlag) {
      $("#count").css("color", "#000000");
      $("#onOffButton").text("On");
      gameStartFlag = false;
    } else {
      $("#count").css("color", "#CC0000");
      $("#onOffButton").text("Off");
      gameStartFlag = true;
    }
  }
  
  
});