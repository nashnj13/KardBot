const { EmbedBuilder } = require("discord.js");
exports.run = (client, message, args) => {
  const embed = new EmbedBuilder().setTitle(`Pong`).setColor("Gold");
  message.channel.send({ embeds: [embed] });
};

exports.name = "ping";
