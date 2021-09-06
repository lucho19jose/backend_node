const express = require('express');
/* const router = express.Router(); */ // currently is not necesary

const response = require('./network/response')

var app = express();

/* app.use(router); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/message', (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.query)
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  /* res.send('Lista de mensajes ' + req.body.text); */
  response.success(req, res, 'Lista de mensajes')
})

app.post('/message', (req, res) => {
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error simulado', 400)
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
});

/* app.use('/', function (req, res) {
  res.send('Hola <3');
}); */

app.use('/app', express.static('public'));

app.listen(3000);

console.log("la aplicacion esta escuchando en http://localhost:3000");