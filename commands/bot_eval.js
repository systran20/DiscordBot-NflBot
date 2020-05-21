const {ownerID} = require('../config.json');

module.exports = {
    name: 'eval',
    description: 'most dangerous CMD',
    args:false,
    execute(msg, args) {
        if(msg.author.id !== ownerID) {
            console.log('CANT USE EVAL COMMAND');
            return;
        } 
        console.log('EVAL GRANTED');
    },
  }