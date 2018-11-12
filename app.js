const サイコロ = ['http://urx2.nu/MkU7'
                 ,'http://urx2.nu/MkUf'
                 ,'http://urx2.nu/MkUi'
                 ,'http://urx2.nu/MkUj'
                 ,'http://urx2.nu/MkUn'
                 ,'http://urx2.nu/MkUo']
                 const Color = '#9245ab';
                 const fs = require("fs");
                 require('dotenv').config()
                 const request = require('request')
const Discord = require("discord.js");
const discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const config = require("./config.json");
const low = require('lowdb'); 
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const adapter3 = new FileSync('./global-ban.json');
const global = require("./global-ban.json");
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
function howToCall(client, message, name) {
    var info = global.user().find({
        id: message.author.id
    }).value();
    if (!info) {
        global.user().push({
            id: message.author.id,
            name: name,
            timeout: 0
        }).write();
    } else {
        global.user().find({
            id: message.author.id
        }).assign({
            name: name,
            timeout: 0
        }).write();
    }
    message.channel.send(`これからは${info.name}って呼ぶね！`);
    return;
  }
  global.db = low(adapter);
  global.db.defaults({
      guild: [],
      user: []
  }).write();
  global.guild = () => global.db.get('guild');
  global.user = () => global.db.get('user');
  global.waitInput = [];
      client.on('message', async message => {
        if (message.author.bot || !message.guild) return
          var info = global.user().find({
              id: message.author.id
          }).value();
          if (!info) {
              global.user().push({
                  id: message.author.id,
                  name : message.author.username,
                  count: 0,
                  nickname: message.author.username
              }).write();
          }
        
          if (message.content.indexOf(config.prefix) === 0) {
              runCommand(client, message);
              return;
          } 
  
  function runCommand(client, message) {
      const args2 = message.content.slice(config.prefix.length).trim().split(/[ ]+/g);
      let command2;
      if (message.content.indexOf(config.prefix) === 0) {
          command2 = args2.shift().toLowerCase();
      } else {
          args2.shift();
        if (args2.length)  command2 = args2.shift().toLowerCase();
  else command2 = '';
      }
            if (command2.includes('って呼んで')) {
                  var nameToCall = command2.slice(0, command2.indexOf('って呼んで')).trim().split(/[ 、]+/g);
                  howToCall(client, message, nameToCall);
                  return;
              
            }if (command2 === "") {
  message.channel.send(`なにがしたかったのｗ ${info.name}さんｗ`)
            } if(command2 === "sine"){
              message.channel.send(`ひどいよー${info.name}`); 
         }  if(command2 === "h"){
           message.channel.send(`なにがしたかったんｗ${info.name}さんｗ`)
         }
          if(command2 === "<@500580866448293899>"){
          message.channel.send(`なんですかｗ${info.name}さんｗhelpは \`!t help\`ですよｗ`)
          }
        }
      });
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
client.on('guildMemberAdd', message => {
  const channel = message.guild.channels.get('475612407264182275');
  if (!channel) return
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }
  var nowTime = new Date();
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(` 参加した日時は`+ nowTime + `です`)
  .setAuthor(`${message.user.tag}さんが参加しました!` )
  .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
  .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
    channel.send(embed);
});
client.on('guildMemberRemove', message => {
  const channel = message.guild.channels.get('475612407264182275')
  if (!channel) return
  channel.send({embed: {
  setColor:'0x' + Color,
  title: `${message.user.tag}さんが退出しました`,
  description: `ご利用ありがとうございました.`,
  setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
  timestamp: new Date(),
  footer: {
    icon_url: message.user.avatarURL,
  }
  }
  })
});
//みんなの家
client.on('guildMemberAdd', message => {
  const channel = message.guild.channels.get('492652871192412164');
  if (!channel) return
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }
  var nowTime = new Date();
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(` 参加した日時は`+ nowTime + `です`)
  .setAuthor(`${message.user.tag}さんが参加しました!` )
  .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
  .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
    channel.send(embed);
});
client.on('guildMemberRemove', message => {
  const channel = message.guild.channels.get('492652871192412164')
  if (!channel) return
  channel.send({embed: {
    setColor:'0x' + Color,
  title: `${message.user.tag}さんが退出しました`,
  description: `ご利用ありがとうございました.`,
  setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
  timestamp: new Date(),
  footer: {
    icon_url: message.user.avatarURL,
  }
  }
  })
});
//不知火の鯖
client.on('guildMemberAdd', message => {
  const channel = message.guild.channels.get('428572439207870469');
  if (!channel) return
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }
  var nowTime = new Date();
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(` 参加した日時は`+ nowTime + `です`)
  .setAuthor(`${message.user.tag}さんが参加しました!` )
  .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
  .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
    channel.send(embed);
});
client.on('guildMemberRemove', message => {
  const channel = message.guild.channels.get('428572439207870469')
  if (!channel) return
  channel.send({embed: {
    setColor:'0x' + Color,
  title: `${message.user.tag}さんが退出しました`,
  description: `ご利用ありがとうございました.`,
  setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
  timestamp: new Date(),
  footer: {
    icon_url: message.user.avatarURL,
  }
  }
  })
});
//自由の鯖
client.on('guildMemberAdd', message => {
  const channel = message.guild.channels.get('414005285066375170');
  if (!channel) return
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }
  var nowTime = new Date();
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(` 参加した日時は`+ nowTime + `です`)
  .setAuthor(`${message.user.tag}さんが参加しました!` )
  .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
  .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
    channel.send(embed);
});
client.on('guildMemberRemove', message => {
  const channel = message.guild.channels.get('414005285066375170')
  if (!channel) return
  channel.send({embed: {
    setColor:'0x' + Color,
  title: `${message.user.tag}さんが退出しました`,
  description: `ご利用ありがとうございました.`,
  setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
  timestamp: new Date(),
  footer: {
    icon_url: message.user.avatarURL,
  }
  }
  })
});
//俺の鯖
client.on('guildMemberAdd', async message => {
  const channel = message.guild.channels.get('457419227352268812');
  if (!channel) return
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }
  var nowTime = new Date();
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(` 参加した日時は`+ nowTime + `です`)
  .setAuthor(`${message.user.tag}さんが参加しました!` )
  .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
  .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
    channel.send(embed);
    if(global.id === message.user.id){
      var test = message.guild.members.get(message.user.id);
     test.ban()
     .catch(message.channel.send('彼はglobal-banの対象だったためbanされました。'))
    }
});
client.on('guildMemberRemove', message => {
  const channel = message.guild.channels.get('457419227352268812')
  if (!channel) return
  channel.send({embed: {
    setColor:'0x' + Color,
  title: `${message.user.tag}さんが退出しました`,
  description: `ご利用ありがとうございました.`,
  setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
  timestamp: new Date(),
  footer: {
    icon_url: message.user.avatarURL,
  }
  }
  })
  });
  //雑談!サーバー
  client.on('guildMemberAdd', message => {
    const channel = message.guild.channels.get('449926707894288387');
    if (!channel) return
    function checkMembers(guild) {
      let memberCount = 0
      guild.members.forEach(member => {
        if(!member.user.bot) memberCount++
      })
      return memberCount
    }
    var nowTime = new Date();
    let embed = new Discord.MessageEmbed()
    .setColor('#0000FF')
    .setTitle(` 参加した日時は`+ nowTime + `です`)
    .setAuthor(`${message.user.tag}さんが参加しました!` )
    .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
    .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
      channel.send(embed);
  });
  client.on('guildMemberRemove', message => {
    const channel = message.guild.channels.get('449926707894288387')
    if (!channel) return
    channel.send({embed: {
      setColor:'0x' + Color,
    title: `${message.user.tag}さんが退出しました`,
    description: `ご利用ありがとうございました.`,
    setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
    timestamp: new Date(),
    footer: {
      icon_url: message.user.avatarURL,
    }
    }
    })
    });
    //PL遺跡
    client.on('guildMemberAdd', message => {
      const channel = message.guild.channels.get('475579010613510144');
      if (!channel) return
      function checkMembers(guild) {
        let memberCount = 0
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++
        })
        return memberCount
      }
      var nowTime = new Date();
      let embed = new Discord.MessageEmbed()
      .setColor('#0000FF')
      .setTitle(` 参加した日時は`+ nowTime + `です`)
      .setAuthor(`${message.user.tag}さんが参加しました!` )
      .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
      .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
        channel.send(embed);
    });
    client.on('guildMemberRemove', message => {
      const channel = message.guild.channels.get('475579010613510144')
      if (!channel) return
      channel.send({embed: {
        setColor:'0x' + Color,
      title: `${message.user.tag}さんが退出しました`,
      description: `ご利用ありがとうございました.`,
      setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
      timestamp: new Date(),
      footer: {
        icon_url: message.user.avatarURL,
      }
      }
      })
      });
      //Minecraft鯖
      client.on('guildMemberAdd', message => {
        const channel = message.guild.channels.get('494059964068003840');
        if (!channel) return
        function checkMembers(guild) {
          let memberCount = 0
          guild.members.forEach(member => {
            if(!member.user.bot) memberCount++
          })
          return memberCount
        }
        var nowTime = new Date();
        let embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle(` 参加した日時は`+ nowTime + `です`)
        .setAuthor(`${message.user.tag}さんが参加しました!` )
        .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
        .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
          channel.send(embed);
      });
      client.on('guildMemberRemove', message => {
        const channel = message.guild.channels.get('494059964068003840')
        if (!channel) return
        channel.send({embed: {
          setColor:'0x' + Color,
        title: `${message.user.tag}さんが退出しました`,
        description: `ご利用ありがとうございました.`,
        setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
        timestamp: new Date(),
        footer: {
          icon_url: message.user.avatarURL,
        } 
        }
        })
        }); 
