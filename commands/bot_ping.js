module.exports = {
  name: 'ping',
  description: 'Ping! (Has 5 second cooldown)',
  args:false,
  cooldown: 5,  //5 sec cooldown
  execute(msg, args) {
    msg.channel.send('Pong.');
  },
}