import bot from '../bot.mjs'

const isDev = process.env.VERCEL_ENV === 'development',
    webHookURL = host => `https://${host}/api/telegram.mjs`

export default async ({body: {url}, headers}, {json}) =>
    json(await bot.setWebhook(isDev && url ? url : webHookURL(headers['x-forwarded-host'])).catch(e => e))
