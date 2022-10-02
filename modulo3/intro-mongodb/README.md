# :star: INTRO MONGODB

---

## 🏁 Objetivos

- Que puedas instalar MongoDB

- Que entiendas qué es una base de datos no-relacional

- Que puedas hacer tu primera base de datos

---

## 📝 Contenidos

- Instalando MongoDB

- Usando MongoDB de manera local

- Creando una base de datos

- Documentos y colecciones.

- Crear, actualizar, modificar y borrar documentos.

---
---

# :star2: Clase 14 * 22/09

---

## :star: mongoDB

```
             request
CLIENTE   ---------->  SERVIDOR     ---------->  BASE DE 
Browser                Computadora                DATOS
Postman   <----------  Cluster      <----------   (CRUD)
            response
```

-> Hasta ahora la base de datos que usabamos era un array de objetos para almacenar nuestra información, ahora vamos a usar a **MongoDB**

-> Una **Base de datos** es una **coleccion de información** que está pensada y optimizada para poder hacer de una manera eficiente un CRUD (Create Readt Update Delete).


---

## Tipos de base de datos

### SQL 

- Base de datos relacionales

- Se ven tablas con PK, FK

- Ejemplo: MySQL

Hy una tabla, donde cada fila es la información de una persona, en este ejemplo particular:

TABLA USUARIOS:

| id (PK) | Nombre | Apellido | email  | ciudad |
| ------- | ------ | -------- | ------ | ------ |
| 1 | Maria Eugenia | Costa | costamariaeugenia1@gmail.com | San isidro |

### NO-SQL

- Base de datos no relacionales

- Collections (colecciones)

- Ejemplo: mongoDB, FireBase (tambien coleccion de documentos como mongoDB, es como la commpetencia), Cassandra (base de datos en nodos)

La misma información, sería asi:

Coleccion usuarios:

```
{
  "id": 1
 "nombre": "Maria Eugenia",
 "apellido": "Costa",
 "email": "costamariaeugenia1@gmail.com",
 "ciudad": "San Isidro"
}
```

-> es como un JSON. Hay una colección que es ocmo una carpeta con documentos, por eso se dice que **mongoDB es una coleccion de documentos**, pero en realidad por debajo utiliza **BSON** es como un JSON pero pasado a binario, para que sea más rápido.

---

### <img src="https://img.icons8.com/color/40/000000/mongodb.png"/> MongoDB

#### Instalación

