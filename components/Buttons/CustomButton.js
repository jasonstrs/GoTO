import React from 'react';
import PropTypes from 'prop-types';
import copy from '../../copy.json';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../global/constant';

export default function CustomButton({
  backgroundColor,
  borderColor,
  color,
  onPress,
  title,
}) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
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
      color: color,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
};

CustomButton.defaultProps = {
  backgroundColor: COLORS.blue,
  borderColor: COLORS.darkBlue,
  color: COLORS.blackBlue,
  title: copy.ok,
};
