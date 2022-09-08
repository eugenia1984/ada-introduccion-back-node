# :star: ARRAYS - OBJETOS - CICLOS

---

## 🏁 Objetivos

- Que incorpores el array como nueva estructura de datos

- Que puedas reconocer los casos en los que es necesario o más eficiente utilizarlos

- Que aprendas cómo manipular un array

- Que te familiarices con el concepto de bucles

- Que puedas identificar cuándo un bucle es necesario y cuál utilizar

- Que puedas usar bucles en tus programas

- Que estés al tanto de los errores más comunes en los que se suele caer al utilizarlos y cómo identificarlos y solucionarlos

- Que conozcas los objetos

- Que puedas estructurar datos como objetos

- Que conozcas su sintaxis y puedas crearlos, accederlos y manipularlos

---

## 📝 Contenidos

- Sintaxis

- Índices

- Accediendo, reemplazando y agregando elementos

- Propiedad length, accediendo y modificando su valor

- Métodos de array:
```
pop
shift
push
unshift
slice
splice
concat
join
```

- Obteniendo valores aleatorios de un array

- Bucles e iteraciones

- Bucles for

- Condiciones de salida

- Objetos literales

- Propiedades y valores

- Leer, agregar, modificar y eliminar propiedades

- Notación de puntos y de corchetes

- Accediendo a propiedades mediante variables

- Propiedades computadas (vs literales)


---
---


# :star: CLASE 6 * 25/08 * ARRAYS (arreglos) :star:

---

- Es una estructura que nos permite almacenar distintos datos (String, Number, Boolean, arrays, inclusive funciones). Es un grupo de datos.

- Van entre []

Vamos a ver un ejemplo de una lista de nombres:

```JavaScript
let nombres = ['Ian', 'Maria', 'Claudia', 'Marcos'];
console.log(nombres[0]); // Ian
console.log(nombres.length); // 4
```

-> **.lenght** para saber la cantidad de elementos que tiene el array

Otro ejemplo de una lista de números:

```JavaScript
let numeros = [1, 3, 80, 6, 20];
```

En un mismo array puedo tener elementos de distintos tipos de datos:

```JavaScript
let arr = [1, 'Hola', true, 2.8, 'a'];
```

- Hay métodos propios de los arrays:

- **Métodos que modifican el array**:

1. Para eliminar o agregar al final:

```JavaScript
nombres.pop(); // elimina el último elemento
nombres.push('Ana'); // agrega el elemento al final
```

2. Para eliminar o agregar al inicio:
```JavaScript
nombres.shift(); // elimina el primer elemento
nombres.unshift('Juan'); // agrega el elemento al inicio
```

3. Para ordenar el array:

```JavaScript
nombres.sort(); // los ordena alfabeticamente en orden ascendente
```

-Hay que tener en cuenta que con **.sort** primero ordena las matyúsculas y luego las minúsculas, entonces si tengo ambas voy a tener todas las que empiecen en mayúsucla ordenadas ascendentes y luego las que empiezan en minúsucla.

-Si quiero que ignore el orden de primero las mayusculas y luego las minusculas, en forma **ascendente**:
```JavaScript
nombres.sort((a,z) => a-z);
```

-Si quiero que ignore el orden de primero las mayusculas y luego las minusculas, en forma **descendente**:
```JavaScript
nombres.sort((a,z) => z-a);
```

-Si tengo un array con números va a comparar como si fuera String por eso primero esta el 100 y luego el 11 porque compara los primeros que son ambos 1 y luego los segundos entonces pasa el 100 antes que el 11:
```JavaScript
let numeros2 = [35, 11, 2, 33, 99, 100];
console.log(numeros2.sort()); // [100, 11, 2, 33, 99]
console.log(numeros2.sort((a,z)=>a-z)); // [2, 11, 33, 99, 100]
console.log(numeros2.sort((a,z)=>z-a)); // [100, 99, 33, 11, 2]
```

4. Para cortar un array:
```JavaScript
numeros.slice(0,2); // para tener los primeros dos elementos
```

5. Para recorrer el array y ejecutar una función por cada elemento del array utilizamos el **.forEach** y puedo pasarle como parametro el indice del array (**index**)

```JavaScript
let numeros = [1, 3, 80, 6, 20]; // arrays de numbers

function recorrer(dato, indice) {
  console.log(`El índice ${indice} tiene el valor: ${dato}`);
}

numeros.forEach(recorrer);
```

