import PropTypes from 'prop-types';

export const COLORS = {
  blackBlue: '#0335d3',
  blue: '#82affc',
  darkBlue: '#2d78f8ff',
  green: '#27b052',
  lightBlue: '#dee9fc',
  red: '#e50101',
};

export const VIEWS = {
  connexion: 'Connexion',
  home: 'Home',
  inscription: 'Inscription',
  mainPage: 'MainPage',
  session: 'Session',
};

export const SIZES = {
  big: 24,
  extraBig: 28,
  normal: 16,
};

export const SHAPES = {
  seanceShape: PropTypes.shape({
    duree: PropTypes.string,
    id: PropTypes.string,
    muscles: PropTypes.arrayOf(PropTypes.string),
    nom: PropTypes.string,
    ressenti: PropTypes.string,
  }),
};
