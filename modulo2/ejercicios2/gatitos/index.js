// 4. Si el usuario ingresa a cualquier otra ruta, devolver un 404 incluyendo los headers correspondientes.
import express from 'express'; // importamos la libreria express
const app = express();  // creamos una instancia de express

// para el punto 2
import path from 'path';
import { fileURLToPath } from 'url';
import gatitos from './gatitos.js'

const PORT = 3030; // aca me guardo el puerto en el que veo mi server
const __filename = fileURLToPath(import.meta.url); // para poder ver el archivo index.html
const __dirname = path.dirname(__filename);

// Punto 1 
app.get('/', (req,res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h1>Gatito!</h1>'));
});

// Punto 2
app.use('/mostrarGatito', express.static(path.join(__dirname, 'public'))); 

// Punto 3 
app.get('/fotosGatitos', (req, res) => {
  // con esto devuelvo un JSON me falta ver como devolver el header
  res.status(200).json(gatitos);
});

// Punto 4
app.get('/*', (req, res) => {
  // con esto devuelvo un JSON me falta ver como devolver el header
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});