const express = require('express');
/* const router = express.Router(); */ // currently is not necesary

var app = express();

/* app.use(router); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/message', (req, res) => {
  console.log(req.body)
  console.log(req.query)
  res.send('Lista de mensajes ' + req.body.text);
})
app.post('/message', (req, res) => {
  res.send('Mensaje añadido con exito');
})

/* app.use('/', function (req, res) {
  res.send('Hola <3');
}); */

app.listen(3000);

console.log("la aplicacion esta escuchando en http://localhost:3000");