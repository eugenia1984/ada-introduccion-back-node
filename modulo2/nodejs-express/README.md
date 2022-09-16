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
  res.send('Got a POST request');
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
  res.send('Got a POST request');
});

app.listen(3000, () => {
  console.log('Server started');
});
```

### Códigos de respuestas HTTP

- Para las respuestas tenemos **status code**, los numeros indican cosas, por ejemplo tenemos el **200** que es ok, **404** cuando la URL no existe (not found), etc.

Tenemos...

... 200 : sucess

... 300 : redirections

... 400 : client errors

... 500 : server error

-> De este modo voy a estar devolviendo el codigo 200 de respuesta, avisando que esta todo bien:

```JavaScript
app.get('/', (req,res) => {
  res.status(200).send('Hello World');
});
```

---

-> Cuando buscamos una url en un navegador, por defecto es una petición GET la que se realiza.

Para ver otra url en nuestro local host en **main.js** agregamos:

```JavaSCript
app.get('/peliculas', (req, res) => {
  res.status(200).send({peliculas: ['Pulp Fiction', 'Kill Bill']});
});
```

Y si ahora buscamos : **http://localhost:3000/peliculas**

Como tengo la extension de Chrome de JSON:

```JSON
// 20220915103755
// http://localhost:3000/peliculas
{
  "peliculas": [
    "Pulp Fiction",
    "Kill Bill"
  ]
}
```

Y si inspecciono el navegador y me voy a **Network** veo el status **200**

---


### Ejemplo de un login

- Tengo un formulario en mi web para el login, donde ingreso el usuario y el password.

- Hago una **petición POST** en **/login** hacia el servidor.

- El servidor hace algo y si esta bien el usuario y el login me da de respuesta el codigo **200**.


-> Para ver el HTMl node ya trae la librería **path** y **url** asi que la importo:

```JavaScript
import path from 'path';
import {fileURLToPath } from 'url';
```

Creo constantes:
```JavaScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Me imprimo las constantes para ver que traen:
```JavaScript
console.log(__dirname); // la ruta de la carpeta en la que esta el archivo
console.log(__filename); // la ruta del archivo 
```

Para mostrar la web:
```JavaScript
app.use(express.static(path.join(__dirname, 'public')));
```

**app.use** -> hace que mi aplicación use lo que le paso por parametro

**express.static** -> para mostrar archivos estaticos, para el cual le tengo que pasar la **dirección** por parametro + **/public**. Como depende del S.O. (Linux, Windows, MAC) que usemos la ruta es diferente, de este modo no hay inconvenientes


Al ponerlo en este orden:
```JavaScript
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.status(200).send('Hello World');
});
```

