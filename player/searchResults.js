module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `Here are your search results for ${query}` ,
            icon_url:  client.user.displayAvatarURL({ dynamic: true })},
            footer: { 
                text: 'Type cancel to cancel the search' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};