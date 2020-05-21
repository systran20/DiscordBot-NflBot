//JS TEMPLATE for COMMANDS
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args) {
	  msg.channel.send('Pong.');
	},
  }