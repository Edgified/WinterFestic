const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'OTI2OTcwMTA4NjY3MTM0MDAy.YdDaMA.O9MLMHgYj4f5-2zpftjm0uDgvvA';

bot.on('ready', () => {
    console.log('WinterFestic Is Now Awake.')
})

bot.login(token);