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

module.exports = {
  getAccueil,
  url,
  dbName,
};
