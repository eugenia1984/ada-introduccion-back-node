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


# :star: CLASE 6 * 25/08 * Arrays (arreglos)

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

-**Métodos que modifican el array**:

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