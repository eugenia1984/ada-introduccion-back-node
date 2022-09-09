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

### npm

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

## Correr Javacript fuera dle navegador

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
---