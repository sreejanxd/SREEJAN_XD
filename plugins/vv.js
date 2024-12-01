const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "vv",
    fromMe: true,
    type: "tool",
    alias: ['view'],
    desc: "get view ones message"
}, async (message) => {
   if (!message.reply_message.viewones) return await message.reply("_*Reply to a view once*_");
   return await message.client.forwardMessage(message.chat, message.reply_message.message, { readViewOnce: true });
});
