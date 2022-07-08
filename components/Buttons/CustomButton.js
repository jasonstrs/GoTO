import React from 'react';
import PropTypes from 'prop-types';
import copy from '../../copy.json';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../global/constant';

export default function CustomButton({ color, onPress, title, borderColor }) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: color,
      borderColor: borderColor,
      borderRadius: 4,
      borderWidth: 2,
      marginBottom: 16,
      padding: 8,
      width: 150,
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  borderColor: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
};

CustomButton.defaultProps = {
  borderColor: COLORS.darkBlue,
  color: COLORS.blue,
  title: copy.ok,
};
