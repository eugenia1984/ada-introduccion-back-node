function sumar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 + num2;
}

function restar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 - num2;
}

function multiplicar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 * num2;
}

function dividir(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  if(num2 === 0 ) {
    return "Error : no se puede dividir por 0";
  } 
  return num1 / num2;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir
}

