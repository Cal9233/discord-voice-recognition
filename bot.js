require("dotenv").config()

const { error } = require("console");
const Discord = require('discord.js');
const fs = require('fs');

//Create a PCM audio
const audio = connection.receiver.createStream(user, {node: "pcm"});

audio.pipe(fs.createWriteStream('user_audio'));

//Bot commands
const anti_venom = new Discord.Client();

anti_venom.login(process.env.BOT_TOKEN)

anti_venom.on('ready', () => {
  try {
    console.log('Symbiote Online')
  } catch (e) {
    console.error(e)
  }
});

anti_venom.on('message', msg => {
  if (msg.content === 'Anti-Venom') {
    msg.channel.send("We are here")
  } else {
    console.log(error.toString())
  }
});

