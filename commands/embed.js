const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Liste des commandes')
            .setTitle('Liste des commandes')
            .setDescription('')
            .setColor('#db1818')
            .addField( 'Modération','e.clear,e.infractions,e.mute,e.warn,e.unwarn,e.ban,e.kick ')
            .addField( 'Autre','e.user-info,e.server-info,e.role-info')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('Par Nyxoy#3606')
            .setTimestamp()
            .setURL(''))
    },
    name: 'help'
}