var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];	

var userInfo = "";
var userLogo = "";
var userStatus = "";
var noLogoUrl = "https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png";

function getUserStream () {
 $.ajax({
		url: "https://api.twitch.tv/kraken/streams/" + userNames[i] + "?callback=?",
		dataType: "jsonp",
		data: {
			format: "json"
		},
		success: function (data) {
			fetchUserStream(data);
		}
	});
}
	
function fetchUserStream (data) {
	if (data.stream === null) {   
		$.ajax({
			url: "https://api.twitch.tv/kraken/channels/" + data._links.channel.substr(38),
			dataType: "jsonp",
			data: {
            	format: "json"
         	},
			success: function (data) {
				if (data.logo !== null) {
                	userLogo = data.logo;
            	} else {
              		userLogo = noLogoUrl;
            	}
            	userInfo = '<a href="' + data.url + '" target="_blank"' + '">' + data.display_name + '</a>' + ' is offline';
            	userStatus = "offline";
				    updateHTML();
				}
		});
    } else if (data.stream === undefined) {
    	userLogo = noLogoUrl;
        userInfo = data.message;
        userStatus = "unavailable";
		updateHTML();
    } else {
        userLogo = data.stream.channel.logo;
		userInfo = '<a href="https://twitch.tv/' + data._links.channel.substr(38) + '" target="_blank"' + '">' + data.stream.channel.display_name +  '</a>' + ' is streaming: ' + data.stream.game;
        userStatus = "online";
		updateHTML();
	}
}

function updateHTML () {
	$("#stream").append('<li class="' + userStatus + '"><img src="' + userLogo + '" alt="avatar">' + userInfo + '</li>');		
}

for (var i = 0; i < userNames.length; i++) {
	getUserStream();
}