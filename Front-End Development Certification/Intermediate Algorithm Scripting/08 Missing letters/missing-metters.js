function fearNotLetter(str) {
  
  for (var i = 0; i < str.length; i++) {
    
    	if (str.charCodeAt(i) != (str.charCodeAt(0) + i)) {
      		return String.fromCharCode(str.charCodeAt(i) - 1);
    	}     
  }
  
  return undefined;
}