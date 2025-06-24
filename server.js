import express from 'express';
import { createServer } from 'vite';

const app = express();
const port = process.env.PORT || 3000;

async function start() {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' }
  });
  
  app.use(vite.middlewares);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

start();