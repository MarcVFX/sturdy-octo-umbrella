
const Discord = require("discord.js");
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: process.env.BOT_CLEVER});
client.on("ready", () => {
 
});

client.on("message", (message) => {
 
});

client.on('message', (message) => {
  if (message.author.equals(client.user)) return;
  if (message.mentions.members.size !== 0){
     
 if(message.mentions.members.first().id == "466476840253521920"){
   
   
   clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
     
    });
 }
  }
  });

client.login(process.env.BOT_TOKEN);
