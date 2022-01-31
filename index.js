const discord = require("discord.js");
require("dotenv").config()


const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.on("ready",() => {
    console.log("started!");
});
client.on("messageCreate",(message) =>{
    if (message.content =="hi"){
        message.reply("hello")
    }
})
client.login(process.env.TOKEN);