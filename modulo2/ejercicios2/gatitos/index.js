// 2- Si el usuario ingresa a la ruta /mostrarGatito, se debe devolver un HTML con un h1 que diga "Gatito!" y la imagen del gatito de tu preferencia.
// 4. Si el usuario ingresa a cualquier otra ruta, devolver un 404 incluyendo los headers correspondientes.
import express from 'express'; // importamos la libreria express
// para el punto 2
import path from 'path';
import {fileURLToPath } from 'url';

const app = express();  // creamos una instancia de express
const PORT = 3030; // aca me guardo el puerto en el que veo mi server
// para poder ver el archivo index.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// imprimo las constantes para ver que traen
console.log(__dirname); // ruta de la carpeta donde se encuentra el archivo
console.log(__filename); // ruta del archivo

app.use(express.static(path.join(__dirname, 'public')));

// Punto 1
app.get('/', (req,res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h1>Gatito!</h1>'));
});

// Punto 2
app.get('/mostrarGatito', (req,res) => {
  res.send(`<h1>Gatitos!</h1>`)
});
 

// Punto 3 
app.get('/fotosGatitos', (req, res) => {
  // con esto devuevlo un JSON me falta ver como devolver el header
  res.status(200).json(
    {
      "big" : [
        "http://i.imgur.com/CRSzQ4r.png", 
        "http://i.imgur.com/l94Rfsj.png", 
        "http://i.imgur.com/304PJ9p.png", 
        "http://i.imgur.com/mOnnvms.png", 
        "http://i.imgur.com/k5Eif3W.png", 
        "http://i.imgur.com/xSVGJu4.png"
      ],
      "evil" : [
        "http://i.imgur.com/4s6OJQj.png",
         "http://i.imgur.com/su9edl7.png",
         "http://i.imgur.com/bCgGgBM.png"
      ],
      "grumpy" : [
        "http://i.imgur.com/EPGllv4.png",
         "http://i.imgur.com/DKFbRQ0.png", 
         "http://i.imgur.com/bIqsqSK.png"
      ],
      "inHats" : [
        "http://i.imgur.com/6XcjacS.png", 
        "http://i.imgur.com/GC3lgzg.png", 
        "http://i.imgur.com/q7MZgiG.png", 
        "http://i.imgur.com/VkfIH4a.png", 
        "http://i.imgur.com/zy9cJgS.png", 
        "http://i.imgur.com/OA4rZbW.png", 
        "http://i.imgur.com/w0SzOoY.png", 
        "http://i.imgur.com/zVZXKK4.png", 
        "http://i.imgur.com/ZTn8bgI.png", 
        "http://i.imgur.com/iVWFUlj.png"
      ],
      "kitten" : [
        "http://i.imgur.com/KqFuFSQ.png", 
        "http://i.imgur.com/H3YmnA3.png",
         "http://i.imgur.com/qqWyfvA.png", 
         "http://i.imgur.com/GS6HUnP.png", 
         "http://i.imgur.com/bTvoEeb.png"
      ]
    }
  );
});

// Punto 4
app.get('/*', (req, res) => {
  // con esto devuelvo un JSON me falta ver como devolver el header
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});