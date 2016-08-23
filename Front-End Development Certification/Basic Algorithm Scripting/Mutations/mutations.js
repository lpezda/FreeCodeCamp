function mutation(arr) {
  
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();
  var secondStringArray = secondString.split("");
  var valFlagArray = [];
  var valBoolean = false;
  
  for (var i = 0; i < secondStringArray.length; i++) {
    valFlagArray.push(firstString.indexOf(secondStringArray[i]));
  }
  
   if (valFlagArray.indexOf(-1) == -1) {
      valBoolean = true;
    } else {
      valBoolean = false;
    }
  
  return valBoolean;
}