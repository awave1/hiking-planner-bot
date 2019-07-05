import Telegraf, { ContextMessageUpdate, Markup } from 'telegraf';

const TODO = (ctx: ContextMessageUpdate) => ctx.reply('@TODO');

function start(ctx: ContextMessageUpdate) {
  const message = `Hi 👋. let's plan this! 🏔`;
  ctx.reply(message);
}

export { start };
