const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    console.log('F1 bot is online!');
});


client.login('OTg4ODUwNjIyNTE2Mjk3NzY4.GtLiIZ.qRxxJd6_xn09afj-WwU2G0NwRTQE--K1Tm4KBM');