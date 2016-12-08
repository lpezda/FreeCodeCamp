function steamrollArray(arr) {
  
  var flattenArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    
    	if (Array.isArray(arr[i])) {
      	
      		flattenArray = flattenArray.concat(steamrollArray(arr[i]));
    
    } else {
      
      		flattenArray.push(arr[i]);
    } 
  }
  return flattenArray;
}