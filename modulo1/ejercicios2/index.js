const d = document;

function puedeVerPelicula(edad, tieneAutorizacion) {
  return (edad >= 15 || tieneAutorizacion == true) ? "La persona está autorizada" : "La persona NO está autorizada";
}

function estaEnRango(valor, minimo, maximo) {
  if (valor == null || valor == "" || isNaN(valor) ) {
    return "Debes ingresar un numero";
  } else {
    return (valor > minimo && valor < maximo)? `${valor} está entre ${maximo} y ${minimo}.`: `Esta fuera de rango`;
  }
}

function eventoPuedeVerPelicula() {
  let age = Number(prompt("Ingresa tu edad -en numeros-: "));
  let tieneAutorizacion = false;
  let text = ``;

  if (age == null || age == "" || isNaN(age) ) {
    alert("Debes ingresar un numero.");
  } else {
    text = puedeVerPelicula(age, tieneAutorizacion);
  } 
  d.getElementById("puede-ver-pelicula").innerHTML = text;
}

function eventoEstaEnRango() {
  let minimo = 0;
  let maximo = 100;
  let valor = Number(prompt("Ingresa un numero, para ver si está en rango: "));
  let text = estaEnRango(valor, minimo, maximo); 
  d.getElementById("esta-en-rango").innerHTML = text;
}

