function rot13(str) {
  
  var charsArray = [];
  charsArray = str.split("");
  
  for (var i = 0; i < charsArray.length; i++) {
    charsArray[i] = charsArray[i].charCodeAt();
    
    if (charsArray[i] >= 65 && charsArray[i] <= 90) {
      charsArray[i] = String.fromCharCode((charsArray[i] - 65 + 13) % 26 + 65);
    } else {
      charsArray[i] = String.fromCharCode(charsArray[i]);
    }
  }
  return charsArray.join("");
}