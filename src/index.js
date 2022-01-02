const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = 'OTI3MDE0Nzg3Nzc3NDQ5OTg1.YdEDzA.QDc9ItYX9--EPff5K3LBgWgtSkE';
const prefix = '%';

bot.on("messageCreate", message => {
  if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();

  if(command === 'ping') {
      message.reply('Pong!');
  }
})

bot.once('ready', () => {
  console.log('Ready!');
  bot.user.setStatus("online");
  console.log('WinterFestic Is Awake..'); 
});

bot.login(token);