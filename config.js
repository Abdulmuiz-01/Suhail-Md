const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ajibadeabdulmuiz88@gmail.com "
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Abdulmuiz01:<password>@abdulmuiz.uymhzib.mongodb.net/?retryWrites=true&w=majority&appName=Abdulmuiz"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "DATABASE_URL=postgres://r:S0Mz58mRSf22vFi6qsPinfsfBy1oxb43@dpg-codjosol6cac73blepvg-a.oregon-postgres.render.com/abdulmuiz
KOYEB=true
KOYEB_API=h12412wt3je40xmczpeyd04h2eokvh2aexzr6m6ejpii6lqi8tty5oer5dkqc9ly
KOYEB_NAME=Moonlight
MAX_UPLOAD=50
PREFIX=
REJECT_CALL=false
RMBG_KEY=null
SESSION_ID=MOONLIGHT
STICKER_PACKNAME=,LyFE
SUDO=null
WARN_LIMIT=3"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347066659189" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347066659189";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 9
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "all,2347066659189";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347066659189,2348082693054";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_32_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc4LFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK2E4ZlQ5anhVajhMVG1LVVc2bUhobVowV0lhZjU2SnJqZHBRZFdpWUtIYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDY2NjU5MTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NkIzMzQ5RDk4Q0U5MzJBNzhGQjRFMDdCNDI0MURCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MDM5NDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidjdzZS1ZTUFSemlMbkp6aEpOeFUyZ1wiLFxuICBcInBob25lSWRcIjogXCIwNTA3MjA2ZS1hZTVjLTQ3ODQtYjIxNS0xMzRhYjg0YzdjM2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxNTAsXG4gICAgICAxNjksXG4gICAgICAxNzAsXG4gICAgICAxMDcsXG4gICAgICAyMjgsXG4gICAgICAyMzQsXG4gICAgICAxOTAsXG4gICAgICAxOSxcbiAgICAgIDIxMixcbiAgICAgIDE3MixcbiAgICAgIDI1MixcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgMzUsXG4gICAgICA2OCxcbiAgICAgIDQ1LFxuICAgICAgNjAsXG4gICAgICAzMCxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMDcsXG4gICAgICAxNDcsXG4gICAgICA4MCxcbiAgICAgIDE4MCxcbiAgICAgIDEwNCxcbiAgICAgIDI0NCxcbiAgICAgIDE2MixcbiAgICAgIDEyNixcbiAgICAgIDgxLFxuICAgICAgMjQyLFxuICAgICAgMjEyLFxuICAgICAgNDIsXG4gICAgICAxODQsXG4gICAgICAxMjcsXG4gICAgICAyMDgsXG4gICAgICA4LFxuICAgICAgMTI0LFxuICAgICAgMTgsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlhZTFhRTEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjY2NTkxODk6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0Njk1MjM5ODczNzYyNTo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbkNwcklHRUtHcXViUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldML3VKTkQwZWJielgwQWt3YWpHeGU5RGdURDVLb2YwbnkwMzE0QTZEWDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGhacUtPWmtiUThaaDdTYWllYnI1YmU3M3dBQU1GbVF1c0xWTVhDVlF3R29nM21pREk0Y3NPUU5DTEZCOXhYanVteFBxMnY4LzhVaTF6N3I4RmlHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjc1R0tHV0p2WHh1bkJHVmpoVEJyc0JqSENJT2NhRWlXWUh1YWxVandpODJxS3FZNElUNzRubHNQajRxNEl1Y3kremswRjJWcDZndmZjL0RVTE9PQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NjY1OTE4OTo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwMzk0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF6RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXpFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOVFlb0JBYU5zWFI0eGVKTk5TTHhUS3BTckxNcTluRkNwaS9lRWppeUxXST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzE2MTAxNDMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MDM0NTgwODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🌙MÕÕÑLÎGHT🌙",
  ownername:process.env.OWNER_NAME|| "🌙MÕÕÑLÎGHT🌙",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || ""7bezgsmlnupa84dnq56vng0ympr1zjduu393a7qzkrtnfr8me0f49cpxwwxac946,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
