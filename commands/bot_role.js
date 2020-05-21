//ÇALIŞTIRAMADIM
const Discord = require('discord.js');
module.exports = {
    name: 'role',
    description: 'Show user role.',
    args: false,
    //usage: '<user>',
    execute(msg, args) {                
        let user=msg.author;
        console.log(user);
        /*
        const moment = require('moment');
        const joinDiscord = moment(user.createdAt).format('llll');
        const joinServer = moment(user.joinedAt).format('llll');        
        
        let embed =new Discord.MessageEmbed()        
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Status:', user.presence.status, true)
        .addField('Roles:', user.roles.map(r => `${r}`).join(' | '), true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();        
        msg.channel.send(embed);        
        */
    },
}