const Discord = require('discord.js');
const Sequelize = require('sequelize');
const client = new Discord.Client();

const sequelize = new Sequelize('d9n9rrc3i8cebb', 'qrgoiiqhrvbbrp', 'eff43065a10891ce78c0f53c9fafa317e0147956058b86c380596714cb2dd7cd', {
    host: 'ec2-54-197-48-79.compute-1.amazonaws.com',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: 'database.sqlite',
});
const config = sequelize.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    enlarge: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});

client.once('ready', () => {
    console.log('Ready!');
    Tags.sync();
});

client.on('message', async message => {
    if (message.author.bot) return;

    console.log(message.content)
    var i = 0
        /* var b99id = client.emojis.find(emoji => emoji.name === "b99").id
        var b99 = client.emojis.find(emoji => emoji.name === "b99").name
        var jakeid = client.emojis.find(emoji => emoji.name === "jake").id
        var jake = client.emojis.find(emoji => emoji.name === "jake").name
        var jake2id = client.emojis.find(emoji => emoji.name === "jakeshocked").id
        var jake2 = client.emojis.find(emoji => emoji.name === "jakeshocked").name
        var amyid = client.emojis.find(emoji => emoji.name === "amy").id
        var amy = client.emojis.find(emoji => emoji.name === "amy").name
        var boyle2id = client.emojis.find(emoji => emoji.name === "boyleshocked").id
        var boyle2 = client.emojis.find(emoji => emoji.name === "boyleshocked").name
        var boyle3id = client.emojis.find(emoji => emoji.name === "nopainboyle").id
        var boyle3 = client.emojis.find(emoji => emoji.name === "nopainboyle").name
        var boyleid = client.emojis.find(emoji => emoji.name === "boyle").id
        var boyle = client.emojis.find(emoji => emoji.name === "boyle").name
        var rosaid = client.emojis.find(emoji => emoji.name === "rosa").id
        var rosa = client.emojis.find(emoji => emoji.name === "rosa").name
        var terryid = client.emojis.find(emoji => emoji.name === "terry").id
        var terry = client.emojis.find(emoji => emoji.name === "terry").name
        var yoghurtid = client.emojis.find(emoji => emoji.name === "yoghurt").id
        var yoghurt = client.emojis.find(emoji => emoji.name === "yoghurt").name
        var ginaid = client.emojis.find(emoji => emoji.name === "gina").id
        var gina = client.emojis.find(emoji => emoji.name === "gina").name
        var holtid = client.emojis.find(emoji => emoji.name === "holt").id
        var holt = client.emojis.find(emoji => emoji.name === "holt").name
        var holt2id = client.emojis.find(emoji => emoji.name === "fakeholt").id
        var holt2 = client.emojis.find(emoji => emoji.name === "fakeholt").name
        var toitid = client.emojis.find(emoji => emoji.name === "toitnups").id
        var toit = client.emojis.find(emoji => emoji.name === "toitnups").name
        var adrianid = client.emojis.find(emoji => emoji.name === "adrian").id
        var adrian = client.emojis.find(emoji => emoji.name === "adrian").name
        var rosa2id = client.emojis.find(emoji => emoji.name === "rosamad").id
        var rosa2 = client.emojis.find(emoji => emoji.name === "rosamad").name */
    if (message.content.includes(":b99:")) {
        message.channel.send('', {
            files: [
                `./b99.jpg`
            ]
        })
    }
    if (message.content.includes(":jake:")) {
        message.channel.send("", {
            files: [
                `./jake.jpg`
            ]
        })
    }
    if (message.content.includes(":jakeshocked:")) {
        message.channel.send("", {
            files: [
                `./jakeshocked.jpg`
            ]
        })
    }
    if (message.content.includes(":amy:")) {
        message.channel.send("", {
            files: [
                `./amy.jpg`
            ]
        })
    }
    if (message.content.includes(":boyle:")) {
        message.channel.send("", {
            files: [
                `./boyle.jpg`
            ]
        })
    }
    if (message.content.includes(":boyleshocked:")) {
        message.channel.send("", {
            files: [
                `./boyleshocked.jpg`
            ]
        })
    }
    if (message.content.includes(":nopainboyle:")) {
        message.channel.send("", {
            files: [
                `./nopainboyle.jpg`
            ]
        })
    }
    if (message.content.includes(":rosa:")) {
        message.channel.send("", {
            files: [
                `./rosa.jpg`
            ]
        })
    }
    if (message.content.includes(":terry:")) {
        message.channel.send("", {
            files: [
                `./terry.jpg`
            ]
        })
    }
    if (message.content.includes(":yoghurt:")) {
        message.channel.send("", {
            files: [
                `./yoghurt.jpg`
            ]
        })
    }
    if (message.content.includes(":gina:")) {
        message.channel.send("", {
            files: [
                `./gina.jpg`
            ]
        })
    }
    if (message.content.includes(":holt:")) {
        message.channel.send("", {
            files: [
                `./holt.jpg`
            ]
        })
    }
    if (message.content.includes(":fakeholt:")) {
        message.channel.send("", {
            files: [
                `./fakeholt.jpg`
            ]
        })
    }
    if (message.content.includes(":toitnups:")) {
        message.channel.send("", {
            files: [
                `./toitnups.jpg`
            ]
        })
    }
    if (message.content.includes(":adrian:")) {
        message.channel.send("", {
            files: [
                `./adrian.jpg`
            ]
        })
    }
    if (message.content.includes(":rosamad:")) {
        message.channel.send("", {
            files: [
                `./rosamad.png`
            ]
        })
    }
    if (message.content.includes(":Ohwait:")) {
        message.channel.send("", {
            files: [
                `./ohwait.jpg`
            ]
        })
    }
    if (message.content.includes(":CuffedHolt:")) {
        message.channel.send("", {
            files: [
                `./cuffedholt.jpg`
            ]
        })
    }
    if (message.content.includes(":Muchacho:")) {
        message.channel.send("", {
            files: [
                `./muchacho.jpg`
            ]
        })
    }
    if (message.content.includes(":HotHaircut:")) {
        message.channel.send("", {
            files: [
                `./hothaircut.jpg`
            ]
        })
    }
    if (message.content.includes(":Fyou:")) {
        message.channel.send("", {
            files: [
                `./fyou.jpg`
            ]
        })
    }
    if (message.content.includes(":NoYoghurtInStores:")) {
        message.channel.send("", {
            files: [
                `./noyoghurtinstores.jpg`
            ]
        })
    }
    if (message.content.includes(":StaplerMan:")) {
        message.channel.send("", {
            files: [
                `./staplerman.jpg`
            ]
        })
    }
    if (message.content.includes(":MayIHaveSomeCocain:")) {
        message.channel.send("", {
            files: [
                `./mayihavesomecocain.jpg`
            ]
        })
    }
    if (message.content.includes(":ActNormal:")) {
        message.channel.send("", {
            files: [
                `./actnormal.jpg`
            ]
        })
    }
    if (message.content.includes(":LISTENYOUSICKSONOFAB:")) {
        message.channel.send("", {
            files: [
                `./listenyousicksonofab.jpg`
            ]
        })
    }
    if (message.content.includes(":Noice:")) {
        message.channel.send("", {
            files: [
                `./noice.jpg`
            ]
        })
    }
    if (message.content.includes(":PeraltiagoScream:")) {
        message.channel.send("", {
            files: [
                `./peraltiagoscream.jpg`
            ]
        })
    }
    if (message.content.includes(":AAAAAAAAAAA:")) {
        message.channel.send("", {
            files: [
                `./aaaaaaaaaaa.jpg`
            ]
        })
    }
    if (message.content.includes(":NINENINE:")) {
        message.channel.send("", {
            files: [
                `./ninenine.jpg`
            ]
        })
    }
    if (message.content.includes(":whatyoumean:")) {
        message.channel.send("", {
            files: [
                `./whatyoumean.jpg`
            ]
        })
    }
    if (message.content.includes(":LeftOnAirport:")) {
        message.channel.send("", {
            files: [
                `./leftonairport.jpg`
            ]
        })
    }
    if (message.content.includes(":ThatsMean:")) {
        message.channel.send("", {
            files: [
                `./thatsmean.jpg`
            ]
        })
    }
    if (message.content.includes(":WeinerWarriors:")) {
        message.channel.send("", {
            files: [
                `./weinerwarriors.jpg`
            ]
        })
    }
    if (message.content.includes(":NoCap:")) {
        message.channel.send("", {
            files: [
                `./nocap.jpg`
            ]
        })
    }
    if (message.content.includes(":WingSlutz:")) {
        message.channel.send("", {
            files: [
                `./wingslutz.png`
            ]
        })
    }
    if (message.content.includes(":Hewo:")) {
        message.channel.send("", {
            files: [
                `./hewo.jpg`
            ]
        })
    }
    if (message.content.includes(":AmyFacepalm:")) {
        message.channel.send("", {
            files: [
                `./amyfacepalm.jpg`
            ]
        })
    }
    if (message.content.includes(":RosaGross:")) {
        message.channel.send("", {
            files: [
                `./rosagross.jpg`
            ]
        })
    }
    if (message.content.includes(":Imscared:")) {
        message.channel.send("", {
            files: [
                `./imscared.jpg`
            ]
        })
    }
    if (message.content.includes(":Hitchcockscared:")) {
        message.channel.send("", {
            files: [
                `./hitchcockscared.jpg`
            ]
        })
    }
    if (message.content.includes(":WeinerWarriorHug:")) {
        message.channel.send("", {
            files: [
                `./wienerwarriorhug.jpg`
            ]
        })
    }
    if (message.content.includes(":HoltThinking:")) {
        message.channel.send("", {
            files: [
                `./holtthinking.jpg`
            ]
        })
    }
    if (message.content.includes("twas")) {
        message.channel.send("", {
            files: [
                `./twas.jpg`
            ]
        })
    }
    if (message.content.startsWith("!config init")) {
        try {
            // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
            const tag = await config.create({
                name: message.author.id,
                enlarge: true,
            });
            return message.reply(`${message.author.username} initialized you config, your emoji enlarging has been set to true.`);
        } catch (e) {
            if (e.name === 'SequelizeUniqueConstraintError') {
                return message.reply('Something went wrong please message an commisioner.');
            }
            return message.reply('Something went wrong please message an commisioner.');
        }
    }
    /*
    if (message.content.startsWith("!config enable")) {
        const affectedRows = await Tags.update({ enlarge: true }, { where: { name: message.author.id } });
        if (affectedRows > 0) {
            return message.reply(`Your emoji enlarging has been enabled.`);
        }
        return message.reply(`Something went wrong please message an commisioner.`);
    }
    if (message.content.startsWith("!config disable")) {
        const affectedRows = await Tags.update({ enlarge: false }, { where: { name: message.author.id } });
        if (affectedRows > 0) {
            return message.reply(`Your emoji enlarging has been enabled.`);
        }
        return message.reply(`Something went wrong please message an commisioner.`);
    }
    if (message.content.startsWith("!config status")) {
        const tag = await config.findOne({ where: { name: message.author.id } });
        if (tag) {
            // equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
            return message.channel.send("Your emoji enlarging is set to " + tag.get('enlarge'));
        }
        return message.reply(`Something went wrong please message an commisioner.`);
    }
    */
    if (message.author.id == '249245244674146305') {
        if (message.content.includes("i am god")) {
            message.channel.send("He really is god.")
        }
    }
    if (message.content.includes("<@!249245244674146305> is god")) {
        message.channel.send(`You're absolutely right ${message.author}!`)
    }
    if (message.content.includes("<@!426214039241359372> is god")) {
        message.channel.send(`You're absolutely right ${message.author}!`)
    }
    if (message.content.includes("@Captain Raymond Jacob Holt is god")) {
        message.channel.send("He really is god.")
    }
    if (message.content.startsWith('!CAH')) {

        /*const filter = respone => respone.author.id == message.author.id;
        message.channel.send("How many players?").then(() => {
            message.channel.awaitMessages(filter, { max: 6, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.size} number of players joined`)
                })
                .catch(collected => {
                    message.channel.send('Please restart')
                })
        }) */
        const author = message.author.id
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Some title',
            url: 'https://discord.js.org',
            author: {
                name: 'Some name',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
                url: 'https://discord.js.org',
            },
            description: 'Some description here',
            thumbnail: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            fields: [{
                    name: 'Regular field title',
                    value: 'Some value here',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                },
            ],
            image: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            timestamp: new Date(),
            footer: {
                text: 'Some footer text here',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        message.channel.send({ embed: exampleEmbed })
            .then(function(message) {
                const ayy = client.emojis.find(emoji => emoji.name === "b99");
                message.react(`643161128494432256`)
                message.react("👎")
                CAH = message
                message.awaitReactions((reaction, user) => user.id == author && (reaction.emoji.name == `b99` || reaction.emoji.name == '👎'), { max: 1, time: 30000 }).then(collected => {
                    if (collected.first().emoji.name == 'b99') {
                        message.reply('Shutting down...');
                    } else
                        message.reply('Operation canceled.');
                }).catch(() => {
                    message.reply('No reaction after 30 seconds, operation canceled');
                });
            }).catch(function() {
                //Something
            });


        // Reacts so the user only have to click the emojis

        // First argument is a filter function

    }
    /*if (b99id != -1 || jakeid != -1 || jake2id != -1 || amyid != -1 || boyle2id != -1 || boyle3id != -1 || boyleid != -1 || rosaid != -1 || terryid != -1 || yoghurtid != -1 || ginaid != -1 || holtid != -1 || holt2id != -1 || toitid != -1 ||adrianid != -1 || rosa2id != -1)  {
        message.channel.send('', {
            files: [
                `./${b99}.png`,
                `./${jake}.png`,
                `./${jake2}.png`,
                `/${boyle2}.png`,
                `/${boyle3}.png`,
                `/${boyle}.png`,
                `/${rosa}.png`,
                `/${terry}.png`,
                `/${}.png`,
            ]
        });
        
    } */
})

client.login(process.env.BOT_TOKEN);