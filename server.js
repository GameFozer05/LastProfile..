
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://lastcredit.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const daily = Math.floor(Math.random() * 350) + 10;
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');


let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
var copy = "InF,Texo "
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    title: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 75,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {    // By Texo
   lastDaily:'Not Collected',
   credits: 75,
 };
  }
  if(men) {
message.channel.send(`:atm: | **${men.username}, <a:credit:588071560477278208> balance` + " is `" + `$${profile[men.id].credits}` + "`.**")
} else {
 message.
channel.send(`:atm: | **${message.author.username}, your <a:credit:588071560477278208> balance` + " is `" + `$${profile[message.author.id].credits}` + "`.**")
}
}
if(message.content ==(prefix + "daily")) {

                 moment.locale('ar'); 
  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310,750, 450, 320,220,620
    message.channel.send(`:atm: |**${message.author.username} you collect your  \`310\` <a:Dollar:594282987017994240> daily credits!**`)
} else {
    message.channel.send(`**<a:Daily:606926578781519902> | ${message.author.username}, يمكنك الحصول على رصديك  ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
  if(message.content.startsWith(prefix + "trans" || prefix + "trans")) {

   if (!args[0]) {message.channel.send(``);
      return;                             
           }
   let embed= new Discord.RichEmbed()
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`** <a:false:601106817623523329>  لقد حدت خطأ**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
        // We should also make sure that args[0] is a number
             if(profile[message.author.id].credits < args[0])  return message.channel.send("** <a:false:601106817623523329>  لقد حدت خطأ**")
if(args[0].startsWith("-")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith(".")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.5")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.10")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.9")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.8")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.7")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.6")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.3")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.4")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.2")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("10.5")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("20.5")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("19.10")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("18.9")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("17.8")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("16.7")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("15.6")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("14.3")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("13.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("12.24")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("11.2")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("00")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("00000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("000000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("00000000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
                 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)  
            if (!defineduser) return message.channel.send(`**<a:false:601106817623523329> لقد حدت خطأ**`);
            if(defineduser.id === message.author.id) return message.channel.send("** <a:false:601106817623523329>  لقد حدت خطأ**")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3744' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`<a:credit:588071560477278208>**\`${args}\`** **: الملبغ** **\n \`${x[x3]}\` ✍ أكتب الرقم للأستمرار**`).then(msg1=> {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            message.delete()
        })
         
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**<a:NoN:601060027528249355> | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(`:dollar: | **تم التوصيل** \`\`\`You have received $${args[0]} from user ${message.author.username} (ID: ${message.author.id}) Server ${message.guild.name}\`\`\``);
        })
        })
}
});


client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
          moment.locale('ar'); 
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, منشن الشخص المحدد    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username},! لا يمكنك ان تعطي لنفسك اعجاب**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, \`-Time\` ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});


   client.on('message', message => {
          moment.locale('ar-TN'); 
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 120) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, <a:Emoji:603642872151146497> لقد وصلت للمستوى __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      });

    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Super"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })


    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                const mm = message.mentions.members.first() || message.member;
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,title: "HypeLC User", rep: 0, lastDaily: "NOT COLLECTED"};
         var men = message.mentions.users.first();
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
    .setThumbnail(mm.user.avatarURL)
      .addField('<:1:605210187699060738> **`Name`**',`**${getvalueof.username}**`,true)
      .addField('**`credits`**',`**$${profile[getvalueof.id].credits}**`,true)
      .addField('**`points`**',`**${profile[getvalueof.id].points}**`,true)
      .addField('**`level`**',`**${profile[getvalueof.id].level}**`,true)
      .addField('**`title`**',`**${profile[getvalueof.id].tite}**`,true)
      .addField('**`reps`**',`**+${profile[getvalueof.id].rep}**`,true)
      .setImage('https://6.top4top.net/p_12515dswm1.gif')   // By InF,Texo
      message.channel.send({embed:embed})
    }
});


client.on("message", function(message) {
    var prefix = "+";
   if(message.content ==(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setImage('https://6.top4top.net/p_12515dswm1.gif')
    .addField("<a:Loading:588119168143065105>**__Public | عامه__**","👥",true)
    .addField("<a:Loading:588119168143065105>**__Admin | اداره__**","🔒",true)
    .addField("<a:Loading:588119168143065105>**__Games | الالعاب__**","🎮",true)
    .addField("<a:Loading:588119168143065105>**__Music | الموسيقة__**","🎶",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('👥')
        msg.react("🔒")
        msg.react("🎮")
        msg.react("🎶")
.then(() => msg.react('👥'))
.then(() =>msg.react('🔒'))
.then(() => msg.react('🎮'))
.then(() => msg.react('🎶'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 200000 });      
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 200000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 200000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 200000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setImage('https://6.top4top.net/p_12515dswm1.gif')   // By InF,Texo
      .setColor("RANDOM")
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
      .setDescription(`
