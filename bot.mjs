import TeleBot from "telebot"
import shortReply from "telebot/plugins/shortReply.js"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on('text', msg => msg.reply.text(msg.text))

bot.plug(shortReply)

export default bot
