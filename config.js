const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ajibadeabdulmuiz88@gmail.com "
global.location="Lagos,Nigeria ."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Abdulmuiz01:<password>@abdulmuiz.uymhzib.mongodb.net/?retryWrites=true&w=majority&appName=Abdulmuiz"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://r:S0Mz58mRSf22vFi6qsPinfsfBy1oxb43@dpg-codjosol6cac73blepvg-a.oregon-postgres.render.com/abdulmuiz"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
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
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347066659189,all";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  ",2347066659189";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYSEVHeVAxVms4R2k5OHM2Q0FoNlFaTmczZzdZa1Bkak12Sm9jK2ZweVg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwMUhpY1hUbVMtbXRzTlNILU0zU29RXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzNTM5YmQ4LTNlNGUtNDViOS1hMGIxLWI2MTI5MzJmZmM0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDE4MyxcbiAgICAgIDEwNyxcbiAgICAgIDE4OCxcbiAgICAgIDEwLFxuICAgICAgMTY3LFxuICAgICAgNDksXG4gICAgICA1MyxcbiAgICAgIDIxMyxcbiAgICAgIDIyOCxcbiAgICAgIDI0LFxuICAgICAgMTcxLFxuICAgICAgNTcsXG4gICAgICA2NCxcbiAgICAgIDI1NCxcbiAgICAgIDE0NixcbiAgICAgIDIzMixcbiAgICAgIDE0NSxcbiAgICAgIDEzNSxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMjksXG4gICAgICAxNjEsXG4gICAgICAxMDcsXG4gICAgICA1NSxcbiAgICAgIDE1NyxcbiAgICAgIDI1MixcbiAgICAgIDE3MixcbiAgICAgIDE1OSxcbiAgICAgIDExOSxcbiAgICAgIDE5MyxcbiAgICAgIDIsXG4gICAgICAxMzUsXG4gICAgICAyOSxcbiAgICAgIDE2OSxcbiAgICAgIDIwLFxuICAgICAgMTgzLFxuICAgICAgMjM5LFxuICAgICAgMjQsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDVjRXSDJESFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NjY1OTE4OTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2OTUyMzk4NzM3NjI1OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMbHNRNFEyNEd1dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVFlRmtTT0IybUtORjhWMm1OR0IyWUJBUXZySHZnYWdiU1YzdUVLTk4wbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOTVA1Q1VQMmgzRkJ3OWRaVFRKWHh6dU5FTk1mV1l4U3EwbXB1NFNlUmdxd3FmSDRCZkUzWDU2V0ttN0p5VHlJbGRSQ0xwM1VJSDJ1RGdkN2J6cHJBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4UnFNZUwyNVpFY1A3VTFLSVo2OWhNUXJvdnMyMWdJbmM3eVFMMWtTcXhRNWtZZ2F4dTFpMitkb05SRGZQTURQNmJyejZWdWZjbmRlM1RQSHl0bjlqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY2NjU5MTg5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MTg1MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLbGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtsYi5qc29uIjogIntcImtleURhdGFcIjpcIk4zVTRMTktZVjgxUkJpK0RTVFZFNUNXSHNlVm4zVnZ0QXZVbWRreE9OUWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzAxNzU4ODksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🌙Moonlight🌙",
  ownername:process.env.OWNER_NAME|| "🌙Moonlight🌙",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "7bezgsmlnupa84dnq56vng0ympr1zjduu393a7qzkrtnfr8me0f49cpxwwxac946",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "h12412wt3je40xmczpeyd04h2eokvh2aexzr6m6ejpii6lqi8tty5oer5dkqc9ly",
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
