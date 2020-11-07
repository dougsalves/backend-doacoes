import 'reflect-metadata';
import './database';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) =>
  response.json({ message: 'Hello Gostack' }),
);


app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
