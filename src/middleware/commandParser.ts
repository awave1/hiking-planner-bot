import { Middleware, ContextMessageUpdate } from 'telegraf';

export interface StatefulContextMessageUpdate extends ContextMessageUpdate {
  command: {
    raw: string;
    command: string;
    args: string[];
  };
}

/**
 * Extract command argument. Regex matches strings of following format:
 *
 * /command arg1 arg2 ...
 *
 * @param {boolean} withSlash specify whether to match slash
 * @returns {RegExp} regex to use to extract command args
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
