const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../config/config.json");

module.exports = {
  name: "ping",
  description: "ping command",
  memberpermissions: [],
  options: [],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    try {

      interaction.followUp({content: `\`${client.ws.ping} ms\``})


    } catch (error) {
      console.log(error.stack);
      interaction.followUp({
        embeds: [
          new MessageEmbed()
            .setColor(ee.color)
            .setTitle(`ERROR | An error occurred!`)
            .setDescription(`\`${error.message}\``),
        ],
      });
    }
  },
};