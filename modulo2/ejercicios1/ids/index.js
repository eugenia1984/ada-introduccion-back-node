import uniqid from 'uniqid';

const euge = {
  id: uniqid(),
  nombre: "Maria Eugenia",
  apellido: "Costa"
}

const juan = {
  id: uniqid(),
  nombre: "Juan Pablo",
  apellido: "Rodriguez"
}
// Creo una funcion para imprmir los objetos con sus key - value
function imprimir(obj) {
  console.log(`El objeto : { id: ${obj.id}, nombre: ${obj.nombre}, appelido: ${obj.apellido} }`);
}

imprimir(euge);
imprimir(juan);