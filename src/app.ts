import * as env from 'dotenv';
import HikingBot from './bot';

// Parse .env file
env.config();

// start the bot
const bot = new HikingBot(process.env.BOT_TOKEN);
bot.start();
