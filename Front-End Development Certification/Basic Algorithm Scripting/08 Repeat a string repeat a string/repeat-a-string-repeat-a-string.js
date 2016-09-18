function repeatStringNumTimes(str, num) {
  
  var valString = "";
  
  if (num > 0) {
    for (var i = 1; i <= num; i++) {
      valString += str;
    }
    return valString;
  } else {
    return valString;
  } 
}