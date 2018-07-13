const Discord = require("discord.js");
const snek = require("snekfetch");
const client = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;

clbot.configure({botapi: process.env.BOT_CLEVER});
client.on("ready", () => {
 
});

client.on("message", (message) => {
 
});

client.on('message', (message) => {
    var args = message.content.split(" ")
 
  
    if (message.author.equals(client.user)) return;
    if (message.mentions.members.size !== 0){
   
     
    if(message.mentions.members.first().id == "466476840253521920"){
        args.shift()
        args.join(" ")
        var message1 = args.join(" ")
        var message2 = encodeURIComponent(args.join(" "))
        var url = `https://api.dialogflow.com/v1/query?v=20170712&query=${message2}!&lang=fr&sessionId=f93516c0-58f7-1286-f79b-afd71932b11b&timezone=America/Toronto`
 
    snek.get(
        url,
        {headers:{"Authorization":"Bearer d7ea978ee0f54a64b25692ef39a3de6e"}})
        .then(response =>{
        if(!response.body.result.fullfillment.speech){
            clbot.write(args.join(" "), (response) => {
                message.channel.startTyping();
                setTimeout(() => {
                    message.channel.send(response.output).catch(console.error);
                    message.channel.stopTyping();
                }, Math.random() * (1 - 3) + 1 * 1000);
     
        });
    }
    else message.reply(response.body.result.fulfillment.speech)
  })

}}});

client.login(process.env.BOT_TOKEN);
