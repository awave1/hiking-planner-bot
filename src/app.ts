import { config } from 'dotenv';
import start from './bot';

config();

start(process.env.BOT_TOKEN);
