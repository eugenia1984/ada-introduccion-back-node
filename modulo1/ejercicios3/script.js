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
  d.getElementById("hace-calor").innerHTML = `<p>${haceCalor( isTemperatureHot)}.</p>`;
};

const getValueInputToIsTemperatureCold = () => {
  let isTemperatureCold = parseFloat( d.getElementById("isTemperatureCold").value);

  d.getElementById("hace-frio").innerHTML = `<p>${haceFrio(isTemperatureCold)}.</p>`;
};

const getValueInputToGetScore = () => {
  let easy = parseInt(d.getElementById("easy").value);
  let normal = parseInt(d.getElementById("normal").value);
  let hard = parseInt(d.getElementById("hard").value);
  let puntaje = calcularPuntaje(easy, normal, hard);
  d.getElementById("calcular-porcentaje").innerHTML = `<p>${puntaje}</p>`;
};


const getValueInputToAcceptDeposit = () => {
  let amountOfDeposit = parseInt(d.getElementById("deposit").value);
  d.getElementById("acepta-deposito").innerHTML = `<p>${aceptaDeposito( amountOfDeposit)}.</p>`;
};