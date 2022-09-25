import express from 'express';
import cors from 'cors';
const app = express();

import morgan2 from './middleware/morgan2.js';
import config from './config/index.js';
import usersRouter from './router/users.routes.js';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan2);

app.use('/api/users', usersRouter);

// Ruta que captura todo
app.get('/*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(config.port, () =>
  console.log(
    `Servidor corriendo en el puerto ${config.port} en modo ${config.node_env}`
  )
);
