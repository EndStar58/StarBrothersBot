const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '-'


client.on('ready', () => {
  console.log(`Bot Sunuculara Giriş Yaptı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('AleykümSelam HoşGeldin Kardeşim!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Günaydın') {
    msg.reply('Günaydın İyi Sabahlar');
  }
});


client.login('process.env.BOT_TOKEN');
