# :star: FUNCIONES

---

## sumar(a, b)

Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos
```
sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2
restar(a, b)
```

## restar(a, b)

Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos
```
restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2
```

## multiplicar(a, b)

Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos
```
multiplicar(2, 3) // 6
multiplicar(4, 0.5) // 2
```

## dividir(a, b)

Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos
```
dividir(12, 3) // 4
dividir(8, 4) // 2
sumar(30, 6) // 5
```

## esPar(numero)

Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0
```
esPar(2) // true
esPar(3) // false
```

## esImpar(numero)

Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0
```
esImpar(2) // false
esImpar(3) // true
```

## calcularAreaTriangulo(base, altura)

Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo
```
calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40
```

## gritar(str)

Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo
```
gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!
```

## obtenerNombreCompleto(nombre, apellido)

Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores
```
obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'
```

## saludar(nombre)

Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.
```
saludar('Ada') // 'Hola Ada, un gusto conocerte'
```

## saludarGritando(nombre, apellido)

Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.
```
saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
```
TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante
```JavaSCript
const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)
console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!
```

## obtenerDatosDeCiudad(nombre, poblacion, pais)

Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS
```
obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'
```

## convertirHorasEnSegundos(horas)

Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas
```
convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(3) // 10800
convertirHorasEnSegundos(4.5) // 16200
```

## calcularPerimetroRectangulo(ancho, alto)

Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro
```
calcularPerimetroRectangulo(3.2, 5) // 16.4
calcularPerimetroRectangulo(10, 20) // 60
```

## calcularPorcentaje(numero, porcentaje)

Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número
```
calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
```

## sumarPorcentaje(numero, porcentaje)

Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar
```
sumarPorcentaje(100, 15) // 115
sumarPorcentaje(10, 50) // 15
sumarPorcentaje(200, 10) // 220
```

## restarPorcentaje(numero, porcentaje)

Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar
```
restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
```

## calcularFPS(fps, minutos)

FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos
```
calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360
```

## obtenerCompetencia(a, b)

Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b
```
obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`
```

## generarEmail(usuario, dominio)

Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com
```
generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'
```

## esMayorDeEdad(edad)

Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario
```
esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true
```

## haceCalor(temperatura)

Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario
```
haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true
```

## haceFrio(temperatura)

Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario
```
haceFrio(12) // true
haceFrio(22) // false
haceFrio(3) // true
haceFrio(-2) // true
```

## calcularPuntaje(facil, normal, dificil)

Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:
```
facil: 3 puntos
normal: 5 puntos
dificil: 10 puntos
calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40
```

## aceptaDeposito(monto)

Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es
```
aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true
```

## esHoraValida(hora)

Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no
```
esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true
```

## puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)

Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos
```
puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false
```

## puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)

Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
```
puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false
```

### :star: Ejercicios con condicionales


## esParOImpar(numero)

Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar
```
esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'
```

## esPositivoONegativo(numero)

Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo
```
esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo'
```

## avanzarSemaforo(colorActual)

Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde
```
avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'
```

## obtenerDiasMes(mes)

Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes
```
obtenerDiasMes("diciembre") // 31
obtenerDiasMes("febrero")   // 29
```

## obtenerSensacion(temperatura)

Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:
```
Temperatura	Mensaje
Menor a 0°	¡Está helando!
Mayor o igual a 0° y menor a 15°	¡Hace frío!
Mayor o igual a 15° y menor a 25°	Está lindo
Mayor o igual a entre 25° y menor a 30°	Hace calor
Mayor o igual de 30°	¡Hace mucho calor!
obtenerSensacion(33) // "¡Hace mucho calor!"
```

## obtenerNota(puntaje)

Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:
```
Puntaje	Nota
Menor a 6	Desaprobado
Mayor o igual a 6 y menor a 7	Regular
Mayor o igual a 7 y menor a 8	Bueno
Mayor o igual a entre 8 y menor a 10	Muy bueno
10	Excelente
Menor a 0 o mayor a 10	Puntaje inválido
obtenerNota(7)    // "Bueno"
obtenerNota(9.6)  // "Excelente"
obtenerNota(12)   // "Puntaje inválido"
```

## jugarPiedraPapelTijera(a, b)

Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)
```
jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!
```

---
