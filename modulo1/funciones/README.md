# :star: MODULO 1 * FUNCIONES

---

## 🏁 Objetivos

- Que te introduzcas a las funciones y entiendas su importancia

- Que te familiarices con la sintaxis y los conceptos principales

- Que comiences a pensar en funciones y en cómo reutilizar código

- Que puedas usar funciones en tu código

---

## 📝 Contenidos

**Funciones**

- Qué son, para qué se utilizan

- La importancia del código reutilizable

- Funciones nombradas vs. funciones anónimas

- Funciones como valores

- Asignando funciones a una variable

- Funciones regulares versus funciones flecha

- Estructura de una función

- Funciones flecha

- Sintaxis de funciones flecha

- Devolviendo valores

- Invocando funciones

- Scope

**Parámetros**

- Nombres de parámetros

- Parámetros ignorados

- Parámetros por default

---
---

# :star: CLASE 4 * 18 Agosto * Funciones


## Función

Un conjunto de instrucciones que realiza una tarea, y las puedo reutilizar todas las veces necesarias.

Un ejemplo de una función:
```JavaScript
function incrementoDeNumeros(numeroInicial, incremento) {
  numeroInicial += incremento;
  console.log(numeroInicial);
  console.log(`Se incremento: ${incremento}`);
}
```

## ¿Cómo la utilizo ?

Invocandola:

```JavaScript
incrementoDeNumeros(10,5);
```

- Otro ejemplo de funcion

```JavaScript
// declaro la funcion
Function imprimir(nombre) {
  console.log(`Hola ${nombre}`);
}
// la invoco
imprimir("Euge");
```

## Parámetros y parámetros por defecto

- Una función puede o no recibir **parametros**, los valores que va a recibir entre los ().

Ejemplo de una función que suma:
```JavaScript
function sumar(num1, num2) {
  console.log(num1+num2);
}
sumar(2,3); // 5
```

- Si usaría ```sumar(4);``` obtendria ```undefined``` para el num2 y me imprimiría ```NaN```, por eso es que debo poner la misma cantidad de datos que me pide la función. Otro modo es dar **valores por defecto**:

```JavaScript
function sumar(num1=0, num2=0) {
  console.log(num1+num2);
}
sumar(2); // 2
```

## Return

- Una función puede o no retornar algo.

---

## Una función puede invocar a otra

```JavaScript
function sumar(num1=0, num2=0) {
  return num1+num2;
}

function imprimirCuentas(num1, num2) {
  let resultadoDeSuma = sumar(num1, num2);
  return resultadoDeSuma;
}

// ejecutar la funcion
imprimirCuentas(3, 7)
```

---

## Otro ejemplo de función

```JavaScript
function gritr(str) {
  return str + "!";
}
gritar('Hola'); // Hola!
```

Otro modo,  usando un parametro por defecto:

```JavaScript
function gritr(str='aaa') {
  let auxiliar = `${str}!`;
  return auxiliar;
}
gritar('Hola'); // Hola!
```

Otro ejemplo con dos parametros:


```JavaScript
function gritr(str='aaa', dobleGrito) {
  let auxiliar = `${str}!`;
  if(dobleGrito === true) {
    return auxiliar + ' ' + auxiliar;
  }
  return auxiliar;
}
gritar('Hola', true); // Hola! Hola!
```

---

- En las funciones también tenemos HOISTING, por lo que se recomienda tener:

-variables

-funciones

---

## Función anónima

```JavaScript
let sumar2 = function(num1, num2) {
  return num1 + num2;
}

sumar2(5,6);
```

---

## Arrow Function

```JavaScript
let sumar3 = (num1, num2) {
  return num1 + num2;
}

sumar3(5,6);
```

Si el return esta en una sola linea puedo omitir **return**:

```JavaScript
let sumar4 = (num1, num2) => num1 + num2;

sumar4(5,6);
```

Y si tengo un solo parametro puedo obviar los ():

```JavaScript
let sumar4 = num1 => num1 + 5;

let resultado = sumar4(6);
```

En este caso en **resultado** voy a guardar en una variable lo que me va a devolver mi función sumar4 al pasarle 6 como parametro.

---

Si una función está declarada dentro de una función el scope de la variable es dentro de la función, si la llamo por fuera de la función no va a existir.

---
---


# :star: CLASE 5 * 23 Agosto * Funciones

- Repaso de funciones

- Realizamos el ejercicio de la guía donde una función invoca a otras funciones:

```JavaScript
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
```

- En vez de declarar tres variables en saludarGritando(), otra cosa que puedo hacer es redeclarar la misma variable, ya que primero va a realizar la invocación a la función y lego va a reasignar el valor a la variable:


