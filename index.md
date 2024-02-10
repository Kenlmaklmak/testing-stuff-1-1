const express = require("express");
const app = express();
const Database = require("@replit/database")
const db = new Database()
const { Client, Collection } = require('discord.js');
const { glob } = require("glob");
const globPromise = promisify(glob);


app.listen(3000, () => {
console.log("Process is running!");
})

app.get("/", (req, res) => {
res.send("Hello world");
})

const Discord = require("discord.js");

const config = require('./config.json')
const client = new Client({
  intents: 332767,
});
const {prefix} = require('./config.json');
console.log(prefix)
const fs = require("fs");

// emitted when the bot is ready
client.snipe = new Discord.Collection()


// emitted when someone is sending a message, including bot(s)
// param name       type
// message          Message
// Message class - https://discord.js.org/#/docs/discord.js/stable/class/Message
client.commang = new Collection();
client.Scommang = new Collection();
client.config = require("./config.json");

//the normal command handler
const commandFiles = fs.readdirSync('./commang').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
 const command = require(`./commang/${file}`);
 
 client.commang.set(command.name, command);
}



//the slash command handler
const Scommang = await globPromise(
        `${process.cwd()}/Scommang/*/*.js`
    );

    const arrayOfSlashCommands = [];
    Scommang.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.Scommang.set(file.name, file);


const chao = require(`./topsv.json`)


client.on("messageCreate", async (message) => {
  
  if(message.content.includes(`@`) ||  message.content.includes(".")) {
    if(message.member.roles.cache.has('1041562280288067614')) { 
      let emoji1 = [`<a:36_crow:995851638067699782>`, `<a:36_crow_2:1006725729318355004>`, `<a:36_crow_1:1006725761283145820>`]

  message.react(emoji1[Math.floor(Math.random() * emoji1.length)])

      
    
    }
    
    if(message.member.roles.cache.has('1023192613056151634')) { 
      let emoji2 = [`<a:36_star:1011419962981744761>`, `<a:36_star_1:1059865045489684570>`, `<a:36_star_2:1059865083842408459>`, `<a:36_star_3:1059865107678625873>`, `<a:36_boost_badge:1006577169314623629>`]
      message.react(emoji2[Math.floor(Math.random() * emoji2.length)])
    
      
    }
  }
  

  
  
  if(message.content.includes(`ello`)) {
    let replies = [`Chào cậu !! <a:ghost_exhi:1057527370380234782>`, `Nói đi cậu <:alime_tomo:1057528300249022534>`, `<:cat_swag_hi:1035777522241130496>`, `Nice to meet you <:worry_like:1023952763614404659>`, `Belu <:alime_khunglong:1026492521800540243>`, `Chào người đẹp <:cheems:991616059448766475>`, `Rất vui khi được gặp bạn <:froggy_uwu:1056118470498070558>`, `Tơ muốn hơn thế nữa... <:k_duck_eto:1007488883388325989>`]  

 //you can continue it like this , "another reply", "one more reply"]
    if(!message.member.roles.cache.has("1057543981703114863")) return


message.reply(replies[Math.floor(Math.random() * replies.length)])
                           
}
  
  if (
    message.author.bot || 
    !message.guild || 
    !message.content.toLowerCase().startsWith(prefix)
  ) return
  
  const [cmd, ...args] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)
  const command = client.commang.get(cmd.toLowerCase()) || client.commang.find(c => c.aliases?.includes(cmd.toLowerCase()))
  if (!command) return
  await command.run(client, message, args);
});
client.on("interactionCreate", async (interaction) => {
   if(!interaction.isCommand())
return;
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.Scommang.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.Scommang.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});

// ok
client.on('debug', (message) => {
  console.log(message)
})
// make the bot online!
client.login(config.token);

setTimeout(function() {
  if (!client || client.user) {
    console.log("Status: Working")
  } else {
    
    console.log("Status: Restarting")
    process.kill(1)
  }
}, 2000)