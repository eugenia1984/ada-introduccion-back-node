let peliculas = [
  { id: 1, titulo: "Luck", rating: 9 },
  { id: 2, titulo: "Father of the Bride", rating: 8 },
  { id: 3, titulo: "The Lost City", rating: 7 },
  { id: 4, titulo: "The Adam Project", rating: 6 },
  { id: 5, titulo: 'Batman', rating: 10 },
  { id: 6, titulo: 'Spiderman', rating: 10 },
]

// BASE DE DATOS

// Para aggregar una pelicula -> CREATE y ADD
function agregarPelicula(pelicula) {
  //  pelicula.id = uniqid();
  peliculas.push(pelicula);
}

// Para mostrar las peliculas -> READ
function mostrarPeliculas() {
  /* 
  //recorro el array de peliculas
  for(let pelicula of peliculas) {
    console.log(`${pelicula.titulo} - ${pelicula.rating}`)
  }
  */
  return peliculas;
}

// para eliminar la pelicula -> DELETE
function eliminarPelicula(id) {
  // el filter devuelve un array nuevo
  // filtro las peliculas que tengan distinto id al que recibe la funcion por parametro
  // y piso mi array pelicular, por eso lo tengo con let en vez de const
  peliculas = peliculas.filter(pelicula => pelicula.id !== id)
}

// Para obtener una pelicula -> SELECT by id
function obtenerPelicula(id) {
  // del array de peliculas encontrame el objeto que tenga un determinado id
  // si no lo encuentra me devuelve undefined
  // Llega como un String el id asi que parseo a Number
  let peli = peliculas.find((pelicula) => pelicula.id === Number(id));
  //return (peli !== undefined)? peli : "No se encontro la pelicula";
  return peli;
}

// Para modificar la pelicula -> UPDATE
function modificarPelicula(id, nuevaPelicula) {
  // encuentro el indice de la pelicula, si no lo encuentra devuelve -1 
  const index = peliculas.findIndex((pelicula) => pelicula.id === Number(id));
  if(index !== -1) {  // como la encuentra
    peliculas[index] = nuevaPelicula;  // la piso
  } else {
    return false;
  }
}

export default {
  agregarPelicula,
  mostrarPeliculas,
  eliminarPelicula,
  obtenerPelicula,
  modificarPelicula,
};