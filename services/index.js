import { alertWarning } from '../components/global/constant';
import { URLS } from './constant';
import { parseArray, parseExercice, parseSeance } from './parser';

const getRequest = async url => {
  const data = await fetch(url).then(
    res => res.json(),
    err => {
      alertWarning(err.message);
      return { success: false };
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
      alertWarning(err.message);
      return { success: false };
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
      alertWarning(err.message);
      return { success: false };
    },
  );
  return data;
};

export const getAccueil = () => getRequest(URLS.accueil);

export const getMuscles = () => getRequest(URLS.muscles);

export const getSeances = async () => {
  const { data } = await getRequest(URLS.seances);
  return {
    data: parseArray(data, parseSeance),
  };
};

export const removeSeance = id => deleteRequest(URLS.seance(id));

export const postSeance = body =>
  postRequest(URLS.seance(), body).then(({ data }) => ({
    data: parseSeance(data),
  }));

export const getExercices = async idSeance => {
  const { data } = await getRequest(URLS.exercicesOfSeance(idSeance));
  return {
    data: { ...data, exercices: parseArray(data.exercices, parseExercice) },
  };
};

export const postUser = body => postRequest(URLS.user, body);

export const postConnexion = body => postRequest(URLS.connexion, body);

export const checkToken = () => getRequest(URLS.token);

export const postLogOut = () => postRequest(URLS.deconnexion);
