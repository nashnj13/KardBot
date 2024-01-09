const { EmbedBuilder } = require("discord.js");
exports.run = (client, message, args, data) => {
  kw1 = data["keywords"][Math.floor(Math.random() * data["keywords"].length)];
  kw2 = data["keywords"][Math.floor(Math.random() * data["keywords"].length)];
  kw3 = data["keywords"][Math.floor(Math.random() * data["keywords"].length)];
  while (kw1 == kw2 || kw2 == kw3 || kw1 == kw3) {
    kw2 = data["keywords"][Math.floor(Math.random() * data["keywords"].length)];
    kw3 = data["keywords"][Math.floor(Math.random() * data["keywords"].length)];
  }
  major = data["majors"][Math.floor(Math.random() * data["majors"].length)];
  minor = data["minors"][Math.floor(Math.random() * data["minors"].length)];
  while (major == minor) {
    minor = data["minors"][Math.floor(Math.random() * data["minors"].length)];
  }

  const embed = new EmbedBuilder()
    .setTitle("Random Challenge")
    .addFields(
      {
        name: "Major",
        value: major,
      },
      {
        name: "Minor",
        value: minor,
        inline: true,
      },
      {
        name: "Keyword 1",
        value: kw3,
      },
      {
        name: "Keyword 2",
        value: kw2,
        inline: true,
      },
      {
        name: "Keyword 3",
        value: kw3,
      },
      {
        name: "Cost",
        value:
          "<=" +
          data["costs"][Math.floor(Math.random() * data["costs"].length)],
        inline: true,
      },
    )
    .setColor("Gold");
  message.channel.send({ embeds: [embed] });
};

exports.name = "challenge";
