# :star: MODULO 1 : VARIABLES, DATOS, OPERADORES, CONDICIONALES

---

## 馃弫 OBJETIVOS

- Que te introduzcas a JavaScript y te familiarices con su sintaxis

- Que conozcas los tipos de datos primitivos que existen en JavaScript

- Que puedas realizar operaciones b谩sicas entre datos

- Que puedas utilizar la consola para inspeccionar valores

- Que comprendas el concepto de flujo de ejecuci贸n

- Que te introduzcas a los condicionales y entiendas su funcionamiento y usos

- Que puedas comparar valores y realizar operaciones con base en ello

---

## 馃摑 CONTENIDOS

### Variables

```
C贸mo se guarda una variable en memoria
Entorno de ejecuci贸n de un programa
Nombres de variables, por qu茅 es importante y buenas pr谩cticas
Palabras reservadas. Est谩ndares de nomenclatura, qu茅 son y para qu茅 se usan
camelCase, UPPER_SNAKE_CASE y otros est谩ndares
Hoisting
Diferencias entre var, let y const
Cu谩ndo usar cada una
Declaraci贸n y asignaci贸n
Declaraci贸n m煤ltiple
```

---
---
## :star: TEMAS

### Datos Primitivos
```
Qu茅 es un dato
Valores primitivos: strings, numbers
Valores nulos: null, undefined
Comillas dobles y simples
Template strings
Coerci贸n de tipos
M茅todos built-in (String, Number, Boolean)
```

### Operadores
```
Operadores aritm茅ticos
Operadores de asignaci贸n
Operador de concatenaci贸n
Sentencias y expresiones, diferencias
```

### Comparaciones y valores verdad
```
Booleanos
Operadores relacionales
Operadores de igualdad
Igualdad estricta y no estricta
Valores verdaderos y falsos
```

### Condicionales
```
if
else
```

### Operadores l贸gicos
```
&&
||
!
```

### Operador de agrupamiento
```
Orden de evaluaci贸n
```

### Condicionales
```
else if
```

### Herramientas de desarrollo
```
La consola
Ejecutando instrucciones en la consola
console.log
```

---
---

# :star: CLASE 01 * MARTES 9 DE AGOSTO

## typeof

Para saber el tipo de dato que tengo en la variable, por ejemplo:

```
let numero = 10;
console.log(typepf(numero)); //Number
```


##  Programaci贸n

La programaci贸n es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como utilizar alg煤n tipo de tarea.



### 驴Por qu茅 deber铆as aprender a programar ?

**Hoy hay 9.000 b煤squedas para programadores y desarrolladores que las empresas no pueden cubrir!**

"Tenemos que generar las condiciones para que la econom铆a del conocimiento genere m谩s empleo y divisas", afirma Mocorrea de Argencon.

- Siempre hay mucho movimiento

- Siempre se busca gente

- Hay buenas posibilidades de carrera

- 15% es el CARGR (porcentaje compuesto anual de crecimiento) es la industria que m谩s crece.

- Con el crecimiento de las empresas y la gran competenci que hay produce un crecimiento en los sueldos como ninguna otra.

- Mejores trabajos remotos

