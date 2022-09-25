const w = window;
const d = document;

w
  .fetch("htpp://localhost:3030/fotosGatitos")
  .then((respuesta) => respuesta.json())
  .then((objetoImagenes) => {
    console.log(objetoImagenes.big); // array de imagenes

    // recorremos el array de imagenes y mostramos cada una
    objetoImagenes.array.forEach(imagen => {
      const img = d.createElement("img"); // creo una etiqueta imagen 
      img.src = imagen;
      d.body.appendChild(img);
    });
  });