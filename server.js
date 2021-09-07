const express = require('express');
/* const router = express.Router(); */ // currently is not necesary

//const router = require('./components/message/network');
const router = require('./network/routes')
var app = express();


/* app.use(router); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(router);

router(app);

/* app.use('/', function (req, res) {
  res.send('Hola <3');
}); */

app.use('/app', express.static('public'));

app.listen(3000);

console.log("la aplicacion esta escuchando en http://localhost:3000");