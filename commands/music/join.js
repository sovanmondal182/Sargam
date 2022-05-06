module.exports = {
    name: 'join',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        const channel = client.channels.cache.get("968450564318978091");
        if (!channel) return console.error("The channel does not exist!");
        channel.join().then(connection => {
            return message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.success} - Successfully Joined <#968450564318978091> !`},
                });
        }).catch(e => {
            console.error(e);
        });  
},
};