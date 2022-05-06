module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: `Commands of ${client.user.username}`,
                    icon_url:  client.user.displayAvatarURL({ dynamic: true })},
                    footer: { 
                        icon_url: message.author.displayAvatarURL({ dynamic: true }),
                        text: `Requested By ${message.author.tag}`  },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                        { name: '** **', value: `<a:Arrow_White:842832777476833290> To use filters, \`${client.config.discord.prefix}filter [the filter]\`. Example : \`${client.config.discord.prefix}filter bassboost\`.` },
                        { name: '** **', value: '<a:Arrow:841989782455713794> [Sargam](https://discord.com/oauth2/authorize?client_id=968449508730109962&permissions=8&scope=bot%20applications.commands) | By <@643041158054019102> & <@755741335482531943>' },
                    ],
                    timestamp: new Date(),
                    description: `To get info of each command type \`${client.config.discord.prefix}help [command]\`.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.error} - I did not find this command !`},
                });

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: `Commands of ${client.user.username}`,
                    icon_url:  client.user.displayAvatarURL({ dynamic: true })},
                    footer: { 
                        icon_url: message.author.displayAvatarURL({ dynamic: true }),
                        text: `Requested By ${message.author.tag}`  },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                }
            });
        };
    },
};
