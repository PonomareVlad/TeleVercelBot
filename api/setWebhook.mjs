import {setWebhook} from "telebot-vercel"
import bot from "../bot.mjs"

export const path = "api/telegram.mjs"

export const config = {runtime: "edge"}

export default setWebhook({bot, path, handleErrors: true})
