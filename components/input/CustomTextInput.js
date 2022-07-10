import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { COLORS } from '../global/constant';

export default function CustomTextInput({
  children,
  errors,
  isSecured,
  label,
  onBlur,
  onChange,
  value,
}) {
  const WIDTH = children == null ? '100%' : '90%';
  const borderColor = Object.keys(errors).length ? COLORS.red : COLORS.darkBlue;
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
      borderColor: borderColor,
      borderRadius: 8,
      borderWidth: 2,
      marginBottom: 4,
      padding: 8,
      flexDirection: 'row', // handle children
      justifyContent: 'space-between', // handle children
    },
    textInput: {
      width: WIDTH,
    },
    error: {
      color: COLORS.red,
      fontStyle: 'italic',
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.input}>
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          secureTextEntry={isSecured}
          value={value}
          style={styles.textInput}
        />
        {children}
      </View>
      {Boolean(Object.keys(errors).length) && (
        <Text style={styles.error}>{errors.message}</Text>
      )}
    </View>
  );
}

CustomTextInput.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.any,
  isSecured: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CustomTextInput.defaultProps = {
  children: null,
  errors: {},
  isSecured: false,
  label: null,
  onBlur: () => {},
  onChange: () => {},
  value: '',
};