** __LastBot🌀__

       __اوامر عامة__👥
<a:emoji_15:586726540390432787> +credits/trans ➾ معرفة رصيدك و تحويله 
<a:emoji_15:586726540390432787> +daily ➾   لزيادت رصيدك كل 24/24
<a:emoji_15:586726540390432787> +profile ➾ معلومات حول بروفايلك 
<a:emoji_15:586726540390432787> +rep ➾ ارسال اعجاب لشخص معين
<a:emoji_15:586726540390432787> +title ➾ وضع تعريفك في بروفيالك 
<a:emoji_15:586726540390432787> +ms ➾ معرفة حالة الاعضاء
<a:emoji_15:586726540390432787> +avatar ➾ شعار حسابك و حساب اخر
<a:emoji_15:586726540390432787> +user ➾ معلومات عنك
<a:emoji_15:586726540390432787> +new ➾ فتح التكت
<a:emoji_15:586726540390432787> +emolist ➾ معرفة الايموجي حك اي سيرفر
<a:emoji_15:586726540390432787> +say ➾ تخلي البوت يكتب الشيء الي بدك
<a:emoji_15:586726540390432787> +invite ➾ كم جبت من عضو
<a:emoji_15:586726540390432787> +bot ➾ معلومات البوت
<a:emoji_15:586726540390432787> +allbots ➾ اضهار بوتات السيرفر
<a:emoji_15:586726540390432787> +ci [rome] ➾  معلومات الروم كتابي
<a:emoji_15:586726540390432787> +ping ➾ عرض سرعه اتصال البوت
<a:emoji_15:586726540390432787> +server ➾ معلومات السيرفر
<a:emoji_15:586726540390432787> +colors ➾ لاضهار قائمة الالوان
<a:emoji_15:586726540390432787> +color [color]➾ لاختيار لون معين
<a:emoji_15:586726540390432787> +link ➾ رابط دعوة البوت  
<a:emoji_15:586726540390432787> +web ➾  رابط دعوة الموقع    
<a:emoji_15:586726540390432787> +sup ➾ رابط دعوة السبورت
**

`)
   message.author.sendEmbed(embed)
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/MB1stPF-7596L9gz5xgH3dI0q_kOx4p_BaEqapTylqU/https/cdn.discordapp.com/attachments/576168118833905676/581982323868827648/admin-ea-logo-2.png')
      .setColor("RANDOM")
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
      .setImage('https://6.top4top.net/p_12515dswm1.gif')   // By InF,Texo
      .setDescription(`
** __LastBot🌀__
       
         __اوامر ادارية__🔒

