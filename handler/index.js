const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const Database = require("@replit/database");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    
  
    client.on("ready", async () => {
        // Register for a single guild
        
   client.user.setActivity('nụ cười của Em', { type: 'WATCHING' },)

        // Register for all the guilds the bot is in
       
    });
};