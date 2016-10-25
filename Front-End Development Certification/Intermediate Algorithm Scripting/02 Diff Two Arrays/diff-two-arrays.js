function diffArray(arr1, arr2) {
  
  var tempArray = [];
  var newArray = [];
  
  tempArray = arr1.concat(arr2);
  
  newArray = tempArray.filter(function(value, index, array) {
    
    										return array.indexOf(value) === array.lastIndexOf(value); 
    
    									});

  return newArray;
}