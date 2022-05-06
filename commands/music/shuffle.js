module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

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

        const success = client.player.shuffle(message);

        if (success) message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.success} - Queue Shuffled **${client.player.getQueue(message).tracks.length-1}** song(s) !`},
            });
    },
};