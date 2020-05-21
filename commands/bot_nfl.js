const {prefix} = require('../config.json');
module.exports = {
    name: 'nfl',
    description: 'Displays BOT Name',
    args:false,
    execute(msg, args) {
      msg.channel.send("H. Avni İncekara Fen Lisesi Discord Bot (2020 v0.1)\n" +
      `use ${prefix}nfhelp for commands\n`  +
      "some commands has a cooldown."
      );
    },
  }