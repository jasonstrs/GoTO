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

export const postUser = body => {
  const url = 'http://localhost:8080/user';
  return postRequest(url, body);
};

export const postConnexion = body => {
  const url = 'http://localhost:8080/connexion';
  return postRequest(url, body);
};
