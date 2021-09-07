const express = require('express');
const response = require('../../network/response');
var app = express();

app.get('/', (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.query)
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  /* res.send('Lista de mensajes ' + req.body.text); */
  response.success(req, res, 'Lista de mensajes')
})

app.post('/', (req, res) => {
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error inesperado', 400, 'Es solo una simulacion de los errores: esto sirve para no enviar datos confidenciales al cliente->solo se tiene en el backend')
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
});

module.exports = app;