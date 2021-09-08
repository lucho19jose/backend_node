const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
var app = express();

app.get('/', async (req, res) => {
  try {
    const userList = await controller.getUsers()
    response.success(req, res, userList, 200);
  } catch (error) {
    response.error(req, res, 'Unexpected Error', 500, e);
  }
})

app.post('/', async (req, res) => {
  const data = await controller.addUser(req.body.name)
  try {
    response.success(req, res, data, 201);
  } catch (error) {
    response.error(req, res, 'Internal Error', 500, error)
  }
})

module.exports = app;