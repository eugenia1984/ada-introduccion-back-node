# :star: Express - CRUD

---

## 馃弫 Objetivos

- HTTP GET, POST, PUT, DELETE

- Par谩metros y cuerpo del mensaje

- Entender el concepto de bodyParser y Middleware en Express

---

## 馃摑 Contenidos

- M茅todos HTTP con Express

- Ruteo

- URL params

- Creaci贸n de un endpoint GET para obtener un array de datos JSON

- Comprender el uso del cuerpo en un mensaje HTTP. Instalaci贸n de bodyParser

- Creaci贸n de un endpoint POST para agregar elementos en el array

- Par谩metros en los endpoints de la API

- Creaci贸n de un endpoint DELETE para eliminar elementos en el array

- Creaci贸n de un endpoint PUT para editar elementos del array

- Comprender la diferencia entre PUT y POST

- Ejercicio pr谩ctico sobre creaci贸n de APIs

---

## 馃摎 Material de lectura

[Node - Qu茅 es un Servidor](https://github.com/Ada-IT/bootcamp-frontend/tree/master/04_node#servidor-web)

[Qu茅 es express](https://github.com/Ada-IT/bootcamp-frontend/tree/master/04_node#express)

[Expressjs | Nodejs Framework para Principiantes (Fazt)](https://www.youtube.com/watch?v=794Q71KVw1k)

[Nodejs Curso Desde Cero, para principiantes]https://www.youtube.com/watch?v=BhvLIzVL8_o()

---
---

# :star: Clase 12 - 15/09

###  Cuando tenemos muchas rutas se pasan a archivos

Nos creamos la carpeta routes y adentro el netflix.routes.js

---
---


# :star: Clase 13 - 20/09

## Para mostrar un JSON

-> Me creo un archivo nuevo que es **gatitos.js** el cual guardara mi JSON con los gatitos:

```JavaScript
export default {...}
```

-> Adentro voy a tener todo el JSON.

-Z Me lo importo para usar el JSON con solo el nombre de la constante y no tener todo el JSON metido en el app.get(), asi me queda un codigo m谩s limpio.


```JavaScript
import gatitos from './gatitos.js'

app.get('/fotosGatitos', (req, res) => {
  // con esto devuevlo un JSON me falta ver como devolver el header
  res.status(200).json(gatitos);
});
```

-> Ahora vamos a intentar tambien mostrar las imagenes de los gatitos recorriendo el JSON. Entonces en mi carpeta**public** voy a tener un archivo JavaScript que haga un fetch a la ruta que mustra el JSON.

Con un **fetch** estoy haciendo como un **GET** y con los **then** lo paso a un JSON y luego agarro el objeto imagenes

```JavaScript
const w = window;
const d = document;

w
  .fetch("htpp://localhost:3030/fotosGatitos")
  .then((respuesta) => respuesta.json())
  .then((objetoImagenes) => {
    console.log(objetoImagenes.big); // array de imagenes

    // recorremos el array de imagenes y mostramos cada una
    objetoImagenes.big.array.forEach(imagen => {
      const img = d.createElement("img"); // creo una etiqueta imagen 
      img.src = imagen;
      d.body.appendChild(img);
    });
  });
```

-> Es un ejemplo de como una web le hace un request al servidor, el que le devuelve un JSON y con el mismo muestra las imagenes.

---

## Control de acceso HTTP (CORS)


Especificamos que queremos recibir las peticiones de un solo cliente, asi no respondemos a las peticiones de otro lado

-> Se instala como todas las librer铆as: ``` npm install cors```

-> Para usarla se importa:
```JavaScript
import cors from "cors";
```

-> Y se utiliza, para que sea publica, es decir acepta peticiones de cualquier pagina:
```JavaScript
app.use(cors());
```

-> O le restrinjo el acceso solo a uno creando un objeto:
```JavaScript
app.use(cors({ origin: "http://localhost:3030" }));
```

---

# :star: MIDDELWARES (funciones intermedias)

## Para recibir JSON y Formularios

```JavaScript
app.use(express.json()); // para poder recibir datos en formato json
app.use(express.urlencoded({ extended: false })); // para poder recibir datos de formularios
```

-> Son**middlewares**, funciones intermedias

---

-> Siempre voy a tener **app.use(cors())**, **app.use(express.json())** y **app.use(express.urlencoded({ extended: false }));** antes de que detalle las rutas.

Son funciones que se ejecutan entre la **petici莽on** (req) y la **respuesta** (res).

---

## Vamos a crear un mini Morgan para entender a los middlewares

En mi proyecto **intro-node** me creo una nueva carpeta **middlewares** y le agrego el archivo **morgan2.js**

```JavaScript
export default function morgan2(peticiones, respuesta, next) {
  console.log(`Peticion ${peticiones.method} a ${peticiones.url}`);
  next();
}
```

El **.method** me muestra que verbo usaron el la peticion y el **.url** me muestra la URL.

Entonces en consola muestro al peticion y la URL de la petici贸n.

-> **next** quiere decir que va a ejecutar todo y luego pasa a lo sigueinte que debe hacer, sino se queda trabado en la petici贸n, como es una funci贸n intermedia no responde, con este next cerramos el pedido.

-> Me lo importo en mi main.js:
```JavaScript
import morgan2 from "./middleware/morgan2";
```

Para poder usarlo:

```JavaScript
app.use(morgan2);
```


---

## Vemos el ejemplo de un LOGIN

```JavaScript
app.post("/login", (peticion, respuesta) => {
  const { usuario, contrase帽a } = peticion.body;
  console.log(`Usuario ${usuario}, contrase帽a ${contrase帽a}`);
  respuesta.status(200).json({ mensaje: "ok" });
})
```

En el **request** voy a tener el json que me envien

Entonces en POSTMAN puedo hacer:

```http://localhost:3000/login```

Y le puedo hacer un JSON con el usuario y la contrase帽a:

```JSON
{
  "usuario": "Euge",
  "contrase帽a": "123"
}
```

-> Se lo enviamos al Back End

-> Ahora en el medio puedo hacer un **middelware**

```JavaScript
app.post("/login", 
(peticion, respuesta, next) => {
  const { usuario, contrase帽a } = peticion.body;
  if(typeOf usuario === "string" && typeOf contrase帽a === "string" &&
    usuario.length >= 3 && contrase帽a.lenght >= 8) {
    next();
  } 
  respuesta.status(400).json({ error: "Usuario o contrase帽a incorrecto"})
}, 
(peticion, respuesta) => {
  const { usuario, contrase帽a } = peticion.body;
  console.log(`Usuario ${usuario}, contrase帽a ${contrase帽a}`);
  respuesta.status(200).json({ mensaje: "ok" });
})
```

-> Asi compruebo que tanto el usuario como la contrase帽a son Strings y si el usaurio tiene al menos 3 caracteres y la contrase帽a tiene al menos 8 entonces ejecuta el **next()** y para a la parte de peticion y respuesta; sino va a la respuesta con status 400 que muestra el error.

---

### HEADERS

Cuando hacemos una **peticion** tenemos el m茅todo, por ejemplo **POST** y  la **URL**.

La **respuesta** tiene dos partes:

- **header**:

-content-type: aplication/json

-POST

-URL

-User-Agent: Crhome, te dice quien lo esta ejecutando

- **body**: seria el JSON

---

## VARIABLES DE ENTORNO (dotenv)


Se usan para guardar informaci贸n sensible, ya que lo vamos a subir al repositorio en GitHUb, entones por ejemplo los usuarios y claves o los accesos a las bases de datos los debo guardar en variables de entorno.

-> Vamos a necesitar tener la libreria **dotenv**

En mi raiz voy a tener el archiv **.env** donde voy a guardar mis variables de entorno, son globales, voy a poder acceder desde todos lados:

.env:
```JavaScript
PORT=4000
``` 

-> Para que no se suban a github y las vean debo agregarlas al **.gitignore**
```
# dependencies
/node_modules
# variables de entorno
.env
```


-> Primero instalo la libreria: ```npm install dotenv```

-> Lo veo en el **package.json:

```
 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "is-odd": "^3.0.1",
    "morgan": "^1.10.0",
    "uniqid": "^5.4.0"
  },
  ```

-> En mi **main.js** lo importo:

```JavaScript
import dotenv from "dotenv";

dotenv.config();
```

-> Y con **dotenv.config()** le digo que me lo va a poder ejecutar.

```JavaScript
app.listen(process.env.PORT, () => {
  console.log('Server started');
});
```

-> De este modo no se va a ver que puerto estoy usando

-> Otro uso, por ejemplo en muchos archivos necesito:

```JavaScript
import dotenv from "dotenv";
dotenv.config();
```

1. Creo la carpeta **config**

2. Dentro el **index.js**, donde voy a hacer toda la configuracion de cosas globales:

```JavaScript
import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  host: process.env.HOST || "localhost",
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "ecommmerce",
  dbPort: process.env.DB_PORT || 3306
}
```

De este modo voy a decir que utilice el puerto que tengo guardado como variable global, y si no tengo un puerto guardado (es falsy o undefined) que use por defecto el 3000

3. En **main.js:

```JavaScript
// Lo guardo en config
//import dotenv from "dotenv";
//dotenv.config();
import config from "./config/index.js";

// app.listen(process.env.PORT, () => {
//  console.log('Server started');
//});
app.listen(config.port, () => {
  console.log(`Server started at port: ${config.port}`);
});
```

Y por consola veo: ```Server started at port: 3000```

---

---

## Hacemos el ejercicio 3 de USERS


- Nos pidieron crear una peque帽a API para gestionar un listado de usuarios

- Los endpoints que debe permitir son:

-**GET/users**: Retorna un array de personas guardadas en el servidor

-**POST/users**: Crea un nuevo registro en el servidor. Si la operaci贸n termin贸 satisfactoriamente, devuelve el nuevo registro creado.

-**PUT/users/:id**: Modifica los datos del usuario. El par谩metro :id es la propiedad id del registro que queremos modificar.

-**DELETE/users/:id**: Elimina un registro de la base de datos. El par谩metro :id es la propiedad id del registro que queremos eliminar.

- Los datos que nos pidieron almacenar de cada persona son:
```
Nombre
Email
Direcci贸n
Tel茅fono
```

-> Lo pueden ver en: **modulo2** / **ejercicios3** / **users**


1. Tenemos **router/ users.router.js**

```JavaScript
import express from 'express';

const router = express.Router(); // creamos el router con express y que queden en esta ruta

import {
  agregarUsuario,
  obtenerUsuarios,
  eliminarUsuarios,
  editarUsuarios,
} from '../controller/users.controller.js';

// todas las rutas
router.get('/', obtenerUsuarios);
router.post('/', agregarUsuario);
router.delete('/:id', eliminarUsuarios);
router.put('/:id', editarUsuarios);

export default router;
```


2. La base de datos esta en: **dbUsuarios.js**:


---
---