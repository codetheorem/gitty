const fetch = require("node-fetch");
const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "repo-issue",
  description: "Tells repo issues",
  async execute(message, args) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const trim = (str, max) =>
      str.length > max ? `${str.slice(0, max - 3)}...` : str;

    if (!args.length) {
      return message.channel.send(" You need to supply the repo name by using `git repo-issue <owner/repo>`.");
    }

    var list = [];

    list = await fetch(
      `https://api.github.com/repos/${args}/issues`,
      {
        headers: {
          authorization: "token " + process.env.GITHUB_TOKEN,
        },
      }
    ).then((response) => response.json());

    const embed = new Discord.MessageEmbed()
      .setColor("#" + randomColor)
      .setTitle("Repo Issues");

    if (list.length) {
      for (let i = 0; i < list.length && i<24; i++) {
        var link = list[i].html_url;
        var issue = list[i].title;

        embed.addFields({
          name: "Issue #" + list[i].number,
          value: `[${issue}](${link})`,
          inline: true,
        });
      }
      if(list.length>25){
        embed.addFields({
            name: "Limit Reached",
            value: "25 is the max limit",
          });
    }
    } else {
      embed.addFields({
        name: "error",
        value: "This repo has no issues",
      });
    }

    message.channel.send(embed);
  },
};