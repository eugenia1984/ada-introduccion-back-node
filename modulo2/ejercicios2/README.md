# :star: Node.js - Express

---

## 1 -  Script Saludar

- Corré el comando npm init para crear un nuevo proyecto

- Crear un script en package.json que reciba el comando "saludar". Al correr npm run saludar en la consola, debemos ver "Hola, este es mi primer script!".


-> Está en la carpeta **saludar**, en consola llego a la carpeta saludar y ejecuto: ``` npm run```

---

## 2 - Cuanto falta para mi cumpleaños

Usando el objeto Date podemos saber la fecha actual.
```JavaScript
const fechaActual = new Date();
```

O podemos saber una fecha en particular agregando números como argumentos:
```JavaScript
const navidad = new Date(2020,11,25);
```

- Crear una función en Node que calcule la fecha actual y la muestre en consola.

- Crear una función que muestre en consola cuánto falta para tu cumpleaños (en milisegundos, que es lo que devuelve Date)

- Instalar el paquete de npm [pretty-ms*(https://www.npmjs.com/package/pretty-ms). Investigarlo y utilizarlo para mostrar en consola cuántos días faltan para tu cumpleaños.


---

## 3 - Server de gatitos

- 1. Utilizando el módulo express, crear un server en el puerto 3030 que retorne en la ruta base / el string "Gatitos!".

-> Esta en la carpeta **gatitos**

- 2. Si el usuario ingresa a la ruta /mostrarGatito, se debe devolver un HTML con un h1 que diga "Gatito!" y la imagen del gatito de tu preferencia.
```
<!DOCTYPE html>
<html>
<body>
  <h2>Gatito!</h2>
  <img src="https://cataas.com/cat" alt="Gatito" width="500">
</body>
</html>
```

->

- 3 . Si el usuario ingresa a la ruta /fotosGatitos, se debe devolver el siguiente JSON:
```JSON
{
    "big" : ["http://i.imgur.com/CRSzQ4r.png", "http://i.imgur.com/l94Rfsj.png", "http://i.imgur.com/304PJ9p.png", "http://i.imgur.com/mOnnvms.png", "http://i.imgur.com/k5Eif3W.png", "http://i.imgur.com/xSVGJu4.png"],
    "evil" : ["http://i.imgur.com/4s6OJQj.png", "http://i.imgur.com/su9edl7.png", "http://i.imgur.com/bCgGgBM.png"],
    "grumpy" : ["http://i.imgur.com/EPGllv4.png", "http://i.imgur.com/DKFbRQ0.png", "http://i.imgur.com/bIqsqSK.png"],
    "inHats" : ["http://i.imgur.com/6XcjacS.png", "http://i.imgur.com/GC3lgzg.png", "http://i.imgur.com/q7MZgiG.png", "http://i.imgur.com/VkfIH4a.png", "http://i.imgur.com/zy9cJgS.png", "http://i.imgur.com/OA4rZbW.png", "http://i.imgur.com/w0SzOoY.png", "http://i.imgur.com/zVZXKK4.png", "http://i.imgur.com/ZTn8bgI.png", "http://i.imgur.com/iVWFUlj.png"],
    "kitten" : ["http://i.imgur.com/KqFuFSQ.png", "http://i.imgur.com/H3YmnA3.png", "http://i.imgur.com/qqWyfvA.png", "http://i.imgur.com/GS6HUnP.png", "http://i.imgur.com/bTvoEeb.png"]
}
```

-> Esta realizado en la carpeta **gatitos**

- 4. Si el usuario ingresa a cualquier otra ruta, devolver un 404 incluyendo los headers correspondientes.

->

---
