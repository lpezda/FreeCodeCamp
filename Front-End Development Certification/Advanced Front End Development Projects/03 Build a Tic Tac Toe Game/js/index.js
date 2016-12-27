$(document).ready(function() {
  
  var i = 0,
      j = 0,
      userMark = 0,
      aiMark = 0,
      gameTurn = 0,
      nextTurn = true,
      tempIndex = 0,
      tempStatus = [],
      tempStatusMoves = [],
      tempStatusWin = [],
      //Setting array with marks, which are draw in game field, order is important
      marksList = [
        "",
        "O",
        "X"
      ],
      //Setting array with td id names, order is important - used in gameStatus array
      boxesList = [
        "boxUpLeft",
        "boxUpCenter",
        "boxUpRight",
        "boxMiddleLeft",
        "boxMiddleCenter",
        "boxMiddleRight",
        "boxBottomLeft",
        "boxBottomCenter",
        "boxBottomRight"
      ],
      //Setting array which is use to collect user and ai moves
      gameStatus = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
       ],
      //Array with all winning moves combinations
      gameWinScheme = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
  //Adding listener to all td elements
  $("td").click(function() {
    setHumanMove(this.id);
  });
  
  //Adding listener to li elements - use to select mark by user
  $("li").click(function() {
    getMark(this.id);
  });
  
  //Adding listener to reset button
  $("#resetButton").click(clearMark);
  
  //Function to add user mark on game field
  //Checking if box clicked by user is empty and there's no blockade on clicking
  //If is then changing html with user mark, pushing box order number with user mark in gameStatus array
  //Adding click blockade - user cannot click few moves in a row
  //Moving to next step of game
  //Calling a getWinning function to check if user win before ai will set another step
  //Calling ai move with delay
  function setHumanMove(val) {
    
    tempIndex = boxesList.indexOf(val);
    
    if (gameStatus[tempIndex] === 0 && nextTurn === true) {
      $("#" + val).text(marksList[userMark]);
      gameStatus[tempIndex] = userMark;
      gameTurn += 1;
      nextTurn = false;
      getWinning();
      setTimeout(setAiMove, 700);
    }
  } 
  
  //Function use after reset button is clicked
  //Setting user mark by li text - from marksList array
  //Setting ai mark as opposite to user mark
  //Hiding div with mark selection
  //Showing game field div
  function getMark(val) {
    
    userMark = marksList.indexOf($("#" + val).text());
    
    if (userMark === 1) {
      aiMark = 2;
    } else {
      aiMark = 1;
    }
    
    $("#start").hide();
    $("#tictactoe").show();
  }
  
  //Functon use when reset button is clicked
  //Resetting all td fields to empty in loop
  //Resetting variables used in game
  //Resetting visibility of divs
  function clearMark() {
    
    for (var val in gameStatus) {
      gameStatus[val] = 0;
    }
    
    gameTurn = 0;
    nextTurn = true;
    tempStatusMoves = [];
    $("td").text(marksList[0]);
    $("td").css("background-color", "#3A4A4D");
    $("#tictactoe").hide();
    $("#winninginformation").hide();
    $("#start").show();
  }
  
  //Similar function as clearMark
  //Used after end of game
  //Not showing mark selection div, move to next step - game field
  function resetGame() {
    
    for (var val in gameStatus) {
      gameStatus[val] = 0;
    }
    
    gameTurn = 0;
    nextTurn = true;
    tempStatusMoves = [];
    $("td").text(marksList[0]);
    $("td").css("background-color", "#3A4A4D");
    $("#winninginformation").hide();
  }
  
  //Function use to collect all free game moves
  //Returning temp array with those
  function getTempStatusFree() {
    
    tempIndex = gameStatus.indexOf(0);
    tempStatus = [];
    
    while (tempIndex != -1) {
      tempStatus.push(tempIndex);
      tempIndex = gameStatus.indexOf(0, tempIndex + 1);
    }
    
    return tempStatus;
  }
  
  //Function use to collect all user moves
  //Returning temp array with those
  function getTempStatusUserMark() {
      
    tempIndex = gameStatus.indexOf(userMark);
    tempStatus = [];
      
    while (tempIndex != -1) {
      tempStatus.push(tempIndex);
      tempIndex = gameStatus.indexOf(userMark, tempIndex + 1);
    }
      
    return tempStatus;
  }
  
  //Function use to collect all ai moves
  //Returning temp array with those
  function getTempStatusAiMark() {
      
    tempIndex = gameStatus.indexOf(aiMark);
    tempStatus = [];
      
    while (tempIndex != -1) {
      tempStatus.push(tempIndex);
      tempIndex = gameStatus.indexOf(aiMark, tempIndex + 1);
    }
      
    return tempStatus;
  }
  
  //Function use in the end of 3rd, 4th... game step
  //Checking user and in next order ai all moves with getTempStatus functions
  //In next step checking in this array with every gameWinScheme array in loop
  //If all 3 elements from current gameWinScheme array are in user/ai array
  //Then we have a end of game and win - breaking and calling function wit user/ai mark and winning combination array
  //If break isn't used we have no winning, checking if there's no left free moves to make and calling end of game
  function getWinning() {
    
    getTempStatusUserMark();
    
    for (i = 0; i < gameWinScheme.length; i++) {
            if (tempStatus.indexOf(gameWinScheme[i][0]) !== -1 &&
                tempStatus.indexOf(gameWinScheme[i][1]) !== -1 &&
                tempStatus.indexOf(gameWinScheme[i][2]) !== -1) {
                    return setWinning(userMark, gameWinScheme[i]);
            } 
     }   
    
    getTempStatusAiMark();
    
    for (i = 0; i < gameWinScheme.length; i++) {
            if (tempStatus.indexOf(gameWinScheme[i][0]) !== -1 &&
                tempStatus.indexOf(gameWinScheme[i][1]) !== -1 &&
                tempStatus.indexOf(gameWinScheme[i][2]) !== -1) {
                    return setWinning(aiMark, gameWinScheme[i]);
            } 
     }  
    
    getTempStatusFree();
    
    if (tempStatus.length === 0) {
      $("#winninginformation").fadeIn(1000);
      $("#winninginformation").text("No winner");
      setTimeout(resetGame, 4000);
    }
  }
  
  //Function use to visual show winning
  //Changing background of winning combination boxes
  //Display win information - user/ai
  function setWinning(val, arr) {
    
    //Resetting gameTurn to stop ai to set last move after end of game
    //as getWinning is called at the end of setaimove function
    gameTurn = 0;
    
    for (i = 0; i < arr.length; i++) {
        $("#" + boxesList[arr[i]]).css("background-color", "#FF4531");
      }
    
    if (val === userMark) {
      
      $("#winninginformation").fadeIn(1000);
      $("#winninginformation").text("You won!");
      setTimeout(resetGame, 4000);
      
    } else if (val === aiMark) {
      
      $("#winninginformation").fadeIn(1000);
      $("#winninginformation").text("You lose!");
      setTimeout(resetGame, 4000);
      
    }
    
  }
  
  //Function use to set next ai step in game
  function setAiMove() {
    
    //If it is first step of game we have only 1 user mark on field
    //Getting all free moves and select randomly one - use it
    if (gameTurn === 1) {
      
      getTempStatusFree();
      tempIndex = tempStatus[Math.floor(Math.random()*tempStatus.length)];
      $("#" + boxesList[tempIndex]).text(marksList[aiMark]).hide().slideDown();
      gameStatus[tempIndex] = aiMark;
    
    //Step 2 - now we have two user moves  
    } else if (gameTurn === 2) {
      
      //Getting array with user moves
      getTempStatusUserMark()
      
      //Checking if these two user moves are in one of winning combination
      //If are, then we select third move from this combination and parse it from array element to number
      for (i = 0; i < gameWinScheme.length; i++) {
        if (gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
            gameWinScheme[i].indexOf(tempStatus[1]) !== -1) {             
            
            tempIndex = gameWinScheme[i].filter(function(x) {
                          return tempStatus.indexOf(x) < 0
                        }).toString();
            tempIndex = parseInt(tempIndex);
        }
      }
      
      //Checking if this third move is free - could be used by ai in first step
      //If it is free - select it by ai
      if (gameStatus[tempIndex] === 0)  {
          
          $("#" + boxesList[tempIndex]).text(marksList[aiMark]).hide().slideDown();
          gameStatus[tempIndex] = aiMark;  
      
      //If it isn't then user doesn't have chance to win in 3rd step - no winning combination  
      } else {
        
        //Getting all user moves
        getTempStatusUserMark()
        
        //Checking for all winning combinations with ai mark from 1st step and with free two next steps
        //Two next steps can't be used by user mark
        for (i = 0; i < gameWinScheme.length; i++) {
          if (gameWinScheme[i].indexOf(gameStatus.indexOf(aiMark)) !== -1 &&         
              gameWinScheme[i].indexOf(tempStatus[0]) === -1 &&
              gameWinScheme[i].indexOf(tempStatus[1]) === -1) {
                tempStatusMoves.push(gameWinScheme[i]);
          }
        }       
        
        //Randomly select one of winning combinations
        //Filter from this combination ai move from 1st step
        //Randomly select one of next two free steps
        tempStatusMoves = tempStatusMoves[Math.floor(Math.random()*tempStatusMoves.length)];
        tempStatus = [];
        tempStatus.push(gameStatus.indexOf(aiMark));
        tempStatus = tempStatusMoves.filter(function(x) {
                        return tempStatus.indexOf(x) < 0
                     });
        tempIndex = tempStatus[Math.floor(Math.random()*tempStatus.length)];
        
        $("#" + boxesList[tempIndex]).text(marksList[aiMark]).hide().slideDown();
        gameStatus[tempIndex] = aiMark;
      }
    
    //3rd, 4th ... steps
    } else if (gameTurn >= 3) {
        
        //Getting array with ai moves and clearing temp arrays
        getTempStatusAiMark();
        tempStatusMoves = [];
        tempStatusWin = [];
        
        //Checking for all winning combinations with ai steps 1 and 2
        for (i = 0; i < gameWinScheme.length; i++) {
          if ((gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
             gameWinScheme[i].indexOf(tempStatus[1]) !== -1) ||
            (gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
             gameWinScheme[i].indexOf(tempStatus[2]) !== -1) ||
            (gameWinScheme[i].indexOf(tempStatus[1]) !== -1 &&
             gameWinScheme[i].indexOf(tempStatus[2]) !== -1) ||
            (gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
             gameWinScheme[i].indexOf(tempStatus[3]) !== -1) ||
            (gameWinScheme[i].indexOf(tempStatus[1]) !== -1 &&
             gameWinScheme[i].indexOf(tempStatus[3]) !== -1) ||
            (gameWinScheme[i].indexOf(tempStatus[2]) !== -1 &&
             gameWinScheme[i].indexOf(tempStatus[3]) !== -1)) {
                tempStatusMoves.push(gameWinScheme[i]);
          } 
        }   
        
        //Getting all free moves
        getTempStatusFree();
        
        //Checking for third free move with free moves temp array and next ai moves temp array
        for (i = 0; i < tempStatusMoves.length; i++) {
            for (j = 0; j < tempStatus.length; j++) {
              if (tempStatusMoves[i].indexOf(tempStatus[j]) !== -1) {             
                tempStatusWin.push(tempStatus[j]);
              }  
            }
          }
      
        //If array with third free ai winning move is not empty
        //Randomly selecting on of move
        if (tempStatusWin.length > 0) {
        
          tempIndex = tempStatusWin[Math.floor(Math.random()*tempStatusWin.length)];
          $("#" + boxesList[tempIndex]).text(marksList[aiMark]).hide().slideDown();
          gameStatus[tempIndex] = aiMark;
        
        //If ai winning array is empty
        //Then ai must block user next move  
        } else {
          
          //Getting user moves
          getTempStatusUserMark()
          tempStatusMoves = [];
          tempStatusWin = [];
          
          //Checking for all winning combinations with user moves
          for (i = 0; i < gameWinScheme.length; i++) {
            if ((gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
                 gameWinScheme[i].indexOf(tempStatus[1]) !== -1) ||
                (gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
                 gameWinScheme[i].indexOf(tempStatus[2]) !== -1) ||
                (gameWinScheme[i].indexOf(tempStatus[1]) !== -1 &&
                 gameWinScheme[i].indexOf(tempStatus[2]) !== -1) ||
                (gameWinScheme[i].indexOf(tempStatus[0]) !== -1 &&
                 gameWinScheme[i].indexOf(tempStatus[3]) !== -1) ||
                (gameWinScheme[i].indexOf(tempStatus[1]) !== -1 &&
                 gameWinScheme[i].indexOf(tempStatus[3]) !== -1) ||
                (gameWinScheme[i].indexOf(tempStatus[2]) !== -1 &&
                 gameWinScheme[i].indexOf(tempStatus[3]) !== -1)) {
                    tempStatusMoves.push(gameWinScheme[i]);
            } 
          }   
          
          //Comparing free moves with user winning combinations
          getTempStatusFree();
     
          for (i = 0; i < tempStatusMoves.length; i++) {
            for (j = 0; j < tempStatus.length; j++) {
              if (tempStatusMoves[i].indexOf(tempStatus[j]) !== -1) {             
                    tempStatusWin.push(tempStatus[j]);
              }  
            }
          }
          
          //If user winning free moves array isn't empty
          //Randomly selecting next step and ai block it
          if (tempStatusWin.length > 0) {
      
            tempIndex = tempStatusWin[Math.floor(Math.random()*tempStatusWin.length)];
            $("#" + boxesList[tempIndex]).text(marksList[aiMark]).hide().slideDown();
            gameStatus[tempIndex] = aiMark;
          
          //If user winning array is empty - there's no danger of lose
          //Checking for posibility of winning - selecting free ai combinations  
          } else {
      
            getTempStatusAiMark();
            tempStatusMoves = [];
            tempStatusWin = [];
        
            for (i = 0; i < gameWinScheme.length; i++) {
              for (j = 0; j < tempStatus.length; j++) {
                if (gameWinScheme[i].indexOf(tempStatus[j]) !== -1) {
                  tempStatusMoves.push(gameWinScheme[i]);
                }
              }
            }   
 
            getTempStatusFree();

            for (i = 0; i < tempStatusMoves.length; i++) {
              for (j = 0; j < tempStatus.length; j++) {
                if (tempStatusMoves[i].indexOf(tempStatus[j]) !== -1) {             
                  tempStatusWin.push(tempStatus[j]);
                }  
              }
            }
        
            tempIndex = tempStatusWin[Math.floor(Math.random()*tempStatusWin.length)];
            $("#" + boxesList[tempIndex]).text(marksList[aiMark]).hide().slideDown();
            gameStatus[tempIndex] = aiMark;
             
          }
          
        }
      //Calling a function at the end of every step
      //Checking if there is a win, lose or there's no winning
      getWinning();
    }
    nextTurn = true;
  }  
  
});