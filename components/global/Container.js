import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet } from 'react-native';

export default function Container({ children, ...others }) {
  return (
    <ScrollView {...others} style={styles.container}>
      <View>{children}</View>
    </ScrollView>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
