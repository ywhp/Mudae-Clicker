const { Client,WebhookClient, MessageEmbed} = require('discord.js-selfbot-v13');
 const client = new Client({checkUpdate:false}); 
 client.on('ready', async () => {
   console.log(`${client.user.username} is Ready!`);
 })
const {token} = require('./config.json')
const likelist = require("./likelist");

function MudaeClicker (guildId,channelId,Webhook){
const Hook = new WebhookClient({ url: `${Webhook}`});
client.on("messageCreate",message=> {
  for (let i=0;i<likelist.length;+i++){
    let Object = likelist[i]
  message.embeds.filter(embed => {
    if(message.guildId !=guildId)return;
    if(!Webhook)return;
    if(message.channelId === channelId){
    if(embed.footer?.text.startsWith("Belongs to"))return;
    if(embed.author){
      if(embed.author.name === Object){
      message.clickButton();
      let embed = new MessageEmbed()
      .setTitle(`${Object}`)
      .setColor("#fbe7a1")
      .setDescription(`${message.url}`)
      .setTimestamp()
      Hook.send({
        embeds: [embed]
   })
    }
  }
  }
  })
}
})
}
MudaeClicker("guildId","channelId","WebHookURL")

client.login(token);
