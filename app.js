const fs = require('fs');
const Discord = require('discord.js');
const {
    prefix,
    token,
    cdDefault
} = require('./config.json');

const client = new Discord.Client();
const moment = require('moment');
const {log} = require('./log.js');      //LOG.JS DOSYASI INCLUDE

client.commands = new Discord.Collection();
const coolDowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    //set a new item in the collection
    //with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    log("Prefix: " + prefix);
    log("Command Files Count: " + commandFiles.length);
    if (commandFiles.length > 0) {
        log("Command Files: " + commandFiles);
    }
    log(`Logged in as: ${client.user.tag}.`)
    client.user.setActivity(`${prefix}nfl`, {
        type: 'WATCHING'
    }); //BOT STATUS
    client.commands.forEach(elm => log(elm.name)); //LIST COMMAND TO CONSOLE
});


//MESSAGE HANDLER ()
client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);

    const commandName = args.shift().toLowerCase(); //listenin ilk elemanını AT yani prefixi
    log(commandName);

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) {
        log('Command or alias not found!');
        return;
    }

    //Guild Only ??
    if (command.guildOnly && msg.channel.type !== 'text') {
        return msg.reply('I can\'t execute that command inside DMs!');
    }

    //CHECK ARGS
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${msg.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return msg.channel.send(reply);
    }

    //COOLDOWN EKLEME
    if (!coolDowns.has(command.name)) {
        coolDowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = coolDowns.get(command.name);
    const cooldownAmount = (command.cooldown || cdDefault) * 1000 //YOKSA default cooldown 5

    if (timestamps.has(msg.author.id)) {
        const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) * 1000;
            return msg.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) to use ${command.name} command`);
        }
    }
    timestamps.set(msg.author.id, now);
    setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);

    try {
        command.execute(msg, args);
        //buraya çalışan komut ile alakalı LOG yazdırılabilir

        let argsMsg = "";
        if (args.length) {
            argsMsg = " -> " + `Arguments: ${args} Arguments length: ${args.length}`;
        }
        log(msg.author.tag + " -> " + prefix + commandName + argsMsg);
    } catch (err) {
        log(err);
        msg.reply('')
    }
});

//ADD NEW MEMBER
client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"`);
    member.guild.channels.find(c => c.name === "sohbet").send(`"${member.user.username}" kendini tanıt yabancı`);
});

//log in bot using token
client.login(token);