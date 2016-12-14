function binaryAgent(str) {
  
  var strArray = [];
  var result = [];
  
  strArray = str.split(" ");
  
  for (var i = 0; i < strArray.length; i++) {
    
    	result.push(String.fromCharCode(parseInt(strArray[i], 2)));
    
  }
  
  result = result.join("");
  
  return result;
}