function findElement(arr, func) {
  
  var resultArray = [];
  
  resultArray = arr.filter(func);
  
  return resultArray[0];
  
}