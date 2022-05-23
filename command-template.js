//command
const { Client, Message, MessageEmbed } = require("discord.js");
const config = require("../../config/config.json");


module.exports = {
  name: "",
  aliases: [],
  memberpermissions: [],
  description: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    //code
  },
};

//slash command

const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../config/config.json");

module.exports = {
  name: "",
  description: "",
  memberpermissions: [],
  options: [],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    try {
      //code
      
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
