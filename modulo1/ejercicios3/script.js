const d = document;

/******** FUNCIONES **********/
function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  // I check that the divider isn`t 0 or a negative number
  if (num2 == 0 || num2 < 0) {
    return "No se puede dividir por cero o por un numero negativo.";
  } else {
    return num1 / num2;
  }
}

function esPar(num1) {
  if (num1 <= 0) {
    return "Debe ingresar un numero entero positivo";
  } else {
    return num1 % 2 == 0;
  }
}

function esImpar(num1) {
  if (num1 <= 0) {
    return "Debe ingresar un numero entero positivo";
  } else {
    return num1 % 2 != 0;
  }
}

function calcularAreaTriangulo(base, altura) {
  let area = Math.round((base * altura) / 2, 2);
  return area;
}

function gritar(str) {
  return `¡ ${str} !`;
}

function obtenerNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

function saludar(nombre) {
  return `Hola ${nombre}, un gusto conocerte`;
}

function saludarGritando(nombre, apellido) {
  const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
  const saludo = saludar(nombreCompleto);
  const grito = gritar(saludo);

  return grito;
}

function percentage(amount, percentageToCalculate) {
  if (percentageToCalculate < 0 || percentageToCalculate > 100) {
    return `no se puede calcular el porcentaje`;
  } else {
    return (percentageToCalculate * amount) / 100;
  }
}

function obtenerDatosDeCiudad(nombre, poblacion, pais) {
  if (poblacion < 0) {
    poblacion = 0;
  }
  return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;
}

function convertirHorasEnSegundos(horas) {
  if (horas < 0) { // I check that the hours are a positive number
    return `Debe ingresar horas`;
  } else {
    let segundos = horas * 60 * 60;
    return segundos;
  }
}

function calcularPerimetroRectangulo(ancho, alto) {
  if (ancho <= 0 || alto <= 0) { // I check that the whith and height are positive numbers
    return 0;
  } else {
    let perimetro = (ancho + alto) * 2;
    return perimetro;
  }
}

function calcularPorcentaje(numero, porcentaje) {
  if (numero <= 0 || porcentaje < 0) { // with and if else I check that the amount and the pergentage are positive numbers
    return "No se puede calcular el porcentaje";
  } else {
    return (porcentaje * numero) / 100;
  }
}

function sumarPorcentaje(numero, porcentaje) {
  if (numero <= 0 || porcentaje <= 0) {
    return "No se puede calcular el porcentaje sumado";
  } else {
    return numero + calcularPorcentaje(numero, porcentaje);
  }
}

function restarPorcentaje(numero, porcentaje) {
  if (numero <= 0 || porcentaje <= 0 || porcentaje > 100) {
    return "No se puede calcular el porcentaje";
  } else {
    return numero - calcularPorcentaje(numero, porcentaje);
  }
}

function calcularFPS(fps, minutos) {
  if (fps <=0 || minutos <= 0) {
    return `No se puede calcular`;
  } else {
    return fps * ( 1 * minutos);
  }
}

function obtenerCompetencia(a, b) {
  return ` ${a} vs. ${b}`;
}

function generarEmail(usuario, dominio) {
  return `${usuario}@${dominio}.com`;
}

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function haceCalor(temperatura) {
  return temperatura >= 22;
}

function haceFrio(temperatura) {
  return temperatura <= 12;
}

function calcularPuntaje(facil, normal, dificil) {
  let puntaje = facil*3 + normal*5 + dificil*10;
  return puntaje;
}

function aceptaDeposito(monto) {
  if (monto <= 0) { // I check the amout to deposite is a positive number
    return false;
  } else {
    return monto % 10 == 0;
  }
}

function esHoraValida(hora) { }

function puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos) {
  if(pasoTests == 'true' && tieneMultasImpagas == 'false' && pagoImpuestos == 'true' ) {
    return true;
  } else {
    return false;
  }
}

function puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada) {
  if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada == 'true') {
    return "SI";
  } else {
    return "NO";
  }
}

function esParOImpar(numero) {
  if(numero % 2 == 0 ) {
    return "PAR";
  } else {
    return "IMPAR";
  }
}

