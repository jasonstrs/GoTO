import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../global/constant';

export default function TouchableContainer({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

TouchableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

TouchableContainer.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    marginBottom: 16,
    backgroundColor: COLORS.blue,
  },
});
