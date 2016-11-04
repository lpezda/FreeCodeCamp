function translatePigLatin(str) {
  
  var strPigLatin = "";
  var vowelIndex;
  
  if (str[0].search(/[aeiou]/) != -1) {
    
    	strPigLatin = str + "way";
  
  } else {
    
    	vowelIndex = str.indexOf(str.match(/[aeiou]/)[0]);
    	strPigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
       
  }
  
  return strPigLatin;
}