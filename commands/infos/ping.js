module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: 'RANDOM',
                title : 'Pong!',
                description: +Math.round(client.ws.ping)+'ms',
            },
        });
    },
};