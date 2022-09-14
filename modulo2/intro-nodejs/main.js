import express from 'express'; // importamos la libreria express
const app = express(); // creamos una instancia de express

app.get('/', (req,res) => {
  // para responder con un string
  //res.send('Hello world')
  // para responder con un JSON
  res.json({message: 'Esto es un JSON'});
});

app.post('/', (req, res) => {
  res.send('Got a PoOST request');
});

app.listen(3000, () => {
  console.log('Server started');
});