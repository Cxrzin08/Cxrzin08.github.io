import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Projeto 1', description: 'Descrição do Projeto 1' },
    { id: 2, name: 'Projeto 2', description: 'Descrição do Projeto 2' },
    { id: 3, name: 'Projeto 3', description: 'Descrição do Projeto 3' },
  ]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});