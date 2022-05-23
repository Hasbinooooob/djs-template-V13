const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  memberpermissions: [],
  description: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.channel.send({content: `\`${client.ws.ping} ms\``})
  },
};