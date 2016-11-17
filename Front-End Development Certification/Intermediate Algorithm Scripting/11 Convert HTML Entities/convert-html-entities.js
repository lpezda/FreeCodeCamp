function convertHTML(str) {
  
  var convertedString = "";
  
  convertedString = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
  
  return convertedString;
}