window.onload = function() {
  
  //Pushing all td buttons to array
  var buttonsArray = document.getElementsByTagName("td");
  var screenResult = document.querySelectorAll(".result")[0];
  var operatorsRegex = /[÷x\-+.]$/;
  
  //For every button adding addEventListener in loop, exception is =, for it calculate function 
  for (var i = 0; i < buttonsArray.length; i++) {
    if (buttonsArray[i].innerHTML === "=") {
      buttonsArray[i].addEventListener("click", calculateResult());
    } else {
      buttonsArray[i].addEventListener("click", operateResult(i));
    }
  }
  
  //Delete zero on screen - triggered when new button is clicked - prevent 0 in front of string, exception is clicked dot which can give ex. 0.X
  function hideDisplayZero(i) {
    if (screenResult.innerHTML == "0" && buttonsArray[i].innerHTML != ".") {
      screenResult.innerHTML = "";
    }
  }
  
  //Testing operators with regex between clicked button and last char of string to avoid two operators inline  
  function checkOperators(i) {
    if (operatorsRegex.test(buttonsArray[i].innerHTML) && operatorsRegex.test(screenResult.innerHTML)) {
        return false;
    } else {
        return true;
    }
  }

  //Rotate + and - in front of string - function for +/- operator
  function changePlusMinus() {
    if (screenResult.innerHTML !== "0") {
      if (screenResult.innerHTML.indexOf("-") === 0) {
      screenResult.innerHTML =  screenResult.innerHTML.slice(1);
    } else {
      screenResult.innerHTML = "-" + screenResult.innerHTML;
    }
   }
  }
  
  //Replace divide and multiply chars with JS math operators - needed before calculating string in the end
  function changeDivideMultiply() {
    screenResult.innerHTML = screenResult.innerHTML.replace(/÷/g, "/");
    screenResult.innerHTML = screenResult.innerHTML.replace(/x/g, "*");
  }
  
  //Clicked button trigger. Checking conditions before output to a string
  function operateResult(i) {
    return function () {    
      if (buttonsArray[i].innerHTML === "C") {
          screenResult.innerHTML = "0";
      } else if (buttonsArray[i].innerHTML === "+/-") {
          changePlusMinus();
      } else {
				  hideDisplayZero(i);
            if (checkOperators(i)) {
              screenResult.innerHTML += buttonsArray[i].innerHTML;
            }
       }
    };
  }
  
  //Calculate string to a result 
  function calculateResult() {
    return function () {
      changeDivideMultiply();
      screenResult.innerHTML = eval(screenResult.innerHTML);
    };
  }
  
};