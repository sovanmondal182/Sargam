module.exports = {
    name: 'remove',
    aliases: ['rm'],
    category: 'Music',
    utilisation: "{prefix}remove [song's position]",

    async execute(client, message, args) {
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
    const queue = client.player.getQueue(message);
    if (!queue.tracks.length || queue.tracks.length === 0)
      return message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `${client.emotes.error} - No music currently playing !`},
        });
    let SongID = parseInt(args[0])-0;
    if (!SongID)
      return  message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `Please enter a track ID. **Example - **\`${client.config.discord.prefix}remove 3\``},
        });
    if (SongID > (queue.tracks.length-1))
      return message.channel.send({
        embed: {
            color: 'RANDOM',
            description: `${client.emotes.error} - There's only ${queue.tracks.length-1} songs in the queue !`},
        });
    let song = client.player.remove(message, SongID);
    if(song)
      return message.channel.send({
          embed: {
              color: 'RANDOM',
              description: `[${song.title} | ${song.author}](${song.url}) was removed from the Queue!`},
        });
}};