- Se puede trabajar en relaci贸n de dependencia, se puede trabajar freelance, tambi茅n est谩 [https://cafecito.app](https://cafecito.app) donde te abr铆s una cuenta y te donan (la desarrollo un solo desarrollador). En desarrollo se pueden juntar y comenzar a desarrollar sin inversi贸n, solo usas tu tiempo.

- "Es la carrera **mejor pagada** y m谩s demandada de la historia, **con menos requerimientos** de t铆tulo y restricciones de trabajo".

- A programar se aprende programando, 20 % las clases y 80 % de nuestra practica.



### 驴 Por qu茅 elegir JavaScript ?

Seg煤n la encuesta anual de StackOverflow es uno de los m谩s utilizados.



### 驴 Qu茅 podemos hacer con JavaScript ?

- Video Juegos

- Front End: paginas webs

- Aplicaciones mobiles y de escritorio.

- Back End con Node.js

- Servidores


---

## 驴 Qu茅 vamos a usar ?

- [Runjs](https://runjs.app/)

- [Visual Studio Code](https://code.visualstudio.com)


---
---

# :star: CLASE 02 * 11/08 : VARIABLES, DATOS, OPERADORES, CONDICIONALES



### alert, prompt

Cuando en el prompt hacer click en **cancelar** el dato llega como **null**

**null** -> est谩 vac铆o, no existe

**undefined** -> no esta definido

**NaN** -> not a number, cuando quiero parsear un String a Number voy a tener NaN

- Puedo comprobar con **isNan()** si tengo un dato de tipo Number:

```JavaScript
let numero = 10;
console.log(isNaN(numero)); // true
```

### Condicional : IF - IF / ELSE

```JavaScript
let firstName = prompt('Ingresa tu nombre: ');
let lastName = prompt('Ingresa tu apellido: ');
let text = ``;

if ( firstName == null || lastName == null) {
  alert('Por favor ingresa tu nombre y apellido');
} else {
  text =`Hola ${firstName} ${lastName}, bienvenida a Ada`;
}
```

---
---

- En [**app.js**](https://github.com/eugenia1984/ada-introduccion-back-node/blob/main/modulo1/clase01-02/aap.js) se puede ver la ejercitacion de la clase


---
---


# :star: CLASE 03 * 16 Agosto


Algunos ejemplos de codigo vistos en clase:

```JavaScript
// numero es positivo o negativo o igual a 0
let numero = Number(prompt('Ingrese numero: '));
// se fija que numero no sea un NaN
if(!isNaN(numero)) {
  // se fija si el numero es positivo
  if(numero > o) {
    alert('El numero ingresado es positivo');
  } else if (numero == 0) { // se fija si el numero es 0
    alert('El numero ingresado es 0');
  } else { // si no se cumplen las condiciones anteriores es negativo
    alert('El numero ingresado es negativo');
  }
}
```

##  && - AND (Y) 

Todas las condiciones deben ser true

```JavaScript
let valor = Number(prompt('Ingrese un numero: ')),
  minimo = 10,
  maximo = 99;

// && - AND (Y) , todas las condiciones deben ser true
if(valor > minimo && valor < maximo) {
  console.log(`${valor} est谩 entre ${maximo} y ${minimo}`);
}  
```

## OR (O) ||

Con que una de las condiciones sea true -> true

```JavaScript
let colorSemaforo = prompt('Ingresa color semaforo: ').toLowerCase();

if (colorSemaforo == 'verde') {
  console.log(`Puede avanzar - ${colorSemaforo}`);
} else if (colorSemaforo == 'rojo' || colorSemaforo == 'amarillo')  {
  console.log(`No avance - ${colorSemaforo}`);
} else {
  console.log('Error: color de semaforo invalido');
}
```

---

## Diferencias entre VAR, LET y CONST

| CARACTERISTICA | VAR | LET | CONST |
| -------------- | --- | --- | ----- |
| reasignacion | * | * | x |
| redeclaracion | * | x | x |
| prop. del objeto global (window) | * | x | x |
| function scope | * | * | * |
| block scope | x | * | * |
| hoisting | * | * | * |
| TDZ(Temporal Dead Zone) | x | * | * |



---

## Algunas funciones para Strings

### .lenght()

Para saber la longitud de un String.

### .toLowerCase()

Para cambiar el String a minuscula

### .toUpperCase()

Para cambiar el String a may煤scula

---

## HOISTING

```JavaScript
// var texto = undefined;
console.log(texto);
var texto ="Hola";
```

El codigo se lee de arriba hacia abajo, pero JavaScript pasa todas las declaraciones e variables al principio y si no est谩n definidas las inicializa como **undefined**, hasta llegar al rengl贸n donde est谩 definida y con su valor asignado y le cambia el valor.

Esto pasa si la defino con **var** a la variable.

Pero ... si la declaramos con **let** si bien tambi茅n la sube, no le asigna undefined, sino que la mete en **TDZ**(Temporal Dead Zone), y me sale el error de que la variable no est谩 definida. Esta es una de las ventajas por la cual usamos **let** y **const** en vez de var.

---

## Coersi贸n de tipos

```JavaScript
let a = '1';
let b = 1;
console.log(typeof(a)); // String
console.log(typeof(b)); // Number
console.log(a+b); // 15 
```
Se lee de arriba a abajo y de la izquierda a la derecha, como **a** es **String** JavaScript usa el + para concatenar y me convierte el Number a String.

Lo que puedo hacer es conversi贸n de tipos(**parsear**):


```JavaScript
let a = '1';
let b = 1;
console.log(typeof(a)); // String
console.log(typeof(b)); // Number
console.log(Number(a)+b); // 2 
```

Porque con **Number()** convierto mi 1 de String a Number.

---

## Truthy

**1** es considerado como true, entonces:

```JavaScript
let a = 'a';
console.log(true+true); // 2
```

```JavaScript
console.log(a+true); //atrue
```
-> Como **a** es un String me pasa el true a una String y concatena

```JavaScript
console.log(a-true); // 0
```
-> a es un caracter que es truthy, lo considera como un 1 y como true tambien vale 1 y tengo el -, entonces los resta

## Falsy 

**0** es considerado como false

---

## == y ===

Con el **===** hacemos una igualdad mas estricta, donde tambi茅n comparamos el tipo de dato.

```JavaScript
let c = '2';
let d = 2;
console.log(c == d); // true
console.log(c === d); // false
```

---

-> [Aca hay algunos ejericios](https://github.com/eugenia1984/ada-introduccion-back-node/blob/main/modulo1/variables-datos-operadores-condicionales/app.js)

---


