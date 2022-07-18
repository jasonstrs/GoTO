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
        user.email = user.email.toLowerCase();
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

const connexion = (db, user) => {
  return new Promise((resolve, reject) => {
    user.email = user.email.toLowerCase();
    db.collection('user')
      .find({ email: user.email })
      .toArray((err, resultat) => {
        if (err || resultat.length === 0) {
          return reject();
        }
        bcrypt.compare(user.password, resultat[0].password, (error, res) => {
          if (error || !res) {
            return reject();
          }

          return resolve(resultat[0]);
        });
      });
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
  connexion,
  dbName,
  getAccueil,
  insertUser,
  url,
};
