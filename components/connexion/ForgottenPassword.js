import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import copy from '../../copy.json';
import { Controller } from 'react-hook-form';
import CustomTextInput from '../input/CustomTextInput';

export default function ForgottenPassword({ control, errors }) {
  return (
    <View>
      <Text style={styles.text}>{copy['forgottenPassword.instructions']}</Text>
      <Controller
        control={control}
        rules={{
          required: copy.requiredField,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: copy.incorrectEmailAddress,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            errors={errors.email}
            label={copy.writeEmail}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="email"
      />
    </View>
  );
}

ForgottenPassword.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

ForgottenPassword.defaultProps = {
  errors: {},
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 16,
  },
});
