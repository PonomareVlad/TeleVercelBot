import {setWebhook} from 'telebot-vercel'
import bot from '../bot.mjs'

export default setWebhook({bot, path: 'api/telegram.mjs'})
