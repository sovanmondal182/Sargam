module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.error} - There is no music being played on this server !`},
                });
            break;
        case 'NotConnected':
            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.error} - You are not connected in any voice channel !`},
                });
            break;
        case 'UnableToJoin':
            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.error} - I am not able to join your voice channel, please check my permissions !`},
                });
            break;
        case 'VideoUnavailable':
            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`},
                });
            break;
        case 'MusicStarting':
            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `The music is starting... please wait and retry!`},
                });
            break;
        default:
            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    description: `${client.emotes.error} - Something went wrong ... Error : ${error}`},
                });
    };
};
