module.exports = {
    name: 'w-filters',
    aliases: ['filters', 'fls'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.error} - You're not in a voice channel !`},
            });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.error} - You are not in the same voice channel !`},
            });

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.error} - No music currently playing !`},
            });

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.on : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'RANDOM',
                author: { name: 'Filters',
                icon_url:  client.user.displayAvatarURL({ dynamic: true })},
                footer: { 
                    icon_url: message.author.displayAvatarURL({ dynamic: true }),
                    text: `Requested By ${message.author.tag}`  },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${client.config.discord.prefix}filter\` to add a filter to a song.`,
            },
        });
    },
};