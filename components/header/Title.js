import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

export default function Title({ color, size, title }) {
  const styles = StyleSheet.create({
    container: {
      color: color,
      fontSize: size,
      marginBottom: 16,
      fontWeight: '500',
    },
  });

  return <Text style={styles.container}>{title}</Text>;
}

Title.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  color: 'black',
  size: 16,
};
