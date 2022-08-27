let texto = 'hola'.toUpperCase(); // 'HOLA'
texto.toLowerCase(); // 'hola'
console.log(texto.concat(' como estas?')); // 'hola como estas?'
console.log(texto.startsWith('H')); // false
console.log(texto.endsWith('estas?')); // true
console.log(texto.indexOf('como')); // 6
console.log('Ian'.repeat(3)); //'IanIanIan'
console.log('hola hola'.replaceAll('h', 'H')); // 'Hola Hola'
console.log('hola'.length); // 4
console.log('  hola  '.trim()); // 'hola'
console.log('20:11'.slice(0,2)); // '20'
console.log('hola'.includes('h')); // true

// Funcion para valir la hora donde incorporamos todo lo visto
function esHoraValida(str) {
  let horas = Number(str.slice(0,2));
  let minutos = Number(str.slice(3));
  let esHoraValida = ( (horas>=0 && horas <= 23) && (minutos>=0 && minutos<=60))?true:false;
  return esHoraValida;
}

esHoraValida('12:23'); // true
esHoraValida('00:00'); // true
esHoraValida('26:10'); // false
esHoraValida('12:63'); // false

// Rehacemos le ejercicio de ver si la lera es una consonante utilizando los metodos de los strings
function esConsonante(letra) {
  let consonantes= 'bcdfghjklmnñpqrstvwxyz';
  return (consonantes.includes(letra.toLowerCase()));
}

esConsonante('b'); //true