1.  Lo bajamos desde [https://www.mongodb.com/try/download/community2](https://www.mongodb.com/try/download/community2)

2. Elegimos **6.0.1** / **windows** / **msi**

3. Vamos a donde se nos descargo y procedemos a instalar: 

``` next > aceptar los terminos > next ```

4. Elegimos el tipo de setup```complete ``` y dejamos todo tal cual viene **>** ``` next``` **>** que tenga el tick en install mongoDB compass **>** ```next ``` **>** Install

- De este modo vamos a tener instalado:

- mongoDB Compass

- mongo el servidor

- mongo shell

#### mongo shell

-> Para tener [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)

**MongoDB Shell** is the quickest way to connect to (and work with) MongoDB. Easily query data, configure settings, and execute other actions with this modern, extensible command-line interface — replete with syntax highlighting, intelligent autocomplete, contextual help, and error messages.

Note: MongoDB Shell is an open source (Apache 2.0), standalone product developed separately from the MongoDB Server.

- Para bajarlo elegimos: ``` version: 1.6.0``` **>** ``` platform: windows 64bit```
 **>** ```package:  zip```

Descomprimimos la carpeta, entramos en **bin** y vemos el **mongosh.exe**

Enotnces vamos a tener:

```disco C > archivos de programa > mongoDB > server > 6.0 ``` y en ```bin``` estan los ejecutables, que se van a ejecutar con power shell desde la terminal.


Entonces ahora voy a la carpeta bin pero de **mongosh**, me copio los dos archivos y los pego en la de **mongodb**

-> Abrimos la **power shell** de windows

-> Vamos a **este equipo** > **propiedades** > **configuracion avanzada del sistema** > **variables de entorno** ahi vamos a modificar la de **Path** con la ruta donde tenemos el bin de mongodb.

-> Volvemos a la power shell y ejecutamos ```nomgod``` lo que nos va a crear una carpeta y un servidor mongodb, crea nuestra base de datos para la computadora. **Este comando se ejecuta una sola vez**

### <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/40/000000/external-terminal-computer-programming-flaticons-flat-flat-icons.png"/> Ejecución de mongosh en terminal


### ```mongosh```

-> Ahora ejecutamos ```mongosh```, poniendo este comando en la terminar power shell es que vamos a poder ejecutar mongodb (antes, solo por primera vez hay que poner **mongpdb** como para que lo instale).

Y por terminal veo:

```
C:\Users\juan>mongosh
Current Mongosh Log ID: 63377bfaf26994f6394cc25e
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
Using MongoDB:          6.0.1
Using Mongosh:          1.6.0
...
...
>test
```

Con mongosh podemos usar mongoDB, lo vemos en **mongodb://127.0.0.1:27017** que nos dice que vamos a usar el puerto **27017**

### ```show databases``` ó ```show bds```

Y como lo ultimo que veo es ```>test``` ahi ya puedo ingresar condigo de mongodb, por ejemplo veo las bases de datos con **show databases** o tambien *show bds**:

```

test> show databases
admin   40.00 KiB
config  60.00 KiB
local   40.00 KiB
test>
```

Son las que vienen por defecto y actualmente estoy en la de test.


### ```help```

-> Con **help** veo que comandos tengo:

```
test> help

Shell Help:

use                             Set current database
show                            'show databases'/'show dbs': Print a list of all available databases.
                                'show collections'/'show tables': Print a list of all collections for current database.
                                'show profile': Prints system.profile information.
                                'show users': Print a list of all users for current database.
                                'show roles': Print a list of all roles for current database.
                                'show log <type>': log for current connection, if type is not set uses 'global'
                                'show logs': Print all logs.

exit                            Quit the MongoDB shell with exit/exit()/.exit
quit                            Quit the MongoDB shell with quit/quit()
Mongo                           Create a new connection and return the Mongo object. Usage: new Mongo(URI, options [optional])
connect                         Create a new connection and return the Database object. Usage: connect(URI, username [optional], password [optional])
  it                             result of the last line evaluated; use to further iterate
  version                        Shell version
  load                           Loads and runs a JavaScript file into the current shell environment
  enableTelemetry                Enables collection of anonymous usage data to improve the mongosh CLI
  disableTelemetry               Disables collection of anonymous usage data to improve the mongosh CLI
  passwordPrompt                 Prompts the user for a password
  sleep                          Sleep for the specified number of milliseconds
  print                          Prints the contents of an object to the output
  printjson                      Alias for print()
  cls                            Clears the screen like console.clear()
  isInteractive                  Returns whether the shell will enter or has entered interactive mode

  For more information on usage: https://docs.mongodb.com/manual/reference/method
```

### ```use dataBaseName```

-> Para **crear una base de datos``` tenemos el comandp: ```use```:

```
use basaDeDatosAda
switched to db basaDeDatosAda
basaDeDatosAda>
```

-> Asi cree la base de datos baseDeDatosAda y ya estoy en la misma

-> Pero hasta que a esta nueva base de datos no le agregue ningun documento, si pongo ```show dbs``` no la voy a ver, debo agregarle un documento o una coleccion. Pero si pongo ```db``` si veo la base de datos en la que estoy.


### ```db```

-> Con **db** veo la base de datos en la que estoy.

-> Y si estando en al base de datos pongo **Db** le digo en esta carpeta.


### ``` db.createCollection("collectionname")```

-> Para crear una coleccion, asi dentro guardaré los documentos.

```db.createCollection("nombre")``` 

-> Ejemplo:

```
basaDeDatosAda> db.createCollection("usuarios")
{ ok: 1 }
```

Y asi tengo mi coleccion creada.

-> Otro modo de crear una collection es con: ```db.name.insert({})```

Por ejemplo: ```db.clientes.insert({})```

Pero... la terminal me da warning de que esta deprecado:

```
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("6339cb4697cb1b7ca4478ab5") }
}
```
### ```show collections```

-> Para ver mis colecciones, como solo tengo la de *usuarios*:

```
basaDeDatosAda> show collections
usuarios
```

-> Como ahora mi basa de datos, ya tiene una coleccion, si listo las bases de datos la voy a poder ver:
```
basaDeDatosAda> show dbs
admin           40.00 KiB
basaDeDatosAda   8.00 KiB
config          96.00 KiB
local           40.00 KiB
```

### ```db.name-collection.drop()```

-> Para borrar una coleccion:

```
basaDeDatosAda> show collections
clientes
usuarios
basaDeDatosAda> db.clientes.drop()
true
basaDeDatosAda> show collections
usuarios
```

### ```db.cropDatabase()```

-> Estando ya en al base de datos que quiero borrar, si pongo  ```db.cropDatabase()``` la borro.

### ```exit``` o ```quit```

-> Son los comandos para salir de mongo db en la power shell.

---

### Volvemos a JS

Teniendo el archivo **mongo.js**:

```JavaScript
// para crear una coleccion de nombre users y como segundo parametro paso el validator
db.createCollection("users", {
  validator: (
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "dni"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        dni: {
          bsonType: "int",
          minimum: 2000000,
          maximum: 99999999,
          description: "must be an int and is required"
        },
      },
    },
  ),
});
```

-> Si es de tipo **int** puedo setearle un valor minumo y maximo.

-> por cada documento que quiera agregar a mi coleccion, me va primero a verificar que cunpla con este validator, puede llegar a ser un objeto con mas pares key-value, pero las que si o si debe tener son name, email y dni, y deben cumplir lo que se pide, es decir las dos primeras ser string y la tercera ser de tipo int, y las tres son required (obligatorias, deben estar).

### ```db.getCollectionInfos() ```

-> para ver el detalle de la collection, si en **options** tengo un objeto vacio es porque puede tener cualquier documento, pero si la hibiera creado con le validator como mostre en mi ejemplo con JS, etnocnes ahi en ve< de estar vacio, tendria todo el detalle.

```
basaDeDatosAda> db.getCollectionInfos()
[
  {
    name: 'users',
    type: 'collection',
    options: {},
    info: {
      readOnly: false,
      uuid: new UUID("5a134e01-7ba9-4db2-8d0c-ff3d154fde81")
    },
    idIndex: { v: 2, key: { _id: 1 }, name: '_id_' }
  }
]
```


https://drive.google.com/file/d/1b288X2Y0xYu_1JG2rX5LW2qck2PlhIKs/view 1.39.59

---
