$(document).ready(function() {
  
  //Setting  start options
  var gameStartStatus = false;
  
  //Adding listener to on/off button
  $("#onOffButton").click(clickOnOffButton);

  //Functon use when on/off button is clicked
  function clickOnOffButton() {
    
    if (gameStartStatus) {
      $("#count").css("color", "#000000");
      $("#onOffButton").text("On");
      gameStartStatus = false;
    } else {
      $("#count").css("color", "#CC0000");
      $("#onOffButton").text("Off");
      gameStartStatus = true;
    }
  }
  
  
});