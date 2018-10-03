var http = require('http');


var mod = {
	callback: function(e){
		if (e.args.length < 2){
			e.irc.sendMessage({message: "no location given!"});
		}else{
			getWeather(e.args.join("+").replace("weather ",""), function(j){
				if(j.error == "none"){
					var msg = "";
					for(var i in j){
						if(i != "error") msg += bold(i) + ": " + j[i] + " // ";
					}
					e.irc.sendMessage({message: msg});
					console.log(j);
				}else{
					e.irc.sendMessage({message: j.error});
				}
			});
		}
	}
}

function colored(c,t){
	return String.fromCharCode(3)+c+t+String.fromCharCode(3);
}
function bold(t){
	return String.fromCharCode(2)+t+String.fromCharCode(2);
}
function getWeather(loc,callback){
	var https = require('https');

	var options = {
		host: 'api.haxed.net',
		path: '/weather/?location=' + loc + '&key=quack'
	};
	https.get(options, function (res) {
		var json = '';
		res.on('data', function (chunk) {
			json += chunk;
		});
		res.on('end', function () {
			if (res.statusCode === 200) {
				var data = JSON.parse(json);
				
				callback(data);
			}
		});
	}).on('error', function (err) {
	});
}

module.exports = mod;