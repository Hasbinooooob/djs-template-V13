const { Client, Collection } = require("discord.js");
const colors = require("colors");
const fs = require("fs");
const config = require("./config/config.json");
// client
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  disableEveryone: true,
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  intents: 32767,
});
module.exports = client;

client.setMaxListeners(50);
require("events").defaultMaxListeners = 50;
// Global Variables
client.slashCommands = new Collection();
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.category = fs.readdirSync("./commands/");
//handlers
function handlers() {
  client.basicshandlers = Array("command", "event", "slash");
  client.basicshandlers.forEach((handler) => {
    try {
      require(`./handlers/${handler}`)(client);
    } catch (e) {
      console.log(e.stack);
    }
  });
}
handlers();
client.login(config.token);

module.exports = handlers;
//anti crash by Tomato6966
process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [Error_Handling] :: Multiple Resolves");
  console.log(type, promise, reason);
});
