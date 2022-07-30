import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, SHAPES } from '../global/constant';

export default function Item({ seance }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{seance.nom}</Text>
      <Text>
        <Text style={styles.label}>Durée : </Text>
        <Text>{seance.duree}</Text>
      </Text>
      <Text>
        <Text style={styles.label}>Nombre d'exercices : </Text>
        <Text>{seance.muscles.length}</Text>
      </Text>
      <Text>
        <Text style={styles.label}>Ressenti : </Text>
        <Text>{seance.ressenti}</Text>
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
