/*
obtenerMenor(numeros)
Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:
obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]) // 2
*/
let numerosABuscarMenor = [5, 7, 99, 34, 54, 2, 12];

function obtenerNumeroMenor(numerosArray) {
  let menor = 9999;
  // recorro los elementos del array y los voy comparando con la variable menor para encontra el menor
  numerosArray.forEach(element => {
    if(element<menor) {
      menor = element;
    }
  });
  return menor;  
}

obtenerNumeroMenor(numerosABuscarMenor);

/*
sumar(numeros)
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo: sumarNumeros([5, 7, 10, 12, 24]) // 58
*/
let numerosASumar = [5, 7, 10, 12, 24];

function sumar(numeros) {
  let suma = 0;
  numeros.forEach(element => suma += element);
  return suma;
}

sumar(numerosASumar);

/*
contiene(numero, numeros)
Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
*/
function contiene(numero, numeros) {
  let resultado = false;

  numeros.forEach(element => {
    if(element === numero) {
      resultado = true;
    }
  });

  return resultado;
}

contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]);
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]); 

/*
invertirCaso(string)
Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.
invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'
*/

/*
gano(tragamonedas)
Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
gano(['💫', '💫', '💫', '💫', '💫']) // true
gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true
*/

/*
obtenerChatStatus(usuarias)
Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:
Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
Ejemplo:
obtenerChatStatus(['Ada']) // 'Ada está conectada'
obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'
*/

/*
multiplicar(multiplicador, numeros)
Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:
multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]) // [20, 50, 770]
*/

/*
filtrarPorLongitudMayorA(longitud, palabras)
Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:
filtrarPorLongitudMayorA(4, [
  'dia',
  'remolacha',
  'azul',
  'sorpresa',
  'te',
  'verde',
]) // ['remolacha', 'sorpresa', 'verde']
*/

/*
recortar(cantidadLetras, palabras)
Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.
recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']
*/

/*
sonIguales(a, b)
Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.
sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false
*/

/*
obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:
const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]
// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate
// Resultado final: Gana Jugadora B
obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) // Ada
obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) // Empate
obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]
*/

