const { populate } = require('./model');
const Model = require('./model');

function addMessage(message) {
  /* list.push(message); */
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };//newRegExp:regular expresion
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated)
      });
  })
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