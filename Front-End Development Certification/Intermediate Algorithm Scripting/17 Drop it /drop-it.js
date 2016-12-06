function dropElements(arr, func) {

 var dropArray = [];
 var resultArray = [];
 
 dropArray = arr.filter(func);
 
 	if (dropArray.length !== 0) { 
   
   	resultArray = arr.slice(arr.indexOf(dropArray[0]), arr[arr.length]);
	
	} else {
 	
 		resultArray = dropArray;
	}
  
 	return resultArray;
}