// evalコマンド　ほとんど修正いらない
client.on("message", async message => {
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(command === 'eval') {
  if(message.author.id !== config.ownerID){
    message.channel.send(new Discord.MessageEmbed().setColor(Color).setTitle(`${message.author.username}はBotの管理者ではありません。故にevalコマンドを使用できません.`))
  }
     if(message.author.id !== config.ownerID) return;
       try{
       const code = message.content.substr(8, message.content.length);
       message.channel.send(eval(code))
       } catch(e){
        message.react('❌')
         message.reply(e.message)
        return;
       } 
   message.react("✅")
return;
    }
  });
//Bot準備OK
client.on("ready", () => {
  console.log(`ログインしたよ！ あと 合計${client.users.size} ユーザー, そして合計${client.channels.size} チャンネル そして合計 ${client.guilds.size}サーバーで動いてるよ！.`);
  console.log(' _   _        _  _ \n\
               | | | |      | || | \n \
               | |_| |  ___ | || |  ___  \n\
               |  _  | / _ \| || | / _ \ \n\
               | | | ||  __/| || || (_) |\n\
               \_| |_/ \___||_||_| \___/')
  client.user.setActivity(config.prefix+"help"+`|halloween!|${client.guilds.size}サーバーで稼働中`);
});
//サーバーに入った
client.on("guildCreate", guild => {
  console.log(`新しいサーバーに入ったよ！: ${guild.name} (id: ${guild.id}). このサーバーには ${guild.memberCount} メンバーがいるよ！`)
  client.user.setActivity(config.prefix+" help"+`|halloween!|${client.guilds.size}サーバーで稼働中`);
 guild.members.get(config.ownerID).send(`新しいサーバーに入ったよ！: ${guild.name} (id: ${guild.id}). このサーバーには ${guild.memberCount} メンバーがいるよ！`)
guild.fetchInvites()
 .then(invites => guild.members.get(config.ownerID).send(`招待コード：${invites.size} `))
 .catch(console.error);
});
//サーバーから蹴られた
client.on("guildDelete", async guild => {
  console.log(` ${guild.name}サーバーからkickかbanされたよ！ (id: ${guild.id})`)
  client.user.setActivity(config.prefix+" help"+`|halloween!|${client.guilds.size}サーバーで稼働中`)
 .then(guild.members.get(config.ownerID).send(` ${guild.name}サーバーからkickかbanされたよ！ (id: ${guild.id})`))
 .then(guild.fetchInvites())
 .then(invites => guild.members.get(config.ownerID).send(`招待コード：${invites.size} `))
 .catch(console.error);
}); 
//リアクション
client.on("message", async message => {
  if (message.author.bot) return
  if(message.content.includes("卍")) {
    const majimannji = client.emojis.find(emoji => emoji.name === "mannzi")
    message.react(majimannji)
  } if(message.content.includes("スーモ")) {
    const suumo = client.emojis.find(emoji => emoji.name === "suumo")
    message.react(suumo)
  }if(message.content.includes("??")) {
message.react(client.emojis.find(emoji => emoji.name === "3dthink"))
} if(message.content.includes("!t hammer")) {
  const ban = client.emojis.find(emoji => emoji.name === "banhammer");
message.react(ban)
} if(message.content.includes("!t 回")){
  message.delete();
 message.channel.send({files:["./thinkspin.gif"]})
} if(message.content === message.content){
  if(message.channel.type === "dm") {
    message.channel.send(message.content)
  }
} if(message.content.includes(message.content)) {
  if(message.channel.type === "dm") return;
  console.log(`${message.guild.name}:${message.channel}:名前:${message.author.username}:` + message.content);
}
});  
//機能全般 main
client.on("message", async message => {
  if(message.content.indexOf(config.prefix) !== 0) return;
  if (message.author.bot || !message.guild) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "ping") {
    const m = await message.channel.send("|loading|Pingを確認しています...");
    m.edit(`Pong! 待ち時間 ${m.createdTimestamp - message.createdTimestamp}ms. API 待ち時間 ${Math.round(client.ping)}ms`);
} if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
} if(command === "kick") {
      if (message.author.id !== config.ownerID) return;
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.author.send("メンションしてくれないとbanできないじゃまいか！");
    if(!member.kickable) 
      return message.author.send("私はこの人をkickできません！権限をくれないとkickできないです:thinking:");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "ないです";
    await member.kick(reason)
      .catch(error =>message.author.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.author.send(`${member.user.tag} をkickしました！ ${message.author.tag}がkickしたよ！ 理由は ${reason}`);
} if(command === "ban") {　
    if (message.author.id !== config.ownerID) return;
    let member = message.mentions.members.first();
    if(!member)
      return message.author.send("メンションしてくれないとBanできないじゃまいか！");
    if(!member.bannable) 
      return message.author.send("私はこの人をbanすることができません！権限をくれないとbanできません:thinking:");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.author.send(`${member.user.tag} をbanしました！ ${message.author.tag}がbanしたよ！ 理由は ${reason}`);
    function howToCall(client, name) {
      var info = global.user().find({
          id: member.id
      }).value();
      if (!info) {
          global.user().push({
              id: member.id,
              name: member.user.username,
              timeout: 0
          }).write();
      } else {
          global.user().find({
              id: member.id
          }).assign({
              name: member.user.username,
              timeout: 0
          }).write();
      }
      message.author.send(`ついでにglobal-banにも成功したよ！`);
      return;
    }
    global.db = low(adapter3);
    global.db.defaults({
        guild: [],
        user: []
    }).write();
    global.guild = () => global.db.get('guild');
    global.user = () => global.db.get('user');
    global.waitInput = [];
    var info = global.user().find({
      id: member.id
  }).value();
  if (!info) {
      global.user().push({
          id: member.id,
          name : member.user.username,
          count: 0,
          Banした人: message.author.username
      }).write();
  }
} if(command === "icon") {
  var user2 = message.mentions.users.first();
  var member7 = message.guild.members.get(args[0])
  if(!user2 && member7){
    let embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(member7.user.avatarURL());
     message.channel.send(embed)
  }
  if(user2 && !member7) {
    let embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(user2.avatarURL());
     message.channel.send(embed);
  } if(!user2 && !member7) {
    let embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(message.author.avatarURL());
     message.channel.send(embed);
  }
} if(command === "serverinfo") {
    function checkBots(guild) {
        let botCount = 0
        guild.members.forEach(member => {
          if(member.user.bot) botCount++
        })
        return botCount
      }
      function checkMembers(guild) {
        let memberCount = 0
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++
        })
        return memberCount
      }     
  let embed = new Discord.MessageEmbed()
  .setTitle('雑談サーバー(BOT)に入る')
  .setURL('https://discord.gg/SAya2Qt')
  .setAuthor(`${message.guild.name} - 情報`, message.guild.iconURL)
  .setColor(Color)
  .addField('サーバーの所有者', message.guild.owner, true)
  .addField('サーバー領域', message.guild.region, true)
  .addField('チャンネルの数', message.guild.channels.size, true)
  .addField('メンバーのかず　Botを含む', message.guild.memberCount)
  .addField('メンバー Botを含まない', checkMembers(message.guild), true)
  .addField('ボット', checkBots(message.guild), true)
  .addField('確認レベル', message.guild.verificationLevel, true)
  .addField('AFKチャンネル',message.guild.afkChannel,true)
  .addField('システムチャンネル',message.guild.systemChannel,true)
  .addField('サーバーの名前の略称',message.guild.nameAcronym,true)
  .addField('不適切なコンテンツフィルターレベル',message.guild.explicitContentFilter,true)
  .addField('役職の数',message.guild.roles.size,true)
  .addField('絵文字の数',message.guild.emojis.size,true)
  .setImage(message.guild.iconURL)
  .setFooter('サーバー作成日:')
  .setTimestamp(message.guild.createdAt)
  return message.channel.send(embed)
} if (command === "si"){
  function checkBots(guild) {
    let botCount = 0
    guild.members.forEach(member => {
      if(member.user.bot) botCount++
    })
    return botCount
  }
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }     
let embed =new Discord.MessageEmbed()
.setTitle('雑談サーバー(BOT)に入る')
.setURL('https://discord.gg/SAya2Qt')
.setAuthor(`${message.guild.name} - 情報`, message.guild.iconURL)
.setColor(Color)
.addField('サーバーの所有者', message.guild.owner, true)
.addField('サーバー領域', message.guild.region, true)
.addField('チャンネルの数', message.guild.channels.size, true)
.addField('メンバーのかず　Botを含む', message.guild.memberCount)
.addField('メンバー Botを含まない',checkMembers(message.guild) , true)
.addField('ボット', checkBots(message.guild), true)
.addField('確認レベル', message.guild.verificationLevel, true)
.addField('AFKチャンネル',message.guild.afkChannel,true)
.addField('システムチャンネル',message.guild.systemChannel,true)
.addField('サーバーの名前の略称',message.guild.nameAcronym,true)
.addField('不適切なコンテンツフィルターレベル',message.guild.explicitContentFilter,true)
.addField('役職の数',message.guild.roles.size,true)
.addField('絵文字の数',message.guild.emojis.size,true)
.setImage(message.guild.iconURL)
.setFooter('サーバー作成日:')
.setTimestamp(message.guild.createdAt);
 message.delete()
 .then(message.channel.send(embed));
} if(command === 'help') {
    let embed = new Discord.MessageEmbed()
    .setTitle('このBotを招待する')
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=500580866448293899&permissions=8&scope=bot')
     .setColor(Color)
     .setAuthor(`${client.user.tag}のhelp`)
     .addField('!t help','このコマンドだよ！',true)
     .addField('!t helpneta','ネタ系機能のhelpが見れるよ！',true)
     .addField('!t ping','応答速度を測るよ！',true)
     .addField('!t icon','アイコンを教えてくれるよ！',true)
     .addField('!t serverinfo/!t si','サーバーの情報が見られるよ！',true)
     .addField('!t say','発言を乗っ取ってくれるよ！',true)
     .addField('!t emojilist','絵文字のリストを見れるよ！',true)
     .addField('!t rolelist','役職リストが見れるよ！',true)
     .addField('!t role','自分のroleの権限の詳細が分かるよ！メンションすれば他人のも見れるよ！',true)
     .addField('!t emojihelp','emojihelpが見れるよ！(このBotの)',true)
     .addField("!t y","ユーザー情報を確認できるよ！メンションとIDを書けば人も指定できるよ！",true)
     .addField('!t serverowner','serverownerをメンションすることができるよ！',true)
     .addField('!t nick (id) (変更したい名前)','idのところに人のIDを入れて、変更したい名前のところに変更したい名前を入れると、そのIDで指定した人のニックネームが変わるよ！\nIDを無視すると自分のニックネームになるよ！\n権限がないと使えません。(ニックネームの管理)',true)
     .setFooter('実行者:' + `${message.author.tag}`)
     message.author.send(embed);
     let embed2 = new Discord.MessageEmbed()
     .setColor(Color)
       .setTitle('このBotを招待する')
       .setURL('https://discordapp.com/api/oauth2/authorize?client_id=500580866448293899&permissions=8&scope=bot')
       .addField("!t member","現在のサーバーの人数を知ることが出来るよ！")
       .addField("!t pin","!t pinは入りますがピンできます",true)
       .addField("!t day","時間を表示してくれるよ！ちなみに１分ごとに更新するよ",true)
       .addField('!t dice','普通のサイコロです。',true)
       .addField('!t clear','メッセージを削除できます。詳細は !t clearhelpへ。',true)
       .addField('!t div (数字)','約数を教えてくれるよ！',true)
       .addField('!t 奇数','その数字が奇数か偶数かを判断してくれるよ！')
       .addField('!t ml','memberのリストを表示してくれるよ！\n注意　検索などはできません。すごい縦長です。注意してください',true)
       .setFooter('実行者:' + `${message.author.tag}`)
       message.author.send(embed2);
} if (command === "clearhelp"){
  message.channel.send('!t clear (削除するメッセージの数)\n __注意__\n100までしか一気に削除できません。\n削除するにはメッセージの管理権限が必要です。\n２週間前のメッセージしか削除できません。');
} if (command === "emojihelp"){
  message.delete()
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setAuthor(`${client.user.tag}のemojihelp`)
  .addField('!t thinking',':thinking:で埋め尽くされるgifが見れるよ！',true)
  .addField('!t 頭大丈夫？','知らないはげおじさんが頭をつつくうざいGIFが見れます。うざい人に見せよう！')
  .addField('スーモ','スーモのリアクションが追加されるよ',true)
  .addField('卍','卍のリアクションが追加されるよ',true)
  .addField('??','3dなthinkingのリアクションが追加されるよ',true)
  .addField('!t hammer','Banのハンマーの絵文字がリアクションされるよ',true)
  .addField('!t rennsurafire','rennsuraを燃やすよ！',true)
  .addField('!t whitethinking','白い背景からthinkingが沸くGIFを見せてくれるよ！',true)
  .addField('!t thinkspinner','考えるハンドスピナーのGIFを見せてくれるよ！',true)
  .addField('!t buruburu','thinkingがブルブルするよ',true)
  .setFooter('実行者:' + `${message.author.tag}`)
  message.author.send(embed);
} if (command === "dice"){
  var dice = `${args[0]}`
  if (dice >100) {
    message.channel.send('サイコロは100まででお願いします。');
    return;}
  let embed = new Discord.RichEmbed()
.setImage(サイコロ[Math.floor(Math.random() * サイコロ.length)]);
    message.channel.send(embed); 
} if (command === "botinfo"){
      let embed = new Discord.MessageEmbed()
      .setColor('#0000FF')
      .setAuthor(`${client.user.tag}のinfo`)
      .setTitle(`${client.user.username}を招待する`)
      .setURL('https://discordapp.com/api/oauth2/authorize?client_id=500580866448293899&permissions=8&scope=bot')
      .addField('知っているユーザーの数',`${client.users.size}`,false)
      .addField('知っているチャンネルの数',`${client.channels.size}`,false)
      .addField('合計どれくらいサーバーに入っているか',`${client.guilds.size}`,false)
      .addField('BOTが作成された時間',`2018年10月13日土曜日5時9分38秒`,false);
      message.channel.send(embed);
} if (command === "clear"){
  if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== config.ownerID) {
    message.channel.send('あなたはメッセージを管理する権限を持っていないのでメッセージを消せません。')
    return;
  } 
