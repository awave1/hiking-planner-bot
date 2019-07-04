import Telegraf, { ContextMessageUpdate } from 'telegraf';

const TODO = (ctx: ContextMessageUpdate) => ctx.reply('@TODO');

function start(token: string) {
  const bot = new Telegraf(token);
  bot.start(TODO);
  bot.help(TODO);
  bot.launch();
}

export default start;
