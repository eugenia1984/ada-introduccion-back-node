const d = document;

/******** FUNCIONES **********/
/* FUNCION SUMAR */
function sumar(num1, num2) {
  return num1 + num2;
}

/* FUNCION RESTAR */
function restar(num1, num2) {
  return num1 - num2;
}

/* FUNCION MULTIPLICAR */
function multiplicar(num1, num2) {
  return num1 * num2;
}

/* FUNCION DIVIDIR */
function dividir(num1, num2) {
  // I check that the divider isn`t 0 or a negative number
  if (num2 == 0 || num2 < 0) {
    return "No se puede dividir por cero o por un numero negativo.";
  } else {
    return num1 / num2;
  }
}
/****** Para tomar los datos ingresados en los input y mostrarlos en el DOM ******/
const getValueInputToSum = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberSum").value);
  let secondNumber = parseInt(d.getElementById("secondNumberSum").value);

  d.getElementById("ver-sumar").innerHTML = `
    <p>La suma de ${firstNumber} y ${secondNumber} es: 
    ${sumar(firstNumber, secondNumber)}</p>
  `;
};

const getValueInputToSubtract = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberSubtract").value);
  let secondNumber = parseInt(d.getElementById("secondNumberSubtract").value);

  d.getElementById("ver-restar").innerHTML = `
    <p>La resta de ${firstNumber} y ${secondNumber} es: 
    ${restar(firstNumber, secondNumber)}</p>
  `;
};

const getValueInputToMultiply = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberMultiply").value);
  let secondNumber = parseInt(d.getElementById("secondNumberMultiply").value);

  d.getElementById("ver-multiplicar" ).innerHTML = `
    <p>La multiplicación de ${firstNumber} y ${secondNumber} es: 
    ${multiplicar(firstNumber, secondNumber)}</p>`;
};

const getValueInputToDivide = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberDivide").value);
  let secondNumber = parseInt(d.getElementById("secondNumberDivide").value);

  d.getElementById("ver-dividir").innerHTML = `
    <p>La division de ${firstNumber} y ${secondNumber} es: 
    ${dividir( firstNumber, secondNumber)}</p`;
};

