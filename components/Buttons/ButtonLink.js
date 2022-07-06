import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

export default function ButtonLink({style, func, title}) {
  return (
    <Text onPress={func} style={[styles.button, style]}>
      {title}
    </Text>
  );
}

ButtonLink.propTypes = {
  func: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
};

ButtonLink.defaultProp = {
  style: null,
};

const styles = StyleSheet.create({
  button: {
    fontSize: 15,
  },
});
