import TeleBot from "telebot"

const bot = new TeleBot(process.env.5610303721:AAFOAKOR5XyZrNi7dXFdjJ5xbKRFyVdc_w8)

bot.on('text', msg => msg.reply.text(msg.text))

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Банжорно Бамбини>'));

export default bot
