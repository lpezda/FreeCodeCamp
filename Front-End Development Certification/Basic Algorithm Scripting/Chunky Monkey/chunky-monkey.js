function chunkArrayInGroups(arr, size) {
  
  var valArray = [];
  
  for (var i = 0; i < arr.length; i += size) {
    valArray.push(arr.slice(i, i+size));
  }
  return valArray;
}