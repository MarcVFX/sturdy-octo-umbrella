
const Discord = require("discord.js");
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
var cleverbot1 = {};

clbot.configure({botapi: process.env.BOT_CLEVER});
client.on("ready", () => {
 
});

client.on("message", (message) => {
 
});

client.on('message', (message) => {
  var args = message.content.split(" ")
 
  
  if (message.author.equals(client.user)) return;
  if (message.mentions.members.size !== 0){
    if(message.content == "!instance"){
 cleverbot1 = new Cleverbot;
        cleverbot1[message.author.id] = clbot;
 }
     
 if(message.mentions.members.first().id == "466476840253521920"){
    args.shift()
 args.join(" ")
   if (cleverbot1[message.author.id]) {
   cleverbot1[message.author.id].write(args.join(" "), (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
     
    });
 }
  }
 }
 
  });

client.login(process.env.BOT_TOKEN);
