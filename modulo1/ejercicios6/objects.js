/*************************
 1º ejercicio : sobreMi
**************************/
/*
Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: nombre, apellido, edad
Mostrar en consola el objeto sobreMi
*/
const sobreMi = {
  nombre: 'María Eugenia',
  apellido: 'Costa',
  edad: 38
}

// Muestro todo el objeto 
console.log(sobreMi);
// ARmo una presentacion con los valores del objeto
console.log(`Soy ${sobreMi.nombre} ${sobreMi.apellido} y tengo ${sobreMi.edad} años.`)

/**************************
 2do ejercicio : presentar
***************************/
/*
-Crear una variable llamada user, a la que le vamos a asignar un objeto.
-El objeto tiene que tener 3 propiedades: fullname, email, age
-Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y ;tengo [ACA LA EDAD] años"
*/
const user = {
  fullname: 'Maria Eugenia Costa',
  email: 'example@example.com',
  age: 38
}

console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`);

/*************************
 3ro ejercicio : cancion
**************************/
/*
Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song.
El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)
*/
const song = {
  title: 'Rock and Roll',
  bandName: 'Led Zeppelin',
  duration: 166000,
  album: 'Led Zeppelin IV',
};
// me copio el objeto songs ya que es muy parecido
const cancion = song;
// le modifico la duracion a segundos
cancion.duration = song.duration / 1000;

console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }

/********************************
 4to ejercicio : base de datos
*********************************/
/*
Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados

DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
1,ada@gmail.com,Ada Lovelace,1234567890
2,grace@hotmail.com,Grace Hopper,0987654321
3,hedy@gmail.com,Hedy Lamarr,6789054321
4,radia@yahoo.com,Radia Perlman,1234509876
5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
var example = {
  id: 0,
  nombre: "Ejemplo",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
}
*/
// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron
const ada = {
  id: 1,
  nombre: "Ada Lovelace",
  email: "ada@gmail.com",
  telefono: 1234567890
}
const grace = {
  id: 2,
  nombre: "Grace Hopper",
  email: "grace@hotmail.com",
  telefono: 0987654321
}
const hedy = {
  id: 3,
  nombre: "Hedy Lamarr",
  email: "hedy@gmail.com",
  telefono: 6789054321
}
const radia = {
  id: 4,
  nombre: "Radia Perlma",
  email: "radia@yahoo.com",
  telefono: 1234509876
}
const sheryl = {
  id: 5,
  nombre: "Sheryl Sandberg",
  email: "Sheryl@facebook.com",
  telefono: 5432167890
}
// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS
// 1. El nombre de Ada:
console.log(`El nombre completo de Ada es: ${ada.nombre}`);
// 2. El ID de Grace
console.log(`El ID de Grace es: ${grace.id}`);
// 3. El email de Hedy
console.log(`El e-mail de Hedy es: ${hedy.email}`);
// 4. El ID y nombre de Radia
console.log(`EL ID de Radia es: ${radia.id} y su nombre completo es: ${radia.nombre}`);
// 5. El telefono de Sheryl
console.log(`El telefono de Sheryl es: ${sheryl.telefono}`);

/************************************
 5to ejercicio : correccion de datos
*************************************/
/*
Tenemos la variable datos que tiene un objeto con los datos de una persona
El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.
*/
const datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: '29',
  programa: true
}
// modifico los datos
datos.telefono = '0192837465';
datos.edad = 29;
// finalmente, mostramos los datos
console.log(datos);
// otro modo de mostrarlos
for(let key in datos) {
  console.log(`La llave es: ${key}, su valor: ${datos[key]}`);
}

/*********************************
 6º ejercicio: lenguaje favorito
*********************************/
/*
Tenemos la variable datos con un objeto que guarda datos de personas
Tenemos que programar la siguiente lógica
SI la propiedad programa es true
Agregá la propiedad lenguajeFavorito, y asignale "Javascript"
*/
const datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true,
};

if(datos.programa === true) {
  datos.lenguajeFavorito = "Javascript";
}
// finalmente, mostramos los datos
console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,

/***********************************
 7º ejercicio: lenguaje favorito 2
***********************************/
/*
Tenemos la variable datos con un objeto que guarda datos de una persona
Tenemos que programar la siguiente lógica:
- SI la propiedad programa es true
-> Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
- Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"
*/
const datos2 = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true,
};
// codea aca la solucion
if(datos2.programa === true) {
  datos2.lenguajesFavoritos = ["Javascript", "Java"];
}

// aca mostrar la frase
console.log(
  `Hola, mi nombre es ${datos2.nombre} ${datos2.apellido} y programo en ${datos2.lenguajesFavoritos[0]}, ${datos2.lenguajesFavoritos[1]}`
);
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"

/**********************
 8º ejercicio: disco
***********************/
/*
Tenemos la variable disco con un objeto que guarda datos de un album musical
- Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
- Completá el código para lograr el resultado esperado
*/
const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

// codea aca la solucion
let nombreDisco = disco.nombre;
let anioDisco = disco.anioLanzamiento;
let nombreBanda = disco.nombre;

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

/*************************
 9º ejercicio: skills
***************************/
/*
Tenemos la variable user, que es un objeto con datos de una persona en linkedin
En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona .Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills
*/
const user1 = {
  id: 123456789,
  name: 'Ada Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS'],
};

// codea aca la solucion
user1.skills.push('Javascript');

console.log(user1);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }

/*********************************
 10º ejercicio : playlist
*********************************/
/*
Creá un objeto donde vamos a guardar información sobre una playlist de spotify
El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:
Lista de Nirvana
Privada: Si
Canciones:
Smells Like Teen Spirit
In Bloom
Come As You Are
Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la prop
*/
const listaSpotify = {
  nombre : "Lista de Nirvana",
  privada : true,
  canciones : [ 'Smells Like Teen Spirit', 'In Bloom','Come As You Are' ]
}

let esPrivada = (listaSpotify.privada === true)?"Si":"No";
console.log(listaSpotify.nombre);
console.log("Privada: ", esPrivada);
console.log("Canciones: ");
for (let i = 0; i < 3; i++) {
  console.log(listaSpotify.canciones[i]);
}  

/*********************************
 11º ejercicio: ganadora
*********************************/
/*
Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6
*/
const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg',
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg',
  },
  {
    nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg',
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg',
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg',
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg',
  },
];

for(let obj of ganadoras) {
  console.log(`${obj.nombre} gano la Temporada ${obj.temporada}`);
}
///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6

/*************************************
 12º ejercicio de la guia: canciones
**************************************/
/*
Tenemos un array de objetos, que representa un listado de bandas
Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
Mostrar en consola cada banda del array, con la siguiente lógica:
Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"
*/

const bandas = [
  { id: 1, nombre: 'Nirvana', fundacion: 1987, activa: false },
  { id: 2, nombre: 'Foo Fighters', fundacion: 1994, activa: true },
  { id: 3, nombre: 'Led Zeppelin', fundacion: 1967, activa: false },
  { id: 3, nombre: 'Queens of the Stone Age', fundacion: 1997, activa: true },
  { id: 3, nombre: 'Pearl Jam', fundacion: 1990, activa: true },
];

for(let obj of bandas) {
  if(obj.activa === true) {
    console.log(` ${obj.nombre} está activa desde el año ${obj.fundacion}`)
  } else {
    console.log(`${obj.nombre} no está activa`)
  }
}