const Model = require('./model');

async function getUsers() {
  return await Model.find();
}

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

module.exports = {
  addUser,
  list: getUsers,
}