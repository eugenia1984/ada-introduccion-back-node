/******* BUCLES *******
/********************************************
 Ejercicio 1 : obtenerIndice(valor, array)
*******************************************/
/*
Crear una función obtenerIndice que tome como argumento un valor cualquiera "valor" y un array cualquiera "array" y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
*/
function obtenerIndice(valor, array) {
  return (array.includes(valor))?valor:-1;
}

obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 12
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1

/****************************************
 Ejercicio 2 : repetir(valor, cantidad)
****************************************/
/*
Crear una función repetir que tome como argumento un valor "valor" y un número entero "cantidad", y devuelva una array con valor repetido cantidad de veces.
*/
function repetir(valor, cantidad) {
  const arr = []
  for(let i = 0; i < cantidad; i++) {
    arr.push(valor);
  }
  return arr;
}

repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []

/******************************************
 Ejercicio 3 :  sumarImparesHasta(numero)
*****************************************/
/*
Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.
*/
function sumarImparesHasta(numero) {
  let acumulador = 0;
  for(let i = 0; i <= numero; i++) { 
    if( i % 2 != 0) {
      acumulador+=i;
    }
  }
  return acumulador;
}

sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
/***************************************************
 Ejercicio 4 :  crearCuentaRegresiva(numeroInicial)
****************************************************/
/*
Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.
*/
function crearCuentaRegresiva(numeroInicial) {
  const arr = [];
  for(let i = numeroInicial; i >= 0; i--) { 
    arr.push(i)
  }
  return arr;
}

crearCuentaRegresiva(3) // [3, 2, 1, 0]
crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

/*******************************
 Ejercicio 5 :  invertir(array)
*******************************/
/*
Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.
*/
function invertir(array) {
  const arrayInvertido = [];

  for(let i = array.length-1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

invertir([1, 2, 3]) // [3, 2, 1]
invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]
/*****************************************
 Ejercicio 6 : removerDuplicados(array) 
****************************************/
/*
Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.
*/
/*
-Una de las formas más directas de remover elementos de un arreglo es utilizar Array.filter.
-Array.filter es un método inmutable que retorna un nuevo arreglo con los elementos que cumplan la condición implementada por la función utilizada como argumento.
-De forma interna, filter itera sobre los elementos del arreglo y aplica la función argumento en cada item retornando un valor boolean, si el elemento pasa la condición se retorna true indicando que este será agregado al nuevo arreglo.
- Para este caso de remover elementos duplicados utilizamos como método auxiliar la función Array.indexOf. Este método retorna Array.indexOf retorna el primer indice del arreglo en donde se encuentre un elemento dado.
- En este caso, podemos identificar un duplicado cuando el indice no es igual al resultado de indexOf. data.indexOf(item) === index ,retornará siempre la primera ocurrencia del item.
*/
function removerDuplicados(array)  {
  let result = array.filter((item, index) => {
    return array.indexOf(item) === index;
  })
  return result;
}

removerDuplicados([1, 1, 1]) // [1]
removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

/************************************************
 Ejercicio 7 : repetirLetras(palabra, cantidad)
**************************************************/
/*
Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.
repetirLetras('hola', 2) // 'hhoollaa'
*/
function repetirLetras(palabra, cantidad) {

}

repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'

/*******************************************
 Ejercicio 8 : capitalizarPalabras(string)
*******************************************/
/*
Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra mayuscula). Dejar las demás letras como están.
capitalizarPalabras('Esto es un título') // 'Esto Es Un Título
*/
function capitalizarPalabras(string) {

}

capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
capitalizarPalabras('había una vez') // 'Había Una Vez'
makeTitle('OMG') // 'OMG'

/******************************************************
 Ejercicio 9 : sumarSeccion(array, comienzo, cantidad) 
******************************************************/
/*
Crear una función sumarSeccion que tome como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
*/
function sumarSeccion(array, comienzo, cantidad)  {

}

sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3

/*****************************************************
 Ejercicio 10 : esSubconjunto(subconjunto, conjunto) 
*****************************************************/
/*
Crear una función esSubconjunto que tome como argumento dos arrays, subconjunto y conjunto, y devuelva true si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.
esSubconjunto([1], [1, 2, 3]) // true
*/
function esSubconjunto(subconjunto, conjunto) {

}

esSubconjunto([1], [1, 2, 3]) // true
esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
esSubconjunto([1, 2, 3], [1, 2]) // false
esSubconjunto([1], [2, 3, 4]) // false

/******************************
 Ejercicio 11 : tieneBloque(array) 
*******************************/
/*
Crear una función hayBloque que tome como argumento un array array y devuelva true si dicho array tiene un bloque de 3 o más ítems consecutivos idénticos, o false si no tiene.
tieneBloque([1, 2, 3]) // false
tieneBloque([1, 1, 1, 2, 3]) // true
*/
function tieneBloque(array)  {

}

tieneBloque([1, 2, 3]) // false
tieneBloque([1, 1, 1, 2, 3]) // true
tieneBloque([1, 2, 3, 3, 3]) // true
tieneBloque([1, 2, 3, 3, 3, 8]) // true
tieneBloque([1, 2, 2, 3, 3, 4]) // false

/**************************************
 Ejercicio 12 : esPalindromo(palabra) 
**************************************/
/*
Crear una función esPalindromo que tenga como par´ámetro un string palabra y devuelva true si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o false sino.
esPalindromo('ada') // true
*/
function invertir(arr) {
  const arrInvertido = [];
  for(let i = arr.lemgth - 1; i >= 0; i--) {
    arrayInvertido.push(arr[i]);
  }
  return arrayInvertido;
}

function esPalindromo(str) {
  let strInvertido = invertir(str.split('')).join(''); // invoco a la funcion invertir declarada arriba
  if(str === strInvertido) {
    return true;
  }
  return false;
}
/*
function esPalindromo(str) {
  let strInvertido = str.split('').reverse().join('')
  if(str === strInvertido) {
    return true;
  }
  return false;
}
*/
esPalindromo('ada') // true
esPalindromo('reconocer') // true
esPalindromo('mama') // false
esPalindromo('javascript') // false