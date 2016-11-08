function pairElement(str) {
  
  var strArray = [];
  var matchPair = {A: "T", T: "A", C: "G", G: "C"};
  var resultArray = [];
  
  strArray = str.split("");
  
  for (var i = 0; i < strArray.length; i++) {
    
    		resultArray.push([strArray[i], matchPair[strArray[i]]]);
    
  }
  
  return resultArray;
}