function sumAll(arr) {
  
  var numMax = Math.max(arr[0], arr[1]);
  var numMin = Math.min(arr[0], arr[1]);
  var result = 0;
  
  result = (numMax - numMin + 1) * (numMin + numMax) / 2;
  
  return result;
}