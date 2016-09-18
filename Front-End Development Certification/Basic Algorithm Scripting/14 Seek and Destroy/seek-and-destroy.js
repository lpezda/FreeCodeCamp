function destroyer(arr) {
  
   var removedArray = [];
  
    for (var i = 1; i < arguments.length; i++) {
        removedArray.push(arguments[i]);
        arr = arguments[0].filter(
          function(value) {
            return (value !== removedArray[i - 1]);
        });  
    }
    return arr;
}