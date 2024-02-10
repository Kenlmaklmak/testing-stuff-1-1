client.on("messageCreate", message => {
    
    if (message.content.startsWith('-ban')) return;

    const args = message.content.slice(" ");

const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const reason = args.slice(1).join(` `) || "No reason provided.";

    if(!mentionedMember) return message.reply(`*please mention a user!*`)

    if(!message.member.permissions.has('BAN_MEMBERS')) {
      const banError = new Discord.MessageEmbed()
      .setDescription(`**You don't have permission to ban users!**`)
      return message.reply({ embeds: [banError] })
      
      } else if(!message.guild.me.permissions.has('BAN_MEMBERS')) {
      const banErrorBot = new Discord.MessageEmbed()
      .setDescription(`**I don't have have permission to ban users!**`)
      return message.reply({ embeds: [banErrorBot] })
      }

    const mentionedPosition = mentionedMember.roles.highest.position
    const memberPosition = message.member.roles.highest.position
    const botPosition = message.guild.me.roles.highest.position

    if(memberPosition <= mentionedPosition) {
      const banErr = new Discord.MessageEmbed()
      .setDescription(`**You can't ban user with equal/higher role than you!**`)
      return message.reply({ embeds: [banErr] })
    } else if(botPosition <= mentionedPosition) {
      const banErrBot = new Discord.MessageEmbed()
      .setDescription(`**I can't ban user with equal/higher roles!**`)
      return message.reply({ embeds: [banErrBot] })
    }

    try{
      const reasonDM = new Discord.MessageEmbed()
      .setTitle(`〙*You have been banned by ${message.author.tag} from the server!〘*`)
      .setDescription(`『Reason: ${reason}』`)
      await mentionedMember.send({ embeds: [reasonDM] })
      await mentionedMember.ban({ reason: reason}).then(() => {

        const banSuccess = new Discord.MessageEmbed()
        .setTitle(`〙${mentionedMember.user.tag} have been banned by ${message.author.tag}〘`)
        .setDescription(`『Reason: ${reason}』`)
        message.reply({ embeds: [banSuccess] })
      })
      
    } catch (error) {
      const errorEmbed = new Discord.MessageEmbed()
      .setTitle("⛔ **An error has occurred!** ⛔")
      .setDescription(`『an error have occurs, please try again later!. and if error still occur please contact the owner.』`)
      return message.channel.send({ embeds: [errorEmbed]})
    }

})