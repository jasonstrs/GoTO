const express = require('express');
const app = express();
const dbFunctions = require('./db');
const MongoClient = require('mongodb').MongoClient;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var db = null;

// REQUESTS

/* ACCUEIL */
app.get('/accueil', (req, res) => {
  if (db != null) {
    dbFunctions.getAccueil(db).then(
      data => {
        return res.status(200).json({ data });
      },
      err => res.status(404).json({ erreur: err }),
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

/* USER */
app.post('/user', (req, res) => {
  if (db != null) {
    dbFunctions.insertUser(db, req.body).then(
      data => {
        return res.status(200).json({ data });
      },
      err => {
        return res.status(404).json({ erreur: err });
      },
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

app.post('/connexion', (req, res) => {
  if (db != null) {
    dbFunctions.connexion(db, req.body).then(
      () => {
        return res.status(200).json({ success: true });
      },
      () => {
        return res.status(404).json({ success: false });
      },
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
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
