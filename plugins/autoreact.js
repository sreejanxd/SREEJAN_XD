const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
pattern: 'autoreaction ?(.*)',
    fromMe: true,
    type: 'tool',
    alias: ['reaction'],
    desc: 'auto reaction'
}, async (message, match) => {
    if (match === "off") {
        await setData(message.user.id, "disactie", "false", "autoreaction");
        await message.reply("_*autoreaction disabled*__");
    } else if (match === "on") {
        await setData(message.user.id, "actie", "true", "autoreaction");
        await message.reply("_*autoreaction enabled*__");
    } else {
        await message.reply("_*->example use on/off*_");
    }
});
