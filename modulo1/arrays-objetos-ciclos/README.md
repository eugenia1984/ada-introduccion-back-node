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

### Realizamos el siguiente ejercicio

Crear una funcion obtenerChatStatus(usuarias) que tome como argumento un array de strings usuarios y devuelva un string con el status deñ chat. 

Las reglas son

- Para una usuaria debe mostrar: NOMBRE_USUARIA_1 esta conectada

- Para dos usuarias debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 estan conectadas

- Para más de dos usuarias debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y x persona(s) mas estan conectadas

```JavaScript
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
```

---

## map

- La ventaja de **map** es que no modifica mi array, por eso se utiliza tanto.

- Lo vemos en un ejemplo. Quiero tener un array con todos mis elementos multiplicados por 2:

Haciendolo con un **.forEach()**:
```JavaScript
const arrNumeros2 = [4, 1, 33, 10, 42];
const arrVacio = [];
arrNumeros2.forEach((numero) => arrVacio.push(numero*2));
console.log(arrVacio); // 8, 2, 66, 20, 84 
```

Haciendolo con un **.map()**:
```JavaScript
const arrNumeros2 = [4, 1, 33, 10, 42];
const arrNuevo = arrNumeros2.map((numero) => numero*2);
console.log(arrNuevo); // 8, 2, 66, 20, 84 
```

### Hacemos otro ejercicio para practicar

Crear una funcion **multiplicar** que tome como argumentos un numero **multiplicador** y un array de numeros **numeros**, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma pisicion) multiplicado por el numero ingresado


```JavaScript
const arrNumeros3 = [4, 1, 33, 10, 42];

function multiplicar(multiplicador, numeros) {
  return numeros.map((numero) => numero * multiplicador);
}

multiplicar(1, arrNumeros3); // 4, 1, 33, 10 ,42
multiplicar(2, arrNumeros3); // 8, 2, 66, 20, 84
```

---

## filter

- Nos devuelve un array que cumpla con la condición que le pida.

- Si ningún elemento cumple con la condición me devuelve un array vacío.

Lo vemos con un ejemplo: quiero filtrar todos los elementos menores a 5:

```JavaScript
const arrNumeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arrNumeros4.filter( (num) => num < 5);
console.log(arrNumeros4); // 1, 2, 3, 4
```

#### Realizamos un ejercicio

Crear una funcion **filtrarPorLongitudMayorA** que tome como argumentos un numero **longitud** y un array de strings **palabras** y que devuelva un array con todas las palabras que tengan una cantidad de letras mayor a **longitud**.

```JavaScript
function filtrarPorLongitudMayorA(longitud, palabras) {
  return palabras.filre( (palabra) => palabra.length > longitud)
}

filtrarPorLongitudMayor(4, ["sol", "hola", "amistad"]); // amistad
```


---
---

# :star2: CLASE 7 * 30/08 *** CICLOS (BUCLES / LOOPS) *** :star2:

---

Un **bucle** es un **estructura de control que se repite muchas veces**


## FOR

- **let i = 1** es el inicializador, el index(indice)

- **i <= numero** es la condicion a evaluar en cada iteración del bucle, debe volverse false en un momento, sino tengo un bulce infinito.

- **i++** es lo que se va a ir modificando mi indice en cada iteracion. Si quiero que incremente de uno en uno en cada iteración uso **i--**. Si cambia de 2 en 2 por ejemplo uso **i+2**

**i ++** es lo mismo que decir **i = i + 1**.


Lo vemos en un ejemplo: si quiero imprmir los números entre el 0 al 10.
```JavaScript
let numero = 10;
for(let i = 1; i <= numero, i++) {
  console.log(i)
}
```

-> Lo usamos cuando sabemos exactamente cuantas vueltas necesitamos dar


---

## WHILE

Es similar al FOR, pero lo utilizamo cuando no sabemos exactamente cuantas vueltas vamos a realizar.

- Puede ser que nunca se ejecute si la condición nunca se cumple

- Puede ser que quede un loop infinito si la condición siempre es true y no pasa a ser false. Esto hay que evitarlo.

- Primero evalua la condicion, y si se cumple se ejecuta. Si no se cumple no se ejecuta.

```JavaScript
let colorSemaforo = prompt('Ingrese color semaforo: ').toLowerCase();

// para asegurarme que ingresa el color correcto
while(colorSemaforo !00 'verede' && colorSemaforo !== 'amarilo' && colorSemaforo !== 'rojo') {
  colorSemaforo = prompt('Ingrese color semaforo correcto: ').toLowerCase();
}

if(colorSemaforo == 'verde') {
  cosnole.log(`Puede avanzar ${colorSemaforo}`)
} else if(colorSemaforo == 'rojo' || colorSemaforo == 'amarillo') {
  console.log(`No avance - ${colorSemaforo}`)
} else {
  console.log('Error: color de semaforo invalido)
}
```

