function compareNumbers(a, b) {
  return a - b;
}

function getIndexToIns(arr, num) {
  
  arr.sort(compareNumbers);
  
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return num = i;
    } 
  }
  return num = arr.length;
}