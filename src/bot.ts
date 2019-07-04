import Telegraf from 'telegraf';

function start(token: string) {
  const bot = new Telegraf(token);
  bot.start(ctx => ctx.reply('yo'));
  bot.launch();
}

export default start;
