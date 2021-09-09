const express = require('express');
const multer = require('multer');
const path = require('path');

const response = require('../../network/response');
const controller = require('./controlller')
var app = express();

//..to save file
const storage = multer.diskStorage({
  destination: "public/files/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + '.png')
  }
})

const upload = multer({
  storage: storage
});

app.get('/', async (req, res) => {
  const filterMessages = req.query.user || null;
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  try {
    const messageList = await controller.getMessages(filterMessages)
    response.success(req, res, messageList, 200);
  } catch (error) {
    response.error(req, res, 'Unexpected Error', 500, error);
  }
})

app.post('/', upload.single('file'), async (req, res) => {
  const { chat, user, message } = req.body;
  try {
    const fullMessage = await controller.addMessage(chat, user, message, req.file);
    response.success(req, res, fullMessage, 201)
  } catch (error) {
    response.error(req, res, 'Información invalida', 500, 'Error en el contenido')
  }

});

app.patch('/:id', function (req, res) {
  console.log(req.params.id);

  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e);
    });
})

app.delete('/:id', async function (req, res) {
  await controller.deleteMessage(req.params.id)
  try {
    response.success(req, res, `Msg ${req.params.id} eliminado`, 200);
  } catch (error) {
    response.error(req, res, 'Error interno', 500, e);
  }
})

module.exports = app;