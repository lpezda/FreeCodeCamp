function largestOfFour(arr) {
  
  var valArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    
    var valLargestTemp = 0;
    
    for (var j = 0; j < arr[i].length; j++) {
               
      if (arr[i][j] > valLargestTemp) {
        valLargestTemp = arr[i][j];
      }   
    }
    valArray.push(valLargestTemp);
  }
  return valArray;
}