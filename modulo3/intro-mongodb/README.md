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