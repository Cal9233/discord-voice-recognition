# A discord voice recognition bot

- Converts speech to text

## Installation

You need nodeJS version 12+ with npm

```
git clone https://github.com/Cal9233/discord-voice-recognition.git
cd discord-voice-recognition
npm install
```

## Settings

Need to create a Discord bot token, Wit.ap access token and Spotify token
(All Free)

### Discord Token

\*\* Create Apllication, Create Bot, Connect to your server, copy token
https://discord.com/developers

### Wit.ap Access Token

\*\* Create account, Create app, Go to settings and copy access token
https://wit.ai/

### Spotify Token and Secret ID

\*\* Create account, Create app, and copy token + secret ID
https://developer.spotify.com/dashboard/login

### Create a settings.json file

Include your tokens

```
{
    "discord_token": "your_token",
    "spotify_token_id": "your_token_id",
    "spotify_token_secret": "your_token_secret",
    "wit_ai_token": "your_token"
}
```

## OR

### Environment variable, Heroku or other services

You can configure with these values

```
DISCORD_TOK
WITAPIKEY
SPOTIFY_TOKEN_ID
SPOTIFY_TOKEN_SECRET
```

## Running

You can execute command on terminal:

`npm start `

## Bot Start Up

Assuming you already have your discord connected to the server, make sure you have a voice channel and a text channel

1. Join Voice Channel
2. Type `?join` onto Text Channel
3. Type `?help` for list of commands

## Voice Commands

Bot picks up hot keywords such as "Music Play"
Example of a perfect command is
`*Pause* Music Play Dancin' *Pause*`

- The bot listens to users simultaneously in the same voice channel
- Try not to have long pauses in between words
- Having a sensitive mic or a lot of background noise may have the voice commands not work properly
