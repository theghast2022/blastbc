const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const prefix = '_'

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Code By : ZorexHost`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Code By : ZorexHost `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | in ${client.guilds.size} Servers `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
}); 

client.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
if(message.author.bot !== "388357326614167563") return;
if(message.content === prefix + "send") {
let args = message.content.split(" ").slice(1);
if(!args[0]) return message.channel.send("message please");
message.channel.send(`- Sending to **${client.users.size}** users!`);
client.users.forEach(r => {
r.send(args.join(" "))
.catch(e => {
if(e) return;
});
});
}
});


client.login('NTA4MjYwMzExMzU1MDk3MDk4.DvcmuA.OZP91zAb-jkzJ2sENTRLGzxdzaE');
