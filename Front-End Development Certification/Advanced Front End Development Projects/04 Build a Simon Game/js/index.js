$(document).ready(function() {
  
  //Setting  start options
  var gameStartFlag = false;
  var gameStrictMode = false;
  
  //Adding listener to on/off button
  $("#onOffButton").click(clickOnOffButton);
  
  //Adding listener to strict button
  $("#strictButton").click(clickStrictButton);
  
  //Function use when on/off button has been clicked
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
  
  //Function use when strict button has been clicked
  function clickStrictButton() {
    
    if (gameStartFlag) {
      if (gameStrictMode) {
        $("#strictButton").css("border-color", "#242E30");
        gameStrictMode = false;
      } else {
        $("#strictButton").css("border-color", "#CC0000");
        gameStrictMode = true;
      }
    } 
  }
  
});