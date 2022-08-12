const d = document;

function saludo() {
  let firstName = prompt("Ingresa tu nombre: ");
  let lastName = prompt("Ingresa tu apellido: ");
  let text = ``;

  if (firstName == null || lastName == null) {
    alert("Por favor ingresa tu nombre y apellido");
  } else {
    text = `Hola ${firstName} ${lastName}, bienvenida a Ada`;
  }

  d.getElementById("saludo").innerHTML = text;
}

function getIceCream() {
  let firstTaste = prompt("Ingresa un gusto de helado: ");
  let secondTaste = prompt("Ingresa otro gusto de helado: ");
  let thirdTaste = prompt("Ingresa el tercer gusto de helado: ");
  let text = ``;

  if (firstTaste == null || 
    secondTaste == null || 
    thirdTaste == null) {
    alert("Recorda que debes ingresar tres gustos");
  } else {
    text = `Aquí tiene su helado de  ${firstTaste}, ${secondTaste} y ${thirdTaste}.`;
  }

  d.getElementById("heladeria").innerHTML = text;
}

function getPersonalData() {
  let firstName = prompt("Ingresa tu nomnbre: ");
  let lastName = prompt("Ingresa tu apellido: ");
  let age = Number(prompt("Ingresa tu edad: ")); // para parsearlo a numero
  let nationality = prompt("Ingresa tu nacionalidad: ");
  let nationalDocument = Number(prompt("Ingresa tu numero de documento: ")); // para parsearlo a numero 
  let text = ``;
  
  if (
    firstName == null ||
    lastName == null ||
    age == null ||
    nationality == null ||
    nationalDocument == null ) {
      alert("Recuerde completar todos los datos.");
  } else  if ( age == NaN || nationalDocument == NaN ) {
    alert("Recuerde ingresar solo números para la edad y el número de documento.");
  } else {
    text = `
      <p>Nuevo usuario agregado al sistema :</p>
      <p>Nombre: ${firstName}</p>
      <p>Apellido: ${lastName}</p>
      <p>Edad: ${age}</p>
      <p>Nacionalidad: ${nationality}</p>
      <p>Número de documento: ${nationalDocument}</p>
    `;
  }
  
  d.getElementById("datos-personales").innerHTML = text;
}

function getPlayList() {
  let playListName = prompt('Ingresa el nombre de la playlist: ');
  let firstSong = prompt('Ingresa la primer canción: ');
  let secondSong = prompt('Ingresar la segunda cancion: ');
  let thirdSong = prompt('Ingresa la tercer cancion: ');

  if( playListName == null ||
    firstSong == null ||
    secondSong == null ||
    thirdSong == null ) {
      alert('Recuerde completar todos los datos');
  } else {
    text = `
    <p>Se ha creado la playlist '${playListName}' con las canciones: </p>
    <p>01 - ${firstSong}</p>
    <p>02 - ${secondSong}</p>
    <p>03 - ${thirdSong}</p>
    `;
  }

  d.getElementById("play-list").innerHTML = text;
}
