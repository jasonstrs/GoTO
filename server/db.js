const bcrypt = require('bcryptjs');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'GoTO'; // Database Name

const getAccueil = db => {
  return new Promise((resolve, reject) => {
    db.collection('accueil')
      .find()
      .toArray((err, docs) => {
        if (err) {
          return reject(err); // Reject the Promise with an error
        }
        return resolve(docs); // Resolve (or fulfill) the promise with data
      });
  });
};

const insertUser = (db, user) => {
  return new Promise((resolve, reject) => {
    hashPassword(user.password).then(
      hash => {
        user.password = hash;
        db.collection('user').insertOne(user, (err, userInserted) => {
          if (err) {
            return reject(err);
          }
          return resolve(userInserted.insertedId);
        });
      },
      err => console.log(`Erreur : ${err}`),
    );
  });
};

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    });
  });
};

module.exports = {
  dbName,
  getAccueil,
  insertUser,
  url,
};
