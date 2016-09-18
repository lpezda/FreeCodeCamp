function factorialize(num) {
  
  var val = 1;
  
  for (var i = 1; i <= num; i++) {
    val *= i;
  }
  
  return val;
}