function addTogether() {
  
  if (arguments.length === 2) {    
    
    if (typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number') {
      
      return arguments[0] + arguments[1];
    
    } 
  
    return undefined;    

  } else if (arguments.length === 1) {    
    
    if (typeof(arguments[0]) === 'number') {      
      
      var temp = arguments[0];      
      
      return function(val) {
        
        if (typeof(val) === 'number') {
          
          return temp + val;
        }
        
        return undefined;
      };      
    }       
   
    return undefined;       
  }   

  return undefined;
}

