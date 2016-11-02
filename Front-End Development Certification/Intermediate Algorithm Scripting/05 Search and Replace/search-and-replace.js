function myReplace(str, before, after) {
  
  var beforeIndex = str.indexOf(before);
  
  if (str[beforeIndex] == str[beforeIndex].toUpperCase()) {
   		after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  return str.replace(before, after);
}