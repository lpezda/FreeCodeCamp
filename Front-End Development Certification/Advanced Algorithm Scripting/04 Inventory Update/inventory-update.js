function updateInventory(arr1, arr2) {
    
    for (var i = 0; i < arr1.length; i++) {
      	for (var j = 0; j < arr2.length; j++) {
        
        	if (arr1[i][1] == arr2[j][1]) {
          		
          		arr1[i][0] += arr2[j][0]; 
          		arr2.splice(arr2.indexOf(arr2[j]), 1);
        	} 
      	}
    }
    
    for (i = 0; i < arr2.length; i++) {
      	
      	arr1.push(arr2[i]);
    }
  
    return arr1.sort(function (a, b) {
      				
      				if (a[1] > b[1]) {
        					
        					return 1;
      				}
      
      				if (a[1] < b[1]) {
        					
        					return -1;
      				}
        			
        			return 0;
   });
}