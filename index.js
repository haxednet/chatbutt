const irc = require('simple-irc');
const fs = require('fs');

const modules = [];
const settings = {
	prefix: "?",
	chanopsAsAdmin: true,
	admins: ["duckgoose!*@*"]
}

let lastChannel = "#null";

loadMods();

const bot = new irc({
	server: { address: "chat.freenode.net", port: 6667 },
	userInfo: { nick: "roar", username: "roar", auth: {
			type: irc().authType.nickServ,
			user: "roar",
			password: "removed"
		} },
	channels: [
		{ name: "##defocus" }
	]
});

bot.onPrivmsg = function( e ){
	lastChannel = e.to;
	if(!e.toChannel) lastChannel = e.from;
	if(e.message.substr(0,1) == settings.prefix){
		let bits = e.message.substr(1).split(" ");
		let command = bits[0].toLowerCase();
		
		switch(command){
			case "reload":
				loadMods(function(){
					e.reply("All modules reloaded" );
				});
				break;
			case "help":
				let coms = ".help .load";
				for(let i in modules){
					coms += " ." + modules[i].name;
				}
				e.reply("I support the following commands: " + coms);
				break;
			default:
				let val = callMod(bits);
		}
	}
}

var ircComs = {
	sendMessage: function(e){
		let toChannel = e.dest || lastChannel;
		console.log(toChannel);
		bot.sendMessage({ message: e.message, to: toChannel });
	}
}

function callMod(e){
	for(let i in modules){
		if(modules[i].name == e[0].toLowerCase()){
			try{
				return modules[i].mod.callback({args: e, irc: ircComs });
			}catch(e){
				bot.sendMessage({ message: "module " + modules[i].name + " has caused an error.", to: lastChannel });
			}
		}
	}
	return false;
}

function loadMods(callback){
	for(let i in modules){
		delete require.cache[require.resolve("./modules/" + modules[i].name + "/index.js")];
	}
	modules.splice(0,modules.length);
	fs.readdir("./modules", function(err, files) { 
		for(let i in files){
			console.log("Loading module " + files[i]);
			modules.push({name: files[i], mod: require("./modules/" + files[i] + "/index.js")});
		}
		if(callback!=undefined) callback();
	});
}