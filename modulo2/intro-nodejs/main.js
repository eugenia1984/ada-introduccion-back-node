const isOdd = require('is-odd'); // importo la libreria y la guardo en la constante
// import is-odd from is-odd -> otro modo de importar la libreria

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filtro los numeros pares
arr = arr.filter( (value) => value % 2 === 0);
console.log(arr);

// aca uso la libreria is-odd
console.log(isOdd('1')); // true
console.log(isOdd(1)); // true
console.log(isOdd('2')); // false
console.log(isOdd(2)); // false