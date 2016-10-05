function pairwise(arr, arg) {
  
  if (arr.length === 0) { 
    
    return 0;
  }
  
  var resultArray = [];
 
  for (var i = 0; i < arr.length; i++) {
        
      for (var j = 0; j < arr.length; j++) {
            
          if (i != j &&
          		arr[i] + arr[j] == arg &&
          		resultArray.indexOf(i) == -1 &&
          		resultArray.indexOf(j) == -1) {
                
                resultArray.push(i, j);
                break;
          }
      }
   }
 
   return resultArray.reduce(function(a, b) {
        
        return a + b;
   });
}