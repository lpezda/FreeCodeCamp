$("#submit").click(function() {
        
  var question = $("#search").val();
  
  $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {srsearch: question, action: "query", list: "search", format: "json"},
  
  function(results) {
    
    $("#results").empty();
    
    $.each(results.query.search, function(i, num) {
      
      $("#results").append("<dt><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(num.title) + "' target='_blank'>" + num.title + "</a></dt><dd>" + num.snippet + "</dd>");
     });
   });
});