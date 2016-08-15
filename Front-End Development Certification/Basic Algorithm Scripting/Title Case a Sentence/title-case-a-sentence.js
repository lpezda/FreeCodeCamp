function titleCase(str) {

  var valArrayFirstLevel = [];
  var valArraySecondLevel = [];
  
  valArrayFirstLevel = str.toLowerCase().split(" ");
  
  for (var i = 0; i < valArrayFirstLevel.length; i++) {
    valArraySecondLevel = valArrayFirstLevel[i].split("");
    valArraySecondLevel[0] = valArraySecondLevel[0].toUpperCase();
    valArrayFirstLevel[i] = valArraySecondLevel.join("");
  }
  
  return valArrayFirstLevel.join(" ");
}