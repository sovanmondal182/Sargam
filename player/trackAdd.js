module.exports = (client, message, queue, track) => {
    message.channel.send(
        {
            embed: {
                color: 'RANDOM',
                author: { name: 'Added to Queue',
                icon_url:  client.user.displayAvatarURL({ dynamic: true })},
                    title: track.title ,
                    url: track.url,
                    thumbnail: {url: track.thumbnail},
                    fields: [
                        { name: 'Requested by', value: `<@${track.requestedBy.id}>`, inline: true },    
                        { name: 'Duration', value: track.duration, inline: true },
                        { name: 'Position in Queue', value: `${queue.tracks.length-1}`, inline: true },
                    ],
        }})
};