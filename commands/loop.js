

const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "repeat",
  description: "repeat Your Queue and have fun",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("You Need To Be In Voice Channel")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("**There is nothing playing that i could loop**")
      return message.channel.send(embed);
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`**repeat is now ${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    message.channel.send(embed)
    
    
    
    
  }
}