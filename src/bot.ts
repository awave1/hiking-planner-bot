import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { commandParser, StatefulContextMessageUpdate } from './middleware';

const TODO = (ctx: ContextMessageUpdate) => ctx.reply('@TODO');

function start(token: string) {
  const bot = new Telegraf(token);
  bot.use(commandParser);

  bot.start(TODO);
  bot.help(TODO);

  bot.command('addHike', (ctx: StatefulContextMessageUpdate) => {
    TODO(ctx);
  });

  bot.launch();
}

export default start;
