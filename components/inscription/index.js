import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import CustomTextInput from '../input/CustomTextInput';
import CustomButton from '../buttons/CustomButton';
import ButtonLink from '../buttons/ButtonLink';
import copy from '../../copy.json';
import { COLORS, SIZES } from '../global/constant';
import Title from '../header/Title';

export default function Inscription({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={copy.createAccount}
        />

        <Controller
          control={control}
          rules={{ required: copy.requiredField }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.firstName}
              label={copy.firstName}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        <Controller
          control={control}
          rules={{ required: copy.requiredField }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.lastName}
              label={copy.lastName}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
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
        <Controller
          control={control}
          rules={{ required: copy.requiredField }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.password}
              label={copy.writePassword}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: copy.requiredField,
            validate: value =>
              watch('password') === value ? true : copy.noMatchPassword,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.confirmedPassword}
              label={copy.confirmedPassword}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="confirmedPassword"
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            backgroundColor={COLORS.blue}
            borderColor={COLORS.darkBlue}
            color={COLORS.blackBlue}
            onPress={handleSubmit(onSubmit)}
            title={copy.inscription}
          />
        </View>

        <Text style={styles.text}>
          {`${copy.account} `}
          <ButtonLink
            func={() => navigation.navigate('Connexion')}
            style={styles.link}
            title={copy.connect}
          />
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  link: {
    color: COLORS.darkBlue,
  },
  text: {
    marginBottom: 6,
  },
});