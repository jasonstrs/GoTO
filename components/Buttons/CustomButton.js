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
  styleProp,
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
      minWidth: 50,
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: color,
    },
  });

  return (
    <TouchableOpacity style={[styles.container, styleProp]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  styleProp: PropTypes.object,
  title: PropTypes.string,
};

CustomButton.defaultProps = {
  backgroundColor: COLORS.blue,
  borderColor: COLORS.darkBlue,
  color: COLORS.blackBlue,
  styleProp: {},
  title: copy.ok,
};
