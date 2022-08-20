const d = document;
const onlyVocals = /^[A,E,I,O,U,a,e,i,o,u,Á,É,Í,Ó,Ú,á,é,í,ó,ú]$/
const onlyConsonants = /^[B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z,b,c,d,f,g,h,j,k,l,m,n,s,t,v,w,x,y,z]$/
/*RegEx
^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
+ indica que los caracteres dentro de los corchetes se pueden repetir
*/

function puedeVerPelicula(edad, tieneAutorizacion) {
  return (edad >= 15 || tieneAutorizacion == true) ? "La persona está autorizada" : "La persona NO está autorizada";
}

function estaEnRango(valor, minimo, maximo) {
  if (valor == null || valor == "" || isNaN(valor)) {
    return "Debes ingresar un numero";
  } else {
    return (valor > minimo && valor < maximo)? `${valor} está entre ${maximo} y ${minimo}.`: `Esta fuera de rango`;
  }
}

function puedeAvanzar(colorSemaforo) {
  if(colorSemaforo === "verde") {
    console.log("Puede avanzar");
    return "Puede avanzar";
  } else if(colorSemaforo === "amarillo" || colorSemaforo === "rojo") {
    console.log("No avance");
    return "No avance";
  } else {
    console.log("Error: color de semáforo inválido<");
    return "Error: color de semáforo inválido<";
  }
}

function esVocal(letra) {
  return (onlyVocals.test(letra))? `${letra} es una vocal`: `No es una vocal`;
}

function esConsonante(letra) {
  return (onlyConsonants.test(letra))? `${letra} es una consonante`: `No es una consonante`;
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

function eventoPuedeAvanzar() {
  let color = (prompt("Ingresa el color del semaforo para indicarle si puede avanzar: ")).toLocaleLowerCase();
  text = puedeAvanzar(color);
  d.getElementById("puede-avanzar").innerHTML = text;
}

function eventoEsVocal() {
  let vocal = (prompt("Ingresa una letra para decirte si es vocal: ")).toLocaleLowerCase();
  let text= ``;
  if(vocal == null || vocal == ""){
    alert("debe ingresar una letra");
  } else {
    text = esVocal(vocal);
  }
  d.getElementById("es-vocal").innerHTML = text;
}

function eventoEsConsonante() {
  let consonante = (prompt("Ingresa una letra para ver si es consonante: ")).toLocaleLowerCase();
  text = esConsonante(consonante);
  d.getElementById("es-consonante").innerHTML = text;
}
