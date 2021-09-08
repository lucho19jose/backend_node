const Model = require('./model');

function addMessage(message) {
  /* list.push(message); */
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };//newRegExp:regular expresion
  }
  return await Model.find(filter);
}

async function updateText(id, message) {
  const foundmessage = await Model.findById(id); //findOne({_id:id})
  foundmessage.message = message;
  const newMessage = await foundmessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  remove: removeMessage
}