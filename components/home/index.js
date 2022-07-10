import React from 'react';
import CustomCarousel from '../carousel/CustomCarousel';

const Home = () => {
  const carouselItems = [
    {
      imagePath: 'anonyme',
      title: "GoTO, c'est quoi ?",
      text: 'GoTO est une application qui te permet de gérer tes séances de musculation comme tu le souhaites.',
    },
    {
      imagePath: 'anonyme',
      title: 'Comment ça marche ?',
      text: 'Il te suffit de personnaliser tes séances en y ajoutant tes exercices préférés. Par la suite, tu pourras visualiser tes résultats.',
    },
    {
      imagePath: 'anonyme',
      title: 'Inscrit toi !',
      text: "Tu peux t'inscrire dès maintenant et commencer à créer tes séances en cliquant sur l'onglet 'Inscription' en haut à droite de l'application.",
    },
  ];

  return <CustomCarousel items={carouselItems} />;
};

export default Home;
