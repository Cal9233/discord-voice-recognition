require("dotenv").config();
const Discord = require('discord.js'),
      config = require('./config.json'),
      fs = require('fs'),
      Enmap = require('enmap');

const discordClient = new Discord.Client();

//reads all configurations
discordClient.config = config;

//link all events
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${files}`);
    let eventName = file.split(".")[0];
    discordClient.on(eventName, event.bind(null, discordClient));
  });
});

discordClient.commands = new Enmap();

//read all custom commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    discordClient.commands.set(commandName, props);
  });
});

discordClient.login(config.discordApiToken);