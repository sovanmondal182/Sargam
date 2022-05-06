module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `${client.emotes.error} - Music stopped as I have been disconnected from the channel !`},
        });
};