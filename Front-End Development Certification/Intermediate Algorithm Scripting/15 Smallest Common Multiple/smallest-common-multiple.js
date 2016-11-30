function smallestCommons(arr) {
  
  var rangeArray = [];
  
  arr = arr.sort(function(a,b) {
    								return a - b;
  							});
  
  for (var i = arr[0]; i <= arr[1]; i++ ) {
    	
    	rangeArray.push(i);  
  }
  
  return rangeArray.reduce(leastCommonMultiple);
}

function leastCommonMultiple(a, b) {
  	
  	return a * b / greatestCommonDivisor(a, b);
}

function greatestCommonDivisor(a, b) {
	
    if (b === 0) {
				return a;
	
	} else {
		
			return greatestCommonDivisor(b, a % b);
	}
}