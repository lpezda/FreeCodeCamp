function truthCheck(collection, pre) {
  
  return collection.every(function (val) {
    
    	return val.hasOwnProperty(pre) && Boolean(val[pre]);
  });
}