const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    alias: ["sc","script","info"],
    desc: "sc the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*Hello there SREEJAN-XD User! 👋🏻* 

> SREEJAN XD is a beta version of OYY SREEJAN also it provide enhanced functionality to users

 *Thanks for using SREEJAN-XD 🇵🇰* 

> Join WhatsApp Channel :- ⤵️
 
https://whatsapp.com/channel/0029VatOy2EAzNc2WcShQw1j

Dont forget to give star to repo ⬇️

https://github.com/sreejanxd/SREEJAN_XD`
    
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hzagwo.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
