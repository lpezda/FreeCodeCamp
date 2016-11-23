function sumFibs(num) {
  
  var prevFib = 0;
  var curFib = 1;
  var nextFib = 0;
  var sum = 0;

  while(curFib <= num) {
    
    if (curFib % 2 !== 0) {
        sum += curFib;
    }
    
    nextFib = curFib + prevFib;
    prevFib = curFib;
    curFib = nextFib;
  }
  
  return sum;
}