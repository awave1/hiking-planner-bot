import * as Router from 'koa-router';

const router = new Router();

router.get('/', async ctx => (ctx.body = 'yo'));

export default router;
