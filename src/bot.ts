import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { commandParser } from './middleware';

import { start } from './commands';

class HikingBot {
  private token: string;
  private bot: Telegraf<ContextMessageUpdate>;

  constructor(token: string) {
    this.token = token;
    this.bot = new Telegraf(token);
  }

  start() {
    this.initializeMiddleware();
    this.initializeCommands();
    this.bot.launch();
  }

  private initializeMiddleware() {
    if (process.env.NODE_ENV === 'development') {
      this.bot.use(Telegraf.log());
    }

    this.bot.use(commandParser);
  }

  private initializeCommands() {
    this.bot.start(start);
  }
}

export default HikingBot;