Voy a ver por consola:
```
El ìndice 0 tiene el valor: 1
El índice 1 tiene el valor: 3
El índice 2 tiene el valor: 80
El índice 3 tiene el valor: 6
El índice 4 tiene el valor: 20
```

6. Para ver si un elemento esixte en el array con **.includes()** que retorna **true** si existe y **false** si no existe

```JavaScript
console.log(numeros.includes(6)); // true
```


- Puedo ir combinado métodos:
```JavaScript
console.log(nombres.slice(0,2).sort((a,z)=>z-a)); 
```

---

- Ejercicio **obtenerMenor**

Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:
obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]) // 2

```JavaScript
let numeros2 = [5, 7, 99, 34, 54, 2, 12];
function obtenerMenor(arrayDeNumeros) {
  // los ordeno de menor a mayor
  let arrayOrdenado = arrayDeNumeros.sort((a,z)=>a-z);
  // lo corto en el primero
  return arrayOrdenado[0]
}
obtenerNumeroMenor(numeros2);
```

Si usaría el forEach:
```JavaScript
function obtenerMenor2(arrayDeNumeros) { // usando el forEach
  let menor = arrayDeNumeros[0]; // tomo al primer elemento como el menor y voy a ir comparandolo con los demas elemento del array
  arrayDeNumeros.forEach((num) => {
    if(num < menor) {
      menor = num;
    }
  })
  return menor
}
```

---

- Ejercicio **contiene(numero, numeros)**

Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

```JavaScript
function contiene(numero, numeros) {
  return numeros.includes(numero)
}

contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
```

---

- Ejercicio **sumar(numeros)**

Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. 

Ejemplo: sumarNumeros([5, 7, 10, 12, 24]) // 58

```JavaScript
function sumarNumeros(arrayDeNumeros) {
  let suma = 0;
  arrayDeNumeros.forEach((num) => suma += num)
  return suma;
}

sumarNumeros([5, 7, 10, 12, 24]) // 58
```

---

## .split()

- Método que va a separar a un **String** y lo convertierte en un **Array**.

-> Si no paso ningún parámetros me separa caracter por caracter, cada carcter es un elemento del array:

```JavaScript
let str = 'hola Euge';
let arr = str.split(''); // ['h', 'o', 'l', 'a', ' ', 'E', 'u', 'g', 'e']
```

->Si paso un caracter de espacio vacío, separo mi string en un array de palabras, va recorriendo letra or letra y cuando llega al espacio la corta, asi separa palabra por palabra:

```JavaScript
let str = 'hola Euge';
let arrayDeTodasLasPalabras = str.split(' '); // ['hola', 'Euge']
```

-> Asi como se pasa el espacio en blanco, tambien se puede cortar por cuanquier caracter ya sea un **;** ó **:**, por ejemplo (es similar al slice del String).

---

## .reverse() y .join()

- Para invertir el array -> **.reverse()**

- Para pasar de un array a un String -> **.join()**. Si no le paso parametros entre los paréntesis me va a dejar una como entre cada caracter, si le dejo un caracter vacío no me deja nada entre cada caracter.

```JavaScript
let str = "invertir";
// con .split separo todos los caracteres del string a un elemento del array ['i', 'n', 'v', 'e', 'r', 't', 'i', 'r']
// con .reverse los invierto de orden ['r', 'i', 't', 'r', 'e', 'v', 'n', 'i']
// con .join paso de un array a un string
let palabrainvertida= str.split("").reverse().join(""); // ['ritrevni']
```

---

- El ejercicio de si tengo una letra en minuscula la paso a mayúscula y viceversa

```JavaScript
let str = 'holA';
// Primero con un split hay que separar cada caracter en un elemento dle array
// Luego con un forEach vamos recorriendo elemento por elemento y los pasamos a mayuscula o minuscula
if(str[2] == str[2].toLowerCase()) { // para saber si el caracter está en minúscula
  str[2].toUpperCase()
} else {
  str[2].toLowerCase()
}
// despues con el join los juntamos
```

---
---

# :star2: CLASE 7 * 30/08 * ARRAYS (arreglos) :star2:

---

## Repaso de lo visto la clase pasada de arrays

- Definición: son una lista de elementos, puede guardar distintos tipos: Number, String, Boolean, otro array, undefined, null, una función, etc.

- Se declaran entre []

- Para crear un array vacío:
```JavaScript
let numeros = []
```

- Para saber su longitud (la cantidad de elementos que tiene) tenemos el metodo **.length()**:
```JavaScript
console.log(numeros.length); // 0
```

