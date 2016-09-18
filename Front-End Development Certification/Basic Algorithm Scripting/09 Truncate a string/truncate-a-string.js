function truncateString(str, num) {
  
  var valTruncatedString = "";
  
  if (str.length > num) {

      if (num <= 3) {
         valTruncatedString = str.slice(0, num) + "..."; 
      } else {
         valTruncatedString = str.slice(0, num -3) + "...";    
      }   
  } else {
    valTruncatedString = str;
  }
  return valTruncatedString;
}