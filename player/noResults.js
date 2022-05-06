module.exports = (client, message, query) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `${client.emotes.error} - No results found on YouTube for ${query} !`},
        });
};