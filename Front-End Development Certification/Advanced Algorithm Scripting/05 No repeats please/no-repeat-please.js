function permAlone(str) {
  
  var array = str.split('');
  var regex = /(.)\1/;
  var permutations = [];
  var temp = "";
  var result = [];
 
  function swap(a, b) {
      
      temp = array[a];
      array[a] = array[b];
      array[b] = temp;
  }
 
  function generate(n) {
      
      if (n === 1) {
      
          permutations.push(array.join(''));
      
      } else {
      
          for (var i = 0; i != n; i++) {
            	generate(n - 1);
            	swap(n % 2 ? 0 : i, n - 1);
          }
      }
    }
 
  generate(array.length);
    
  result = permutations.filter(function(string) {
    											return !regex.test(string);
  											});
  
  return result.length; 
}