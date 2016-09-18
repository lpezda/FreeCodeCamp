function getQuote() {
	$.getJSON('http://whateverorigin.org/get?url=' +    encodeURIComponent('http://quotes.stormconsultancy.co.uk/random.json') + '&callback=?', function(json) {

		var content = JSON.parse(json.contents);
    	var quoteString = "<p>\"" + content.quote + "\" </p>" + "<p>-  " + content.author + "</p>"

    	$('#quotecontainer').html(quoteString);
  	 });
}

$(document).ready(function() {

  getQuote();
  
  $("#random").on("click", function() {
    getQuote();
  });  
  
  $('#tweet').on('click', function() {

  	var quoteText = $('#quotecontainer').text();

    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteText), "blank_");
  })
});