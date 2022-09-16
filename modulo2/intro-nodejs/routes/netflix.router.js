import express from "express";
import db from "../peliculas/db.js";

const router = express.Router();

// localhost:3000/netflix/agregar-peliculas
// Para agregar una pelicula -> Create
router.post('/agregar-peliculas', (req, res) => {
  let { titulo, rating } = req.body; 
  db.agregarPelicula({ titulo, rating });
  res.json({ message: 'Pelicula agregada' });
});

// localhost:3000/netflix/mostrar-peliculas
// Para mostrar las peliculas -> Read
router.get('/mostrar-peliculas', (req, res) => {
  const arrayPeliculas = db.modificarPelicula();
  res.json(arrayPeliculas);
});

// localhost:3000/netflix/eliminar-pelicula/1 
// Elimino una pelicula por id -> Delete
router.delete('/eliminar-pelicula/:id', (req, res) => {
  const peliculaId = req.params.id; 
  db.eliminarPelicula(peliculaId);
  res.json({ message: 'Pelicula eliminada' });
});

// localhost:3000/netflix/modificar-pelicula/1 
// Modificar una pelicula por id -> Update
router.g('/modificar-pelicula/:id', (req, res) => {
  const peliculaId = req.params.id;
  const {  titulo, rating } = req.body; 
  db.modificarPelicula(pelicula, {  titulo, rating });
  res.json({ message: 'Pelicula modificada' });
});

// localhost:3000/netflix/obtener-pelicula/1 
// Busco una pelicula por id
router.get('/obtener-pelicula/:id', (req, res) => {
  const peliculaId = req.params.id;
  const pelicula = db.obtenerPelicula(peliculaId);
  if(pelicula !== undefined)  { 
    // si el id existe devuelvo el status 200 y la peli
    res.status(200).json(pelicula)
  }  else { 
    // si no existe el id le devuelvo status 400 y el JSON
    res.status(404).json({ message: 'Pelicula no encontrada' });
  }
});

// localhost:3000/netflix/pelicula
netflix.post('/pelicula', (req, res) => {
  let { titulo, rating } = req.body; // destructuring
  console.log('Esto es el titulo: ' + titulo);
  console.log('Esto es el rating: ' + rating);
  res.json({ message: 'Pelicula agregada' });
});

export default router;