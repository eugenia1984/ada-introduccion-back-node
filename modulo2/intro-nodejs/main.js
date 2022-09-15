import express from 'express'; // importamos la libreria express
const app = express();  // creamos una instancia de express

import path from 'path';
import {fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname); // ruta de la carpeta donde se encuentra el archivo
console.log(__filename); // ruta del archivo

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.status(200).send('Hello World');
  // para responder con un string
  //res.send('Hello world')
  // para responder con un JSON
  //res.json({message: 'Esto es un JSON'});
});

app.get('/peliculas', (req, res) => {
  res.status(200).send({peliculas: ['Pulp Fiction', 'Kill Bill']});
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.listen(3000, () => {
  console.log('Server started');
});