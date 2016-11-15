function uniteUnique(arr) {
  
  var resultArray = [];
  var argumentsArray = [];
  var indexArray = [];
  
  for (var i = 0; i < arguments.length; i++) {
     
      argumentsArray = arguments[i];

      for (var j = 0; j < argumentsArray.length; j++) {
      
          indexArray = argumentsArray[j];

            if (resultArray.indexOf(indexArray) < 0) {
                resultArray.push(indexArray);
            }
      }
  }

  return resultArray;
}