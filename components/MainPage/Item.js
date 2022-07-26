import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../global/constant';

export default function Item({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Item.defaultProps = { onPress: () => {} };

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 16,
    marginHorizontal: 40,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
