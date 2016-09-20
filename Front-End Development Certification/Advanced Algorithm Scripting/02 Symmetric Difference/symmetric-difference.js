function sym(args) {
  
  var argumentsList = Array.prototype.slice.call(arguments);

  function diff(array1, array2) {
    
    var collect1 = array2.filter(function(val) {
        return array1.indexOf(val) === -1;
    });
    
    var collect2 = array1.filter(function(val) {
        return array2.indexOf(val) === -1;
    });
    
    var collect = collect2.concat(collect1).filter(function(val, indx, arr) {   
        return arr.indexOf(val) === indx;
    });

    return collect;
  }
  return argumentsList.reduce(diff, []);
}