function esPositivoONegativo(numero) {
  if(numero == 0) {
    return "El cero no es positivo ni negativo";
  } else if (numero < 0) {
    return "NEGATIVO";
  } else {
    return "POSITIVO";
  }
}

function avanzarSemaforo(colorActual) {
  let text = '';
  switch (colorActual) {
    case 'verde':
      text = "amarillo";
      break;
    case 'amarillo':
      text = 'rojo';
      break;
    case 'rojo':
      text = 'verde';
      break;
    default:
      text = 'Debe ingresar algún color del semaforo';
      break;
  }
  return text;
}

function obtenerDiasMes(mes) {
  let text;
  switch (mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':   
    case 'octubre':  
    case 'diciembre':    
      text = '31';
      break;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':    
      text = '30';
      break;  
    case 'febrero':
      text = '28 ó 29';
      break;
    default:
      text = 'No inreso un mes valido';
      break;
  }
  return text;
}

function obtenerSensacion(temperatura) {}

function obtenerNota(puntaje) {}

function jugarPiedraPapelTijera(a, b) {}
/****** Para tomar los datos ingresados en los input y mostrarlos en el DOM ******/
const getValueInputToSum = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberSum").value);
  let secondNumber = parseInt(d.getElementById("secondNumberSum").value);
  let text =  `<p>La suma de ${firstNumber} y ${secondNumber} es:  ${sumar(firstNumber, secondNumber)}</p>`;
  d.getElementById("ver-sumar").innerHTML = text;
};

const getValueInputToSubtract = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberSubtract").value);
  let secondNumber = parseInt(d.getElementById("secondNumberSubtract").value);
  let text = `<p>La resta de ${firstNumber} y ${secondNumber} es:  ${restar(firstNumber, secondNumber)}</p>`;
  d.getElementById("ver-restar").innerHTML = text;
};

const getValueInputToMultiply = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberMultiply").value);
  let secondNumber = parseInt(d.getElementById("secondNumberMultiply").value);
  let text = `<p>La multiplicación de ${firstNumber} y ${secondNumber} es:  ${multiplicar(firstNumber, secondNumber)}</p>`;
  d.getElementById("ver-multiplicar" ).innerHTML = text;
};

const getValueInputToDivide = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberDivide").value);
  let secondNumber = parseInt(d.getElementById("secondNumberDivide").value);
  let text = `<p>La division de ${firstNumber} y ${secondNumber} es: ${dividir( firstNumber, secondNumber)}</p`;
  d.getElementById("ver-dividir").innerHTML = text;
};

const getValueInputToIsEven = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberisEven").value);
  d.getElementById("es-par").innerHTML = ` <p>El ${firstNumber} es par? ${esPar(firstNumber)}</p>`;
};

const getValueInputToIsOdd = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberisOdd").value);
  d.getElementById("es-impar").innerHTML = `<p>El ${firstNumber} es impar? ${esImpar(firstNumber)}</p>`;
};

const getValueInputAreaTriangle = () => {
  let firstNumber = parseFloat(d.getElementById("firstNumberTriangle").value);
  let secondNumber = parseFloat(d.getElementById("secondNumberTriangle").value);
  let text = `<p>El área del triángulo de ${firstNumber} de base y ${secondNumber} de altura es es: ${calcularAreaTriangulo(firstNumber, secondNumber)}.</p>`;
  d.getElementById("calcular-area-triangulo").innerHTML = text;
};

const getValueInputToScream = () => {
  let stringScream = d.getElementById("stringToScream").value;
  d.getElementById("gritar").innerHTML = `${gritar(stringScream)}`;
};

const getValueInputFullName = () => {
  let firstName = d.getElementById("firstName").value;
  let lastName = d.getElementById("lastName").value;
  d.getElementById("obtener-nombre-completo").innerHTML = `<p>El nombre completo es: ${obtenerNombreCompleto(firstName, lastName)}</p>`;
};

const getValueInputSaludar = () => {
  let name = d.getElementById("name").value;
  d.getElementById("saludar").innerHTML = `${saludar(name)}`;
};

