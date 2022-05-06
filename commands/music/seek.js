const { Track } = require("discord-player");
module.exports = {
    name: 'seek',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}seek',
    async execute(client, message, args, queue) {
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
        const track = client.player.nowPlaying(message);
        const tr = track.duration.split(":")
        const tr2 = (parseInt(tr[0], 10) * 60000) + ((parseInt(tr[1], 10) % 60000) * 1000);
        const choiceDur = (args.join(" ").split(":") || null);
        const optDurr = (parseInt(choiceDur[0], 10) * 60000) + ((parseInt(choiceDur[1], 10) % 60000) * 1000);
        if (optDurr > tr2) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: "Please enter a valid duration."},
            });
        if (optDurr!=parseInt(optDurr, 10) || choiceDur[0]<0 || choiceDur[1]<0) 
            return  message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `Please enter a duration. **Example - **\`${client.config.discord.prefix}seek 1:30\``},
                });
        client.player.seek(message, optDurr);
        message.react("<a:ng_right:817278966955507744>");
    }
}
