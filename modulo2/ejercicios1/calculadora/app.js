import calc from './calculadora.js';

console.log( calc.sumar(4, 2) ); // muestra 6
console.log( calc.restar(4, 2) ); // muestra 2
console.log( calc.multiplicar(4, 2) ); // muestra 8
console.log( calc.dividir(4, 2) ); // muestra 2

/*
Si lo tengo exportado asi:
module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir
}

Tengo dos formas de utilizarlo:

Forma 1:

const {sumar, restar, multiplicar, dividir } = require('./calculadora');

console.log( sumar(4, 2) ); // muestra 6
console.log( restar(4, 2) ); // muestra 2
console.log( multiplicar(4, 2) ); // muestra 8
console.log( dividir(4, 2) ); // muestra 2

Forma 2:
const calc = require('./calculadora');

console.log (calc.sumar(4, 2));
*/