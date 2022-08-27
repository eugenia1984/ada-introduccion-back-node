function obtenerNombreCompleto(nombre, apellido) {
  let nombreCompleto = `${nombre} ${apellido}`;
  return nombreCompleto;
}

function saludar(nombre) {
  return `Hola ${nombre}, un gusto conocerte}`;
}

function gritar(grito) {
  return `${grito} !`;
}

function saludarGritando() {
  let nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelave'); // 'Ada Lovelace'
  let saludo = saludar(nombreCompleto); // 'Hola Ada Lovelace, un gusto conocerte'
  let saludoGritando = gritar(saludo); // 'Hola Ada Lovelace, un gusto conocerte !'
  return saludoGritando;
}

let grito = gritar('Hola'); // 'Hola !'
let saludar = saludar('Ada'); // 'Hola Ada, un gusto conocerte' 
let nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelave'); // 'Ada Lovelace'
saludarGritando('Ada', 'Lovelace'); // 'Hola Ada Lovalace, un gusto conocerte'