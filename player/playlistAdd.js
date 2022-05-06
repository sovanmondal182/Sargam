module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `${client.emotes.music} - [${playlist.title}](${playlist.url}) has been added to the queue (**${playlist.tracks.length}** songs) !`},
        });
};