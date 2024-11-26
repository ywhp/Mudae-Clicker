const { Client,WebhookClient, MessageEmbed} = require('discord.js-selfbot-v13');
 const client = new Client({checkUpdate:false}); 
 client.on('ready', async () => {
   console.log(`${client.user.username} is Ready!`);
 })
const {token} = require('./config.json')
const WishList = require("./WishList");


function AutoClicker (guildId,channelId,Webhook){
const Hook = new WebhookClient({ url: `${Webhook}`});
let lastClaim = null;
let claimTime = null;
client.on("messageCreate", async message=> {
  for (let i=0;i<wishList.length;+i++){
  let Object = wishList[i]
  message.embeds.filter(async embed => {
    if(message.guildId !=guildId)return;
    if(message.channelId === channelId){
    if(embed.footer?.text.startsWith("Belongs to"))return;
    if(embed.footer?.text.includes('/'))return;
    if(embed.author){
      if(embed.author.name === Object){
        let currentTime = new Date();
        if(claimTime && lastClaim && currentTime - lastClaim < 60 * 60 * 100){
          console.log('claim timer active , skipping...')
          return;
        }
          
      await message.clickButton();
      let embed = new MessageEmbed()
      .setTitle(`${Object}`)
      .setColor("#fbe7a1")
      .setDescription(`${message.url}`)
      .setTimestamp()
      Hook.send({
        embeds: [embed]
   })
   lastClaim = new Date();
   let currentMinutes = lastClaim.getMinutes()
   let remainingMinutes = 60 - currentMinutes;
   let resetTime = remainingMinutes * 60 * 1000;
   claimTime = setTimeout(() => {
     claimTime = null;
     lastClaim = null;
     console.log('claim reset..')
   },resetTime);
    }
  }
  }
    })
}
})
}
AutoClicker("guildId","channelId","WebHookURL")

client.login(token);
