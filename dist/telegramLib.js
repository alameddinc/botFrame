import telegrambot from 'node-telegram-bot-api'
import {
    pollingTrue,
    opts,
    token
} from "./telegramConst";

const bot = new telegrambot(token, pollingTrue);


const sendBotMessage = (chatid, text, opt = true) => {
    if (opt == false)
        bot.sendMessage(chatid, text);
    else if(opt == true){
        bot.sendMessage(chatid, text,opts);
    }
    else
        bot.sendMessage(chatid, text, opt);
};
export {
    bot,
    sendBotMessage
}
