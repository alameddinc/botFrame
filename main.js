import emoji from 'node-emoji'
import {
    bot,
    sendBotMessage,
} from './dist/telegramLib'
import {startOpt} from "./dist/telegramOpts";


/**
 * Öncelikli Kodlar
 */

bot.on("callback_query",(callbackQuery)=>{
    console.log(callbackQuery)
})

/**
 * Açık Kaynak
 */

