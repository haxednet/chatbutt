var mod = {
	callback: function(e){
		if (e.args.length < 2){
			e.irc.sendMessage({message: "nothing to find!"});
		}else{
			getAnswer(e.args.join(" ").replace("ask ",""), function(j){
				console.log(j);
				e.irc.sendMessage({message: j});
			});
		}
	}
}

function getAnswer(loc,callback){
	var https = require('https');

	var options = {
		host: 'api.haxed.net',
		path: 'http://api.haxed.net/answers/?q=' + urlEncode(loc) + '&key=quack'
	};
	https.get(options, function (res) {
		var json = '';
		res.on('data', function (chunk) {
			json += chunk;
		});
		res.on('end', function () {
			if (res.statusCode === 200) {
				callback(json);
			}
		});
	}).on('error', function (err) {
	});
}

function urlEncode(e){
	e = e.replace(/\+/g, " plus ");
	e = encodeURIComponent(e);
	console.log(e);
	return e;
}

module.exports = mod;

