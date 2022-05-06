module.exports = {
    name: 'resume',
    aliases: ['r'],
    category: 'Music',
    utilisation: '{prefix}resume',

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

        if (!client.player.getQueue(message).paused) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.error} - The music is already playing !`},
            });

        const success = client.player.resume(message);

        if (success)({
            });
            message.react("<a:ng_right:817278966955507744>");
    },
};