const getValueInputSaludarGritando = () => {
  let firstNameScream = d.getElementById("firstNameScream").value;
  let lastNameScream = d.getElementById("lastNameScream").value;
  let text = ``;
  if(firstNameScream == "" ||
  lastNameScream == "") {
    text=`Debe ingresar los datos`;
  } else {
    text = `<p>${saludarGritando(firstNameScream, lastNameScream)}</p>`;
  }
  d.getElementById("saludar-gritando").innerHTML = text;
};

const getValueInputToPercentage = () => {
  let totalAmount = parseInt(d.getElementById("totalAmount").value);
  let percentageToKnow = parseFloat(d.getElementById("percentage").value);
  d.getElementById("valueInputToPercentage").innerHTML = `<p>El ${percentageToKnow}% de ${totalAmount} es: ${percentage(totalAmount,percentageToKnow)}.</p>`;
};

const getValueInputToGetInfo = () => {
  let city = d.getElementById("city").value;
  let totalPeople = d.getElementById("totalPeople").value;
  let country = d.getElementById("country").value;

  d.getElementById("obtener-datos-de-ciudad").innerHTML = `<p>${obtenerDatosDeCiudad(city, totalPeople, country)}.</p>`;
};

const getValueInputToConvertToSeconds = () => {
  let horas = parseInt(d.getElementById("hours").value);
  let text = `<p>Las ${horas} horas equivalen a ${convertirHorasEnSegundos(horas)} segundos.</p>`;
  d.getElementById("convertir-horas-en-segundos").innerHTML = text;
};

const getValueInputToPerimeterRectangle = () => {
  let withRectangle = parseFloat(d.getElementById("withRectangle").value);
  let heightRectangle = parseFloat(d.getElementById("heightRectangle").value);
  let text = `<p>El perímetro del rectángulo con ${withRectangle} de ancho y ${heightRectangle} de alto es: ${calcularPerimetroRectangulo( withRectangle, heightRectangle)}.</p>`;
  d.getElementById("calcular-perimetro-rectangulo").innerHTML = text;
};

const getValueInputToConvertToCalculatePercentage = () => {
  let numberWithoutPercentage = parseFloat(d.getElementById("numberWithoutPercentage").value);
  let numberOfPercentage = parseFloat(d.getElementById("numberOfPercentage").value);
  let percentage = calcularPorcentaje(numberWithoutPercentage, numberOfPercentage);
  let text = `<p>El ${numberOfPercentage}% de ${numberWithoutPercentage} es: ${percentage}</p>`
  d.getElementById("calcular-porcentaje").innerHTML = text;
};

const getValueInputToConvertToCalculatePercentageSum = () => {
  let numberWithoutPercentageWithoutSum = parseFloat(d.getElementById("numberWithoutPercentageWithoutSum").value);
  let numberOfPercentageToSum = parseFloat(d.getElementById("numberOfPercentageToSum").value);
  let text= `<p>${sumarPorcentaje( numberWithoutPercentageWithoutSum, numberOfPercentageToSum)}</p>.`
  d.getElementById("sumar-porcentaje").innerHTML = text;
};

const getValueInputToConvertToCalculatePercentageSubstract = () => {
  let numberWithoutPercentageWithoutSubstract = parseFloat(d.getElementById("numberWithoutPercentageWithoutSubstract").value);
  let numberOfPercentageToSubstract= parseFloat(d.getElementById("numberOfPercentageToSubstract").value);
  let text =`<p>${restarPorcentaje( numberWithoutPercentageWithoutSubstract, numberOfPercentageToSubstract)}</p>`;
  d.getElementById("restar-porcentaje").innerHTML = text;
};

const getValueInputToConvertToFramePerSecond = () => {
  let framesPerSecond = parseInt(d.getElementById("framesPerSecond").value);
  let minutsAmount = parseInt(d.getElementById("minutsAmount").value);
  d.getElementById("calcular-fps").innerHTML = `<p>${calcularFPS( framesPerSecond, minutsAmount)}</p>.`;
};

const getValueInputToConvertToCalculateRivals = () => {
  let firstRival = d.getElementById("firstRival").value;
  let secondRival = d.getElementById("secondRival").value;
  d.getElementById("obtener-competencia").innerHTML = `<p>${obtenerCompetencia( firstRival, secondRival)}</p>.`;
};

