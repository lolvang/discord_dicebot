# discord-dicebot
A dicerolling bot for roleplaying games over discord

# Prerequisites
* Must have installed Node JS
* Must have Git installed
* Must have docker installed to build and run container

# Setup
* To install dependencies: `npm install`
* Copy `auth.example.json` to `auth.json`
* Set up a new discord app here https://discordapp.com/developers/applications/me
* Copy the clientID from your bots page, and go to the following link https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot (replaicing CLIENTID with the clientId you copied) then authorize the bot to the server you want it to access.
* Copy bots token into `auth.json`
* Compile ts to js using `npm run tsc`
* Build docker container using `npm run docker`

# Starting the server
Simply run the command `npm run start`

# Commands
To be added soon...
