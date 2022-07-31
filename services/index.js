import { parseArray, parseSeance } from './parser';

const getRequest = async url => {
  const data = await fetch(url).then(
    res => res.json(),
    err => {
      console.log(`erreur : ${err}`);
      return null;
    },
  );
  return data;
};

const postRequest = async (url, body) => {
  const data = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(
    res => res.json(),
    err => {
      console.log(`erreur : ${err}`);
      return null;
    },
  );
  return data;
};

export const getAccueil = () => {
  const url = 'http://localhost:8080/accueil';
  return getRequest(url);
};

export const getMuscles = () => {
  const url = 'http://localhost:8080/muscles';
  return getRequest(url);
};

export const getSeances = () => {
  const url = 'http://localhost:8080/seances';
  return getRequest(url).then(({ data }) => ({
    data: parseArray(data, parseSeance),
  }));
};

export const postUser = body => {
  const url = 'http://localhost:8080/user';
  return postRequest(url, body);
};

export const postConnexion = body => {
  const url = 'http://localhost:8080/connexion';
  return postRequest(url, body);
};

export const checkToken = () => {
  const url = 'http://localhost:8080/token';
  return getRequest(url);
};

export const postLogOut = () => {
  const url = 'http://localhost:8080/deconnexion';
  return postRequest(url);
};
