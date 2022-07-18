import React from 'react';
import { Button } from 'react-native';

export default function MainPage() {
  const onClick = () => {
    console.log('clic');
  };

  return <Button onPress={onClick} title='clic me!' />;
}