if(!args[0]) return
 message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(` ${args[0]}メッセージを削除しました`).then(msg => msg.delete(2000));
}) 
} if (command === "rennsura") {
  message.delete(3500)
const m = await message.channel.send('rennsura System Loading Start')
function sleep(waitSec, callbackFunc) {
  var spanedSec = 0;
 var id = setInterval(function () {
   spanedSec++;
   if (spanedSec >= waitSec) {
     clearInterval(id);
     if (callbackFunc) callbackFunc();
      }}, 500);}
        sleep(1, function () {
        m.edit('rennsura System loading...')
          sleep(2, function () {
            m.edit('rennsura System loading..')
            sleep(3, function () {
              m.edit('rennsura System loading.')
              sleep(4, function () {
                m.edit('rennsura System loading...')
                sleep(5, function () {
                  m.edit('rennsura System loading..')
                  sleep(6, function () {
                    m.edit('rennsura System loading.')
            sleep(7, function() {
             m.edit('rennsura System Start!!!');
})})})})})})})

} if (command === "kazeaisu") {
  message.delete(3500)
const m = await message.channel.send('kazeaisu System Loading Start')
function sleep(waitSec, callbackFunc) {
  var spanedSec = 0;
 var id = setInterval(function () {
   spanedSec++;
   if (spanedSec >= waitSec) {
     clearInterval(id);
     if (callbackFunc) callbackFunc();
      }}, 500);}
        sleep(1, function () {
        m.edit('kazeaisu System loading...')
          sleep(2, function () {
            m.edit('kazeaisu System loading..')
            sleep(3, function () {
              m.edit('kazeaisu System loading.')
              sleep(4, function () {
                m.edit('kazeaisu System loading...')
                sleep(5, function () {
                  m.edit('kazeaisu System loading..')
                  sleep(6, function () {
                    m.edit('kazeaisu System loading.')
            sleep(7, function() {
             m.edit('kazeaisu System Start!!!');
            
})})})})})})})
} if (command === "脱糞"){
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
   .setImage('https://cdn.discordapp.com/attachments/498442031144632320/498443202874048512/unknown.png') 
   message.channel.send('あああああああああああああああああああああああああああああああ！！！！！！！！！！！（ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌ\ ﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞﾌﾞｩｩｩｩｯｯｯ！！！！！！！')
  message.channel.send(embed)
} if (command === "member"){
  function checkMembers(guild) {
    let memberCount = 0
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++
    })
    return memberCount
  }     
  function checkBots(guild) {
    let botCount = 0
    guild.members.forEach(member => {
      if(member.user.bot) botCount++
    })
    return botCount
  }
  let embed = new Discord.MessageEmbed()
  .setColor('#0000FF')
  .addField('MEMBER COUNT',"現在の" + `${message.guild.name}のユーザー数は`　+ message.guild.memberCount + "人です！",false)
  .addField('BOT COUNT',`現在の${message.guild.name}のBotの数は` +checkBots(message.guild) +"人です！",false)
  .addField('HUMAN COUNT',`現在の${message.guild.name}の人間の数は` + checkMembers(message.guild),false)
  .addField('ONLINE COUNT',`現在の${message.guild.name}のONLINE数は` + message.guild.status)
  message.channel.send(embed);
} if (command === 'day') {
  var nowTime = new Date(); //  現在日時を得る
      var nowyear = nowTime.getFullYear();
      var nowmonth = nowTime.getMonth();
      var nowdate = nowTime.getDate();
      var nowHour = nowTime.getHours(); // 時を抜き出す
      var nowMin  = nowTime.getMinutes(); // 分を抜き出す
 m = await message.channel.send(nowyear+ "/" + (nowmonth + 1) + '/' + nowdate +'日' + nowHour + ':' + nowMin +"分です。");
  function time(){
      var nowTime = new Date(); //  現在日時を得る
      var nowyear = nowTime.getFullYear();
      var nowmonth = nowTime.getMonth();
      var nowdate = nowTime.getDate();
      var nowHour = nowTime.getHours(); // 時を抜き出す
      var nowMin  = nowTime.getMinutes(); // 分を抜き出す
      m.edit( nowyear + "/" + (nowmonth + 1) + '/' + nowdate +'日' + nowHour + ':' + nowMin  + "分です。")
  }
setInterval(time,60000);
} if (command ==="pin") {
message.pin(`${args[0]}`);
} if (command === "suumo"){
  message.delete();
  message.channel.send('あ❗スーモ❗🌚ダン💥ダン💥ダン💥シャーン🎶スモ🌝スモ🌚スモ🌝スモ🌚スモ🌝スモ🌚ス〜〜〜モ⤴🌝スモ🌚スモ🌝スモ🌚スモ🌝スモ🌚スモ🌝ス〜〜〜モ⤵🌞')
} if (command === "rennsura語録"){
  message.delete(5000).then(
  message.channel.send(new Discord.MessageEmbed().setColor('#0000FF').setAuthor('rennsura語録').addField(config.rennsura1,'ecec使う人いなさそう',false)
  .addField(config.rennsura2,'違います\nでもLivescriptからjavascriptに変名した人もちょっと悪い',false).addField(config.rennsura3,'花をホジホジする(意味深)',false)
  .addField(config.rennsura4,'？？？？？？？？',false).addField(config.rennsura5,'??????',false).addField('!t rennsura脳内','rennsuraの脳内の画像を見せてくれるよ',false).addField(config.rennsura6,'その発想はなかった',false)
  .addField(config.rennsura7,'妄想がお得意なようで',false).addField(config.rennsura8,'嫌な予感・・・',false).addField(config.rennsura9,'お前だったのか',false)))
} if (command === "ここをお勧めするよ！") {
  message.delete()
  .then(message.channel.send(new Discord.MessageEmbed().setColor('#0000FF').setTitle('ここをお勧めするよ！').setURL('https://www.nisseikyo.or.jp/')));
} if (command === "rennsura脳内"){
  message.delete()
  .then(
  message.channel.send(new Discord.MessageEmbed()  .setColor(Color).setTitle('うわきも').setImage('https://cdn.discordapp.com/attachments/497723494339969025/502838012745351170/rennsura4.png')))
} if (command === "rennsurafire"){
  message.delete();
  const rennsurafire = client.emojis.find(emoji => emoji.name === "a74f74eeed2657412eafd037c3386157");
  message.channel.send(rennsurafire+"\n:fire:\n")
} if (command === "emojilist") {
  const emojiList = message.guild.emojis.map((e) =>' | '+ (e) + ' | ' + e.name ).join('\n');
  message.channel.send(emojiList)
  .catch(error =>message.channel.send('emojiの数が多すぎます！'+ `\n${error}`))
} if (command === "rolelist"){
  const roleList = message.guild.roles.map(r => r.name+"\n");
  message.channel.send("\`\`\`fix\n"+roleList + "\`\`\`")
  .catch(error => message.channel.send('Role数が多すぎて文字数制限に引っかかってしまいました。\n' + `${error}`));
} if (command === 'role'){
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  var user = message.mentions.users.first();
  let perms = message.member.permissions;
  const member2 = message.guild.members.get(args[0])
if (!user && !member2) {
   let embed = new Discord.MessageEmbed()
   .setColor(Color)
   .setThumbnail(message.author.avatarURL)
   .setAuthor(`${message.author.username}の権限`)
   .addField('メンバーをキック',perms.has("KICK_MEMBERS"),true)
   .addField('管理者権限',perms.has("ADMINISTRATOR"),true)
   .addField('チャンネル操作権限',perms.has('MANAGE_CHANNELS'),true)
   .addField("リアクションの追加権限",perms.has("ADD_REACTIONS"),true)
   .addField("role操作権限",perms.has("MANAGE_ROLES_OR_PERMISSIONS"),true)
   .addField("メッセージの管理",perms.has("MANAGE_MESSAGES"),true)
   .addField('全体メンション',perms.has("MENTION_EVERYONE"),true)
   .addField('ニックネーム変更できるか',perms.has("CHANGE_NICKNAME"),true)
   .addField("ニックネーム管理",perms.has("MANAGE_NICKNAMES"),true)
   message.delete()
   .then(message.channel.send(embed))
   return;
} else if(member2) {
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setAuthor(`${member2.user.username}の権限`)
  .addField('メンバーをキック',member2.permissions.has("KICK_MEMBERS"),true)
  .addField('管理者権限',member2.permissions.has("ADMINISTRATOR"),true)
  .addField('チャンネル操作権限',member2.permissions.has('MANAGE_CHANNELS'),true)
  .addField("リアクションの追加権限",member2.permissions.has("ADD_REACTIONS"),true)
  .addField("role操作権限",member2.permissions.has("MANAGE_ROLES_OR_PERMISSIONS"),true)
  .addField("メッセージの管理",member2.permissions.has("MANAGE_MESSAGES"),true)
  .addField('全体メンション',member2.permissions.has("MENTION_EVERYONE"),true)
  .addField('ニックネーム変更できるか',member2.permissions.has("CHANGE_NICKNAME"),true)
  .addField("ニックネーム管理",member2.permissions.has("MANAGE_NICKNAMES"),true)
  message.delete()
  .then(message.channel.send(embed))
  return;
} else {
  var user = message.mentions.users.first();
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setThumbnail(user.avatarURL)
  .setAuthor(`${user.username}の権限`)
  .addField('メンバーをキック',member.permissions.has("KICK_MEMBERS"),true)
  .addField('管理者権限',member.permissions.has("ADMINISTRATOR"),true)
  .addField('チャンネル操作権限',member.permissions.has('MANAGE_CHANNELS'),true)
  .addField("リアクションの追加権限",member.permissions.has("ADD_REACTIONS"),true)
  .addField("role操作権限",member.permissions.has("MANAGE_ROLES_OR_PERMISSIONS"),true)
  .addField("メッセージの管理",member.permissions.has("MANAGE_MESSAGES"),true)
  .addField('全体メンション',member.permissions.has("MENTION_EVERYONE"),true)
  .addField('ニックネーム変更できるか',member.permissions.has("CHANGE_NICKNAME"),true)
  .addField("ニックネーム管理",member.permissions.has("MANAGE_NICKNAMES"),true)
  message.channel.send(embed)
}
} if (command === "myrole"){
  let perms = message.member.permissions;
  let embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setThumbnail(message.author.avatarURL)
  .setAuthor(`${message.author.username}の権限`)
  .addField('メンバーをキック',perms.has("KICK_MEMBERS"),true)
  .addField('管理者権限',perms.has("ADMINISTRATOR"),true)
  .addField('チャンネル操作権限',perms.has('MANAGE_CHANNELS'),true)
  .addField("リアクションの追加権限",perms.has("ADD_REACTIONS"),true)
  .addField("role操作権限",perms.has("MANAGE_ROLES_OR_PERMISSIONS"),true)
  .addField("メッセージの管理",perms.has("MANAGE_MESSAGES"),true)
  .addField('全体メンション',perms.has("MENTION_EVERYONE"),true)
  .addField('ニックネーム変更できるか',perms.has("CHANGE_NICKNAME"),true)
  .addField("ニックネーム管理",perms.has("MANAGE_NICKNAMES"),true)
  message.delete()
  .then(message.channel.send(embed))
} if (command === 'y') {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  if (!member) return message.reply("Please provide a vaild Mention or USER ID");
  let bot;
  if (member.user.bot === true) {
    bot = "はい";
  } else {
    bot = "いいえ";
  }
  const user213131313131 = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setAuthor(`${member.user.tag} (${member.id})`)
    .setThumbnail(user213131313131.avatarURL)
    .addField("ニックネーム:", `${member.nickname !== null ? `${member.nickname}` : "ニックネームがありません"}`, true)
    .addField("Botですか？", `${bot}`, true)
    .addField("Guild", `${bot}`, true)
    .addField("プレイング", `${member.user.presence.game ? `${member.user.presence.game.name}` : "何もプレイしていないよ！"}`, true)
    .addField("役職", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("この鯖に入った時の時間",member.joinedAt, true)
    .addField("アカウント作った時の時間",member.user.createdAt, true)
    .addField("ステータス",member.presence.status, true)
      message.channel.send(embed);
      return;
} if (command === "serverowner") {
  message.channel.send(`**呼び出しコマンド**\n${message.guild.owner}様、${message.author.tag}さんが呼んでます！`);
} if (command === "頭大丈夫？") {
  message.delete()
  .then(message.channel.send({files:["./atama.gif"]}));
} if (command === "thinking"){
  message.delete();
  message.channel.send({files:["./fghjkl.gif"]});
} if (command === "whitethinking"){
  message.delete();
  message.channel.send({files:["./giphy.gif"]})
} if (command === "thinkspinner"){
  message.delete();
  message.channel.send({files:["./tenor.gif"]})
} if (command === "helpneta"){
 let embed = new Discord.MessageEmbed()
  .setTitle('このBotを招待する')
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=500580866448293899&permissions=8&scope=bot')
   .setColor(Color)
   .setAuthor(`${client.user.tag}のhelp`)
   .addField('!t rennsura語録','rennsuraの語録を教えてくれるよ！',true)
   .addField('!t ここをお勧めするよ！','精神科を進めてくれるよ！',true)
   .addField('!t suumo',"Botがスーモってくれるよ！",true)
   .addField('!t rennsura','rennsura System が作動します(何も起こりません)',true)
   .addField('!t kazeaisu','kazeaisu System が作動します(何も起こりません)',true)
   .addField('!t 脱糞','脱糞してくれるよ！',true)
   message.channel.send(embed)
} if( command === "buruburu"){
    message.channel.send({files:['thinkingburuburu.gif']})
    message.delete();
} if (message.content.includes("奇数")) {
  if(message.content.slice(-1).match(/[02468０２４６８]/)) {
    message.channel.send('それは偶数だよ！');
    return;
  } else if (message.content.slice(-1).match(/[13579１３５７９]/)) {
    message.channel.send('それは奇数だよ！'); 
    return;
  } else {
    message.channel.send('数字も打てないの？');
    return;
  }
} if (message.content.includes("div")) {
  if (message.content.slice(-1).match(/[qwertyuiop@[asdfghjkl;:zxcvbnm,./]/)){
    message.reply('数字以外の文字は使えません。');
    return; 
  }
  if(message.content.startsWith("!t div 0")){
    message.channel.send('倍数は...................ありません！');
    return;
  }
    else {
    function divisor(num){
    var num = `${args[0]}`
    var results = [];
    for(var i=1; i<=num; i++) {
        if( (num%i == 0) ) {
            results.push(i);
        }
    }
  return results;
}
  var r = divisor(`${args[0]}`)
  message.channel.send(r + 'だよ！') 
  return;
}
} if (command === "nick"){
  const member = message.guild.members.get(args[0]) || message.member;
  if (message.author.id !== config.ownerID && !message.member.hasPermission("MANAGE_NICKNAMES")) {
    message.reply('あなたにニックネームを変更する権限がないのに' + client.user.name + 'がニックネームを変えるという命令を受けると思いますか？')
  }
 if (!member) {
  message.member.setNickname(`${args[0]}`)
  message.channel.send(`${member.nickname}さんのニックネームを${args[0]}に変更したよ！`);
  } else  {
    const nickname = message.content.slice(26);
    member.setNickname(nickname);
message.channel.send(`${args[0]}さんのニックネームを変更したよ！`);
return;
  }
} if (command ==="ml"){
  const memberList = message.guild.members.map(r => "|"+r.user.username+"|");
  try{
  message.channel.send(memberList);
  } catch(e){
message.reply('人が多すぎます！(褒め言葉)\n' + "\`\`\`" +e+"\`\`\`");
}
    } if(command ==="dm"){
      const member = message.mentions.members.first();
      const user = message.guild.members.get(args[0]);
      try{
      if(member && !user) {
    member.send(message.content.slice(config.prefix.length).trim().slice("dm".length).trim().slice(member.toString().length).trim()+ `\n実行者${message.author.username}`);
  } if(user && !member) {
 member.send(message.content.slice(config.prefix.length).slice("dm".length)+ `\n実行者${message.author.username}`);
  } else if(!user && !member) {
    message.author.send(message.content.slice(config.prefix.length).slice("dm".length).slice(2,602) + `\n実行者${message.author.username}`)
  }
}  catch(e){
      message.channel.send('エラーが発生しました\n' + e.message);
    }
  
    } if(command === "name"){
      if(message.author.id !== 276250823359594496) return;
       client.user.setUsername(`${args[0]}`)
  .then(user => message.reply('名前を変えることに成功しました。' + `${user.username}`))
  .catch(error => message.reply(`${error}`));
    }
});
client.login(config.token);
