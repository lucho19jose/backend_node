const store = require('./store');

function getUsers() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function addUser(name) {
  if (!name) {
    return Promise.reject('Invalid name');
  }
  const user = {
    name,
  }
  return store.addUser(user)
}

module.exports = {
  addUser,
  getUsers
}