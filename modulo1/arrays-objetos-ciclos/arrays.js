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