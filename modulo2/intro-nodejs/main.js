import express from 'express'; // importamos la libreria express
const app = express();  // creamos una instancia de express
import morgan from 'morgan';
import db from './peliculas/db.js';

import path from 'path';
import {fileURLToPath } from 'url';
import db from './peliculas/db.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname); // ruta de la carpeta donde se encuentra el archivo
console.log(__filename); // ruta del archivo

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // para poder recibir datos en formato json
app.use(express.urlencoded({ extended: false })); // para poder recibir datos de formularios
app.use(morgan('dev')); // para ver las peticiones que se hacen en la consola

import netflixRoutes from './routes/netflix.router.js';
app.use('/netflix', (req, res) => { });

app.get('/', (req,res) => {
  res.status(200).send('Hello World');
  // para responder con un string
  //res.send('Hello world')
  // para responder con un JSON
  //res.json({message: 'Esto es un JSON'});
});

// recibir informacion ppor un JSON
/*
app.post('/netflix', (req, res) => {
  let { titulo, rating } = req.body; // destructuring
  console.log('Esto es el titulo: ' + titulo);
  console.log('Esto es el rating: ' + rating);
  res.json({ message: 'Pelicula agregada' });
});
*/

// recibir informacion por un param
/*
app.get('/netflix/:id', (req, res) => {
  const { id } = req.params; // leo, guardo y desestructuro el param
  console.log(id);
  res.json({ message: 'Id obtenido' });
});
*/

// recibir por un query
app.get('/watch', (req, res) => {
  const { v } = req.query; // guardo la variable del query
  console.log(id);
  res.json({ informacionVIdeo: 'video.pm4' });
});

// cualquier peticion que todavia no detalle
app.get('/*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  console.log('Guarda la información en la base de datos')
  res.status(200).json({ message: 'Login' });
});

/*
app.get('/peliculas', (req, res) => {
  res.status(200).send({peliculas: ['Pulp Fiction', 'Kill Bill']});
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});
*/
app.get('/peliculas', (req, res) => {
  db.obtenerPelicula();
  res.status(200).json({ message: 'Peliculas' });
});

app.put('/modificarPeliculas', (req, res) => {
  res.status(200).json({ message: 'Modificar Peliculas' });
});

app.listen(3000, () => {
  console.log('Server started');
});