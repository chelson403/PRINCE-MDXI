
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA62U266iSBSG36VuNS1HOSQ7aUDcoKCgeGIyFyUUUspJKFTs+C6TzLPM3TzUBN1278z0dO9JhisoKmt9/1r/Wl9AluMKjVED5C+gKPEJEtS+kqZAQAZqHUWoBF0QQgKBDFJjgnSq7J2z7Uj3coXv9ztidor9gNWTdT2JnKnHr3bMZWG/gFsXFPU2wcEPAhrDqWJkgVHgyXibnnurbOTNBKbkvYkTGrZiTS1/yFqEHy5ewK2NCHGJs51exChFJUzGqHEgLj+Gf7YX0+NCP8e7NKXdWIw5a++51xm3vQT+dOTpmrYo8jlvZtTH8JcCe+pYdT+oeG6t2u5ovGPH/WJDi85AWRXrnu2a25BfrF43D/wK7zIUmiHKCCbNh+u+smh2+tobefxscTpjtBw44XIWMztLcdyJBc3rpcIHZzlZHj4GHlCNLQ1C37A1uD8d58ImMjeoHJvT2FVVY0gnMRtRIWZW5ntwp3x65fBf6s6ZB8t2DuxVixcR7JHjssOsG+Gizl/5jNewwF0bisOT02r3Mfz9njbc1J0rwkiCvUjiE6HjD2eeBZcS64ZpaMf7WW/aZz3uGz4kdfkjyr3Nk20qHPNRvo3ia8RfVTsqBGrTq1OSLatRMclpzTTGG8vXOVUpCL82PXwZ1v711HABc1F32vUArWqqubZEODrz9ueXu6IDaswQyPStC0q0wxUpIcF51p4J/S6A4WmOghKRe3XBZD6ux+OBZXSsojOXKL/Wav/S9PxgecloKXLG8SHWiX68Ki+gC4oyD1BVodDAFcnLxkZVBXeoAvIv90a1mkuU5gSNcAhkQIucxIh0X2Klz9WncwxJBYviU4YI6IKozFMbAZmUNeqC+31G0DlGl2iGYmlOFTlRZVmWFbm+yHAKLQxagekjp4dTVBGYFkCmBb7f70uCQN+6/wuGJGmiNBQ5SWcoTeBZjqd0mtOEIa3otKqqP8X4tQsydCEPE7elZ+kuiHBZkUVWF0kOw6fDnz9hEOR1RuZNFmjtCyqB/O4YEYKzXdUKqzNYBjE+Ia3VAeQIJhX62m1UovCp5W2DaXnYmtATZoZrjxegZW8D/b00Mv3P4mSwvQv++O3P32GT56ALkkejeImnJZ5hWYGlBEamP7fnt6/AbfwQEYiTCshAs+dKxujuORDmF3ezUeaKMlbujnoKfE7Nw5ZHr1N5l/zUp7J6mS9jY5lgb88wr9hZ6hP3ZHVmHb0ykcno3wsCZICOZ8prTkvdo05Ss3Ypbu0EjJ4MRH/qea8eDL3rgZ8inAzqlBRT5K46djC7KPSKZqadvTvUe/5FTxc6o2bovNutr1tVeWmzheiEA/Q+mTh0xzQ3N5az7Ph63awGdaUtpK0TCeZ5JfbN6YXt+DxnefOes6nsngL9XafuwMCrKn8/mFHKwnWCZpMEp96QiAXF4MFOeczzfZ8kb3scv40avn9GGN3X4luTftLKB3brN+rWfRfhbc3+y6pS4aFX6iK0OmQkJHC4mdH+5sBJJM739GywsJreIYotzcCTGNxa4xcJJFFepkAGVbqFoAvKvG7da2ZR/oNMmmqaA/chOoEVUb5NxHeGrC8+bjllXhiwioEM2Jnks1Jr70YpijmB5DlgQGmfySgFt78AYSfV64gIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "18492816939", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "꧁༒☬𝐂𝐇𝐄𝐋𝐒𝐎𝐍☬༒꧂", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
