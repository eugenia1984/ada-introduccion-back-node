# :star: MODULO 1 : VARIABLES, DATOS, OPERADORES, CONDICIONALES

---

## 🏁 OBJETIVOS

- Que te introduzcas a JavaScript y te familiarices con su sintaxis

- Que conozcas los tipos de datos primitivos que existen en JavaScript

- Que puedas realizar operaciones básicas entre datos

- Que puedas utilizar la consola para inspeccionar valores

- Que comprendas el concepto de flujo de ejecución

- Que te introduzcas a los condicionales y entiendas su funcionamiento y usos

- Que puedas comparar valores y realizar operaciones con base en ello

---

## 📝 CONTENIDOS

### Variables

```
Cómo se guarda una variable en memoria
Entorno de ejecución de un programa
Nombres de variables, por qué es importante y buenas prácticas
Palabras reservadas. Estándares de nomenclatura, qué son y para qué se usan
camelCase, UPPER_SNAKE_CASE y otros estándares
Hoisting
Diferencias entre var, let y const
Cuándo usar cada una
Declaración y asignación
Declaración múltiple
```

---
---
## :star: TEMAS

### Datos Primitivos
```
Qué es un dato
Valores primitivos: strings, numbers
Valores nulos: null, undefined
Comillas dobles y simples
Template strings
Coerción de tipos
Métodos built-in (String, Number, Boolean)
```

### Operadores
```
Operadores aritméticos
Operadores de asignación
Operador de concatenación
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

### Operadores lógicos
```
&&
||
!
```

### Operador de agrupamiento
```
Orden de evaluación
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


##  Programación

La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como utilizar algún tipo de tarea.



### ¿Por qué deberías aprender a programar ?

**Hoy hay 9.000 búsquedas para programadores y desarrolladores que las empresas no pueden cubrir!**

"Tenemos que generar las condiciones para que la economía del conocimiento genere más empleo y divisas", afirma Mocorrea de Argencon.

- Siempre hay mucho movimiento

- Siempre se busca gente

- Hay buenas posibilidades de carrera

- 15% es el CARGR (porcentaje compuesto anual de crecimiento) es la industria que más crece.

- Con el crecimiento de las empresas y la gran competenci que hay produce un crecimiento en los sueldos como ninguna otra.

- Mejores trabajos remotos

- Se puede trabajar en relación de dependencia, se puede trabajar freelance, también está [https://cafecito.app](https://cafecito.app) donde te abrís una cuenta y te donan (la desarrollo un solo desarrollador). En desarrollo se pueden juntar y comenzar a desarrollar sin inversión, solo usas tu tiempo.

- "Es la carrera **mejor pagada** y más demandada de la historia, **con menos requerimientos** de título y restricciones de trabajo".

- A programar se aprende programando, 20 % las clases y 80 % de nuestra practica.



### ¿ Por qué elegir JavaScript ?

Según la encuesta anual de StackOverflow es uno de los más utilizados.



### ¿ Qué podemos hacer con JavaScript ?

- Video Juegos

- Front End: paginas webs

- Aplicaciones mobiles y de escritorio.

- Back End con Node.js

- Servidores


---

## ¿ Qué vamos a usar ?

- [Runjs](https://runjs.app/)

- [Visual Studio Code](https://code.visualstudio.com)


---
---

# :star: CLASE 02 * 11/08 : VARIABLES, DATOS, OPERADORES, CONDICIONALES



### alert, prompt

Cuando en el prompt hacer click en **cancelar** el dato llega como **null**

**null** -> está vacío, no existe

**undefined** -> no esta definido

**NaN** -> not a number, cuando quiero parsear un String a Number voy a tener NaN



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

# :star: CLASE 3 * 16 Agosto

---
