function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var second = Object.keys(source);

  arr = collection.filter(function (obj) {
    
    							return second.every(function (key) {
      
      										return obj.hasOwnProperty(key) && obj[key] == source[key];
    
    							});
   			});
  // Only change code above this line
  return arr;
}