import { startServer } from './dist/server/entry.mjs';

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

startServer({
  host,
  port
});
