const {
  prefix
} = require('../config.json');
const {
  log
} = require('../log.js'); //LOG.JS DOSYASI INCLUDE

module.exports = {
  name: 'cls',
  description: 'Clear the chat!',
  args: true,
  cooldown: 1,
  usage: '[amount]',
  execute(msg, args) {
    //log(msg.channel.name);      "697889981318037610" GÜVENLİK kanalı id
    if (msg.channel.name === 'nfl-bot-test' || msg.channel.id=="697889981318037610") {

      //NO ARGS SHOW HELP
      if (!args.length) {
        data.push('CLS Clear Chat Messages');
        data.push(`\`${prefix}${name} ${usage}`);
        console.log(data);

        return msg.channel.send(data, {
            split: true
          })
          .then(() => {
            if (msg.channel.type === 'dm') return;
            msg.reply('Message sent to DM');
          })
          .catch(err => {
            console.log(`Could not send help DM to ${msg.author.tag}.\n`, err);
            msg.reply('it seems like DM disabled?');
          });
      }

      //GET ARG[0]
      const amount = args[0];
       
      if (isNaN(amount) || amount>100 || amount<1) {
        return msg.reply('Please provide a number between 1 and 100');
      }
      
      

      //START TO DELETE
      async function purge() {
        msg.delete(); //delete the last command on chat
        let fetched = await msg.channel.messages.fetch({limit: amount})
          .then(fetched => {
            log(fetched.size + ' messages found, deleting...'); //console info)
            msg.channel.bulkDelete(fetched);
          })          
          .catch(err=> msg.channel.send(`Error ${err}`));
        
      }
      purge(); //make sure purge() function called
      return;
    }

    msg.reply(`bu komut #nfl-bot-test kanalında kullanılabilir`);
  }
}