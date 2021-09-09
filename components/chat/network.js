const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
var app = express();

app.post('/', async (req, res) => {
  try {
    const chat = await controller.addChat(req.body.users);
    response.success(req, res, chat, 201)
  } catch (error) {
    response.error(req, res, 'Internal Error', 500, 'Error en el contenido')
  }

});

app.get('/:userId', async (req, res) => {
  try {
    const userChats = await controller.listChats()
    response.success(req, res, userChats, 200);
  } catch (error) {
    response.error(req, res, 'Unexpected Error', 500, error);
  }
})

module.exports = app;
