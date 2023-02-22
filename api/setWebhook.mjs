import {setWebhook} from 'telebot-vercel'
import bot from '../bot.mjs'

export const config = {runtime: 'edge'}

export default setWebhook({bot, path: 'api/telegram.mjs'})
