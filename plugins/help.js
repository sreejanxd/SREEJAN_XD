const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
  pattern: "help",
    fromMe: isPrivate,
    desc: "jarvis-md support",
    type: "support"
}, async (message) => {
    const name = 'ɪʀᴏɴ ᴍᴀɴ 🎓', title = "ᴊᴀʀᴠɪꜱ ꜱᴜᴩᴩᴏʀᴛ 🪄", number = '917439382677', body = "ɪʀᴏɴ ᴍᴀɴ";
    const image = "https://graph.org/file/58ea74675af7836579a3a.jpg", sourceUrl = 'https://github.com/sreejanxd';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by sreejan-xd;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.send({ displayName: name, contacts: [{ vcard }] }, { contextInfo: { externalAdReply: adon }, quoted: message }, "contacts");
});
