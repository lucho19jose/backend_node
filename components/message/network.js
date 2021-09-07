const express = require('express');
const response = require('../../network/response');
const controller = require('./controlller')
var app = express();

app.get('/', async (req, res) => {
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  try {
    const messageList = await controller.getMessages()
    response.success(req, res, messageList, 200);
  } catch (error) {
    response.error(req, res, 'Unexpected Error', 500, e);
  }
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