import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import copy from '../../copy.json';

export default function PasswordSent() {
  return (
    <View>
      <Text style={styles.text}>{copy['forgottenPassword.success']}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'justify',
  },
});
