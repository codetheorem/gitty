
const Discord = require("discord.js");

module.exports = {
  name: "help-org",
  description: "shows command list",
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor("#EFFF00")
      .setTitle("Gitty Org Command list")
      .setDescription('Gitty is a discord bot to help you with Open source')
      .addFields(
        {name:"Org Details",value: "`git org-info`",inline: true},
        {name:"Org Members",value: "`git org-member`",inline: true},
        {name:"Org repos",value: "`git org-repos`",inline: true},
      )
      .addFields(
        {name:"You need to register your org first to be able to use the above commands!", value:"Run this command to add org `git addorg <org_name>`"}
    )
      .setFooter('Check [git about] to know about me 🤖');
    message.channel.send(embed);

  },
};
