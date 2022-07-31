import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, SHAPES } from '../global/constant';
import copy from '../../copy.json';

export default function Item({ seance }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{seance.nom}</Text>
      <Text>
        <Text style={styles.label}>Durée : </Text>
        <Text>{`${seance.duree} ${copy.minutes}`}</Text>
      </Text>
      <Text>
        <Text style={styles.label}>Nombre d'exercices : </Text>
        <Text>{seance.nbExercices}</Text>
      </Text>
      <Text>
        <Text style={styles.label}>Ressenti : </Text>
        <Text>{copy[`ressenti.${seance.ressenti}`]}</Text>
      </Text>
    </View>
  );
}

Item.propTypes = { seance: SHAPES.seanceShape.isRequired };

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: COLORS.blackBlue,
    paddingRight: 50,
  },
  label: {
    fontWeight: '600',
  },
});
