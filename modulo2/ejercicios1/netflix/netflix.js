import db from './db.js';

db.agregarPelicula({ id: 1, nombre: 'Batman', rating: 10 });
db.agregarPelicula({ id: 2, nombre: 'Superman', rating: 2 });
db.agregarPelicula({ id: 3, nombre: 'Flash', rating: 5 });

db.mostrarPeliculas();
// debería mostrar lo siguiente:
// Batman - 10
// Superman - 2
// Flash - 5
console.log('**********************');
db.eliminarPelicula(2);
db.mostrarPeliculas();
// debería mostrar lo siguiente:
// Batman - 10
// Flash - 5
console.log('**********************');
db.modificarPelicula( { id: 1, nombre: 'Superman', rating: 5 });
db.mostrarPeliculas();