const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭━━━〔 *KHANX-AI* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *Jᴀᴡᴀᴅ TᴇᴄʜX*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Heroku*
┃★│ Prefix : *[ Multi Prefix ]*
┃★│ Version : *1.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃◆ .𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃◆ .𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃◆ .𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃◆ .𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃◆ .𝙶𝚛𝚘𝚞𝚙
┃◆ .𝚂𝚎𝚝𝚐𝚘𝚘𝚍𝚋𝚞𝚢
┃◆ .𝚂𝚎𝚝𝚠𝚎𝚕𝚌𝚘𝚖𝚎
┃◆ .𝙰𝚍𝚍
┃◆ .𝚁𝚎𝚖𝚘𝚟𝚎
┃◆ .𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃◆ .𝙳𝚎𝚖𝚘𝚝𝚎
┃◆ .𝚄𝚗𝚖𝚞𝚝𝚎
┃◆ .𝙼𝚞𝚝𝚎
┃◆ .𝙳𝚎𝚕
╰━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃◆ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃◆ .𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃◆ .𝙶𝚍𝚛𝚒𝚟𝚎
┃◆ .𝙸𝚗𝚜𝚝𝚊
┃◆ .𝚂𝚘𝚗𝚐
┃◆ .𝚅𝚒𝚍𝚎𝚘
┃◆ .𝚈𝚝𝚖𝚙3
┃◆ .𝙳𝚊𝚛𝚊𝚖𝚊
┃◆ .𝚅𝚒𝚍𝚎𝚘2
┃◆ .𝙿𝚕𝚊𝚢2
┃◆ .𝙰𝚞𝚍𝚒𝚘
┃◆ .𝙿𝚕𝚊𝚢
┃◆ .𝚒𝚖𝚐
┃◆ .𝚊𝚙𝚔
┃◆ .𝚈𝚝𝚖𝚙4
┃◆ .𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝙱𝚕𝚘𝚌𝚔
┃◆ .𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃◆ .𝚂𝚑𝚞𝚝𝙳𝚘𝚠𝚗
┃◆ .𝚓𝚒𝚍
┃◆ .𝙶𝚓𝚒𝚍
┃◆ .𝙲𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
┃◆ .𝚁𝚎𝚜𝚝𝚊𝚛𝚝
┃◆ .𝚄𝚙𝚍𝚊𝚝𝚎𝚌𝚖𝚍
┃◆ .𝚁𝚎𝚙𝚘
┃◆ .𝙰𝚕𝚒𝚟𝚎
╰━━━━━━━━━━━━⪼
╭━❮ 𝙵𝚄𝙽 ❯━╮
┃◆ .𝙵𝚊𝚌𝚔
┃◆ .𝙳𝚘𝚐
┃◆ .𝙷𝚊𝚌𝚔
╰━━━━━━━━━━━━⪼
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃◆ .𝚂𝚝𝚒𝚌𝚔𝚎𝚛
┃◆ .𝚃𝚛𝚝
┃◆ .𝚃𝚝𝚜
╰━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃◆ .𝙰𝚒
┃◆ .𝚐𝚙𝚝𝟺
┃◆ .𝙱𝚒𝚗𝚐
╰━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃◆ .𝙿𝚒𝚗𝚐
┃◆ .𝙰𝚕𝚒𝚟𝚎
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝚁𝚎𝚙𝚘
╰━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙽𝙸𝙼𝙴 ❯━╮
┃◆ .𝙶𝚊𝚛𝚕
┃◆ .𝚆𝚊𝚒𝚏𝚞
┃◆ .𝙽𝚎𝚔𝚘
┃◆ .𝙼𝚎𝚐𝚞𝚖𝚒𝚗
┃◆ .𝙼𝚊𝚒𝚍
┃◆ .𝙰𝚠𝚘𝚘
╰━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚃𝙷𝙴𝚁 ❯━╮
┃◆ .𝚃𝚛𝚝
┃◆ .𝙽𝚎𝚠𝚜
┃◆ .𝙼𝚘𝚟𝚒𝚎
┃◆ .𝚆𝚎𝚊𝚝𝚑𝚎𝚛
┃◆ .𝚢𝚝𝚜
┃◆ .𝚢𝚝𝚟
╰━━━━━━━━━━━━⪼
╭━━❮*𝙲𝙷𝙰𝙽𝙽𝙴𝙻*❯━┈⊷
┃https://whatsapp.com/channel/0029VatOy2EAzNc2WcShQw1j
╰────────────────··๏
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hzagwo.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
