const {
    prefix,
    cdDefault
} = require('../config.json');

module.exports = {
    name: 'nflhelp',
    aliases: ['nflhelp2'],
    description: 'NFL HELP List all commands & info about a specific command.',
    usage: '[help name]',
    cooldown: 5,
    execute(msg, args) {
        const data = [];
        const {
            commands
        } = msg.client;

        //NO ARGS SHOW HELP
        if (!args.length) {
            data.push('Here\'s a list of all commands:');
            data.push(commands.map(cmd => cmd.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            console.log(data);

            return msg.author.send(data, {
                    split: true
                })
                .then(() => {
                    if (msg.channel.type === 'dm') return;
                    msg.reply('Message sent to DM');

                })
                .catch(err => {
                    console.log(`Could not send help DM to ${msg.author.tag}.\n`, err);
                    msg.reply('it seems like DM disabled?');
                })
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        // CHECK INVALID COMMAND
        if (!command) {
            return msg.reply('not valid command');
        }

        //VALID COMMAND 
        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        //COOLDOWN DEFAULT
        data.push(`**Cooldown:** ${command.cooldown || cdDefault}`);
        msg.channel.send(data, {
            split: true
        });
    },
};