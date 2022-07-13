import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import copy from '../../copy.json';

export default function Banner({ backgroundColor, color, text }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      borderRadius: 8,
      marginBottom: 8,
    },
    banner: {
      padding: 12,
      color: color,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.banner}>{text}</Text>
    </View>
  );
}

Banner.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

Banner.defaultProps = {
  backgroundColor: 'black',
  color: 'white',
  text: copy.ok,
};
