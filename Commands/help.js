const { EmbedBuilder } = require("discord.js");
exports.run = (client, message, args) => {
  desc = {
    help: "gets list of all commands",
    ping: "tests bot",
    challenge: "generates a random challenge",
  };
  const commands = client.commands
    .map((command) => "!" + command.name + " - " + desc[command.name])
    .join("\n");
  const embed = new EmbedBuilder()
    .setTitle(`Total Commands: ${client.commands.size}`)
    .setDescription(commands)
    .setColor("Gold");
  message.channel.send({ embeds: [embed] });
};

exports.name = "help";
