module.exports = {
    name: 'kick',
    description: 'Kicks a Ghost!',
    args:true,
    usage:'<username>',
    guildOnly: true,
    execute(msg, args) {
      msg.channel.send(`U just kicked a ghost named ${args[0]}`);
    },
  }