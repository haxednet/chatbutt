var mod = {
	callback: function(e){
		if (e.args.length < 2){
			e.irc.sendMessage({message: "nothing to find!"});
		}else{
			getAnswer(e.args.join(" ").replace("secret ",""), function(j){
				if(j.indexOf('<div id="allsecrets" name="allsecrets">') < 0) return;
				j = j.split('<div id="allsecrets" name="allsecrets">')[1];
				var g = j.split('<div class="sbl"><div class="sbr"><div class="stl"><div class="str">');
				if(g.length < 2){
					e.irc.sendMessage({message: "nothing was found :("});
					return;
				}
				
				var ans = g[getRndInteger(1,g.length-1)];
				ans = ans.split("<")[0];
				console.log(ans.replace(/\r|\n/g, ""));
				e.irc.sendMessage({message: ans.replace(/\r|\n/g, "")});
			});
		}
	}
}

function getAnswer(loc,callback){
	var https = require('https');

	var options = {
		host: 'www.secretsanon.com',
		path: '/?secretkeyword=' + urlEncode(loc) + '&key=quack',
		headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"}
	};
	https.get(options, function (res) {
		var json = '';
		res.on('data', function (chunk) {
			json += chunk;
		});
		res.on('end', function () {
			if (res.statusCode === 200) {
				callback(json);
			}else{
				console.log(res.statusCode);
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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = mod;

