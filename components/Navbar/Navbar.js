import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonLink from '../buttons/ButtonLink';
import copy from '../../copy.json';
import { navigate } from '../global/rootNavigation';
import { VIEWS } from '../global/constant';

export default function Navbar({}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Image</Text>
      </View>
      <View style={styles.rightContainer}>
        <ButtonLink
          func={() => navigate(VIEWS.connexion)}
          style={styles.button}
          title={copy.connexion}
        />
        <ButtonLink
          func={() => navigate(VIEWS.inscription)}
          style={styles.button}
          title={copy.inscription}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: 8,
  },
  rightContainer: {
    flexDirection: 'row',
  },
});