Al poner en el navegador **localhost:3000/** me va redireccionar al login.

Gracias a :
```JavaScript
import path from 'path';
import {fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname); // ruta de la carpeta donde se encuentra el archivo
console.log(__filename); // ruta del archivo

app.use(express.static(path.join(__dirname, 'public')));
```

-> En la carpeta **public** voy a tener todas mis paginas estaticas (html, css y JS), si por ejemplo armo esta estructura:

```
intro-nodejs
  node_modules
  peliculas
    db.js
  public
    home
      index.html
      index.js
      styles.css
    images
      puppy.jpg
  .gitignore
  is-odd.js
  main.js
  netflix.js
  package-lock.json
  package.json
```


http://localhost:3000/home/ -> me muestre el login

http://localhost:3000/images/puppy.jpg -> Me muestra el perrito


-> De este modo desde el **servidor** se envian **archivos estaticos** al **cliente**, puede ser una pagina web, la imagen, etc.


-> Una página con **server side render** deja se der estática.

Y en el **index.html** tengo:
```
<form action="http://localhost:3000/login" method="post">
```

Entonces en el **main.js** puedo modificar, para HACER EL PEDIDO mandado el formulario por un POST:
```JavaScript
app.post('/login', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Login' });
});
```

Asi al completar con e-mail y password veo:
```JSON
{
  "message": "Login"
}
```

Por la respuesta que le puse: **res.status(200).json({ message: 'Login' });**

En la practica entre medio esa información que el usuario ingreso en el input se guarda en la base de datos, y luego el servidor manda la respuesta.

Con el **req.body** se pueden hacer cosas con esos datos, por ejemplo validar qeu la clave sea la correcta, ver si el usuario existe, etc.

-> **Express** por si solo no puede leer **JSON**, entonces antes agregamos:
```JavaScript
app.use(express.json()); // para poder recibir datos en formato json
```

Y también, para que interprete el **formulario**: 
```JavaScript
app.use(express.urlencoded({ extended: false })); // para poder recibir datos de formularios
```

Ahora por consola veo el objeto con la key "usuario" y el e-mail, y la key "password" con el password.

---

### ¿ Como es una peticion ?


```
POST               /login

 |---------------------|
 | BODY                |          
 |                     |
 | {                   |
 |   usuario: a@a.com  |
 |   pass: "123"       |
 | }                   |
 |---------------------|

```

Tengo el verbo **POST** (para aclarar que petición hago) + **la ruta** (/login) y el **BODY** que puede estar vacío, si tiene información es la que va al servidor.

La petición HTTP tiene mucha más información. Si la quiero ver:

```JavaScript
app.post('/login', (peticionDelCliente, res) => {
  console.log(peticionDelCliente);
  console.log('Guarda la información en la base de datos')
  res.status(200).json({ message: 'Login' });
});
```


---

### Libreria : Morgan

Me muestra por consola las peticiones que me hace

```JavaScript
import morgan from 'morgan';

app.use(morgan('dev')); // para ver las peticiones que se hacen en la consola

app.get('/peliculas', (req, res) => {
  db.obtenerPelicula();
  res.status(200).json({ message: 'Peliculas' });
});

app.put('/modificarPeliculas', (req, res) => {
  res.status(200).json({ message: 'Modificar Peliculas' });
});
```

---

```
Cliente --> req - request - peticion  -->  Servidor
        <-- res - response - respuesta <-- 
```

El cliente puede ser: navegador, tablet, celular, computadora, Postman

El servidor puede ser: Server, BackEnd con Express

---
---

# :star: Clase 12 - 15/09

---
### :star: POSTMAN

Nos permite  hacer peticiones a nuestro back end 
  
https://www.postman.com/ se puede usar desde el navegador haceindose una cuenta

O se baja y se instala

-> NEW COLLECTION - la nombramos

-> NEW REQUEST - creamos la peticion (GET / POST / ...)

---

###  Desestructurar (Destructuring)

```JavaScript
const pelicula = {
  "titulo" : "Batman",
  "rating" : 10
}

let { titulo, rating } = pelicula;
```

Creo nuevas variables en base a atributos de un objeto.

Asi puedo desestructurar la req.body para usar en variables:

```JavaScript
// Recibo informacion por un JSON
app.post('/netflix', (req, res) => {
  let { titulo, rating } = req.body;
  console.log('Esto es el titulo: ' + titulo);
  console.log('Esto es el rating: ' + rating);
  res.json({ message: 'Pelicula agregada' });
});
```

-> Para cuando necesito que los datos no se vean en el navegador, por ejemplo al procesar un pago

---

### Recibir informacion por params (/:param)

```JavaScript
app.get('/netflix/:id', (req, res) => {
  const { id } = req.params; // leo, guardo y desestructuro el param
  console.log(id);
  res.json({ message: 'Id obtenido' });
});
```

-> Para cuando solo necesito mandar un solo dato

---

### Recibir informacion por query (? &)

localhost:3000/watch?v=123

```JavaScript
app.get('/watch', (req, res) => {
  const { v } = req.query; // guardo la variable del query
  console.log(id);
  res.json({ informacionVIdeo: 'video.pm4' });
});
```
-> Para cuando necesito pasar mas de un parametro, ya que los separo con el &

---

### Para manejar el error 404 o te escriben mal la URL

```JavaScript
// cualquier peticion que todavia no detalle
app.get('/*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});
```

---
---

