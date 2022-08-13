const d = document;
const onlyNumbers = /[0-9]+/; // at least one or more numbers

/* Function to round 2 decimals */
function getTwoDecimalsRound(numToRound) {
  return parseFloat(Math.round(numToRound * 100) / 100).toFixed(2);
}

function saludo() {
  let firstName = prompt("Ingresa tu nombre: ");
  let lastName = prompt("Ingresa tu apellido: ");
  let text = ``;

  if (firstName == null || firstName  == "" ||
  lastName == null || lastName == "") {
    alert("Por favor ingresa tu nombre y apellido");
  } else if(onlyNumbers.test(firstName) || onlyNumbers.test(lastName) ) {
    alert("No se pueden ingresar numeros");
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

  if (firstTaste == null || firstTaste == "" || onlyNumbers.test(firstTaste) ||
    secondTaste == null || secondTaste == "" || onlyNumbers.test(secondTaste) ||
    thirdTaste == null ||thirdTaste == "" || onlyNumbers.test(thirdTaste) ) {
    alert("Recorda que debes ingresar tres gustos");
  } else {
    text = `Aquí tiene su helado de  ${firstTaste}, ${secondTaste} y ${thirdTaste}.`;
    d.getElementById("heladeria").innerHTML = text;
  }
}

function getPersonalData() {
  let firstName = prompt("Ingresa tu nomnbre: ");
  let lastName = prompt("Ingresa tu apellido: ");
  let age = Number(prompt("Ingresa tu edad: ")); 
  let nationality = prompt("Ingresa tu nacionalidad: ");
  let nationalDocument = Number(prompt("Ingresa tu numero de documento: ")); 
  let text = ``;
  
  if (
    firstName == null ||  firstName == "" ||
    lastName == null || lastName == "" ||
    age == null || age == "" ||
    nationality == null || nationality == "" || 
    nationalDocument == null ||nationalDocument == "" ) {
      alert("Recuerde completar todos los datos.");
  }  else if ( isNaN(age) || isNaN(nationalDocument)) {
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
    d.getElementById("datos-personales").innerHTML = text;
  }
}

function getPlayList() {
  let playListName = prompt('Ingresa el nombre de la playlist: ');
  let firstSong = prompt('Ingresa la primer canción: ');
  let secondSong = prompt('Ingresar la segunda cancion: ');
  let thirdSong = prompt('Ingresa la tercer cancion: ');

  if( playListName == null || playListName == "" ||
    firstSong == null || firstSong == "" ||
    secondSong == null || secondSong == "" ||
    thirdSong == null || thirdSong == "" ) {
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

function getAddress() {
  let street = prompt("Ingresa tu Calle: ");
  let streetNumber = Number(prompt("Ingresa tu numero: "));
  let depatmentNumber  = prompt("Ingresa el departamento (si corresponde): ");
  let zipCode = prompt("ingresa el codigo postal: ");
  let city = prompt("Ingresa la ciudad: ");
  let country = prompt("Ingresa el pais: ");
  let text = ``;

  if (street == null || street == "" ||
    streetNumber == null || streetNumber == "" || isNaN(streetNumber) ||
    zipCode == null || zipCode == "" ||
    city == null || city == "" || 
    country == null || country == "" ) {
    alert("Debe completar los datos correctamente.");
  } else {
    text = `
      <p>La dirección que ha ingresado es:</p>
      <p>${street} ${streetNumber} ${depatmentNumber},</p>
      <p>${zipCode}, ${city}, ${country}</p>`;
    d.getElementById("direccion").innerHTML = text;
  }
}

function getDogYears() {
  let humanAge = prompt('Ingresa tus años: ');
  let dogAge;
  let text;

  /* RegEx \D 
  (non-digit) matches any single character that is not a digit (same as [^0-9] )
  */
  while (humanAge == null || 
    /\D/.test(humanAge) || 
    humanAge == "" || 
    humanAge ==  0) {
    alert("Debes ingresar un numero.");
    humanAge = prompt('Ingresa tus años: ');
  };
  
  dogAge = humanAge * 7;
  text = `Tu edad en años perrunos es: ${dogAge}`;
  d.getElementById("anios-perrunos").innerHTML = text;
}

function getMinutesToSeconds() {
  let minutes = prompt('Ingresa los minutos para pasarlos a segundos: ');
  let seconds;

  while (minutes == null || 
    /\D/.test(minutes) || 
    minutes == "" || 
    minutes ==  0) {
    alert("Debes ingresar un numero.");
    minutes = prompt('Ingresa los minutos para pasarlos a segundos: ');
  };

  seconds = minutes * 60;
  text = `El/Los ${minutes} minutos(s) ingresados equivalen a ${seconds} segundos.`;
  d.getElementById("obtener-segundos").innerHTML = text;
}  

function getDaysToSeconds() {
  let days = prompt('Ingresa los días para pasarlos a segundos: ');
  let seconds;

  while (days == null || 
    /\D/.test(days) || 
    days == "" || 
    days ==  0 ) {
    alert("Debes ingresar un numero.");
    days = prompt('Ingresa los días para pasarlos a segundos: ');
  };

  seconds = days * 24 * 60 * 60;
  text = `El/Los ${days} dias(s) ingresados equivalen a ${seconds} segundos.`;
  d.getElementById("dias-a-segundos").innerHTML = text;
}  

function getKilometersToMilles() {
  let kilometers = prompt('Ingresa los kilometros para pasarlos a millas: ');

  while (kilometers == null || 
    /\D/.test(kilometers) || 
    kilometers == "" || 
    kilometers ==  0 ) {
    alert("Debes ingresar un numero.");
    kilometers = prompt('Ingresa los kilometros para pasarlos a millas: ');
  };

  miles =  getTwoDecimalsRound(kilometers * 0.62137);
  text = `El/Los ${kilometers} kilometro(s) ingresados equivalen a ${miles} millas.`;

  d.getElementById("kilometros-a-millas").innerHTML = text;
}

function getTriangleArea() {
  let base = prompt('Ingresa la base del triangulo : ');
  let height = prompt('Ingresa la altura del triangulo : ');

  while (base == null || height == null ||
    /\D/.test(base) || /\D/.test(height) ||
    base == "" || height == "" ||
    base ==  0 || height ==  0 ) {
    alert("Debes ingresar un numero para la base y la altura.");
    base = prompt('Ingresa la base del triangulo : ');
    height = prompt('Ingresa la altura del triangulo : ');
  };

  area = getTwoDecimalsRound((base * height) / 2);
  text = `El área de un triangulo con ${base} de base y ${height} de altura es: ${area}.`;

  d.getElementById("area-de-triangulo").innerHTML = text;
}

function getPerimeterRectangle() {
  let base = prompt('Ingresa la base del rectangulo : ');
  let height = prompt('Ingresa la altura del rectangulo : ');

  while (base == null || height == null ||
    /\D/.test(base) || /\D/.test(height) ||
    base == "" || height == "" ||
    base ==  0 ||height ==  0) {
    alert("Debes ingresar un numero para la base y la altura.");
    base = prompt('Ingresa la base del rectangulo : ');
    height = prompt('Ingresa la altura del rectangulo : ');
  };

  perimeter = base*2 +  height*2;
  text = `El perímetro de un rectángulo con ${base} de base y ${height} de altura es: ${perimeter}.`;

  d.getElementById("perimetro-de-rectangulo").innerHTML = text;
}

function getPercentage() {
  let number = prompt('Ingresa un número : ');
  let percentageToCalculate = prompt('Ingresa el porcentaje que deseas obtener del número antes ingresado: : ');

  while (number == null || percentageToCalculate == null ||
    /\D/.test(number) || /\D/.test(percentageToCalculate) ||
    number == "" || percentageToCalculate == "" ||
    number ==  0 ||percentageToCalculate ==  0) {
    alert("Debes ingresar un numero para la base y la altura.");
    number = prompt('Ingresa un número : ');
    percentageToCalculate = prompt('Ingresa el porcentaje que deseas obtener del número antes ingresado: : ');
  };

  percentageRound = getTwoDecimalsRound( (percentageToCalculate * number )/100
  ); 
  text = `El ${percentageToCalculate} % de ${number} es: ${percentageRound}.`;
  
  d.getElementById("obtener-porcentaje").innerHTML = text;
}


function getTravelTime() {
  let distance = prompt("Ingrese la distancia a recorrer -en kilometros- :")
  while (distance == null ||
    /\D/.test(distance) || 
    distance == "" || 
    distance ==  0) {
      alert("Debes ingresar un numero.")
      distance = prompt("Ingrese la distancia a recorrer -en kilometros- : ");
  };
  // on foot 5km/h
  distanceOnFoot = getTwoDecimalsRound((distance*1) /5);
  // on bike 10km/h
  distanceOnBike = getTwoDecimalsRound((distance*1) / 10);
  text =`
    <p>Los ${distance} kilometros ingresados le van a llevar...</p>
    <p>... ${distanceOnFoot} hs. a pie (con velocidad de 5km/h)</p>
    <p>... ${distanceOnBike} hs. en bicicleta (con velocidad de 10km/h)</p>
    `;
  d.getElementById("obtener-tiempo-viaje").innerHTML = text;
}

