import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Title from '../header/Title';
import copy from '../../copy.json';
import { COLORS, SIZES } from '../global/constant';
import Select from '../select/Select';
import TouchableContainerWithIcons from '../container/TouchableContainerWithIcons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';
import { getMuscles, getSeances } from '../../services';

export default function Session() {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [muscles, setMuscles] = useState([]);
  const [seances, setSeances] = useState([]);

  useEffect(() => {
    const defaultMuscle = { label: copy.allMuscles, value: 'all' };
    setSelectedMuscle(defaultMuscle.value);
    getMuscles().then(({ data }) => setMuscles([defaultMuscle, ...data]));
    getSeances().then(({ data }) => setSeances(data));
  }, []);

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
        <Select
          value={selectedMuscle}
          values={muscles}
          onChange={setSelectedMuscle}
        />
      </View>
      {seances.map(seance => (
        <TouchableContainerWithIcons
          icons={icons}
          id={seance.id}
          key={seance.id}
          onPress={() => onPress(seance.id)}>
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
