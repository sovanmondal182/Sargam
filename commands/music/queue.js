module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',

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

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.error} - No songs currently playing !`},
            });

        message.channel.send({
            embed: {
                color: 'RANDOM',
                author: { name: `Server Queue - ${message.guild.name}`,
                        icon_url:  client.user.displayAvatarURL({ dynamic: true })},
                
                footer: { 
                        icon_url: message.author.displayAvatarURL({ dynamic: true }),
                        text: `Requested By ${message.author.tag}`  },
                description: `${client.player.getQueue(message).loopMode ? '(looped)' : ''} ` + (queue.tracks.map((track, i) => {
            return  `${i === 0 ? '<a:ng_Music:794854542440136785> **Current Track:**' : `**<a:Arrow1:842854854661111868> ${i+0}**`} - [${track.title} | ${track.author}](${track.url}) | (Requested by : <@${track.requestedBy.id}>)\n`}).slice(0, 8).join('\n')) + `\n\n${queue.tracks.length > 8 ? `And **${queue.tracks.length - 8}** other songs...` : `In the queue total **${queue.tracks.length-1}** song(s)...`}`,
            timestamp: new Date(),
        },
        });
    },
};