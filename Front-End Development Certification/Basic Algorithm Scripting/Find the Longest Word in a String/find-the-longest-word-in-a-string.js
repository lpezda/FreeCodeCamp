function findLongestWord(str) {
  
  var valArray = [];
  var valLength = 0;
  
  valArray = str.split(" ");
  
  for (var i = 0; i < valArray.length; i++) {
      if (valArray[i].length > valLength) {
        valLength = valArray[i].length;
      }
  }
  return valLength;
}