- Para ver un elemento del array utilizo los [] y como parametro le paso el índice del elemento. Recordar que los índices comienzan en 0.
```JavaScript
numeros = [1, 2, 3];
console.log(numeros[0]); // 1
```

- con **.push()** **agrego** elementos al final del array y con **.pop()** **elimino**     elementos al final del array. Con **.shift()** y con **.unshift()** hago lo mismo pero en vez de al final del array es al principio. Estos 4 métodos van a **modificar mi array original**.

```JavaScript
numeros.push(4);
console.log(numeros); // 1 2 3 4
numeros.pop(); 
console.log(numeros); // 1 2 3 
```

- Para **cortar** un array puedo utilizar el método **.slice()**, el primer parametro indica desde que elemento comienza a cortar (lo incluye) y el segundo parámetro indica hasta que elemento lo corta (no lo incluye).
```JavaScript
numeros.slice(0,2);
console.log(numeros); // 1 2
```

- Para saber si un elemento está en el array utilizamos el método **.includes()**, retorna true si está y false si no está.
```JavaScript
console.log(numeros.includes(10)); // false
console.log(numeros.includes(1)); // true
```

- Para ordenar el array tenemos el método **.sort()**, ordena por defecto de forma ascendente, para las letras, pero hay que tener cuidado que es CASE SENSIBLE, por lo que me va a separar primero los que tenga en mayusucla ascendente y luego los que son con minuscula en forma descendente. Para corregir esto tenemos el método **.localeCompare()**:
```JavaScript
const arrStrings = ["Hola", "me", "llamo", "Ian", "Mucho", "gusto"];
// con localeCompare() comparamos sin importar si son mayusculas o minusculas
arrStrings.sort((a,z) => a.localeCompare(z));
```

Pero... si tengo números: 100 me queda antes que el 11. Para ordenarlos bien ascendentemete utilizamos:
```JavaScript
// orden ascendente para NUMEROS
numeros.sort( (a,z) => a-z)
// orden descendente para NUMEROS
numeros.sort( (a,z) => z-a)
```

- Para recorrer cada elemento del array, tenemos el **.forEach()**, que va a necesitar una función, la cual suele ser un arraow function, que recibe como primer parámetro cada uno de los elementos del array. Es como un ciclo **for** mejorado:
```JavaScript
function paraElForEach(palabra) {
  console.log(palabra);
}

function mostrarConsola(arr) {
  arrStrings.forEach(paraElForEach)
}

 //este es el array que voy a recorrer elemento por elemento
const arrStrings = ["Hola", "me", "llamo", "Ian", "Mucho", "gusto"];
// aca incvoco la funcion
mostrarConsola(arrStrings); 
```

Otro modo, en vez de escribir la funcion aparte, la dejo ya dentro. Otro modo sería guardar la arrow function en una constante y luego invocarla.
```JavaScript
function mostrarConsola(arr) {
  arrStrings.forEach((palabra) => console.log(palabra))
}

 //este es el array que voy a recorrer elemento por elemento
const arrStrings = ["Hola", "me", "llamo", "Ian", "Mucho", "gusto"];
// aca incvoco la funcion
mostrarConsola(arrStrings); 
```

---

- Hacemos el sigueinte ejercicios:

Crea una función invertirCaso que tome como argumento
un String y devuelva un String donde cada letra tiene 
el caso invertido, es decir, cada letra está en 
mayúscula si estaba en minúscula y viceversa.

```JavaScript
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
```

---

### Math

Para poder hacer operaciones matemáticas tenemos **Math**.

Uno de todos los métodos es el **random()** que nos da un numero random retornando numero entre 0 y 1 (el 1 no lo incluye).

Y tenemos le **.floor()** que redondea para abajo (floor = piso), sacando los decimales.

```JavaScript
const arrNumeros = [1, 3, 455, 41, 11, 312, 5]
console.log(Math.random());
console.log(Math.random() * arrNumeros.length);
console.log(Math.floor());
console.log(arrNumeros[(Math.random() * arrNumeros.length)])
```

---

### Realizamos el siguiente ejercicios

Crear una funcion obtenerChatStatus(usuarias) que tome como argumento un array de strings usuarios y devuelva un string con el status deñ chat. 

Las reglas son

- Para una usuaria debe mostrar: NOMBRE_USUARIA_1 esta conectada

- Para dos usuarias debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 estan conectadas

- Para más de dos usuarias debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y x persona(s) mas estan conectadas

```JavaScript
```

```JavaScript
```

```JavaScript
```

---
---
