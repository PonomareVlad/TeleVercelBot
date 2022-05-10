## Telegram Bot Template for Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FTeleVercelBot&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&project-name=telegram-bot&repo-name=telegram-bot)

### Run locally

Install Vercel CLI

```bash
npm i -g vercel
```

Install Localtunnel

```bash
npm i -g localtunnel
```

Then run local dev server with Localtunnel

```bash
npm run tunnel
```

And open link from terminal (ends with `*.loca.lt`) to set WebHook

Now you can make some changes in [bot.mjs](bot.mjs)

[Documentation for TeleBot](https://github.com/mullwar/telebot)

### Template structure:

- [api/telegram.mjs](api/telegram.mjs) — Endpoint function for WebHooks
- [api/setWebhook.mjs](api/setWebhook.mjs) — Function for setting WebHook URL
