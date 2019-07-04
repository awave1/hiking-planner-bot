import { Middleware, ContextMessageUpdate } from 'telegraf';

export interface StatefulContextMessageUpdate extends ContextMessageUpdate {
  command: {
    raw: string;
    command: string;
    args: string[];
  };
}

/**
 * Middleware function that parses command arguments. It is called when a command passed, like so:
 *
 * /cmd arg1 arg2
 *
 * In response, it will set command property to context with specified arguments
 *
 */
async function commandParser(ctx: StatefulContextMessageUpdate, next: Function) {
  if (ctx.updateType === 'message') {
    const {
      message: { text },
    } = ctx.update;
    if (text.startsWith('/')) {
      // Match a string of format `/cmd arg1 arg2 ...`
      const match = text.match(/^\/([^\s]+)\s?(.+)?/);
      if (match && match.length && match.length === 3) {
        const command = match[1] || '';
        const args = match[2] ? match[2].split(' ') : [];

        ctx.command = {
          raw: text,
          command,
          args,
        };
      }
    }
  }

  await next();
}

export default commandParser;