<a:emoji_15:586726540390432787> +clear  ➾ لتنضيف المحادثة 
<a:emoji_15:586726540390432787> +rv (name) ➾ صنع روم صوتي
<a:emoji_15:586726540390432787> +rc (name) ➾ صنع روم كتابي
<a:emoji_15:586726540390432787> +kick (mention) ➾ لحدر عضو
<a:emoji_15:586726540390432787> +ban (mention) ➾  لطرد الشخص من السيرفر
<a:emoji_15:586726540390432787> +mute (mention) ➾ اسكات عضو
<a:emoji_15:586726540390432787> +unmute (mention) ➾ فك الاسكات 
<a:emoji_15:586726540390432787> +move ➾ سحب الأعضاء الى رومك الصوتي
<a:emoji_15:586726540390432787> +mc  ➾  لقفل روم كتابي
<a:emoji_15:586726540390432787> +unmc ➾ لفتح روم كتابي
<a:emoji_15:586726540390432787> +antibots on/off ➾ لتفعيل عدم دخول البوتات
<a:emoji_15:586726540390432787> +role @user (role) ➾ لأعطاء رتبة لعضو  
<a:emoji_15:586726540390432787> +role all (role)  ➾ لاعطاء جميع الاعضاء رتبة 
<a:emoji_15:586726540390432787> +roleRemove @user (role) ➾ ازالة الرتبة 
<a:emoji_15:586726540390432787> +ccolor ➾  لمعمل 50 لون
<a:emoji_15:586726540390432787> +dcolor ➾  لحدف جميع الاوان

         __الترحيب__

لتفعيل خاصية الترحيب و المغادرة قم بعمل قناة اسمها 

\`\`\`css
"welcome"   /  "《welcome》"
"〖welcome〗" /  "〘welcome〙"\`\`\`
\` ملاحضة: البوت في خاصية منع التهكير
 🔔 يجب ان تكون رتبة البوت عالية\`**
`)
   message.author.sendEmbed(embed)
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
  .setThumbnail('https://images-ext-1.discordapp.net/external/ngiMTR5NctHiNKvgPMDmlZVwKxyX7VRGzqsAuFagdYs/https/cdn.discordapp.com/attachments/576168118833905676/581981949879648276/logo-game.png?width=923&height=652')
      .setColor("RANDOM")
      .setImage('https://6.top4top.net/p_12515dswm1.gif')   // By InF,Texo
      .setDescription(`
 ** __LastBot🌀__

       __اوامر الالعاب__🎮
    
<a:emoji_15:586726540390432787> +skin [name]  ➾  لاضهار شخصيتك في لعبة ماين كرفات
<a:emoji_15:586726540390432787> +steam [name]  ➾   لمعرفة معلومات حول الالعاب
<a:emoji_15:586726540390432787> +lk ➾  لعبة لو خيروك
<a:emoji_15:586726540390432787> +3ikab ➾ لعبة عقاب
<a:emoji_15:586726540390432787> +lez ➾ لعبة الغاز
<a:emoji_15:586726540390432787> +dis ➾ لعبة فكك 
**
`)
   message.author.sendEmbed(embed)
})
reaction4.on("collect", r => {
  const embed = new Discord.RichEmbed()
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
  .setThumbnail('https://cdn.discordapp.com/attachments/576168118833905676/581980559962538005/logo-VisualMusic.png')
      .setColor("RANDOM")
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
      .setImage('https://6.top4top.net/p_12515dswm1.gif')   // By InF,Texo
      .setDescription(`
 ** __LastBot🌀__
  

       __اوامر الموسيقة__🎶  

 <a:emoji_15:586726540390432787> +play ➾ لتشغيل أغنية برآبط أو بأسم
 <a:emoji_15:586726540390432787> +skip ➾ لتجآوز الأغنية الحآلية
 <a:emoji_15:586726540390432787> +pause ➾ إيقآف الأغنية مؤقتا
 <a:emoji_15:586726540390432787> +resume ➾ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
 <a:emoji_15:586726540390432787> +vol ➾ لتغيير درجة الصوت 100 - 0
 <a:emoji_15:586726540390432787> +stop ➾ لإخرآج البوت من الروم
 <a:emoji_15:586726540390432787> +np ➾ لمعرفة الأغنية المشغلة حآليا
 <a:emoji_15:586726540390432787> +queue ➾ لمعرفة قآئمة التشغيل لأننتقال للاغنية التالية
**
`)
   message.author.sendEmbed(embed)
})
    })
}
});


