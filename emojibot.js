const Discord = require('discord.js');
const client = new Discord.Client();
var CAH =

    client.once('ready', () => {
        console.log('Ready!');
    });

client.on('message', message => {
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
    if (message.content.includes("twas")) {
        message.channel.send("", {
            files: [
                `./twas.jpg`
            ]
        })
    }
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
        message.reply('The bot will now shut down.\n' +
                'Confirm with a thumb up or deny with a thumb down.')
            .then(function(message) {
                message.react(":b99:")
                message.react("👎")
                CAH = message
                message.awaitReactions((reaction, user) => user.id == author && (reaction.emoji.name == ':b99:' || reaction.emoji.name == '👎'), { max: 1, time: 30000 }).then(collected => {
                    if (collected.first().emoji.name == '👍') {
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