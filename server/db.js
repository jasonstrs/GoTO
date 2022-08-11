const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
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

const getMuscles = db => {
  return new Promise((resolve, reject) => {
    db.collection('muscle')
      .find()
      .toArray((err, docs) => {
        if (err) {
          return reject(err); // Reject the Promise with an error
        }
        return resolve(docs); // Resolve (or fulfill) the promise with data
      });
  });
};

const getSeances = (db, userId) => {
  return new Promise((resolve, reject) => {
    db.collection('seance')
      .find({ userId })
      .toArray((err, docs) => {
        if (err) {
          return reject(err); // Reject the Promise with an error
        }
        return resolve(docs); // Resolve (or fulfill) the promise with data
      });
  });
};

const insertSeance = (db, nom, userId) => {
  return new Promise((resolve, reject) => {
    const seance = {
      nom,
      muscles: [],
      ressenti: 'aucun',
      userId,
      duree: 0,
      nbExercices: 0,
    };
    db.collection('seance').insertOne(seance, (err, seanceInserted) => {
      if (err) {
        return reject(err);
      }
      return resolve({ ...seance, _id: seanceInserted.insertedId });
    });
  });
};

const removeSeance = (db, idSeance, userId) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('seance')
        .deleteOne({ _id: ObjectId(idSeance), userId })
        .then(data => resolve(data));
    } catch (e) {
      console.log(`ERROR :: ${e}`);
      reject(e);
    }
  });
};

const editSeance = (db, idSeance, userId, body) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('seance')
        .updateOne({ _id: ObjectId(idSeance), userId }, { $set: body })
        .then(data => resolve(data));
    } catch (e) {
      console.log(`ERROR :: ${e}`);
      reject(e);
    }
  });
};

const getExercicesOfSeance = (db, idSeance, userId) => {
  return new Promise((resolve, reject) => {
    db.collection('exercice')
      .find({ idSeance, userId })
      .toArray((err, docs) => {
        if (err) {
          return reject(err); // Reject the Promise with an error
        }

        var resultat = { idSeance };
        resultat.exercices = docs.map(
          ({ userId: userIdProp, idSeance: idSeanceExo, ...exercice }) =>
            exercice,
        );
        return resolve(resultat); // Resolve (or fulfill) the promise with data
      });
  });
};

// TODO: à tester
const removeExercice = (db, idExercice, userId) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('exercice')
        .deleteOne({ _id: ObjectId(idExercice), userId })
        .then(data => resolve(data));
    } catch (e) {
      console.log(`ERROR :: ${e}`);
      reject(e);
    }
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
  getMuscles,
  getSeances,
  insertSeance,
  removeSeance,
  editSeance,
  getExercicesOfSeance,
  removeExercice,
  insertUser,
  url,
};
