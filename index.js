const { Client, Collection } = require("discord.js");
const express = require("express");
const app = express();

const client = new Client({
  intents: 32767,
});
module.exports = client;

app.listen(3000, () => {
console.log("Process is running!");
})

app.get("/", (req, res) => {
res.send("Hello world");
})

// Global Variables
client.commands = new Collection();
client.SlashCommands = new Collection();
client.config = require('./config.json');
const { prefix } = require('./config.json');
console.log(prefix)

// Initializing the project
require("./handler")(client);



//test

//bot online
client.login(process.env.TOKEN);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [antiCrash] :: Unhandled Rejection/Catch.\n---------------");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch.\n---------------");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR).\n---------------");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [antiCrash] :: Multiple Resolves.\n---------------");
  console.log(type, promise, reason);
});
