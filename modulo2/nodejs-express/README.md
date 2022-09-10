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

En este módulo vamos a hacer un **servidor** con **Express**.

### ¿ Qué es un serviidor?


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
---