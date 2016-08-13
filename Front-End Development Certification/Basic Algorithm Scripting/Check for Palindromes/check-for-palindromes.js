function palindrome(str) {
  
  var valString = "";
  var valLower = "";
  var valArray = [];
  var result = "";
  
  valLower = str.toLowerCase();
  valString = valLower.replace(/[^a-z0-9]/g, '');
  
  valArray = valString.split('');
  valArray.reverse();
  result = valArray.join('');
   
  if (valString == result) {
    return true;
  } else {
    return false;
  } 
}