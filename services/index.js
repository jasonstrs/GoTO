const getRequest = async url => {
  const data = await fetch(url).then(
    res => res.json(),
    err => console.log(`erreur : ${err}`),
  );
  return data;
};

export const getAccueil = () => {
  const url = 'http://localhost:8080/accueil';
  return getRequest(url);
};
