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

¿Cómo la utilizo ?

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