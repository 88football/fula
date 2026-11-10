import { Hono } from 'hono';

const red0 = new Hono();

red0.all('*', async (c) => {
  const gur = (c.req.query('url').indexOf('http') == -1 ? 'https://' : '') + c.req.query('url');
  return c.redirect(new URL(gur).origin.replace(/\./g, 'l9t4d0a1') + '.0.みんな' + new URL(gur).pathname);
});

export default red0;