client.on('messageDelete', message => {

	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = message.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	let messageDelete = new Discord.RichEmbed()
	.setTitle('**[MESSAGE DELETE]**')
	.setColor('RED')
	.setThumbnail(message.author.avatarURL)
	.setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
	.setTimestamp()
	.setFooter(message.guild.name, message.guild.iconURL)

	logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {

	if(oldMessage.author.bot) return;
	if(!oldMessage.channel.type === 'dm') return;
	if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldMessage.content.startsWith('https://')) return;

	let messageUpdate = new Discord.RichEmbed()
	.setTitle('**[MESSAGE EDIT]**')
	.setThumbnail(oldMessage.author.avatarURL)
	.setColor('BLUE')
	.setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
	.setTimestamp()
	.setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)

	logChannel.send(messageUpdate);
});


client.on('roleCreate', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleCreate = new Discord.RichEmbed()
		.setTitle('**[ROLE CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleCreate);
	})
});
client.on('roleDelete', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleDelete = new Discord.RichEmbed()
		.setTitle('**[ROLE DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('RED')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleDelete);
	})
});
client.on('roleUpdate', (oldRole, newRole) => {

	if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldRole.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldRole.name !== newRole.name) {
			let roleUpdateName = new Discord.RichEmbed()
			.setTitle('**[ROLE NAME UPDATE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateName);
		}
		if(oldRole.hexColor !== newRole.hexColor) {
			if(oldRole.hexColor === '#000000') {
				var oldColor = '`Default`';
			}else {
				var oldColor = oldRole.hexColor;
			}
			if(newRole.hexColor === '#000000') {
				var newColor = '`Default`';
			}else {
				var newColor = newRole.hexColor;
			}
			let roleUpdateColor = new Discord.RichEmbed()
			.setTitle('**[ROLE COLOR UPDATE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateColor);
		}
	})
});


client.on('channelCreate', channel => {

	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelCreate = new Discord.RichEmbed()
		.setTitle('**[CHANNEL CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelCreate);
	})
});
client.on('channelDelete', channel => {
	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelDelete = new Discord.RichEmbed()
		.setTitle('**[CHANNEL DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('RED')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelDelete);
	})
});
client.on('channelUpdate', (oldChannel, newChannel) => {
	if(!oldChannel.guild) return;

	var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldChannel.type === 'text') {
		var channelType = 'Text';
	}else
	if(oldChannel.type === 'voice') {
		var channelType = 'Voice';
	}else
	if(oldChannel.type === 'category') {
		var channelType = 'Category';
	}

	oldChannel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldChannel.name !== newChannel.name) {
			let newName = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newName);
		}
		if(oldChannel.topic !== newChannel.topic) {
			let newTopic = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newTopic);
		}
	})
});


