const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  allowedMentions: ["users"],
});
const fs = require("fs");
const prefix = "!";
client.commands = new Collection();
const commands = fs
  .readdirSync("./Commands")
  .filter((file) => file.endsWith(".js"));
const data = {
  majors: ["Soviet Union", "Germany", "Britain", "United States", "Japan"],
  minors: [
    "Soviet Union",
    "Germany",
    "Britain",
    "United States",
    "Japan",
    "Italy",
    "France",
    "Poland",
  ],
  keywords: [
    "Add",
    "Alpine",
    "Ambush",
    "Blitz",
    "Combat",
    "Deployment",
    "Destroy",
    "Destruction",
    "Discard",
    "Draw",
    "Exile",
    "Fury",
    "Guard",
    "Heavy Armor",
    "Immune",
    "Intel",
    "Mobilize",
    "Passive",
    "Pin",
    "Suppress",
    "Salvage",
    "Pincer",
    "Remove",
    "Repair",
    "Retreat",
    "Smokescreen",
    "Take Control",
    "Trigger",
    "Veteran",
  ],
  costs: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
};

for (file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./Commands/${commandName}`);
  client.commands.set(commandName, command);
}

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;
    sendData = null;
    if (commandName === "challenge") {
      sendData = data;
    }
    command.run(client, message, args, sendData);
  }
});

client.login(process.env.token);
