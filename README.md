## Telegram Bot Template for [Vercel](https://vercel.com)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FTeleVercelBot&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&project-name=telegram-bot&repo-name=telegram-bot)

> Try [new experimental version for Edge Functions](https://github.com/PonomareVlad/TeleVercelEdgeBot) ✨

### Run locally

#### 1. Install [Vercel CLI](https://vercel.com/docs/cli)

```bash
npm i -g vercel
```

#### 2. Install [CloudFlare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/) (`cloudflared`)

[Download link](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)

#### 3. Then run local dev server with tunnel

```bash
npm run dev-with-tunnel
```

And open link from terminal (ends with `*.trycloudflare.com`) to set WebHook

Now you can make some changes in [src/bot.mjs](src/bot.mjs)

[Documentation for TeleBot](https://github.com/mullwar/telebot)

### Template structure:

- [api/telegram.mjs](api/telegram.mjs) — Endpoint function for WebHooks
- [api/setWebhook.mjs](api/setWebhook.mjs) — Function for setting WebHook URL

###### P.S. Don't forget to remove or restrict [api/setWebhook.mjs](api/setWebhook.mjs) function before going to production

Made with 💜 by [Vladislav Ponomarev](https://GitHub.com/PonomareVlad)
