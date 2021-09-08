const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
  db.connect(url, {
    useNewUrlParser: true,
  }).then(() => { console.log('[db] success connected') })
    .catch((e) => { console.log(e) })
}

module.exports = connect;