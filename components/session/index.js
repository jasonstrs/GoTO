import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Title from '../header/Title';
import copy from '../../copy.json';
import { COLORS, SIZES } from '../global/constant';
import Select from '../select/Select';
import TouchableContainerWithIcons from '../container/TouchableContainerWithIcons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

export default function Session() {
  const seances = [
    {
      id: '1',
      nom: 'Séance du lundi',
      duree: '90 minutes',
      muscles: ['Pec', 'Biceps'],
      ressenti: 'Bien',
    },
    {
      id: '2',
      nom: 'Séance du mardi',
      duree: '20 minutes',
      muscles: ['Dos', 'Épaule'],
      ressenti: 'Mal',
    },
  ];

  const fakeData = [
    { label: 'Pec', value: 'pec' },
    { label: 'Quadri', value: 'quadri' },
    { label: 'Biceps', value: 'biceps' },
  ];

  const values = [{ label: 'all', value: copy.allMuscles }, ...fakeData];

  const onPress = id => alert(`clic on the item ${id}`);

  const onCan = key => alert(`cross clicked ${key}!`);

  const icons = [{ onPress: onCan, source: faTrashCan }];

  return (
    <ScrollView style={styles.container}>
      <Title
        color={COLORS.blackBlue}
        size={SIZES.extraBig}
        title={`${copy.training} 🦊`}
      />
      <Text style={styles.text}>{copy.searchMuscle}</Text>
      <View style={styles.select}>
        <Select values={values} onChange={val => console.log(val)} />
      </View>
      {seances.map(seance => (
        <TouchableContainerWithIcons
          id={seance.id}
          onPress={() => onPress(seance.id)}
          icons={icons}>
          <Item seance={seance} />
        </TouchableContainerWithIcons>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    marginBottom: 8,
  },
  select: {
    marginBottom: 16,
  },
});
