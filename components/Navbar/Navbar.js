import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonLink from '../../components/Buttons/ButtonLink';
import copy from '../../copy.json';
import {COLORS} from '../Global/colors';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Image</Text>
      </View>
      <View style={styles.rightContainer}>
        <ButtonLink
          func={() => alert('test')}
          style={styles.button}
          title={copy.connexion}
        />
        <ButtonLink
          func={() => alert('test')}
          style={styles.button}
          title={copy.inscription}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
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
