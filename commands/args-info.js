module.exports = {
  name: 'args-info',
  aliases: ['info','args'],
  description: 'Information about the arguments provided.',
  args: true,
  usage:'<foo>',
  execute(msg, args) {
    if (args[0]==='foo') {
      return msg.channel.send('bar');
    }
    msg.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
}