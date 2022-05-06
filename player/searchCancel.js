module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `${client.emotes.error} - You did not provide a valid response ... Please send the command again !`},
        });
};