client.on('guildBanAdd', (guild, user) => {

	if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(userID === client.user.id) return;

		let banInfo = new Discord.RichEmbed()
		.setTitle('**[BANNED]**')
		.setThumbnail(userAvatar)
		.setColor('DARK_RED')
		.setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setTimestamp()
		.setFooter(guild.name, guild.iconURL)

		logChannel.send(banInfo);
	})
});
client.on('guildBanRemove', (guild, user) => {
	if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(userID === client.user.id) return;

		let unBanInfo = new Discord.RichEmbed()
		.setTitle('**[UNBANNED]**')
		.setThumbnail(userAvatar)
		.setColor('GREEN')
		.setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setTimestamp()
		.setFooter(guild.name, guild.iconURL)

		logChannel.send(unBanInfo);
	})
});
client.on('guildUpdate', (oldGuild, newGuild) => {

	if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldGuild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldGuild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldGuild.name !== newGuild.name) {
			let guildName = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD NAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(newGuild.name, oldGuild.iconURL)

			logChannel.send(guildName)
		}
		if(oldGuild.region !== newGuild.region) {
			let guildRegion = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD REGION]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(guildRegion);
		}
		if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
			if(oldGuild.verificationLevel === 0) {
				var oldVerLvl = 'Very Easy';
			}else
			if(oldGuild.verificationLevel === 1) {
				var oldVerLvl = 'Easy';
			}else
			if(oldGuild.verificationLevel === 2) {
				var oldVerLvl = 'Medium';
			}else
			if(oldGuild.verificationLevel === 3) {
				var oldVerLvl = 'Hard';
			}else
			if(oldGuild.verificationLevel === 4) {
				var oldVerLvl = 'Very Hard';
			}

			if(newGuild.verificationLevel === 0) {
				var newVerLvl = 'Very Easy';
			}else
			if(newGuild.verificationLevel === 1) {
				var newVerLvl = 'Easy';
			}else
			if(newGuild.verificationLevel === 2) {
				var newVerLvl = 'Medium';
			}else
			if(newGuild.verificationLevel === 3) {
				var newVerLvl = 'Hard';
			}else
			if(newGuild.verificationLevel === 4) {
				var newVerLvl = 'Very Hard';
			}

			let verLog = new Discord.RichEmbed()
			.setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild Verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(verLog);
		}
	})
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	if(!oldMember.guild) return;

	var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldMember.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;
		var userTag = logs.entries.first().executor.tag;

		if(oldMember.nickname !== newMember.nickname) {
			if(oldMember.nickname === null) {
				var oldNM = '`اسمه الاصلي`';
			}else {
				var oldNM = oldMember.nickname;
			}
			if(newMember.nickname === null) {
				var newNM = '`اسمه الاصلي`';
			}else {
				var newNM = newMember.nickname;
			}

			let updateNickname = new Discord.RichEmbed()
			.setTitle('**[UPDATE MEMBER NICKNAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

			logChannel.send(updateNickname);
		}
		if(oldMember.roles.size < newMember.roles.size) {
			let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();

			let roleAdded = new Discord.RichEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();

			let roleRemoved = new Discord.RichEmbed()
			.setTitle('**[REMOVED ROLE FROM MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('RED')
			.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleRemoved);
		}
	})
	if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
		let newOwner = new Discord.RichEmbed()
		.setTitle('**[UPDATE GUILD OWNER]**')
		.setThumbnail(oldMember.guild.iconURL)
		.setColor('GREEN')
		.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
		.setTimestamp()
		.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

		logChannel.send(newOwner);
	}
});


client.on('voiceStateUpdate', (voiceOld, voiceNew) => {

	if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	voiceOld.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userTag = logs.entries.first().executor.tag;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
			let serverMutev = new Discord.RichEmbed()
			.setTitle('**[VOICE MUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverMutev);
		}
		if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
			let serverUnmutev = new Discord.RichEmbed()
			.setTitle('**[VOICE UNMUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverUnmutev);
		}
		if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
			let serverDeafv = new Discord.RichEmbed()
			.setTitle('**[VOICE DEAF]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverDeafv);
		}
		if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
			let serverUndeafv = new Discord.RichEmbed()
			.setTitle('**[VOICE UNDEAF]**')
			.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfGf9m5PCwpwb1EG9XyJgwVosLWYX7URUBcFfiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverUndeafv);
		}
	})
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
		let voiceJoin = new Discord.RichEmbed()
		.setTitle('**[JOIN VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceJoin);
	}
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
		let voiceLeave = new Discord.RichEmbed()
		.setTitle('**[LEAVE VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceLeave);
	}
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
		let voiceLeave = new Discord.RichEmbed()
		.setTitle('**[CHANGED VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceLeave);
	}
});


    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "HypeLC User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("Super.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري
 
                        //points
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 221, 159) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 27px kathen" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 221, 118) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 26px  kathen"; 
                        ctx.fontSize = "50px";   
                        ctx.fillStyle = "#f1f1f1"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,117) // احداثيات الريب
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;            
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 116, 82, 72, 72);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});

console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");


