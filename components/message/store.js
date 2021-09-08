require('dotenv').config()
const db = require('mongoose');
const Model = require('./model');
db.Promise = global.Promise;

db.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcwke.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
}).then(() => { console.log('[db] success connected') })
  .catch((e) => { console.log(e) })



function addMessage(message) {
  /* list.push(message); */
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  return await Model.find();
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get
  //update
  //delete
}