function reverseString(str) {
  
  var array = [];
  var result = "";
  
  array = str.split('');
  array.reverse();
  result = array.join('');
  
  return result;
}