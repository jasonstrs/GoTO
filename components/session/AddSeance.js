import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import copy from '../../copy.json';
import CustomTextInput from '../input/CustomTextInput';
import CustomButton from '../buttons/CustomButton';
import { COLORS, SIZES } from '../global/constant';
import Title from '../header/Title';

export default function AddSeance({ isEdit, onSubmit, name }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name },
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={`${copy.create} 🐻`}
        />
        <Text style={styles.description}>
          {copy['session.create.description']}
        </Text>
        <Controller
          control={control}
          rules={{ required: copy.requiredField }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.name}
              label={copy.trainingName}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            backgroundColor={COLORS.blue}
            borderColor={COLORS.darkBlue}
            color={COLORS.blackBlue}
            onPress={handleSubmit(onSubmit)}
            title={isEdit ? copy.edit : copy.add}
          />
        </View>
      </View>
    </ScrollView>
  );
}

AddSeance.propTypes = {
  isEdit: PropTypes.bool,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

AddSeance.defaultProps = {
  isEdit: false,
  name: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  description: {
    marginBottom: 16,
    textAlign: 'justify',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
