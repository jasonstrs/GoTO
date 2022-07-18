import React, { useEffect, useState } from 'react';
import { getAccueil } from '../../services';
import CustomCarousel from '../carousel/CustomCarousel';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAccueil().then(({ data }) => setItems(data));
  }, []);

  return <CustomCarousel items={items} />;
};

export default Home;
