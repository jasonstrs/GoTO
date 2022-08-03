export const URLS = {
  accueil: 'http://localhost:8080/accueil',
  connexion: 'http://localhost:8080/connexion',
  deconnexion: 'http://localhost:8080/deconnexion',
  muscles: 'http://localhost:8080/muscles',
  seances: 'http://localhost:8080/seances',
  seance: (id = null) => `http://localhost:8080/seance${id ? `/${id}` : ''}`,
  token: 'http://localhost:8080/token',
  user: 'http://localhost:8080/user',
};
