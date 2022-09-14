# :star: Node.js Express

---

## 🏁 Objetivos

- Que puedas crear tus primeras aplicaciones con Node.js

- Que aprendas a utilizar Express

- Que aprendas a utilizar Postman

---

## 📝 Contenidos

### Node

- Introducción a backend. Como funciona la web.

- Qué es Express. Cómo se instala.

- Qué es Postman.

- Qué es una API.

---

## 📚 Material de lectura

[Que es un cervidor](https://github.com/Ada-IT/bootcamp-frontend/tree/master/04_node#servidor-web)

[Que es express](https://github.com/Ada-IT/bootcamp-frontend/tree/master/04_node#express)

[Expressjs | Nodejs Framework para Principiantes](https://www.youtube.com/watch?v=794Q71KVw1k)

[Nodejs Curso Desde Cero, para principiantes](https://www.youtube.com/watch?v=BhvLIzVL8_o)

---
---

## :star: CLASE 10 * 08/09 *** INTRO NODE.JS *** :star:


## :star: Servidor

En este módulo vamos a hacer un **servidor** con **Express** usando el proyecto npm [**intro-nodejs**](https://github.com/eugenia1984/ada-introduccion-back-node/tree/main/modulo2/intro-nodejs) que ya tengo en este modulo creado.

### ¿ Qué es un servidor?


Un conjunto de computadoras capaces de recibir la petición de un cliente y devolver una respuesta en concrdancia.

```
  CLIENTE    -->  peticion -->     SERVIDOR    -->  BASE
 (navegador) <-- respuesta <--   (computadora) <-- DE DATOS
(aplicacion)                       (cluster)
------------                     -------------
 FRONT END                          BACK END
```


Los servidores van a recibir un **JSON**:

```
{
  "email": "ejemplo@ejemplo.com",
  "password": 123
}
```

Empiezan y terminan con {}, tienen key (que va siempre entre " ") y value, cada par de key-value se separa entre **,**, salvo entre el último que no lleva.

Antes para poder enviar información se utilizaba **XML** es un lenguaje de etiqueta, similar a HTML, pero actualmente se utiliza **JSON** que es más ligero.

---

## :star: Express

En el proyecto lo instalamos con : ```npm install express```ó ```npm i express```


En el **package.json** LO VEO EN DEPENDENCIAS:
```JSON
  "dependencies": {
    "express": "^4.18.1",
    "is-odd": "^3.0.1"
  },
```

Y también tengo que tener:
```JSON
  "type": "module",
```

Para poder importar con **import** en vez de **required**.

Y en el **main.js** importo la librería **expres**:

```JavaScript
import express from 'express'; // importamos la libreria express
const app = express(); // creamos una instancia de express

// peticion en la tura principal (/)
app.get('/', (req,res) => { 
  res.send('Hello world')
});

app.listen(3000, () => {
  console.log('Server started');
});
```

- De este modo vamos a poder crear un servidor para el BackEnd.

- Cuando hacen una peticion **GET** en la ruta principal **'/'** la respuesta (**res**) será el mensaje 'Hello world'.

- **req** required, que me piden, **res** es la response(respuesta).

- voy a escuchar en el puerto **3000**, y una vez que se conecta va a ejecutar la arrow function que va a tenr el console.log.

- Si corro mi archivo ```node main.js``` , por consola veo: ```Server started``` es decir mi console.log y si en un navegador voy a **http://localhost:3000/** voy a ver el Hello world

- Como ahora ya tengo corriendo mi servidor no voy a poder usar la consola, salvo que lo pare con ***ctrl+c**

- Si quiero que en vez de un **String** mi servidor responda con un **JSON**:

```JavaScript
import express from 'express'; // importamos la libreria express
const app = express(); // creamos una instancia de express

app.get('/', (req,res) => {
  // para responder con un JSON
  res.json({message: 'Esto es un JSON'});
});

app.listen(3000, () => {
  console.log('Server started');
});
```
Prettier lo transforma, pero lo podria poner tal cual un JSON:
```JavaScript
res.json({"message": "Esto es un JSON"});
```

Y en el localhost:3000 veo, por consola:

```
[JSONViewer] Your json was stored into 'window.json', enjoy!
content.js:214 JSON Formatter: Type "json" to inspect.
```

Y en el navegador:
```
// 20220910190502
// http://localhost:3000/
{
  "message": "Esto es un JSON"
}
```

-> Bajandonos la extension de Chrome **JSON Formatter** se puede ver así.


---

## :star: API

Tenemos la [pokeapi.co](https://pokeapi.co/) que tiene JSONs y acorde a la consulta que le hacemos es la información que me trae.

Por detrás es un servidor al cual haciendole la peticion nos devuelve el JSON con los pokemones.

---
---

## :star: CLASE 11 * 12/09 *** INTRO NODE.JS *** :star:

---
### Hacemos el ejercicio de Netflix de la guia de ejercicios 1 

Y también lo pasamos a un proyecto NPM y personalizamos el script.

### Reveemos la estructura de los JSON

- van entre {}

- tiene par key : value, que llevan entre medio **:**.

- las key van entre "" (a diferencia de los objetos)

- los value pueden ser: String, Number, boolean, arrays, objetos.

- cada key - value va separado entre comas, salvo el ultimo que no lleva.


### Cliente - Servidor

El cliente puede mandar un JSOn al servidor, el cual va a su base de datos y guarda al información recibida dle JSON en su base de datos. Luego el servidor responde.

El servidor puede enviar y recibir JSON.

Cada computadora es un **servidor**, y tiene muchos **puertos** por lo que puede recibir peticiones distintas.

Asi los servidores gratuitos nos dan gratis un puesto para poder hacer las peticiones y ver las web que creamos.

### :star: Métodos de peticiones HTTP

Sigue el modelo de cliente - servidor y establece las conexiones en las peticiones.

Se estandarizan los **métodos de petición**.

- **GET**: solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos. -> Pide datos (READ)

- **POST**: se utiliza para enviar una entidad a un recurso específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor. -> Crea datos (CREATE)

- **PUT**: reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición. -> Modifica datos (UPDATE)

- **DELETE**: borra un recurso en específico. -> Borra datos (DELETE)

Con estos 4 hacemos el CRUD ( CREATE / READ / UPDATE / DELETE)

- **HEAD** , **CONNECT**, etc.


-> Tenemos el ejemplo del servidor en [**intro-nodejs**](https://github.com/eugenia1984/ada-introduccion-back-node/tree/main/modulo2/intro-nodejs/index.js) con:

GET:
```JavaScript
app.get('/', (req,res) => {...}
```

POST:
```JavaScript
app.post('/', (req, res) => {
  res.send('Got a PoOST request');
});
```

### Creamos el servidor:

```JavaScript
import express from 'express'; // importamos la libreria express
const app = express(); // creamos una instancia de express

app.get('/', (req,res) => {
  // para responder con un string
  //res.send('Hello world')
  // para responder con un JSON
  res.json({message: 'Esto es un JSON'});
});

app.post('/', (req, res) => {
  res.send('Got a PoOST request');
});

app.listen(3000, () => {
  console.log('Server started');
});
```

---


---
---
