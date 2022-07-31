import { URLS } from './constant';
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

const deleteRequest = async (url, body = {}) => {
  const data = await fetch(url, {
    method: 'DELETE',
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

export const getAccueil = () => getRequest(URLS.accueil);

export const getMuscles = () => getRequest(URLS.muscles);

export const getSeances = () => {
  return getRequest(URLS.seances).then(({ data }) => ({
    data: parseArray(data, parseSeance),
  }));
};

export const removeSeance = id => deleteRequest(URLS.seance(id));

export const postUser = body => postRequest(URLS.user, body);

export const postConnexion = body => postRequest(URLS.connexion, body);

export const checkToken = () => getRequest(URLS.token);

export const postLogOut = () => postRequest(URLS.deconnexion);