```JavaScript
function saludarGritando() {
  let resultado = obtenerNombreCompleto('Ada', 'Lovelave'); // 'Ada Lovelace'
  resultado = saludar(resultado); // 'Hola Ada Lovelace, un gusto conocerte'
  resultado = gritar(resultado); // 'Hola Ada Lovelace, un gusto conocerte !'
  return resultado;
}

saludarGritando('Ada', 'Lovelace'); // 'Hola Ada Lovalace, un gusto conocerte'
```

- Modificación del valor de una variable:

```JavaScript
let texto = 'Esto es un texto'; // creo la variable y le asigno un valor
texto = 'Este es otro texto'; // Le reasigno otro valor a la misma variable
console.log(texto); // 'Este es otro texto'
texto = 88; // Tambien puedo cambiar el tipo de dato que guarda, pasa de guardar un String a un Number
console.log(texto); // 88
```

- **Use strict**:

```JavaScript
textoNumeroDos = 'Esto es el segund texto'; // creo otra variable pero sin let, var o const; pero no es buena practica
console.log(textoNumeroDos); // 'Esto es el segundo texto'
```

Un modo de evitar estas malas practica es utilizando el use strict asi no va va a dejar crear la variable y me va a dar un error:

```JavaScript
'use strict'

textoNumeroDos = 'Esto es el segund texto'; // creo otra variable pero sin let, var o const; pero no es buena practica
console.log(textoNumeroDos); // ReferenceError: textonumeroDos is not defined
```

- **Formas de crear funciones**:

1. Crear una variable y guardarla en una constante, la cual va a tener una función anónima:

```JavaScript
const sumar 2 = function(num1, num2) {
return num1 + num2;
}
```
2. Función declarada:

```JavaScript
function sumar(num1, num2) {
return num1 + num2;
}
```

3. Arrow function, guardada en una constante:

```JavaScript
const suma3 = (num1, num2) => num1 + num2;
```

- Algunos **metodos con Strings**:

```JavaScript
let texto = 'hola'.toUpperCase(); // 'HOLA'
texto.toLowerCase(); // 'hola'
console.log(texto.concat(' como estas?')); // 'hola como estas?'
console.log(texto.startsWith('H')); // false
console.log(texto.endsWith('estas?')); // true
console.log(texto.indexOf('como')); // 6
console.log('Ian'.repeat(3)); //'IanIanIan'
console.log('hola hola'.replaceAll('h', 'H')); // 'Hola Hola'
console.log('hola'.length); // 4
console.log('  hola  '.trim()); // 'hola'
console.log('20:11'.slice(0,2)); // '20'
```

1. **.toLowerCase()** -> devuelve el valor en minúsculas de la cadena(String) que realiza la llamada/invocación. toLowerCase no afecta el valor de la cadena en si misma.

2. **.toUpperCase()** -> devuelve el valor en mayúsculas de la cadena(String) que realiza la llamada/invocación.

3. **concat()** -> concatena (une) cadenas(Strings).

4. **startsWith()** -> devuelve true si comienza con la string que le paso por parametro, sino devuelve(retorna) false. Hay que tener en cuenta que es case sensitive (sensible a las mayúsculas y las minúsculas) y los acentos.

5. **endsWith()** ->  devuelve true si finaliza con la string que le paso por parametro, sino devuelve(retorna) false. Hay que tener en cuenta que es case sensitive (sensible a las mayúsculas y las minúsculas) y los acentos.

6. **indexOf()** -> me retorna el indiceo posición en que encuentra (donde comienza)el string que recibe como parametro. Si en vez de un parámetro le paso **dos parámetros, y el segundo es un número entero, me va a indicar a partir de que posición debe comenzar a buscarlo, no me va a recorrer todo el String sino que comienza donde le indico

7. **repeat()** -> me va a repetir el String las N vences que recibe como parametro.  

8. **replaceAll(param1, param2)** -> va a reemplazr todos los param1 por el param2 en el String, puede ser cualquier caracter. Se usa para eliminar algo, por ejemplo: **.replaceAll(' ', '')** y voy a eliminar los espacios.

9. **lenght** -> me retorna el largo del String, el totla de caracteres que tiene. Este es distinto, no tiene los ().

10. **trim()** -> me elimina los espacios tanto al principio como al final. Se usa para comprobar los login y sacarle si las personas por error dejan un espacio en al ingresar el dato.

11. **slice(param1, param2)** -> para cortar un String, el param1 es desde donde comienzo a cortar y el param 2 es hasta donde corto (no se incluye en el corte), en este caso hay que recordar que se comienza desde el 0. Y si tengo **slice(param1)** me va a cortar desde el elemento del String indicado hasta el final, por ejemplo '20:31'.slice(3) -> '31'

-> .toLowerCase y .toUpperCase no necesitan parámetros, los demás métodos vistos si.

-> Los **métodos** son las **funciones** de los **objetos**, que en JavaScript son los **prototypes**

---
