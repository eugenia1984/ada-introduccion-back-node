/**************************************
 Primer ejercicio de la guia: sobreMi
**************************************/
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

/*****************************************
 Segundo ejercicio de la guia: presentar
******************************************/
/*
-Crear una variable llamada user, a la que le vamos a asignar un objeto.
-El objeto tiene que tener 3 propiedades: fullname, email, age
-Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"
*/
const user = {
  fullname: 'Maria Eugenia Costa',
  email: 'example@example.com',
  age: 38
}
console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`);