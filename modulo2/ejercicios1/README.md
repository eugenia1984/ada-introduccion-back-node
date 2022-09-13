# :star: Node.js, Módulos , NPM

---

## 1 - Calculadora

Crear un módulo llamado calculadora donde vamos a tener funciones: sumar, restar, multiplicar, dividir.

Cada función recibe 2 parámetros, tiene que realizar la operación matemática con esos parámetros y retornar el resultado.

El módulo tiene exportar un objeto con estas 4 funciones.

Luego, crear un archivo app.js, donde vamos a importar este módulo y utilizar las funciones para mostrar los resultados de distintas operaciones.

Por ejemplo:
```JavaScript
console.log( calc.sumar(4, 2) ); // muestra 6
console.log( calc.restar(4, 2) ); // muestra 2
console.log( calc.multiplicar(4, 2) ); // muestra 8
console.log( calc.dividir(4, 2) ); // muestra 2
```

-> Está en los archicos **app.js** y **calculadora.js**

---

## 2 - Netflix

Vamos a crear un pequeño módulo para gestionar películas de netflix. 

Para esto, vamos a tener dos archivos: netflix.js y db.js.

Dentro de db.js vamos a tener las siguientes funciones:
```JavaScript
agregarPelicula(pelicula)
obtenerPelicula(id)
eliminarPelicula(id)
mostrarPeliculas()
```

También, dentro de db.js, vamos a tener un array de peliculas. Una película está representada por un objeto que tiene 3 propiades: id, nombre y rating.

- Cuando utilicemos la función agregarPelicula, vamos a pasarle como parámetro un objeto con la película que queremos agregar.

- Cuando utilicemos la función obtenerPelicula, vamos a pasarle como parámetro un ID de la película que queremos obtener. Esta función nos debe retornar el objeto de la película que estamos pidiendo.

- Cuando utilicemos la función eliminarPelicula, vamos a pasarle como parámetro un ID de la película que queremos eliminar. Esta función tiene que borrar del array la película que tiene la propiedad ID con el valor que le pasamos por parámetro.

- La función mostrarPeliculas, tiene que mostrar por consola todas las peliculas que tenemos en el array.

-En el archivo netflix.js, vamos a exportar nuestro módulo db y vamos a utilizar las funciones de la siguiente forma:

```JavaScript
db.agregarPelicula({ id: 1, titulo: 'Batman', rating: 10 });
db.agregarPelicula({ id: 2, titulo: 'Superman', rating: 2 });
db.agregarPelicula({ id: 3, titulo: 'Flash', rating: 5 });

db.mostrarPeliculas();
// debería mostrar lo siguiente:
// Batman - 10
// Superman - 2
// Flash - 5

db.eliminarPelicula(2);

db.mostrarPeliculas();
// debería mostrar lo siguiente:
// Batman - 10
// Flash - 5
```

---

## 3 - NPM

Tomemos los dos ejercicios de la clase anterior (la calculadora y el netflix), y armarlos como proyectos de NPM.

Para eso vamos a tener que crear una carpeta por cada proyecto llamadas calculadora y netflix. Dentro, vamos a iniciar el proyecto de NPM como lo vimos anteriormente, agregar el código de la solución y configurar el script start dentro del package.json para que podamos ejecutar los ejercicios utilizando npm run start.

---

## 4 - IDs únicos

Primero, crear un nuevo proyecto con NPM, agregando el script start y un index.js. En el proyecto, instalar el paquete uniqid [https://www.npmjs.com/package/uniqid](https://www.npmjs.com/package/uniqid). Este paquete, cuando se importa, devuelve una función que genera una cadena al azar.

```JavaScript
const uniqid = require('uniqid');
```

Dentro del index, tenemos que crear dos objetos. Cada objeto tiene que tener las propiedades id, nombre, y apellido. El valor de la propiedad id tiene que ser el valor devuelto por la función del paquete instalado. Las propiedades nombre y apellido pueden ser sus nombres y/o el de sus compañeros de clase. 

Finalmente, mostrar ambos objetos por la consola.

---
