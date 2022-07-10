import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { COLORS } from '../global/constant';

export default function CustomTextInput({
  errors,
  isSecured,
  label,
  onBlur,
  onChange,
  value,
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.input}>
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          secureTextEntry={isSecured}
          value={value}
        />
      </View>
      {Boolean(Object.keys(errors).length) && (
        <Text style={styles.error}>{errors.message}</Text>
      )}
    </View>
  );
}

CustomTextInput.propTypes = {
  errors: PropTypes.any,
  isSecured: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CustomTextInput.defaultProps = {
  errors: {},
  isSecured: false,
  label: null,
  onBlur: () => {},
  onChange: () => {},
  value: '',
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: COLORS.darkBlue,
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.darkBlue,
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: 4,
    padding: 8,
  },
  error: {
    color: 'red',
    fontStyle: 'italic',
  },
});
