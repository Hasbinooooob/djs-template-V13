const { Client, Message, MessageEmbed, ShardingManager } = require('discord.js');
const client = require('../index');
const config = require('../config/config.json')
/** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */


client.on('ready', () => {
  console.log(`${client.user.tag} Online`)
  client.user.setActivity({type: "PLAYING", name: `${config.prefix}help`})
})



