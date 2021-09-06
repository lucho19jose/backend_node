const express = require('express');

var app = express();

app.use('/', function (req, res) {
  res.send('Hola <3');
});

app.listen(3000);

console.log("la aplicacion esta escuchando en http://localhost:3000");