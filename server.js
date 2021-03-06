require('dotenv').config()
const express = require('express');
const app = express();
/* const router = express.Router(); */ // currently is not necesary
const server = require('http').Server(app);

const socket = require('./socket');
const db = require('./db');

//const router = require('./components/message/network');
const router = require('./network/routes')

db(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcwke.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`)

/* app.use(router); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(router);

socket.connect(server);
router(app);

/* app.use('/', function (req, res) {
  res.send('Hola <3');
}); */

app.use('/app', express.static('public'));

server.listen(3000, () => {
  console.log("la aplicacion esta escuchando en http://localhost:3000");
});