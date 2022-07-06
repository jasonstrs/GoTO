import React from 'react';
import {View} from 'react-native';
import CustomCarousel from '../Carousel/CustomCarousel';

const VueInitiale = () => {
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: "Item 4",
      text: 'Text 4',
    },
    {
      title: "Item 5",
      text:  "Text 5",
    },
  ];

  return <CustomCarousel items={carouselItems} />;
};

export default VueInitiale;
