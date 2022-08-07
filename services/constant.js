export const URLS = {
  accueil: 'http://localhost:8080/accueil',
  connexion: 'http://localhost:8080/connexion',
  deconnexion: 'http://localhost:8080/deconnexion',
  exercice: (idSeance, idExercice) =>
    `http://localhost:8080/seance/${idSeance}/exercice/${idExercice}`,
  exercicesOfSeance: id => `http://localhost:8080/seance/${id}/exercices`,
  muscles: 'http://localhost:8080/muscles',
  seance: (id = null) => `http://localhost:8080/seance${id ? `/${id}` : ''}`,
  seances: 'http://localhost:8080/seances',
  token: 'http://localhost:8080/token',
  user: 'http://localhost:8080/user',
};
