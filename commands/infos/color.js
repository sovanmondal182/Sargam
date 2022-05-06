module.exports = {
    name: 'color',
    aliases: ['c', 'colour'],
    category: 'Infos',
    utilisation: '{prefix}color [hex]',
    execute(client, message, args) {
            const ReqRole = message.guild.roles.cache.find(r => r.name === "Rainbow")
            if (!ReqRole) return message.channel.send({
                embed: {
                    description: `The Role do not EXIST in this server.`,
                    color: 'RANDOM'
                }
            })
            if (!message.member.roles.cache.has(ReqRole.id)) return message.channel.send({
                    embed: {
                        description: `You don't have ${ReqRole} Role.`,
                        color: 'RANDOM'
                    }
                });            
            const heXRoleColor = args[0] 
            if (heXRoleColor==null) return message.channel.send({
                    embed: {
                        description: `Please specify a Hex Code <@${message.author.id}>.`,
                        color: 'RANDOM'
                    }
                });
                ReqRole.edit({
                    color: heXRoleColor
                })
                return message.channel.send({
                    embed: {
                        description: `${ReqRole} color has been changed to ${heXRoleColor}.`,
                        color: 'RANDOM'
                    },
                });
        } 
};