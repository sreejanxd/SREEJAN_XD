const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
  pattern: "help",
    fromMe: isPrivate,
    desc: "sreejan-xd support",
    type: "support"
}, async (message) => {
    const name = ' ─꯭⃜⃜͢͢🌸꯭͟🇸𝖗𝖊𝖊𝖏𝖆𝖓།꯭͓⎯꯭ͯ𓆗🎓', title = "》✪⏤͟͞★⃝ꪶ‎𝐒𝐫𝖊𝖊⊭𝖏ꫝ𝖓-𖥘✪͜͡➺🪄", number = '917439382677', body = "🎀🩵 𝐋ɪғᴇ 𝐒ᴜᴄᴋs-𝐊ʀɪsʜɴᴀ 𝐇ᴇᴀʟs 🌸🦚";
    const image = "https://cdn.ironman.my.id/i/abdg5l.jpg", sourceUrl = 'https://github.com/sreejanxd';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by sreejan-xd;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.send({ displayName: name, contacts: [{ vcard }] }, { contextInfo: { externalAdReply: adon }, quoted: message }, "contacts");
});