---
---

## :star: CLASE 8 * 01/09 *** CICLOS (BUCLES / LOOPS) *** :star:

---

## Repasamos un ejercicio de arrays

#### sonIguales(a, b)

Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

```JavaScript
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
```

---

## Repasamos otro ejercicio

### invertir(arr)

Crear una funcion invertir que tome como argumento un array **array** y que devuelva un array con los mismos valores pero en orden invertido

```JavaSCript
function invertir(arr) {
  cost arrayInvertido = [];

  for(let i = arr.length -1; i > 0; i++) {
    arrayInvertido.put(arr[i]);
  }
  return arrayInvertido;
}
```

---

## FOR OF

Un for simplificado para recorrer un array. En este caso no necesito tener que poner la longitud del array, lo recorre elemento por elemento del array.


Quiero imprimir cada elemento del array.
```JavaSCript
for (let num in arr) {
  console.log(num);
}
```

---

### esPalindromo

```JavaSCript
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
```

Tambien se podia manejar utilizando el metodo **.reverse()**.

```JavaSCript
function esPalindromo(str) {
  let strInvertido = str.split('').reverse().join('')
  if(str === strInvertido) {
    return true;
  }
  return false;
}
```


---
---

## :star: CLASE 8 * 01/09 *** OBJETOS *** :star:

- En Python los llaman **diciconarios**.

- Se declaran entre **{}**

- Tienen los pares **key:value** (llave : valor), la key es el atributo dle objeto. Cada par key-value se separa con **,**.

- Pueden tener Number, String, Boolean, funciones y arrays como valores.


Ejemplo 

```JavaScript
const usuario = {
  nombre: 'Ian',
  edad: 28,
  numeroTelefono: 123456789,
  saludo: () => console.log('Hola')
}

// para ver el valor del atributo nombre
console.log(usuario.nombre); // 'Ian'
// Puedo ejecutar la funcion que tiene el usuario
console.log(usuario.saludo()); // 'Hola'
// Para modificar un valor de una key que ya existe
usuario.edad = 30;
console.log(usuario.edad); // 30
// para agregar una nueva key-value
usuario.codigo = 123;
// Puedo utilizar variables para ls llaves
let pais = "Argentina";
usuario.[pais] = "ARG";
```

---
## Hacemos el primer ejercicio

**sobre mi**

Crear una variable llamada **sobreMi**, a la que le vamos a asignar un objeto.

El objeto tiene que tener 3 propiedades: **nombre**, **apellido**, **edad**

Mostrar en consola el objeto sobreMi


```JavaScript
const sobreMi = {
  nombre: 'María Eugenia',
  apellido: 'Costa',
  edad: 38
}
// Muestro todo el objeto 
console.log(sobreMi);
// ARmo una presentacion con los valores del objeto
console.log(`Soy ${sobreMi.nombre} ${sobreMi.apellido} y tengo ${sobreMi.edad} años.`)
```

---

### Hacemos el segundo ejercicio

**presentar**

Crear una variable llamada user, a la que le vamos a asignar un objeto.

El objeto tiene que tener 3 propiedades: fullname, email, age

Mostrar en consola el objeto user

Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

```JavaScript
const user = {
  fullname: 'Maria Eugenia Costa',
  email: 'example@example.com',
  age: 38
}
console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`);
```

---

## Tipo de datos

En JavaScript tenemos los tipos de **datos primitivos**, como son los: Numbers, bigint (numeros que terminan en **n**), Strings, null, undefined (no está definido), boolean.

Y también tenemos los **datos complejos**, como por ejemplo el **array**, el **objeto** y las **funciones** (que por debajo también son objetos, se le pueden agregar atributos).

Los objetos se guardan en una **direccion de memoria** , va a utilizar varios bloques de memoria, ya que tiene varios pares key-value; por eso podemos utilizar **const** en opbjetos y modificar del mismo sus key y values.

---

### Hacemos el ejercicio 5 de la guia

**correción de datos**

Tenemos la variable **datos** que tiene un objeto con los datos de una persona

El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465

También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

```JavaScript
var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: '29',
  programa: true,
};

// modifico los datos
datos.telefono = '0192837465';
datos.edad = 29;
// finalmente, mostramos los datos
console.log(datos);
```

---

### Mostrar los key y values de un objeto

Usamos **FOR IN** para recorrer el objeto

```JavaScript
const datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace'
};
for(let key in datos) {
  console.log(`La llave es: ${key}, su valor: ${datos[key]}`);
}
```

---


## Arrays de objetos

