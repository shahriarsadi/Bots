const telegramBot = require('node-telegram-bot-api');
//this is the authorization code for telegram
const token = '.env.BOT_TOCKEN';
//start the bot
const bot = new telegramBot (token, {polling:true});

let reminder;

//intilize with start 
bot.onText(/\/start/,(msg,match)=>{
  bot.sendMessage(
     msg.chat.id,
     `Hello! ${msg.chat.first_name}, 
      What do you want to be angle of? [Start next message with /save]`
      )
      .then(res => {
         //For save
         bot.onText(/\/save (.+)/, (message, match)=>{
           reminder = match[1];
           if(reminder){
             bot.sendMessage(
               message.chat.id,
               `Got it! What time? [example: /time (HH:MM:SS:AM|PM)]`
               )
               .then(() => {
                 bot
                   .onText(/\/time ([01]\d|2[0-3]):([0-5]\d:[0-5]\d):(AM|PM)/,(message,match)=>{
                        const time = match[0].split(' ')[1];
                        bot.sendMessage(
                            message.chat.id,
                            `Thank you ${message.chat.first_name}, 
                             your reminder for time ${time} has been saved.`
                        );
                    })
                            
                 })
                 .catch(() =>{
                     bot.sendMessage(msg.chat.id,`Oops! An error has occured. Try again`);
                  })
            }
        });
      }) 
      .catch(e => {
          bot.sendMessage(msg.chat.id,`Oops! An error has occured. Try again`);
      }) 
});

