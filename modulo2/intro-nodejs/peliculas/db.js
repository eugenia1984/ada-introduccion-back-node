let peliculas = [
  { id: 1, nombre: "Luck", rating: 9 },
  { id: 2, nombre: "Father of the Bride", rating: 8 },
  { id: 3, nombre: "The Lost City", rating: 7 },
  { id: 4, nombre: "The Adam Project", rating: 6 }
]

function agregarPelicula(pelicula) {
  peliculas.push(pelicula);
}

function obtenerPelicula(id) {
  // del array de peliculas encontrame el objeto que tenga un determinado id
  // si no lo encuentra me devuelve undefined
  let peli = peliculas.find((pelicula) => pelicula.id === id);
  return (peli !== undefined)? peli : "No se encontro la pelicula";
}

function eliminarPelicula(id) {
  // el filter devuelve un array nuevo
  // filtro las peliculas que tengan distinto id al que recibe la funcion por parametro
  // y piso mi array pelicular, por eso lo tengo con let en vez de const
  peliculas = peliculas.filter(pelicula => pelicula.id !== id)
}

function mostrarPeliculas() {
  // recorro el array de peliculas
  for(let pelicula of peliculas) {
    console.log(`${pelicula.nombre} - ${pelicula.rating}`)
  }
}

function modificarPelicula(id, nuevaPelicula) {
  // encuentro el indice de la pelicula
  // si no lo encuentra devuelve -1 
  const index = peliculas.findIndex((pelicula) => pelicula.id === id);
  if(index !== -1) {  // como la encuentra
    peliculas[index] = nuevaPelicula;  // la piso
  }
}

export default {
  agregarPelicula,
  obtenerPelicula,
  eliminarPelicula,
  mostrarPeliculas,
  modificarPelicula,
};