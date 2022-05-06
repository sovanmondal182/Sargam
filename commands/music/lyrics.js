const lyricsFinder = require("lyrics-finder");
const _ = require("lodash");
module.exports = {
    name: 'lyrics',
    aliases: ['ly'],
    category: 'Music',
    utilisation: '{prefix}lyrics [song name]',

    async execute(client, message, args) {
        const ReactionPages = require('discord.js-pagination');
        const { MessageEmbed } = require("discord.js");
        const emojis = ["⏪", "⏩"];
        const time = 60000;
        let player = client.player.getQueue(message);
        let SongTitle = args.join(" ");
        let SearchString = args.join(" ");
        if (!args[0] && !player) return message.channel.send("<a:error:841993775265480724> | **Nothing is playing right now...**");
        if (!args[0]) SongTitle = player.queue.current.title;
        let lyrics = await lyricsFinder(SongTitle);
        if (!lyrics) return message.channel.send({
            embed: {
                color: 'RANDOM',
                description: `${client.emotes.error} - No lyrics found for \`${SongTitle}\``},
            });
        lyrics = lyrics.split("\n");
        let SplitedLyrics = _.chunk(lyrics, 25);
        let Pages = SplitedLyrics.map((ly) => {
        let em = new MessageEmbed()
            .setAuthor(`Lyrics for: ${SongTitle}`, client.config.IconURL)
            .setColor("RANDOM")
            .setDescription(ly.join("\n"));

        if (args.join(" ") !== SongTitle) em.setThumbnail(player.queue.current.displayThumbnail());
        return em;
        });
        if (!Pages.length || Pages.length === 1) return message.channel.send(Pages[0]);
        else return ReactionPages(message, Pages, emojis, time);
        },
};