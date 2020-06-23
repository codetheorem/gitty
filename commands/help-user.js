const Discord = require("discord.js");

module.exports = {
  name: "help-user",
  description: "shows command list",
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor("#EFFF00")
      .setTitle("Gitty User Command list")
      .setDescription('Gitty is a discord bot to help you with Open source')
      .addFields(
        {name:"Github Details",value: "`git user-info`",inline: true},
        {name:"Github Follower",value: "`git user-follower`",inline: true},
        {name:"Github Following",value: "`git user-following`",inline: true},
        {name:"Github Repos",value: "`git user-repo`",inline: true},
        {name:"Github Organisations",value: "`git user-orgs`",inline: true},
        {name:"Github Starred repo",value: "`git user-stars`",inline: true},
      )
      .addFields(
          {name:"You need to be logined in to use the above commands!", value:"Run this command to login `git adduser <github_username>`"}
      )
      .setFooter('Check [git about] to know about me 🤖');
    message.channel.send(embed);

  },
};
