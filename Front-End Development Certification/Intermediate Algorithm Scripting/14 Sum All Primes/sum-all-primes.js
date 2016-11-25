function sumPrimes(num) {
  
  function isPrime(value){
    
    for (var i = 2; i < value; i++) {
      
      	if (value % i === 0){
        		return false;
    		}
  	}
  	return true;
	}

  var result = 0;

  for (var i = 2; i <= num; i++) {   

    	if (isPrime(i))  {
      
      	result += i;
    	}
  }
  return result;
  
}