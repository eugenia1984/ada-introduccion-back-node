# :star: INTRO NODE.JS

----

## 🏁 Objetivos

- Que entiendas qué es Node.js y para qué se usa

- Que puedas crear tus primeras aplicaciones con Node.js

---

## 📝 Contenidos

### Node

- Qué es Node.js.

- Instalación de Node.js.

- Comandos básicos.

- Requiriendo módulos.

- Qué es NPM.

- Qué es el package.json.

- Instalar y usar paquetes de NPM.

---

## 📚 Material de lectura

[Usando NPM](https://github.com/Ada-IT/bootcamp-frontend/blob/master/04_node/modulos/README.md)

[Usando módulos](https://github.com/Ada-IT/bootcamp-frontend/blob/master/04_node/modulos/README.md)

[Programación Asíncrona](https://medium.com/laboratoria-how-to/programacion-asincrona-cea3bad7c3c6)

[JavaScript Asíncrono](https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono)

[Introducción a NPM](https://www.hostinger.es/tutoriales/que-es-npm/)

---

## 🔍 Para seguir investigando

[Documentación oficial de Node.js (en inglés)](https://nodejs.org/en/docs/)

[Introducción a Node.js (en inglés)](https://nodejs.dev/en/learn/)

[Qué es yarn (en inglés)](https://yarnpkg.com/api/)

[NPM vs Yarn (en inglés)](https://stackshare.io/stackups/npm-vs-yarn)

---
---

## :star: CLASE 9 * 06/09 *** INTRO NODE.JS *** :star:


### Interprete

Es un **programa** que lee el JavaScript y lo ejecuta.

Antes JavaScript solo se podía correr en el navegador, y con Node.js se puede correr del lado dle servidor, fuera del navegador (en una consola).

---

### Instalación

1. Lo bajamos desde la web [https://nodejs.org/en/](https://nodejs.org/en/), la version **LTS** es la última más estable (recomendar bajar esa).

2. Con la power shell (la consola de windows) vemos que se instalo comprobando la version de node con ```node --version```

---

### :star: npm

**Node Package Manager** es el manejador de paquetes de node que ya viene por defecto para poder compartir e instalar librerías.

**librería** -> codigo que creo otra persona y hace algo. Es como el pip de Python

---

### Algunos comando básicos de la consola:

```cd nuevo_directorio``` para cambiar de directorio, hacia el que indico.

```ls``` para listar lo que hay dentro, ya sean directorios u archivos.

```cd ..``` para ir hacia atras un lugar en el directorio.

```mkt nuevo_directorio``` para crear un nuevo directorio

```code .``` estando ya dentro de mi directorio, me lo abre en el VSC.

``` ctrl + c``` para reiniciar la consola

``` ctrl + l``` para limpiar la terminal

En el VSC con **ctl+ñ** se abre la consola, sino desde **Terminal > New Terminal** y también podremos usar la consola desde el VSC.

---

## Correr Javacript fuera del navegador

- Si por ejemplo tengo le archivo **main.js** con el siguiente codigo:

```JavaScript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filtro los numeros pares
arr = arr.filter( (value) => value % 2 === 0);
console.log(arr);
```

Y quiero ver los numeros pares, me voy con cd hasta el directorio donde tengo el archivo, y : ```node main.js``` (**> node nombre_del_archivo**).

Asi ahora por consola veo: 

```[ 2, 4, 6, 8, 10 ] ```

- Ahora la consola nos va a ayudar, si tenemos algun error lo vamos a poder ver.


---

### :star:  npm init

Para iniciar un proyecto propios.

Con ```npm init``` me lo inicia y me pide que complete ciertos datos:

- nombre del paquete

- version

- descripcion

- git repository

- palabras claves

- autor

- licencia (ISC)

Y le damos YES

-> Otro modo de crearlo es con ```npm init -y``` y se inicializa, pero sin los datos personalizados, crea un package.json vacío (y lo puedo modificar directo en el archivo package.json).

-> Se crea el archivo **package.json** con los datos completados y ahi voy a poder ver que librerias bajo.

-> De este modo creo un entorno para poder usar npm


---

## :star: Bajando librerias

- Las instalamos por medio de la terminal con el comando:

```npm install nombre_de_la_libreria```

- una vez instalada voy a tener el archivo **package.json** (que tiene el detalle de mi proyecto y las librerias utilizadas con sus versiones), el **package.lockjson** (con todas las dependencias que utilizan las librerias) y **node_modules** (donde estan las librerias)

- Si necesit desinstalar una libeería: 
```npm un nombre_de_la_libreria``` (**un** de uninstall / desisntalar)

---

#### :star: Libreria is-odd

- Como primera practica vamos a intalar la libreria: [**is-odd**](https://www.npmjs.com/package/is-odd)

Y ahora en mi **package.json** veo:

```JSON
"dependencies": {
  "is-odd": "^3.0.1"
}
```

Y en la web de npm veo la minima información de la librería:

#### Install

Install with npm:

```$ npm install --save is-odd```

#### Usage

**Returns true if the given number is odd, and is an integer that does not exceed the JavaScript MAXIMUM_SAFE_INTEGER.**

Works with strings or numbers.

```JavaScript
const isOdd = require('is-odd');
 
console.log(isOdd('1')); //=> true
console.log(isOdd('3')); //=> true
console.log(isOdd(0)); //=> false
console.log(isOdd(2)); //=> false
```


## :star: Libreria nodemon

```npm i nodemon -D``` con la **D** queda omo dependencia de desarrollo, se usa solo en desarrollo.

Con nodemon no tenemos que cortar la terminal para actualizar los cambios y volverla a correrlo.

- Para ver las librerias instaladas globalmente: ```npm list -D ```

- Toda la información en [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

---

## :star: Libreria Express

Es con la que vamos a estar trabajando . Toda la información en [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)

---

## otras librerias

- React

- Electron ( aplicaciones de escritorio)

- REact Native (aplicaciones mobiles)

---
---

## :star: npm cheatsheet

Se puede ver en [https://devhints.io/npm](https://devhints.io/npm)

---
---


## :star: CLASE 10 * 08/09 *** INTRO NODE.JS *** :star:

### Repaso de clase pasada

- Con **Node.js** podemos correr JavaScript en consola, fuera del navegador, gracias al motor **v8**

- **npm** nos facilita manejar los paquetes, nos permite bajar librerías y poder iniciar proyectos (```npm init``` completando nosotros todo ó ```npm init -y```) y se nos crea el **package.json** (el cual puede modificarse, si comenzamoe el proyecto con npm init -y).

- Con ```npm install nombre_librería``` ò ```npm i nombre_libreria``` para instalarlas. Y para poder usarlas debo requerirlas y guardarlas en constante para usarlas, por ejemplo: ```const isOdd = require('is-odd')````


---

## :star: Modulos * exportar e importar

### Hacemos el primer ejercicio de la guia para tranajar con modulos

- Para poder **exportar** *una  sola función* que luego pueda ser invocada en otro archivo, utilizamos **module.exports**:

```JavaScript
module.exports = function sumar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 + num2;
}
```

Y para poder utilizarlo en otro archivo debo **importarlo** con **required**:

```JavaScript
const sumar = require('./calculadora');
```

- Para poder exportar *más de una función* vamos a **exportar un objeto** la key es el modo con que voy a invocar la funcion que le paso como value.

```JavaScript
module.exports = {
  sumar: sumar,
  restar: restar,
  multiplicar: multiplicar,
  dividir: dividir
}
```

Con ES6 si el key y el value tienen el mismo nombre, se puede poner una sola vez, quedando:
```JavaScript
module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir
}
```

Y para poder utilizarla :
```JavaScript
const {sumar, restar, multiplicar, dividir } = require('./calculadora');
```

O sino las guardo en un objeto, el cual va a tener esas funciones:

```JavaScript
const calc = require('./calculadora');

console.log (calc.sumar(4, 2));
```

- Otro modo es mediante el archivo **package.json** agregamos **"type" : "modules"**:

```JavaScript
{
  "description": "la descripcion",
  "type": "modules"
}
```

Y vamos a ver que el **require** no nos funciona, entonces podemos **importar** de este modo: 
```JavaScript
import calc from './calc/calculadora';
```

Queda igual al import de Python.

Y para **importar**:

```JavaScript
export default = {
  sumar,
  restar,
  multiplicar,
  dividir
}
```

Lo bueo de este modo es que puedo importar más de un solo objeto, por ejemplo:
```JavaScript
export default = {
  sumar,
  restar,
  multiplicar,
  dividir
};

export const hola = 'Hola mucho gusto'
```

Y lo uso:
```JavaScript
import calc, { hola } from './calc/calculadora';
```

Sin los {} va lo que exporto por default.

---

**./** es para buscar en el mismo directorio en el que estoy (en esta carpeta). 

**../** es para ir un directorio hacia atras. 

Si es una **libreria de node_modules** solo la nombro, no tengo que detallar el path.

---

**calculadora**

Crear un **módulo** llamado calculadora donde vamos a tener funciones: sumar, restar, multiplicar, dividir.

Cada función recibe 2 parámetros, tiene que realizar la operación matemática con esos parámetros y retornar el resultado.

El módulo tiene exportar un objeto con estas 4 funciones.

Luego, crear un archivo **app.js**, donde vamos a importar este módulo y utilizar las funciones para mostrar los resultados de distintas operaciones.

Por ejemplo:
```JavaScript
console.log( calc.sumar(4, 2) ); // muestra 6
console.log( calc.restar(4, 2) ); // muestra 2
console.log( calc.multiplicar(4, 2) ); // muestra 8
console.log( calc.dividir(4, 2) ); // muestra 2
```


En mi archivo **calculadora.js**:

```JavaScript
function sumar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 + num2;
}

function restar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 - num2;
}

function multiplicar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  return num1 * num2;
}

function dividir(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return "Error: los parametros deben ser números";
  }
  if(num2 === 0 ) {
    return "Error : no se puede dividir por 0";
  } 
  return num1 / num2;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir
}

```

Y en el app.js:
```JavaScript
const {sumar, restar, multiplicar, dividir } = require('./calculadora');
// const calc = require('./calculadora');

// console.log (calc.sumar(4, 2));
console.log( sumar(4, 2) ); // muestra 6
console.log( restar(4, 2) ); // muestra 2
console.log( multiplicar(4, 2) ); // muestra 8
console.log( dividir(4, 2) ); // muestra 2
```

---

### Script en package.json

- En el **package.json** tenemos **scripts**:

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Y para ejecutarlo en consola: ``` npm run echo``` (npm run nombre_del_script).

- Uno muy usado es:

```
"scripts": {
  "start": "nodemon main.js",
  "dev": "node main.js"
},
```

Asi al ejecutar en consola ``` npm run start``` voy a estar ejecutando el archivo main.js con nodemon y si ejecuto en consola ``` npm run dev```  voy a ejecutar el archivo main.js pero con node (si hago un cambio voy a tener que cerrar la consola y volver a ejecutarla.)



---
---
