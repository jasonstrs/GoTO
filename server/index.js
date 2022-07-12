const express = require('express');
const app = express();
const dbFunctions = require('./db');
const MongoClient = require('mongodb').MongoClient;

var db = null;

// REQUESTS
app.get('/accueil', (req, res) => {
  if (db != null) {
    dbFunctions.getAccueil(db).then(
      data => {
        return res.status(200).json({ data });
      },
      err => res.status(404).json({ erreur: err }),
    );
  } else {
    res.status(404).json({ erreur: 'erreur' });
  }
});

// Connexion
MongoClient.connect(dbFunctions.url, { useNewUrlParser: true })
  .then(client => {
    console.log('Connected successfully to server');
    db = client.db(dbFunctions.dbName);
    app.listen(8080, () => {
      console.log("Serveur à l'écoute");
    });
  })
  .catch(error => console.error(error));
