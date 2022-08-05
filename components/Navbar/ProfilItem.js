import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../global/constant';

export default function ProfilItem({ onPress, text, setVisibleModal }) {
  const handleClic = () => {
    setVisibleModal(false);
    return onPress();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClic}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

ProfilItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setVisibleModal: PropTypes.func,
};

ProfilItem.defaultValues = {
  setVisibleModal: () => {},
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderTopWidth: 2,
    marginHorizontal: 0,
    borderColor: COLORS.blackBlue,
  },
  text: {
    minWidth: 150,
    textAlign: 'center',
    color: COLORS.blackBlue,
  },
});
