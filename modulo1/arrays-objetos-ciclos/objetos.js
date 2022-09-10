/*************************
 1er ejercicio : sobreMi
***************************/
/*
Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: nombre, apellido, edad
Mostrar en consola el objeto sobreMi
*/
console.log('**** Ejercicio 1 ****');

const sobreMi = {
  nombre: 'María Eugenia',
  apellido: 'Costa',
  edad: 38
}

// Muestro todo el objeto 
console.log(sobreMi);
// ARmo una presentacion con los valores del objeto
console.log(`Soy ${sobreMi.nombre} ${sobreMi.apellido} y tengo ${sobreMi.edad} años.`)

/***************************
 2do ejercicio : presentar
*****************************/
/*
-Crear una variable llamada user, a la que le vamos a asignar un objeto.
-El objeto tiene que tener 3 propiedades: fullname, email, age
-Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"
*/
console.log('**** Ejercicio 2 ****');

const user = {
  fullname: 'Maria Eugenia Costa',
  email: 'example@example.com',
  age: 38
}
console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`);
/**************************************
 5to ejercicio : correccion de datos
****************************************/
/*
Tenemos la variable datos que tiene un objeto con los datos de una persona
El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.
*/
console.log('**** Ejercicio 5 ****');

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

/****************************
 11er ejercicio: ganadora 
****************************/
/*
Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6
*/
console.log('**** Ejercicio 11 ****');

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

for(let obj in ganadoras) {
  console.log(`${obj.nombre} gano la Temporada ${obj.temporada}`);
}
