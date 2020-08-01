const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);NzM5MDY5NjUyOTkwMTY1MDI0.XyVGQA.UK45gG_ElBR_2-5UADZD7H6BSzs
