module.exports = {
    name: 'status',
    aliases: ['debug'],
    category: 'Infos',
    utilisation: '{prefix}status',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`,
            },
        });
    },
};