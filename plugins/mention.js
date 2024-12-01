pattern: 'mention ?(.*)',
    fromMe: true,
    desc: 'mention',
    type: 'tool'
}, async (message, match) => {
   let msg;
   const { mention } = await getData(message.user.id);    
    if (match === 'get' && message.sudo.includes(message.sender)) {
        return await message.send(mention.message);
    } else if (match && message.sudo.includes(message.sender)) {
        if (match === "off") {
            msg = await setData(message.user.id, mention.message, "false", "mention");
        } else if (match === "on") {
            msg = await setData(message.user.id, mention.message, "true", "mention");
        } else {
            msg = await setData(message.user.id, match, "true", "mention");       
        }
        if (msg) {
            return await message.reply('_Mention Updated_');
        } else {
            return await message.reply('_Error in updating__');
        }
    }
    return await message.reply("_You can check the format of mention https://github.com/Loki-Xer/Jarvis-md/wiki_");
});
