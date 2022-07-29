import React from 'react';
import { Text, View } from 'react-native';
import Title from '../header/Title';
import copy from '../../copy.json';
import { COLORS, SIZES } from '../global/constant';
import Select from '../select/Select';

export default function Session() {
  const seances = [
    {
      nom: 'Séance du lundi',
      duree: '90 minutes',
      muscles: ['Pec', 'Biceps'],
      ressenti: 'Bien',
    },
    {
      nom: 'Séance du mardi',
      duree: '20 minutes',
      muscles: ['Dos', 'Épaule'],
      ressenti: 'Mal',
    },
  ];

  const values = [
    { label: 'Pec', value: 'pec' },
    { label: 'Quadri', value: 'quadri' },
    { label: 'Biceps', value: 'biceps' },
  ];

  return (
    <View>
      <Title
        color={COLORS.blackBlue}
        size={SIZES.extraBig}
        title={copy.identificate}
      />
      <Text>Session Page</Text>
      <Select values={values} onChange={val => console.log(val)} />
    </View>
  );
}
