const config = require('../config')
const { cmd, commands } = require('../command')
  
cmd({
    pattern: "endgc",
    alias: ["kickall","endgroup"],
    desc: "remove all members from the group.",
    react: "😒",
    category: "group",
    filename: __filename,
},           
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
      if (!isAdmins) return reply(`Srf Admins Hi Yah Cmd Use Kr Skty Hain Smja Kia ! `)
      if (!isOwner) return reply(`> Aby Toun Bot Owner NI Hai 😂`)
      

        if (!isGroup) return reply(`This command is only for groups.`);
        

        if (!isBotAdmins) return reply(`Mujha Admin Bana Camnd Use krna K Lia.`);

        const allParticipants = groupMetadata.participants;

        const nonAdminParticipants = allParticipants.filter(member => !groupAdmins.includes(member.id));
        if (nonAdminParticipants.length === 0) {
            return reply('Member Hi Nahi Hain.');
        }

        for (let participant of nonAdminParticipants) {
            await conn.groupParticipantsUpdate(m.chat, [participant.id], "remove");
  }

        reply(`Successfully Sara Memeber Remove Kr Dia Hain.`);
        
    } catch (e) {
        console.error('Error kicking users:', e);
        reply('An error occurred while trying to kick all members. Please try again.');
    }
});
