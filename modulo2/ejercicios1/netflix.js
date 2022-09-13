db.agregarPelicula({ id: 1, titulo: 'Batman', rating: 10 });
db.agregarPelicula({ id: 2, titulo: 'Superman', rating: 2 });
db.agregarPelicula({ id: 3, titulo: 'Flash', rating: 5 });

db.mostrarPeliculas();
// debería mostrar lo siguiente:
// Batman - 10
// Superman - 2
// Flash - 5
db.eliminarPelicula(2);
db.mostrarPeliculas();
// debería mostrar lo siguiente:
// Batman - 10
// Flash - 5