const getValueInputToCreateEmail = () => {
  let user = d.getElementById("user").value;
  let domain = d.getElementById("domain").value;
  d.getElementById("generar-email").innerHTML = `<p>${generarEmail(user, domain)}.</p>`;
};

const getValueInputToIsOlder = () => {
  let isOlder = parseInt(d.getElementById("isOlder").value);
  d.getElementById("es-mayor-de-edad").innerHTML = `<p>${esMayorDeEdad(isOlder)}.</p>`;
};

const getValueInputToIsTemperatureHot = () => {
  let isTemperatureHot = parseFloat(d.getElementById("isTemperatureHot").value);
  let text;
  if(isNaN(isTemperatureHot)) {
    text = "Debe ingresar un numero";
  } else {
    test = haceCalor(isTemperatureHot);
  }
  d.getElementById("hace-calor").innerHTML = `<p>${text}.</p>`;
};

const getValueInputToIsTemperatureCold = () => {
  let isTemperatureCold = parseFloat( d.getElementById("isTemperatureCold").value);
  let text;
  if(isNaN(isTemperatureCold)) {
    text = "Debe ingresar un numero";
  } else {
    text = haceFrio(isTemperatureCold);
  }

  d.getElementById("hace-frio").innerHTML = `<p>${text}.</p>`;
};

const getValueInputToGetScore = () => {
  let easy = parseInt(d.getElementById("easy").value);
  let normal = parseInt(d.getElementById("normal").value);
  let hard = parseInt(d.getElementById("hard").value);
  let puntaje = calcularPuntaje(easy, normal, hard);
  console.log(`${easy} ${normal} ${hard} ${puntaje}`)
  d.getElementById("calcular-score").innerHTML = `<p>El puntaje total es: ${puntaje}</p>`;
};


const getValueInputToAcceptDeposit = () => {
  let amountOfDeposit = parseInt(d.getElementById("deposit").value);
  d.getElementById("acepta-deposito").innerHTML = `<p>${aceptaDeposito(amountOfDeposit)}.</p>`;
};

const getIfCanHaveNewCarnet = () => {
  let pasoTests = d.getElementById("paso-tests").value;
  let tieneMultasImpagas = d.getElementById("tiene-multas-impagas").value;
  let pagoImpuestos = d.getElementById("pago-impuestos").value;
  let text = puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos); 
  d.getElementById("puede-renovar-carnet").innerHTML = `<p>Puede renovar carnet = ${text}.</p>`;
}

const getIfCanGraduate = () => {
  let asistencia = Number(d.getElementById("asistencia").value);
  let materiasAprobadas = Number(d.getElementById("materias-aprobadas").value);
  let tesisAprobada = (d.getElementById("tesis-aprobada").value).toLowerCase();
  let text;
  if(isNaN(asistencia) || isNaN(materiasAprobadas)) {
    text = "Debe ingresar numeros para la asistencia y las materias aprobadas";
  } else if(tesisAprobada == 'true' || tesisAprobada == 'false') {
    text = puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada);
  } else {
    text = "Debe ingresar TRUE o FALSE para informar si aprobo la tesis";
  }
  d.getElementById("puede-graduarse").innerHTML = `<p>Puede graduarse = ${text}.</p>`;
}

const isEvenOrIsOdd = () => {
  let numero = Number(d.getElementById("par-o-impar").value);
  let text = esParOImpar(numero);
  d.getElementById("es-par-o-impar").innerHTML = `<p>${numero} es ${text}</p>`;
}

const isPositiveOrIsNegative = () => {
  let numero = Number(d.getElementById("positivo-o-negativo").value);
  let text = esPositivoONegativo(numero);
  d.getElementById("es-positivo-o-negativo").innerHTML = `<p>${text}</p>`
}

const getNextColor = () => {
  let colorActual = (d.getElementById("color-actual").value).toLowerCase();
  let text = avanzarSemaforo(colorActual);
  d.getElementById("avanzar-semaforo").innerHTML = `<p>${text}</p>`
}

const getDaysOfMonth = () => {
  let month = (d.getElementById("obtener-dias-mes").value).toLowerCase();
  let text = obtenerDiasMes(month);
  d.getElementById("obtener-dias-del-mes").innerHTML = `<p>${text}</p>`
} 
