$(document).ready(getLocation);

var tempUnit = 'metric';

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition); 
};

function showPosition(position) {  
  coordLat = position.coords.latitude;
  coordLon = position.coords.longitude;
  callbackWeather();
};

function getData(parameter) {
  var city = parameter.name;
  var temperature = parameter.main.temp;
  var temperatureUnit = tempUnit == "metric" ? "°C" : "°F";
  var weatherDescription = parameter.weather[0].description;
  var weatherIndex = parameter.weather[0].icon;

  $('#weatherbox').html('<img src="https://openweathermap.org/img/w/' + weatherIndex +
    '.png" alt="Weather condition icon"><ul><li>City: ' + city + '</li><li>Temperature: ' + Math.round(temperature) + ' ' + temperatureUnit +
    '</li><li>Condition: ' + weatherDescription + '</li></ul>');
};

function callbackWeather() {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + coordLat + "&lon=" +
    coordLon + "&units=" + tempUnit + "&appid=3e887d09f36a99d9cfae327aa0cb0971", getData);
};

$("#buttonChangeTemp").click(function() {
  (tempUnit == "metric") ? tempUnit = "imperial" : tempUnit = "metric";
  callbackWeather();
});