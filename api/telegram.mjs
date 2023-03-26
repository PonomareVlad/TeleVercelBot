import {start} from "telebot-vercel"
import bot from "../src/bot.mjs"

export const config = {runtime: "edge"}

export default start({bot})
