module.exports = {
    name: 'join',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        const channel = client.channels.cache.get("VOICE CHANNEL ID");
        if (!channel) return console.error("The channel does not exist!");
        channel.join().then(connection => {
            return message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.success} - Successfully Joined <#VOICE CHANNEL ID> !`},
                });
        }).catch(e => {
            console.error(e);
        });  
},
};
