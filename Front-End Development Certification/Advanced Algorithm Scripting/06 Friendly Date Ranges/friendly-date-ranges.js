function makeFriendlyDates(arr) {
  
  var firstDateArray = [];
  var secondDateArray = [];
  var firstDayString = "";
  var secondDayString = "";
  var firstMonthString = "";
  var secondMonthString = "";
  var firstDay = 0;
  var secondDay = 0;
  var firstMonth = 0;
  var secondMonth = 0;
  var firstYear = 0;
  var secondYear = 0;
  var result = [];
  
  //Array with months object to make strings
  var monthArray = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  
  //Split input to two arrays with date data, each contains year, month, day
  firstDateArray = arr[0].split("-");
  secondDateArray = arr[1].split("-");
  
  //Loop for parse every string to decimal
  for (var i = 0; i < 3; i++) {
    
    	firstDateArray[i] = parseInt(firstDateArray[i], 10);
    	secondDateArray[i] = parseInt(secondDateArray[i], 10);
  }
  
  //function to make day number to a ordinal string
  function makeOrdinalDay(num) {
   
   switch (num) {
     case 1:
     case 21:
     case 31:
       num += "st";
       break;
     case 2:
     case 22:
       num += "nd";
       break;
     case 3:
     case 23:
       num += "rd";
       break;
     default:
       num += "th";
    }   
    return num;
  }
  
  //Filling day and month strings with use of monthArray for months and makeOrdinalDay for days
  firstDayString = makeOrdinalDay(firstDateArray[2]);
  firstMonthString = monthArray[firstDateArray[1]];
  secondDayString = makeOrdinalDay(secondDateArray[2]);
  secondMonthString = monthArray[secondDateArray[1]];
  
  //Renaming variables for easier use in later if... else
  firstDay = firstDateArray[2];
  secondDay = secondDateArray[2];
  firstMonth = firstDateArray[1];
  secondMonth = secondDateArray[1];
  firstYear = firstDateArray[0];
  secondYear = secondDateArray[0];
  
  //Making date object for every date data - notice month -1 - in date JS function month is 0 to 11
  var firstDate = new Date(firstYear, firstMonth - 1, firstDay);
  var secondDate = new Date(secondYear, secondMonth -1, secondDay);
  
  //Calculating difference in days - date object is miliseconds so second parameter is presenting day in miliseconds
  var difference = secondDate - firstDate;
  var differenceDate = Math.round(difference/(1000 * 60 * 60 * 24));
 
  //Case 1 - it's the same day
  if(firstYear === secondYear && firstMonth === secondMonth && firstDay === secondDay) {
    
    result.push(firstMonthString + " " + firstDayString + ", " + firstYear);

  //Case 2 - It's the same year and same month
  } else if (firstYear === secondYear && firstMonth === secondMonth) {
   
    result.push(firstMonthString + " " + firstDayString);
    result.push(secondDayString);
  
  //Case 3 - Same year but other months
  } else if (firstYear === secondYear) {
  
    result.push(firstMonthString + " " + firstDayString + ", " + firstYear);
    result.push(secondMonthString + " " + secondDayString);
  
  //Case 4 - It's current year and second date is less than 365 days
  } else if(firstYear === 2016 && differenceDate < 365) {
  
    result.push(firstMonthString + " " + firstDayString);
    result.push(secondMonthString + " " + secondDayString);
  
  //Case 5 - less than 365 days to second date
  } else if(differenceDate < 365) {
    
    result.push(firstMonthString + " " + firstDayString + ", " + firstYear);
    result.push(secondMonthString + " " + secondDayString);
  
  //Case 6 - More than 365 days difference
  } else {
   
    result.push(firstMonthString + " " + firstDayString + ", " + firstYear);
    result.push(secondMonthString + " " + secondDayString + ", " +  secondYear);
  }
  
  return result;
}