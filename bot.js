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
const prefix = '-'

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "508574921010577409") return;

  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
} 
if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
} 



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


client.on("message", message => {

    if (message.content.startsWith(prefix + "obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});



client.on('message', message => {
    var prefix = "-";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'ebc') {
        if (!args[1]) {
    message.channel.send("-ebc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });

client.login(process.env.BOT_TOKEN);
