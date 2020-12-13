require("dotenv").config()

const { error } = require("console");
const Discord = require('discord.js');
const fs = require('fs');
const queue = new Map();

//Create a PCM audio
// const audio = connection.receiver.createStream(user, {node: "pcm"});

// audio.pipe(fs.createWriteStream('user_audio'));

//Bot commands
const anti_venom = new Discord.Client();


anti_venom.login(process.env.BOT_TOKEN)

anti_venom.on('ready', user => {
  
  try {
    console.log('Symbiote Online')
  } catch (e) {
    console.error(e)
  }
});


anti_venom.on('message', msg => {
  if (msg.content === 'Anti-Venom') {
    msg.channel.send("We are here")
  }
});

//Connecting the bot to voice channel
anti_venom.on('message', async(msg) => {
  const prefix = '?';

  if (msg.content === `${prefix}Connect`) {
    /// Get the voice channel that the user is in
    const vc = msg.member.voice.channel;
    ///Check if voice channel exists
    if (!vc) return message.channel.send('User is not in a channel i can connect to.')
    ///join the voice channel
    vc.join()
    .then(connection => console.log('connected!'))
    .catch(err => {
      console.log(err)
  })
  }
});
