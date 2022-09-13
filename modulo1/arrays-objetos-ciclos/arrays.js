let nombres = ['Ian', 'Maria', 'Claudia', 'Marcos']; // array de strings
console.log(nombres); // Ian, Maria, Claudia, Marcos
console.log(nombres[1]); // Maria
nombres.pop(); // elimina el último elemento
console.log(nombres); // Ian, Maria, Claudia
nombres.push('Ana'); // agrega el elemento al final
console.log(nombres); // Ian, Maria, Claudia, Ana
nombres.shift(); // elimina el primer elemento
console.log(nombres); // Maria, Claudia, Ana
nombres.unshift('Juan'); // agrega el elemento al inicio
console.log(nombres); // Juan, Maria, Claudia, Ana
nombres.sort(); // ordena en orden ascendente
console.log(nombres); // Ana, Claudia, Juan, Maria 
console.log(nombres.slice(0,2).sort((a,z)=>z-a)); // Claudia, Ana -> para tener los 2 elementos del principio y ademas ordenarlos en forma descendiente

let numeros = [1, 3, 80, 6, 20]; // arrays de numbers
console.log(numeros.includes(6)); // true para ver si un elemento esta en el array

function recorrer(dato, indice) {
  console.log(`El índice ${indice} tiene el valor: ${dato}`);
}

numeros.forEach(recorrer);
/*
El ìndice 0 tiene el valor: 1
El índice 1 tiene el valor: 3
El índice 2 tiene el valor: 80
El índice 3 tiene el valor: 6
El índice 4 tiene el valor: 20
*/

/*
Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. 
Ejemplo:
obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]) // 2
*/
let numeros2 = [5, 7, 99, 34, 54, 2, 12];
function obtenerMenor(arrayDeNumeros) {
  // los ordeno de menor a mayor
  let arrayOrdenado = arrayDeNumeros.sort((a,z)=>a-z);
  return arrayOrdenado[0]
}

function obtenerMenor2(arrayDeNumeros) { // usando el forEach
  let menor = arrayDeNumeros[0]; // tomo al primer elemento como el menor y voy a ir comparandolo con los demas elemento del array
  arrayDeNumeros.forEach((num) => {
    if(num < menor) {
      menor = num;
    }
  })
  return menor
}


obtenerNumeroMenor(numeros2);
obtenerNumeroMenor2(numeros2);

/*
contiene(numero, numeros)
Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
*/
function contiene(numero, numeros) {
  
  return numeros.includes(numero)
}

contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

/*
Ejercicio sumar(numeros)
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. 
Ejemplo: 
sumarNumeros([5, 7, 10, 12, 24]) // 58
*/
function sumarNumeros(arrayDeNumeros) {
  let suma = 0;
  arrayDeNumeros.forEach((num) => suma += num)
  return suma;
}

sumarNumeros([5, 7, 10, 12, 24]) // 58

// split - reverse - join
let palabraAInvertir = "invertir";
// con .split separo todos los caracteres del string a un elemento del array ['i', 'n', 'v', 'e', 'r', 't', 'i', 'r']
// con .reverse los invierto de orden ['r', 'i', 't', 'r', 'e', 'v', 'n', 'i']
// con .join paso de un array a un string
let palabrainvertida= palabraAInvertir.split("").reverse().join(""); 

// Hacemos el ejercicio de invertir caso
/*
Crea una función invertirCaso que tome como argumento
un String y devuelva un String donde cada letra tiene 
el caso invertido, es decir, cada letra está en 
mayúscula si estaba en minúscula y viceversa.
*/
function invertirCaso(str) {
  // separo cada letra y la transformo en un elemento del array
  const arr = str.split(''); 
  const arrVacio = [];
  arr.forEach((letra) => {
    // compruebo que la letra este en minuscula y los caracteres que no son letras
    if(letra === letra.toLowerCase()) {
      // la paso a mayúscula
      // y lo voy agregando al array vacio
      arrVacio.push(letra.toUpperCase());
    } else { // va a estar en mayuscula
      // la paso a minuscula
      // y lo voy agregando al array vacio
      arrVacio.push(letra.tuLowerCase());
    }
  })
  // con el .join lo vuelvo a pasar a un string
  return arrVacio.join('');
}

// Hacemos otro ejercicio
/*
Crear una funcion obtenerChatStatus(usuarias) que tome como argumento un array de strings usuarios y devuelva un string con el status deñ chat. 
Las reglas son:
- Para una usuaria debe mostrar: NOMBRE_USUARIA_1 esta conectada
- Para dos usuarias debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 estan conectadas
- Para más de dos usuarias debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y x persona(s) mas estan conectadas
*/
function obtenerChatStatus(arr) {
  if(arr.length === 0) {
     // en el caso de que el array este vacio
     return 'No hay nadie conectada'
  } else if(arr.length === 1) { // solo tengo una usuaria
    return `${arr[0]} esta conectada`
  } else if(arr.length === 2) { // tengo dos usuarias
    return `${arr[0]} y ${arr[1]} estan conectadas`
  } else { // tengo mas de dos usuarias
    return `${arr[0]}, ${arr[1]} y ${arr.length - 2} persona(s) estan conectadas`
  }

}
obtenerChatStatus([]); // 'No hay nadie conectada'
obtenerChatStatus(['Ada']); // 'Ada esta conectada'
obtenerChatStatus(['Ada', 'Grace']); //  'Ada y Grace estan conectadas'
obtenerChatStatus(['Ada', 'Grace', 'Maria']); // 'Ada, Grace y 1 persona(s) estan conectadas'

// Ejercicio con map
/*
Crear una funcion multiplicar que tome como argumentos un numero "multiplicador" y un array de numeros "numeros", y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma pisicion) multiplicado por el numero ingresado
*/
const arrNumeros3 = [4, 1, 33, 10, 42];

function multiplicar(multiplicador, numeros) {
  const arrMultiplicado = numeros.map((numero) => numero * multiplicador);
  return arrMultiplicado;
}

multiplicar(1, arrNumeros3); // 4, 1, 33, 10 ,42
multiplicar(2, arrNumeros3); // 8, 2, 66, 20, 84

// Ejercicio con filter
/*
Crear una funcion "filtrarLongitud" que tome como argumentos un numero "longitud" y un array de strings "palabras" y que devuelva un array con todas las palabras que tengan una cantidad de letras mayor a "longitud".
*/
function filtrarLongitud(longitud, palabras) {
  return palabras.filre( (palabra) => palabra.length > longitud)
}

filtrarLongitud(4, ["sol", "hola", "amistad"]); // amistad

// Ejercicio para repasar arrays
/*
sonIguales(a, b)
Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.
*/
function sonIguales(arr1, arr2) {
  // primero compruebo que tengan la misma cantidad de elementos
  if(arr1.length !== arr2.length) {
    return false;
  }
  // segundo compruebo que los elementos sean iguales
  for( let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
}

sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false