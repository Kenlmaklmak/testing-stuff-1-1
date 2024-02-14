const client = require("../index");


client.on("messageCreate", async (message) => {
  let member = message.member

  
  if(message.author.bot) return;
  if (message.guild.id !== '989779307457044523') return;

  if(message.content.includes(`@`) ||  message.content.includes(".")) {
    if( member.roles?.cache.has('1041562280288067614')) { 
      let emoji1 = [`<a:36_crow:1029259233763532892>`,`<a:36_crow:1136877835303264258>`,`<a:36_crow_4:1136877216119132270>`,`<a:36_crow_5:1136877258531934288>`,`<a:36_crow_6:1136877294565216266>`,`<a:36_crow_7:1136877322734145596>`,`<a:36_crow_8:1136877364668809247>`,`<a:36_crow_1:1136877869851738262>`,`<a:36_crow_9:1136877399787712574>`]
    message.react(emoji1[Math.floor(Math.random() * emoji1.length)])
    }
    if(member.roles?.cache.has('1023192613056151634')) { 
      let emoji2 = [`<a:36_star:1011419962981744761>`, `<a:36_star_1:1059865045489684570>`, `<a:36_star_2:1059865083842408459>`, `<a:36_star_3:1059865107678625873>`, `<a:36_boost_badge:1006577169314623629>`, `<a:36_heart:1006577124498493542>`, `<a:36_butterflys_2:1011420003939131513>`, ` <a:36_butterflys_1:1006721508183384085>`]
      message.react(emoji2[Math.floor(Math.random() * emoji2.length)])

    }

      if( member.roles?.cache.has('1163719744399093792')) { 
       let emoji3 = [`<a:halloween_bongo:1164101827244085289>`, `<a:halloween_hamster:1164102682886295582>`, `<a:halloween_pumkin:1164102005787197512>`, `<:emoji_25:1164103896231313478>`]
       message.react(emoji3[Math.floor(Math.random() * emoji3.length)])
      }

        if( member.roles?.cache.has('1163719299744153650')) { 
         let emoji4 = [`<:emoji_25:1164103896231313478>`]
         message.react(emoji4[Math.floor(Math.random() * emoji4.length)])



    }
     };
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});