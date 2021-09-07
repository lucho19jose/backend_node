const express = require('express');
const response = require('../../network/response');
const controller = require('./controlller')
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

app.post('/', async (req, res) => {
  const { user, message } = req.body;
  try {
    const fullMessage = await controller.addMessage(user, message);
    response.success(req, res, fullMessage, 201)
  } catch (error) {
    response.error(req, res, 'Información invalida', 500, 'Error en el contenido')
  }

});

module.exports = app;