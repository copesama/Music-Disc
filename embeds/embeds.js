const Discord = require('discord.js');

module.exports = {
    Embed_play: function (status, music_title, music_url, music_length, music_thumbnail, settings) {
        const Embed_play = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle(music_title)
            .setURL(music_url)
            .setThumbnail(music_thumbnail)
            .addField(status, `**Duration**: \`${music_length}\` | ${settings}`, true)
            .setTimestamp()
        return Embed_play;
    },

    Embed_queue: function (status, queueMsg) {
        const Embed_queue = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .addField(status, queueMsg)
            .setTimestamp()
        return Embed_queue;
    },

    Embed_save: function (music_title, music_url, music_thumbnail, description) {
        const Embed_queue = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle(music_title)
            .setURL(music_url)
            .setThumbnail(music_thumbnail)
            .setDescription(description)
            .setTimestamp()
        return Embed_queue;
    },

    Embed_search: function (music_title, description) {
        const Embed_cantFindSong = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle(music_title)
            .setDescription(description)
            .setTimestamp()
        return Embed_cantFindSong;
    },

    Embed_help: function (help_title,help_thumbnail,description) {
        const Embed_help = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle(help_title)
            .setThumbnail(help_thumbnail)
            .setDescription(description)
            .setTimestamp()
        return Embed_help;
    },

    Embed_status: function (uptime, os, node_v, djs_v, cpu, cpu_usage, ram, ping) {
        const Embed_status = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('FUBUKI v2.0.0')
            .setURL('https://github.com/hmes98318/MusicBot')
            .addField(`⚙️ SYSTEM`, `OS : **${os}**\nNode.js : **${node_v}**\nDiscord.js : **${djs_v}**\nCPU : **${cpu}**\n━━━━━━━━━━━━━━━━━━━━━━`, false)
            .addField(`📊 USAGE`, `CPU : **${cpu_usage}**\nMEM : **${ram}**\nUptime : **${uptime}**\nPING : **${ping}ms**\n━━━━━━━━━━━━━━━━━━━━━━`, false)
            .setTimestamp()
        return Embed_status;
    },

    Embed_server: function (serverlist) {
        const Embed_server = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle("Servers that have FUBUKI Bot", '')
            .setDescription(serverlist)
        return Embed_server;
    }
}
