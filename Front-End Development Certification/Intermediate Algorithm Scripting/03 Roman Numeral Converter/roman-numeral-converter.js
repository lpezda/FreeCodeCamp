function convertToRoman(num) {
 
  var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var stringResult = "";
  
  for (var i = 0; i < arabicArray.length; i++) {
     while (num >= arabicArray[i]) {
      stringResult += romanArray[i];
      num -= arabicArray[i];
     } 
  }
  return stringResult;
}