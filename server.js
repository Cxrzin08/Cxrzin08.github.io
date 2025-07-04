import express from 'express';
import { createServer } from 'vite';

const app = express();
const port = process.env.PORT || 3000;

async function start() {
  const vite = await createServer({
    server: { middlewareMode: true }, // Use 'true' instead of 'ssr' for compatibility
  });
  
  app.use(vite.middlewares);

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
});