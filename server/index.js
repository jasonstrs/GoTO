const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const dbFunctions = require('./db');
const { generateToken, verifyToken, resetCookie } = require('./jwt');
const MongoClient = require('mongodb').MongoClient;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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

/* SEANCES */
app.get('/muscles', (req, res) => {
  if (db != null) {
    dbFunctions.getMuscles(db).then(
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

app.get('/seances', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user =>
        dbFunctions.getSeances(db, user.id).then(
          data => res.status(200).json({ data }),
          err => res.status(404).json({ erreur: err }),
        ),
      () => res.status(404).json({ success: false }),
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

app.post('/seance', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user => {
        dbFunctions.insertSeance(db, req.body.nom, user.id).then(
          data => res.status(201).json({ data }),
          err => res.status(404).json({ erreur: err }),
        );
      },
      () => res.status(404).json({ success: false }),
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

app.delete('/seance/:id', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user => {
        const idSeance = req.params.id;
        dbFunctions.removeSeance(db, idSeance, user.id).then(
          data => res.status(200).json({ data }),
          err => res.status(404).json({ erreur: err }),
        );
      },
      () => res.status(404).json({ success: false }),
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

app.patch('/seance/:id', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user => {
        const idSeance = req.params.id;
        dbFunctions.editSeance(db, idSeance, user.id, req.body).then(
          data => res.status(200).json({ data }),
          err => res.status(404).json({ erreur: err }),
        );
      },
      () => res.status(404).json({ success: false }),
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

/* EXERCICE */
app.get('/seance/:id/exercices', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user => {
        const idSeance = req.params.id;
        dbFunctions.getExercicesOfSeance(db, idSeance, user.id).then(
          data => res.status(200).json({ data }),
          err => res.status(404).json({ erreur: err }),
        );
      },
      () => res.status(404).json({ success: false }),
    );
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

// TODO à tester
app.delete('/seance/:id/exercice/:idExo', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user => {
        const idExercice = req.params.idExo;
        dbFunctions.removeExercice(db, idExercice, user.id).then(
          data => res.status(200).json({ data }),
          err => res.status(404).json({ erreur: err }),
        );
      },
      () => res.status(404).json({ success: false }),
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
      ({ password, _id, ...other }) => {
        const payload = {
          ...other,
          id: _id.toString(),
        };
        generateToken(payload, res);

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

app.post('/deconnexion', (req, res) => {
  if (db != null) {
    resetCookie(res);
    return res.status(200).json({ success: true });
  } else {
    res
      .status(404)
      .json({ erreur: 'Impossible de se connecter à la base de données' });
  }
});

app.get('/token', (req, res) => {
  if (db != null) {
    verifyToken(req.cookies.token).then(
      user => res.status(200).json({ success: true, user }),
      () => res.status(404).json({ success: false }),
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
